import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import bg1 from "../../../assets/bg1.jpg";
import smf from "../../../assets/IMG_4288.PNG";

const KastratMain = () => {
  return (
    <React.Fragment>
      <Container className="kastrat-main-container w-auto">
        <div className="year mt-3">
          <h5 className="text-start">2022</h5>
        </div>
        <div className="kastrat-main-content mt-3 pb-5">
          <Row>
            <Col md={6} className="mb-3">
              <Link to={"/kastrat/kastrat-detail"}>
                <div className="header">
                  <img src={bg1} alt="times" className="img-fluid" />
                </div>
                <div className="title mt-2">
                  <h4 className="text-start">
                    Pursuing an Immigration Surplus in Indonesia: Should We Open
                    or Close the Door?
                  </h4>
                </div>
                <div className="subject mt-2">
                  <h5 className="text-start">Introductions</h5>
                </div>
                <div className="author mt-2">
                  <div className="d-flex align-items-center">
                    <div className="author-img d-flex align-items-center">
                      <img src={smf} alt="author" className="img-fluid" />
                    </div>
                    <div className="author-name d-flex flex-column text-start ms-3">
                      <h6 className="m-0">SMF FEB UKSW</h6>
                      <p className="m-0">Dec 26, 2022</p>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
            <Col md={6}>
              <Link to={"/kastrat/kastrat-detail"}>
                <div className="header">
                  <img src={bg1} alt="times" className="img-fluid" />
                </div>
                <div className="title mt-2">
                  <h4 className="text-start">
                    Pursuing an Immigration Surplus in Indonesia: Should We Open
                    or Close the Door?
                  </h4>
                </div>
                <div className="subject mt-2">
                  <h5 className="text-start">Introductions</h5>
                </div>
                <div className="author mt-2">
                  <div className="d-flex align-items-center">
                    <div className="author-img d-flex align-items-center">
                      <img src={smf} alt="author" className="img-fluid" />
                    </div>
                    <div className="author-name d-flex flex-column text-start ms-3">
                      <h6 className="m-0">SMF FEB UKSW</h6>
                      <p className="m-0">Dec 26, 2022</p>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={4} className="mb-3">
              <Link to={"/kastrat/kastrat-detail"}>
                <div className="header">
                  <img src={bg1} alt="times" className="img-fluid" />
                </div>
                <div className="title mt-2">
                  <h4 className="text-start">
                    Pursuing an Immigration Surplus in Indonesia: Should We Open
                    or Close the Door?
                  </h4>
                </div>
                <div className="subject mt-2">
                  <h5 className="text-start">Introductions</h5>
                </div>
                <div className="author mt-2">
                  <div className="d-flex align-items-center">
                    <div className="author-img d-flex align-items-center">
                      <img src={smf} alt="author" className="img-fluid" />
                    </div>
                    <div className="author-name d-flex flex-column text-start ms-3">
                      <h6 className="m-0">SMF FEB UKSW</h6>
                      <p className="m-0">Dec 26, 2022</p>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
            <Col md={4} className="mb-3">
              <Link to={"/kastrat/kastrat-detail"}>
                <div className="header">
                  <img src={bg1} alt="times" className="img-fluid" />
                </div>
                <div className="title mt-2">
                  <h4 className="text-start">
                    Pursuing an Immigration Surplus in Indonesia: Should We Open
                    or Close the Door?
                  </h4>
                </div>
                <div className="subject mt-2">
                  <h5 className="text-start">Introductions</h5>
                </div>
                <div className="author mt-2">
                  <div className="d-flex align-items-center">
                    <div className="author-img d-flex align-items-center">
                      <img src={smf} alt="author" className="img-fluid" />
                    </div>
                    <div className="author-name d-flex flex-column text-start ms-3">
                      <h6 className="m-0">SMF FEB UKSW</h6>
                      <p className="m-0">Dec 26, 2022</p>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
            <Col md={4}>
              <Link to={"/kastrat/kastrat-detail"}>
                <div className="header">
                  <img src={bg1} alt="times" className="img-fluid" />
                </div>
                <div className="title mt-2">
                  <h4 className="text-start">
                    Pursuing an Immigration Surplus in Indonesia: Should We Open
                    or Close the Door?
                  </h4>
                </div>
                <div className="subject mt-2">
                  <h5 className="text-start">Introductions</h5>
                </div>
                <div className="author mt-2">
                  <div className="d-flex align-items-center">
                    <div className="author-img d-flex align-items-center">
                      <img src={smf} alt="author" className="img-fluid" />
                    </div>
                    <div className="author-name d-flex flex-column text-start ms-3">
                      <h6 className="m-0">SMF FEB UKSW</h6>
                      <p className="m-0">Dec 26, 2022</p>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default KastratMain;
