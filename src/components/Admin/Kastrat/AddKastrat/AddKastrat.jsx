import axios from "axios";
import React, { useRef, useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddKastrat = () => {
  const history = useNavigate();
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [quill, setQuill] = useState("");
  const [saveImage, setSaveImage] = useState(null);

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

  const [image, setImage] = useState("https://fakeimg.pl/350x200/");

  function handleUploadChange(e) {
    let uploaded = e.target.files[0];
    setImage(URL.createObjectURL(uploaded));
    setSaveImage(uploaded);
  }

  const input = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title, ", ", subject, ", ", quill, saveImage);
    const response = await axios
      .post(
        "http://localhost:8080/kastrat",
        {
          kastrat_author: "SMF FEB UKSW",
          kastrat_image: saveImage,
          kastrat_title: title,
          kastrat_subject: subject,
          kastrat_desc: quill,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .catch((err) => {
        toast.error(err.response.data.message);
      });
    if (response.status === 201) {
      toast.success("Kastrat added successfully");
      setTimeout(() => {
        history("/kastrat-admin");
      }, 2000);
    } else if (response.message) {
    }
    console.log(response);
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="add-kastrat-container position-relative">
        <div className="mt-5">
          <h1 className="mb-5">Add Kastrat</h1>
          <Form onSubmit={(e) => handleSubmit(e)}>
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
                    onChange={(e) => setTitle(e.target.value)}
                  />
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
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </FloatingLabel>
              </Col>

              <Col md="6">
                <div className="mx-auto" onClick={() => input.current.click()}>
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
              theme="snow"
              value={quill}
              onChange={setQuill}
              modules={modules}
              formats={formats}
              style={{ height: "300px" }}
              placeholder="Write some description here..."
            />
            <div className="btn-submit d-flex justify-content-end">
              <button className="btn-add-kastrat" type="submit">
                Add Kastrat
              </button>
            </div>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddKastrat;
