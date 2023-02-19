import React from "react";
import { Col, Row } from "react-bootstrap";
import KastratDetailMainLeft from "./KastratDetailMainLeft/KastratDetailMainLeft";
import KastratDetailMainRight from "./KastratDetailMainRight/KastratDetailMainRight";

const KastratDetailMainView = () => {
  return (
    <div className="kastrat-detail-main-container">
      <div className="d-flex">
        <Row>
          <Col md={8}>
            <KastratDetailMainLeft />
          </Col>
          <Col md={4}>
            <KastratDetailMainRight />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default KastratDetailMainView;
