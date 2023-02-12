import { useState } from "react";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import smf from "../../../assets/IMG_4288.PNG";

function FeltDetailNav() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar expand="lg" className="pb-0" bg="light">
      <Container className="felt-nav-detail-container">
        <Navbar.Brand href="#home" className="brand">
          <img src={smf} alt="nav-logo" className="img-fluid img-detail" />
        </Navbar.Brand>
        <div className="search-detail-input">
          <i className="fa-solid fa-magnifying-glass me-2"></i>
          <input type="text" placeholder="Search" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto felt-nav-link">
            <Nav.Link
              href="#home"
              className="d-flex justify-content-center align-items-center ms-2 me-2"
            >
              <i className="fa-brands fa-twitter"></i>
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="d-flex justify-content-center align-items-center ms-2 me-2"
            >
              <i className="fa-brands fa-instagram"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default FeltDetailNav;
