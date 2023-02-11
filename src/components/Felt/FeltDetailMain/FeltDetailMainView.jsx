import React from "react";
import { Col, Row } from "react-bootstrap";
import FeltDetailMainLeft from "./FeltDetailMainLeft/FeltDetailMainLeft";
import FeltDetailMainRight from "./FeltDetailMainRight/FeltDetailMainRight";

const FeltDetailMainView = () => {
  return (
    <div className="felt-detail-main-container">
      <div className="d-flex">
        <Row>
          <Col md={8}>
            <FeltDetailMainLeft />
          </Col>
          <Col md={4}>
            <FeltDetailMainRight />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FeltDetailMainView;
