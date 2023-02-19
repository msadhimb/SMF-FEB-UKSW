import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import smf from "../../../../assets/IMG_4288.PNG";

const KastratFooter = () => {
  return (
    <footer className="mt-3 mb-3">
      <div className="kastrat-footer-container w-auto container">
        <Row className=" d-flex justify-content-between align-items-center ">
          <Col md={4}>
            <div className="copyright-left">
              <img src={smf} alt="" className="img-fluid" />
            </div>
          </Col>
          <Col md={4}>
            <div className="copyright-center">
              <p className="m-0 mb-3">
                Copyright <i className="fa-regular fa-copyright"></i> 2023 SMF
                UKSW
              </p>
              <Link className="ms-1 me-1">Developer</Link>
              <Link className="ms-1 me-1">About</Link>
              <Link className="ms-1 me-1">Terms & Condition</Link>
            </div>
          </Col>
          <Col md={4}>
            <div className="copyright-right">
              <Link>
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default KastratFooter;
