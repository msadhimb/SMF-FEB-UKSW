import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const AddKegiatan = () => {
  const history = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const [title, setTitle] = useState("");

  // Quill text editor
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: [] }],
      [{ font: [] }],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: ["red", "#785412"] }],
      [{ background: ["red", "#785412"] }],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    "font",
  ];

  useEffect(() => {
    register("quillContent", { required: true, minLength: 15 });
  }, [register]);

  const onEditorStateChange = (editorState) => {
    setValue("quillContent", editorState);
  };

  const editorContent = watch("quillContent");
  // End Of Quill text editor

  // Preview Image
  const image = "https://fakeimg.pl/350x200/";
  const [saveImage, setSaveImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState([]);
  function handleUploadChange(e) {
    let uploaded = e.target.files;
    if (uploaded) {
      const fileArray = Array.from(uploaded).map((file) =>
        URL.createObjectURL(file)
      );
      setSelectedImage((prevImages) => prevImages.concat(fileArray));
    }
    setSaveImage(uploaded);
  }
  const input = useRef(null);
  // End Of Preview Image

  // Add data
  const date = new Date();
  const handleSubmits = async () => {
    const response = await axios
      .post(
        "http://localhost:8080/kegiatan",
        {
          kegiatan_author: "SMF FEB UKSW",
          kegiatan_image: saveImage,
          kegiatan_title: title,
          kegiatan_desc: editorContent,
          created_at: date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          updated_at: date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        toast.success(
          `Kegiatan added successfully at ${date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}`
        );
        setTimeout(() => {
          history("/kegiatan-admin");
        }, 2000);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="add-kastrat-container position-relative">
        <div className="mt-5">
          <h1 className="mb-5">Add Kegiatan</h1>
          <Form onSubmit={handleSubmit(handleSubmits)}>
            <Row className="d-flex align-items-center justify-content-center mb-3">
              <Col md="6">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Title"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    value={title}
                    {...register("title", {
                      required: "Title is required",
                      onChange: (e) => setTitle(e.target.value),
                    })}
                  />
                  {errors.title && (
                    <p
                      className="text-danger text-start fst-italic"
                      style={{ fontSize: 13 }}
                    >
                      {errors.title.message}
                    </p>
                  )}
                </FloatingLabel>
                <ReactQuill
                  className="mb-4"
                  theme="snow"
                  value={editorContent}
                  onChange={onEditorStateChange}
                  modules={modules}
                  formats={formats}
                  style={{ height: "250px" }}
                  placeholder="Write some description here..."
                />
                {errors.quillContent && (
                  <p
                    className="text-danger text-start fst-italic"
                    style={{ fontSize: 13 }}
                  >
                    Description field are required
                  </p>
                )}
              </Col>

              <Col md="6">
                <div className="mx-auto" onClick={() => input.current.click()}>
                  {selectedImage.length > 0 ? (
                    <div className="preview-container">
                      <Row>
                        {selectedImage.map((photo) => (
                          <Col md="4" key={photo}>
                            <img
                              src={photo}
                              className="img-thumbnail mb-2"
                              alt="..."
                            />
                          </Col>
                        ))}
                      </Row>
                    </div>
                  ) : (
                    <img src={image} className="img-thumbnail" alt="..." />
                  )}
                  <div className="my-3" style={{ display: "none" }}>
                    <input
                      onChange={handleUploadChange}
                      className="form-control"
                      type="file"
                      id="formFile"
                      ref={input}
                      name="kegiatan_image[]"
                      multiple
                    />
                  </div>
                </div>
              </Col>
            </Row>

            <div className="btn-submit d-flex justify-content-end">
              <button className="btn-add-kastrat" type="submit">
                Add Kegiatan
              </button>
            </div>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddKegiatan;
