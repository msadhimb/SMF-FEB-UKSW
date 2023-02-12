import React from "react";
import { Col, Row } from "react-bootstrap";
import FeltFooter from "../FeltFooter/FeltFooter";
import FeltDetailMainLeft from "./FeltDetailMainLeft/FeltDetailMainLeft";
import FeltDetailMainRight from "./FeltDetailMainRight/FeltDetailMainRight";

const FeltDetailMainView = () => {
  return (
    <div className="felt-detail-main-container">
      <div className="d-flex">
        <Row>
          <Col md={8} className="pe-0">
            <FeltDetailMainLeft />
          </Col>
          <Col md={4} className="pe-0">
            <FeltDetailMainRight />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FeltDetailMainView;
