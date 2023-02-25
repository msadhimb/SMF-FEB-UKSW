import React, { useEffect, useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import book from "../../../../assets/book.jpg";
import { deletekegiatan, getKegiatan } from "../../../../features/kastratSlice";

const KegiatanMain = () => {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(!focus);
  };

  const dispatch = useDispatch();
  const dataKegiatan = useSelector((state) => state.kastrat.dataKegiatan);

  useEffect(() => {
    dispatch(getKegiatan());
  }, [dispatch]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e65561",
      cancelButtonColor: "#408637",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletekegiatan(id));
        dispatch(getKegiatan());
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    });
  };

  return (
    <Container>
      <div className="kegiatan-content mt-5">
        <div className="header d-flex justify-content-end mb-2">
          <Link to={"add-kegiatan"}>
            <button className="btn-add-kastrat ">Add Kegiatan</button>
          </Link>
        </div>
        <div className="search-container d-flex justify-content-between align-items-center">
          <div
            className={`search-input d-flex align-items-center m-0 me-3 ${
              focus ? "focus" : "null"
            }`}
            onFocus={handleFocus}
            onBlur={handleFocus}
          >
            <input type="text" class="form-control" placeholder="Search" />
            <i className="fa-solid fa-magnifying-glass pe-3"></i>
          </div>
        </div>

        <div className="kegiatan-highlight-container">
          <Row>
            {dataKegiatan.map((item, index) => {
              const image = item.kegiatan_image.split(",");
              if (index <= 3) {
                return (
                  <Col md={3} key={item.id}>
                    <div className="d-flex justify-content-center">
                      <div className="book-container-highlight">
                        <div className="options d-flex justify-content-end mb-2">
                          <Dropdown
                            align="end"
                            title="Dropdown end"
                            id="dropdown-menu-align-end"
                          >
                            <Dropdown.Toggle variant="none" id="dropdown-basic">
                              <i className="fa-solid fa-ellipsis"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item
                                className="d-flex justify-content-start align-items-center"
                                onClick={() => handleDelete(item.id)}
                              >
                                <i className="fa-solid fa-trash-can"></i>
                                <p className="m-0 ms-2 ">Delete</p>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        <Link to={`kegiatan-detail/${item.id}`}>
                          <img
                            src={`http://localhost:8080/uploads/kegiatan/${item.kegiatan_title}/${image[0]}`}
                            alt="cover"
                            className="img-fluid"
                          />
                          <p className="mt-2">{item.kegiatan_title}</p>
                          <p>by {item.kegiatan_author}</p>
                        </Link>
                      </div>
                    </div>
                  </Col>
                );
              }
            })}
          </Row>
        </div>
        <div className="kegiatan-more-container">
          <div className="more p-3 m-2">
            <h5 className="text-start">Read more from FEB UKSW</h5>
          </div>
          <Row>
            {dataKegiatan.map((item, index) => {
              const image = item.kegiatan_image.split(",");
              if (index > 3) {
                return (
                  <Col md={3} key={item.id}>
                    <div className="d-flex justify-content-center">
                      <div className="book-container">
                        <div className="options d-flex justify-content-end mb-2">
                          <Dropdown
                            align="end"
                            title="Dropdown end"
                            id="dropdown-menu-align-end"
                          >
                            <Dropdown.Toggle variant="none" id="dropdown-basic">
                              <i className="fa-solid fa-ellipsis"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item
                                className="d-flex justify-content-start align-items-center"
                                onClick={() => handleDelete(item.id)}
                              >
                                <i className="fa-solid fa-trash-can"></i>
                                <p className="m-0 ms-2 ">Delete</p>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        <img
                          src={`http://localhost:8080/uploads/kegiatan/${item.kegiatan_title}/${image[0]}`}
                          alt="cover"
                          className="img-fluid"
                        />
                        <p className=" m-0 mt-2">{item.kegiatan_title}</p>
                        <p>by {item.kegiatan_author}</p>
                      </div>
                    </div>
                  </Col>
                );
              }
            })}
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default KegiatanMain;
