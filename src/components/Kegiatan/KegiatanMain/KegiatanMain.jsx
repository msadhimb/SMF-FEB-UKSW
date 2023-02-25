import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getKegiatan } from "../../../features/kastratSlice";

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

  return (
    <Container>
      <div className="kegiatan-content mt-5">
        <div className="search-container">
          <div
            className={`search-input d-flex align-items-center ${
              focus ? "focus" : "null"
            }`}
            onFocus={handleFocus}
            onBlur={handleFocus}
          >
            <input type="text" className="form-control" placeholder="Search" />
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
