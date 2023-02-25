import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import HTMLFlipBook from "react-pageflip";
import ReactQuill from "react-quill";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import book from "../../../../assets/book.jpg";
import "react-quill/dist/quill.snow.css";
import { getDataKegiatanById } from "../../../../features/kastratSlice";

const KegiatanDetail = () => {
  const [form, setForm] = useState({
    author: false,
    title: false,
    desc: false,
  });

  // Get Data By Id
  const dispatch = useDispatch();
  const params = useParams();
  const idDetail = params.id;
  const dataByKegiatanId = useSelector(
    (state) => state.kastrat.dataByKegiatanId
  );
  useEffect(() => {
    dispatch(getDataKegiatanById(idDetail));
  }, [dispatch, idDetail]);
  // End Get Data By Id

  // Quill text editor
  const [desc, setDesc] = useState(dataByKegiatanId.kegiatan_desc);
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
  // End Quill text editor

  // Update Data
  const date = new Date();

  const [data, setData] = useState({
    title: dataByKegiatanId.kegiatan_title,
    author: dataByKegiatanId.kegiatan_author,
  });
  useEffect(() => {
    setData({
      author: dataByKegiatanId.kegiatan_author,
      title: dataByKegiatanId.kegiatan_title,
      subject: dataByKegiatanId.kegiatan_subject,
    });
    setDesc(dataByKegiatanId.kegiatan_desc);
  }, [dataByKegiatanId]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const response = await axios
      .put(`http://localhost:8080/kegiatan/${idDetail}`, {
        kegiatan_author: data.author,
        kegiatan_title: data.title,
        kegiatan_desc: desc,
        updated_at: date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
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
      });
    setForm({
      author: false,
      title: false,
      desc: false,
    });
    dispatch(getDataKegiatanById(idDetail));
  };
  return (
    <React.Fragment>
      <ToastContainer />
      <Container className="kegiatan-detail-container">
        {[dataByKegiatanId].map((item) => {
          const image = item.kegiatan_image?.split(",");
          return (
            <React.Fragment>
              <div className="d-flex justify-content-center flipbook">
                <HTMLFlipBook width={300} height={500}>
                  {image?.map((images) => (
                    <img
                      src={`http://localhost:8080/uploads/kegiatan/${item.kegiatan_title}/${images}`}
                      alt=""
                      className="img-fluid"
                    />
                  ))}
                </HTMLFlipBook>
              </div>
              <div className="kegiatan-detail-title">
                <div className="title d-flex justify-content-between align-items-center">
                  {form.title ? (
                    <React.Fragment>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          name="title"
                          style={{ width: 500 }}
                          value={data.title}
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
                      <h3 className="text-start m-0">{item.kegiatan_title}</h3>
                      <i
                        className="fa-solid fa-pen-to-square icon-edit"
                        onClick={() => setForm({ title: !form.title })}
                      ></i>
                    </React.Fragment>
                  )}
                </div>
                <div className="author d-flex justify-content-between align-items-center">
                  {form.author ? (
                    <React.Fragment>
                      <div className="d-flex align-items-center">
                        <p className="text-start m-0 me-2">By</p>
                        <Form.Group>
                          <Form.Control
                            type="text"
                            name="author"
                            style={{ width: 500 }}
                            value={data.author}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </div>
                      <i
                        className="fa-solid fa-check icon-edit ms-2"
                        onClick={handleUpdate}
                      ></i>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <p className="text-start m-0">
                        By {item.kegiatan_author}
                      </p>
                      <i
                        className="fa-solid fa-pen-to-square icon-edit"
                        onClick={() => setForm({ author: !form.author })}
                      ></i>
                    </React.Fragment>
                  )}
                </div>
                {form.desc ? (
                  <React.Fragment>
                    <div className="desc d-flex justify-content-end mt-3 mb-2">
                      <i
                        className="fa-solid fa-check icon-edit mb-2"
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
                    <div className="desc d-flex justify-content-end mt-3 mb-2">
                      <i
                        className="fa-solid fa-pen-to-square icon-edit"
                        onClick={() => setForm({ desc: !form.desc })}
                      ></i>
                    </div>
                    <p
                      dangerouslySetInnerHTML={{ __html: item.kegiatan_desc }}
                    />
                  </React.Fragment>
                )}
              </div>
            </React.Fragment>
          );
        })}

        <div className="kegiatan-more-container pb-5">
          <div className="more p-3 m-2">
            <Link to={"/kegiatan"} className=" d-flex align-items-center">
              <h5 className="text-start m-0">Read more from FEB UKSW </h5>
              <i className="fa-solid fa-arrow-right ms-3"></i>
            </Link>
          </div>
          <Row>
            <Col lg={4}>
              <div className="d-flex justify-content-center">
                <div className="book-container">
                  <img src={book} alt="cover" className="img-fluid" />
                  <p className="mt-2">Harry Potter & The Winter Soldier</p>
                  <p>by SMF FEB UKSW</p>
                </div>
                <div className="book-container">
                  <img src={book} alt="cover" className="img-fluid" />
                  <p className="mt-2">Harry Potter & The Winter Soldier</p>
                  <p>by SMF FEB UKSW</p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="d-flex justify-content-center">
                <div className="book-container">
                  <img src={book} alt="cover" className="img-fluid" />
                  <p className="mt-2">Harry Potter & The Winter Soldier</p>
                  <p>by SMF FEB UKSW</p>
                </div>
                <div className="book-container">
                  <img src={book} alt="cover" className="img-fluid" />
                  <p className="mt-2">Harry Potter & The Winter Soldier</p>
                  <p>by SMF FEB UKSW</p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="d-flex justify-content-center">
                <div className="book-container">
                  <img src={book} alt="cover" className="img-fluid" />
                  <p className="mt-2">Harry Potter & The Winter Soldier</p>
                  <p>by SMF FEB UKSW</p>
                </div>
                <div className="book-container">
                  <img src={book} alt="cover" className="img-fluid" />
                  <p className="mt-2">Harry Potter & The Winter Soldier</p>
                  <p>by SMF FEB UKSW</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default KegiatanDetail;
