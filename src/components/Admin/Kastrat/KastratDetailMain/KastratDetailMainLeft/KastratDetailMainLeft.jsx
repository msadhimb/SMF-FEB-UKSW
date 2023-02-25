import React, { useEffect, useState } from "react";
import smf from "../../../../../assets/IMG_4288.PNG";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDataById } from "../../../../../features/kastratSlice";

import axios from "axios";
import ReactQuill from "react-quill";
import { ToastContainer, toast } from "react-toastify";
import { Form } from "react-bootstrap";

const KastratDetailMainLeft = () => {
  const dispatch = useDispatch();
  const dataById = useSelector((state) => state.kastrat.dataById);

  const [data, setData] = useState({
    author: dataById.kastrat_author,
    title: dataById.kastrat_title,
    subject: dataById.kastrat_subject,
  });
  const [desc, setDesc] = useState(dataById.kastrat_desc);

  const params = useParams();
  const idDetail = params.id;

  useEffect(() => {
    dispatch(getDataById(idDetail));
  }, [dispatch, idDetail]);

  useEffect(() => {
    setData({
      author: dataById.kastrat_author,
      title: dataById.kastrat_title,
      subject: dataById.kastrat_subject,
    });
    setDesc(dataById.kastrat_desc);
  }, [dataById]);

  const [form, setForm] = useState({
    author: false,
    title: false,
    subject: false,
    desc: false,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const date = new Date();
  const handleUpdate = async (e) => {
    e.preventDefault();
    // const response = await fetch(
    //   `https://smf-api.000webhostapp.com/kastrat/${idDetail}`,
    //   {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     mode: "no-cors",
    //     body: JSON.stringify({
    //       kastrat_author: data.author,
    //       kastrat_title: data.title,
    //       kastrat_subject: data.subject,
    //       kastrat_desc: desc,
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
    //       "Kastrat updated at " +
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
      .patch(`http://localhost:8080/kastrat/${idDetail}`, {
        kastrat_author: data.author,
        kastrat_title: data.title,
        kastrat_subject: data.subject,
        kastrat_desc: desc,
        updated_at: date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        toast.success(
          "Kastrat updated at " +
            date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
        );
      })
      .catch((err) => {
        toast.error(err.message);
      });
    console.log(response);
    setForm({
      author: false,
      title: false,
      subject: false,
      desc: false,
    });
    dispatch(getDataById(idDetail));
  };

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

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="kastrat-detail-main-left container pb-5">
        <div className="header d-flex align-items-center pt-3">
          <img src={smf} alt="nav-logo" className="img-fluid img-detail" />
          <h6 className="m-0" style={{ fontWeight: 200 }}>
            Published in <span style={{ fontWeight: 800 }}>SMF Times</span>
          </h6>
        </div>
        {[dataById].map((item, index) => {
          return (
            <div className="content mt-5" key={item.id}>
              <div className="uploader d-flex align-items-center justify-content-between">
                <div className="author-detail d-flex align-items-center">
                  <div className="author-img d-flex align-items-center">
                    <img src={smf} alt="author" className="img-fluid" />
                  </div>
                  <div className="author-name d-flex flex-column text-start ms-3">
                    <div className="d-flex align-items-center">
                      {form.author ? (
                        <React.Fragment>
                          <Form.Group>
                            <Form.Control
                              type="text"
                              name="author"
                              value={data.author}
                              onChange={handleChange}
                            />
                          </Form.Group>
                          <i
                            className="fa-solid fa-check icon-edit ms-2"
                            onClick={handleUpdate}
                          ></i>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <h6 className="m-0">{item.kastrat_author}</h6>
                          <i
                            className={`fa-solid fa-pen-to-square icon-edit ms-2`}
                            onClick={() => setForm({ author: !form.author })}
                          ></i>
                        </React.Fragment>
                      )}
                    </div>
                    <p className="m-0 detail-date">{item.created_at}</p>
                  </div>
                </div>
                <i className="fa-solid fa-link"></i>
              </div>
              <div className="title mt-4 d-flex justify-content-between">
                {form.title ? (
                  <React.Fragment>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        style={{ width: "20rem" }}
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <i
                      className="fa-solid fa-check icon-edit"
                      onClick={handleUpdate}
                    ></i>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <h3 className="m-0 text-start">{item.kastrat_title}</h3>
                    <i
                      className={`fa-solid fa-pen-to-square icon-edit`}
                      onClick={() => setForm({ title: !form.title })}
                    ></i>
                  </React.Fragment>
                )}
              </div>
              <div className="thumb mt-4">
                <img
                  src={`http://localhost:8080/uploads/kastrat/${item.kastrat_image}`}
                  alt="thumb"
                  className="img-fluid"
                />
              </div>
              <div className="subject mt-4 d-flex justify-content-between">
                {form.subject ? (
                  <React.Fragment>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        style={{ width: "20rem" }}
                        name="subject"
                        value={data.subject}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <i
                      className="fa-solid fa-check icon-edit"
                      onClick={handleUpdate}
                    ></i>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <h5 className="text-start">{item.kastrat_subject}</h5>
                    <i
                      className={`fa-solid fa-pen-to-square icon-edit`}
                      onClick={() => setForm({ subject: !form.subject })}
                    ></i>
                  </React.Fragment>
                )}
              </div>
              <div className="description mt-4">
                {form.desc ? (
                  <React.Fragment>
                    <div className="d-flex justify-content-end mb-3">
                      <i
                        className="fa-solid fa-check icon-edit"
                        onClick={handleUpdate}
                      ></i>
                    </div>
                    <ReactQuill
                      theme="snow"
                      value={desc}
                      onChange={setDesc}
                      modules={modules}
                      formats={formats}
                      style={{ height: "300px" }}
                      placeholder="Write some description here..."
                      className="mb-5"
                    />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <div className="d-flex justify-content-end mb-3">
                      <i
                        className={`fa-solid fa-pen-to-square icon-edit`}
                        onClick={() => setForm({ desc: !form.desc })}
                      ></i>
                    </div>
                    <p
                      dangerouslySetInnerHTML={{ __html: item.kastrat_desc }}
                    ></p>
                  </React.Fragment>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default KastratDetailMainLeft;
