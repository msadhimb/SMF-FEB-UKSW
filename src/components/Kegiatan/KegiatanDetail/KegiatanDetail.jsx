import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HTMLFlipBook from "react-pageflip";
import { Link } from "react-router-dom";
import book from "../../../assets/book.jpg";
import book2 from "../../../assets/book2.jpeg";

const KegiatanDetail = () => {
  return (
    <Container className="kegiatan-detail-container">
      <div className="d-flex justify-content-center flipbook">
        <HTMLFlipBook width={300} height={500}>
          <img src={book} alt="" className="img-fluid" />
          <img src={book2} alt="" className="img-fluid" />
          <img src={book2} alt="" className="img-fluid" />
          <img src={book} alt="" className="img-fluid" />
          <img src={book} alt="" className="img-fluid" />
          <img src={book2} alt="" className="img-fluid" />
          <img src={book2} alt="" className="img-fluid" />
          <img src={book} alt="" className="img-fluid" />
          <img src={book} alt="" className="img-fluid" />
          <img src={book} alt="" className="img-fluid" />
          <img src={book2} alt="" className="img-fluid" />
          <img src={book} alt="" className="img-fluid" />
          <img src={book2} alt="" className="img-fluid" />
          <img src={book2} alt="" className="img-fluid" />
          <img src={book} alt="" className="img-fluid" />
          <img src={book2} alt="" className="img-fluid" />
        </HTMLFlipBook>
      </div>
      <div className="kegiatan-detail-title">
        <h3 className="text-start m-0">Harry Potter & The Winter Soldier</h3>
        <p className="text-start">By SMF FEB UKSW</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Consequuntur, perspiciatis corrupti? Quidem voluptate vero iste porro
          vel natus ex quibusdam, pariatur voluptates, sed expedita? Asperiores
          tempore non sed ullam iste! Deleniti aspernatur tenetur voluptas minus
          harum, quisquam magnam debitis impedit repudiandae non aliquid aliquam
          consequuntur temporibus, voluptatem libero facilis ducimus unde
          quaerat possimus? Neque maxime a quia unde debitis sit doloribus at.
          Tempora deleniti tempore optio maxime obcaecati cumque dolorum
          distinctio. Unde vero quo numquam amet nemo quibusdam iusto, sed animi
          ipsa, dicta, laboriosam eligendi repudiandae facere placeat iure ut
          aperiam praesentium. Velit illum aliquam in et. Dignissimos, ad
          voluptas!
        </p>
      </div>

      <div className="kegiatan-more-container">
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
  );
};

export default KegiatanDetail;
