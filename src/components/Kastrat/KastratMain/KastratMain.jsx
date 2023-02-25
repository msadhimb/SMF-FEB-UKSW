import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import bg1 from "../../../assets/bg1.jpg";
import smf from "../../../assets/IMG_4288.PNG";

import { useSelector, useDispatch } from "react-redux";
import { fetchKastrats } from "../../../features/kastratSlice";

const KastratMain = () => {
  const dispatch = useDispatch();
  const dataKastrat = useSelector((state) => state.kastrat.data);

  useEffect(() => {
    dispatch(fetchKastrats());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Container className="kastrat-main-container w-auto">
        <div className="year mt-3">
          <h5 className="text-start">2023</h5>
        </div>
        <div className="kastrat-main-content mt-3 pb-5">
          <Row>
            {dataKastrat.map((item, index) => {
              if (index <= 1) {
                return (
                  <Col md={6} className="mb-3" key={item.id}>
                    <Link to={`/kastrat/kastrat-detail/${item.id}`}>
                      <div className="header">
                        <img
                          src={`http://localhost:8080/uploads/kastrat/${item.kastrat_image}`}
                          alt="times"
                          className="img-fluid"
                        />
                      </div>
                      <div className="title mt-2">
                        <h4 className="text-start">{item.kastrat_title}</h4>
                      </div>
                      <div className="subject mt-2">
                        <h5 className="text-start">{item.kastrat_subject}</h5>
                      </div>
                      <div className="author mt-2">
                        <div className="d-flex align-items-center">
                          <div className="author-img d-flex align-items-center">
                            <img src={smf} alt="author" className="img-fluid" />
                          </div>
                          <div className="author-name d-flex flex-column text-start ms-3">
                            <h6 className="m-0">{item.kastrat_author}</h6>
                            <p className="m-0">{item.created_at}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                );
              }
            })}
          </Row>
          <Row className="mt-5">
            {dataKastrat.map((item, index) => {
              if (index > 1) {
                return (
                  <Col md={4} className="mb-5">
                    <Link to={`/kastrat/kastrat-detail/${item.id}`}>
                      <div className="header-more">
                        <img
                          src={`http://localhost:8080/uploads/kastrat/${item.kastrat_image}`}
                          alt="times"
                          className="img-fluid"
                        />
                      </div>
                      <div className="title mt-2">
                        <h4 className="text-start">{item.kastrat_title}</h4>
                      </div>
                      <div className="subject mt-2">
                        <h5 className="text-start">{item.kastrat_subject}</h5>
                      </div>
                      <div className="author mt-2">
                        <div className="d-flex align-items-center">
                          <div className="author-img d-flex align-items-center">
                            <img src={smf} alt="author" className="img-fluid" />
                          </div>
                          <div className="author-name d-flex flex-column text-start ms-3">
                            <h6 className="m-0">{item.kastrat_author}</h6>
                            <p className="m-0">{item.created_at}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                );
              }
            })}
            {/* <Col md={4} className="mb-3">
              <Link to={"/kastrat/kastrat-detail"}>
                <div className="header-more">
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
                <div className="header-more">
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
            </Col> */}
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default KastratMain;
