import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import smf from "../../../../assets/IMG_4288.PNG";
import bg1 from "../../../../assets/bg1.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const KastratDetailMainRight = () => {
  return (
    <div className={`kastrat-detail-main-right position-fixed`}>
      <Container className="pt-5">
        <Container>
          <div className="header">
            <div className="author-img d-flex align-items-center">
              <img src={smf} alt="author" className="img-fluid" />
            </div>
            <div className="author-name text-start mt-3">
              <h5 className="m-0">Departemen Sosial</h5>
              <p>SMF FEB UKSW</p>
            </div>
            <div className="author-interact d-flex justify-content-start">
              <Button className="btn btn-success"> Follow </Button>
              <Button className="btn btn-success ms-2">
                {" "}
                <i className="fa-solid fa-envelope"></i>{" "}
              </Button>
            </div>
          </div>
          <div className="content mt-4">
            <div className="content-title text-start">
              <h6>More from SMF Times</h6>
            </div>
            <div className="content-detail-container">
              <div className="content-main mt-3 d-flex align-items-center">
                <div className="content-main-left ">
                  <h6 className="text-start">
                    Google’s Sparrow will Kill ChatGPT — It is Microsoft Teams
                    vs. Slack All Over Again.
                  </h6>
                  <div className="author-img d-flex align-items-center">
                    <img src={smf} alt="author" className="img-fluid" />
                    <p className="m-0 ms-2">SMF UKSW</p>
                  </div>
                </div>
                <div className="content-main-right ms-2">
                  <img src={bg1} alt="times" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="content-detail-container">
              <div className="content-main mt-3 d-flex align-items-center">
                <div className="content-main-left ">
                  <h6 className="text-start">
                    Google’s Sparrow will Kill ChatGPT — It is Microsoft Teams
                    vs. Slack All Over Again.
                  </h6>
                  <div className="author-img d-flex align-items-center">
                    <img src={smf} alt="author" className="img-fluid" />
                    <p className="m-0 ms-2">SMF UKSW</p>
                  </div>
                </div>
                <div className="content-main-right ms-2">
                  <img src={bg1} alt="times" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="content-detail-container">
              <div className="content-main mt-3 d-flex align-items-center">
                <div className="content-main-left ">
                  <h6 className="text-start">
                    Google’s Sparrow will Kill ChatGPT — It is Microsoft Teams
                    vs. Slack All Over Again.
                  </h6>
                  <div className="author-img d-flex align-items-center">
                    <img src={smf} alt="author" className="img-fluid" />
                    <p className="m-0 ms-2">SMF UKSW</p>
                  </div>
                </div>
                <div className="content-main-right ms-2">
                  <img src={bg1} alt="times" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="footer mb-3">
            <Link className="ms-1 me-1">Help</Link>
            <Link className="ms-1 me-1">Status</Link>
            <Link className="ms-1 me-1">Developer</Link>
            <Link className="ms-1 me-1">Terms & Condition</Link>
            <Link className="ms-1 me-1">About</Link>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default KastratDetailMainRight;
