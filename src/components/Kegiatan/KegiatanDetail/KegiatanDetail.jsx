import React from "react";
import { Container } from "react-bootstrap";
import HTMLFlipBook from "react-pageflip";
import book from "../../../assets/book.jpg";
import book2 from "../../../assets/book2.jpeg";

const KegiatanDetail = () => {
  return (
    <Container className="mt-5 d-flex justify-content-center">
      <HTMLFlipBook
        width={300}
        height={500}
        className="d-flex align-items-center"
      >
        <img src={book} alt="" className="img-fluid" />
        <img src={book2} alt="" className="img-fluid" />
        <img src={book} alt="" className="img-fluid" />
        <img src={book} alt="" className="img-fluid" />
        <img src={book} alt="" className="img-fluid" />
        <img src={book} alt="" className="img-fluid" />
      </HTMLFlipBook>
    </Container>
  );
};

export default KegiatanDetail;
