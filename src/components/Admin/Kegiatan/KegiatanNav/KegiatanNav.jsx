import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";
import smf from "../../../assets/IMG_4288.PNG";
import KastratFooter from "../../Kastrat/KastratFooter/KastratFooter";

import "../Kegiatan.css";

function KegiatanNav() {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg" className="kegiatan-nav">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand href="#home">
            <div className="image-nav d-flex align-items-center justify-content-center">
              <img src={smf} alt="smf" className="img-fluid" />
              <h4 className="m-0">SMF FEB UKSW</h4>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Outlet />

      <KastratFooter />
    </React.Fragment>
  );
}

export default KegiatanNav;
