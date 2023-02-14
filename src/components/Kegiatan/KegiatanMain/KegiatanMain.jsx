import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import book from "../../../assets/book.jpg";

const KegiatanMain = () => {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(!focus);
  };
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
            <input type="text" class="form-control" placeholder="Search" />
            <i className="fa-solid fa-magnifying-glass pe-3"></i>
          </div>
        </div>
        <div className="kegiatan-highlight-container">
          <Row>
            <Col md={6}>
              <div className="d-flex justify-content-center">
                <div className="book-container-highlight">
                  <Link to="kegiatan-detail">
                    <img src={book} alt="cover" className="img-fluid" />
                    <p className="mt-2">Harry Potter & The Winter Soldier</p>
                    <p>by SMF FEB UKSW</p>
                  </Link>
                </div>
                <div className="book-container-highlight">
                  <Link to="kegiatan-detail">
                    <img src={book} alt="cover" className="img-fluid" />
                    <p className="mt-2">Harry Potter & The Winter Soldier</p>
                    <p>by SMF FEB UKSW</p>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex justify-content-center">
                <div className="book-container-highlight">
                  <Link to="kegiatan-detail">
                    <img src={book} alt="cover" className="img-fluid" />
                    <p className="mt-2">Harry Potter & The Winter Soldier</p>
                    <p>by SMF FEB UKSW</p>
                  </Link>
                </div>
                <div className="book-container-highlight">
                  <Link to="kegiatan-detail">
                    <img src={book} alt="cover" className="img-fluid" />
                    <p className="mt-2">Harry Potter & The Winter Soldier</p>
                    <p>by SMF FEB UKSW</p>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="kegiatan-more-container">
          <div className="more p-3 m-2">
            <h5 className="text-start">Read more from FEB UKSW</h5>
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
      </div>
    </Container>
  );
};

export default KegiatanMain;
