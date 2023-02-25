import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddKastrat = () => {
  const history = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");

  // Image Preview
  const [saveImage, setSaveImage] = useState(null);
  const [image, setImage] = useState("https://fakeimg.pl/350x200/");

  function handleUploadChange(e) {
    let uploaded = e.target.files[0];
    setImage(URL.createObjectURL(uploaded));
    setSaveImage(uploaded);
  }

  const input = useRef(null);
  // End Of Image Preview

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

  const date = new Date();
  const handleSubmits = async () => {
    // const response = await fetch(
    //   "http://smfapi.infinityfreeapp.com/public/kastrat",
    //   {
    //     method: "POST",
    //     mode: "no-cors",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       kastrat_author: "SMF FEB UKSW",
    //       kastrat_image: saveImage,
    //       kastrat_title: title,
    //       kastrat_subject: subject,
    //       kastrat_desc: editorContent,
    //       created_at: date.toLocaleDateString("en-US", {
    //         year: "numeric",
    //         month: "short",
    //         day: "numeric",
    //       }),
    //       updated_at: date.toLocaleDateString("en-US", {
    //         year: "numeric",
    //         month: "short",
    //         day: "numeric",
    //       }),
    //     }),
    //   }
    // )
    //   .then((res) => {
    //     toast.success(
    //       "Kastrat added successfully at " +
    //         date.toLocaleDateString("en-US", {
    //           year: "numeric",
    //           month: "short",
    //           day: "numeric",
    //         })
    //     );
    //   })
    //   .catch((err) => {
    //     toast.error(err.message);
    //   });

    const response = await axios
      .post(
        "http://localhost:8080/kastrat",
        {
          kastrat_author: "SMF FEB UKSW",
          kastrat_image: saveImage,
          kastrat_title: title,
          kastrat_subject: subject,
          kastrat_desc: editorContent,
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
          "Kastrat added successfully at " +
            date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
        );
        setTimeout(() => {
          history("/kastrat-admin");
        }, 2000);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <React.Fragment>
      <ToastContainer />
      <div
        className="add-kastrat-container position-relative"
        style={{ overflowX: "hidden" }}
      >
        <Container>
          <div className="mt-5">
            <h1 className="mb-5">Add Kastrat</h1>
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
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Subject"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="subject"
                      value={subject}
                      {...register("subject", {
                        required: "Subject is required",
                        onChange: (e) => setSubject(e.target.value),
                      })}
                    />
                    {errors.subject && (
                      <p
                        className="text-danger text-start fst-italic"
                        style={{ fontSize: 13 }}
                      >
                        {errors.subject.message}
                      </p>
                    )}
                  </FloatingLabel>
                </Col>

                <Col md="6">
                  <div
                    className="mx-auto"
                    onClick={() => input.current.click()}
                  >
                    <div>
                      <img src={image} className="img-thumbnail" alt="..." />
                    </div>
                    <div className="my-3" style={{ display: "none" }}>
                      <input
                        onChange={handleUploadChange}
                        className="form-control"
                        type="file"
                        id="formFile"
                        ref={input}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
              <ReactQuill
                className="quill"
                theme="snow"
                value={editorContent}
                onChange={onEditorStateChange}
                modules={modules}
                formats={formats}
                style={{ height: "300px" }}
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
              <div className="btn-submit d-flex justify-content-end">
                <button className="btn-add-kastrat" type="submit">
                  Add Kastrat
                </button>
              </div>
            </Form>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AddKastrat;
