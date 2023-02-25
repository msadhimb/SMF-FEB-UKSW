import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HTMLFlipBook from "react-pageflip";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import book from "../../../assets/book.jpg";
import book2 from "../../../assets/book2.jpeg";
import { getDataKegiatanById } from "../../../features/kastratSlice";

const KegiatanDetail = () => {
  const params = useParams();
  const { id } = params;

  const dispatch = useDispatch();
  const dataByKegiatanId = useSelector(
    (state) => state.kastrat.dataByKegiatanId
  );

  useEffect(() => {
    dispatch(getDataKegiatanById(id));
  }, [dispatch, id]);

  console.log(dataByKegiatanId);
  return (
    <Container className="kegiatan-detail-container">
      {[dataByKegiatanId].map((item) => {
        const image = item.kegiatan_image?.split(",");
        return (
          <React.Fragment>
            <div
              className="d-flex justify-content-center flipbook"
              key={item.id}
            >
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
              <h3 className="text-start m-0">{item.kegiatan_title}</h3>
              <p className="text-start">By {item.kegiatan_author}</p>
              <p dangerouslySetInnerHTML={{ __html: item.kegiatan_desc }} />
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
  );
};

export default KegiatanDetail;
