import { useState } from "react";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function FeltNav() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar expand="lg">
      <Container className="felt-nav-container">
        <Navbar.Brand href="#home" className="brand">
          <h1>SMF Times</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <i className="fa-solid fa-burger"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto felt-nav-link">
            <Nav.Link className="d-flex justify-content-center align-items-center">
              <i
                className="fa-solid fa-magnifying-glass ms-2 me-2"
                onClick={() => setExpanded(!expanded)}
              ></i>
              <motion.input
                type="text"
                initial={{ width: 0, display: "none" }}
                animate={
                  expanded
                    ? { display: "block", width: 300 }
                    : {
                        width: 0,
                        visibility: "hidden",
                        transitionEnd: {
                          display: "none",
                        },
                      }
                }
                transition={{ duration: 0.5 }}
                className="form-control search-input"
                placeholder="Search"
              />
            </Nav.Link>
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

export default FeltNav;
