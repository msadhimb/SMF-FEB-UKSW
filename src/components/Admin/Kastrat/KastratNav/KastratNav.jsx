import React, { forwardRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import KastratFooter from "../KastratFooter/KastratFooter";
import smf from "../../../../assets/IMG_4288.PNG";
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";

function KastratNav() {
  const [expanded, setExpanded] = useState(false);

  const CustomToggle = forwardRef(({ children, onClick }, ref) => (
    <div
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </div>
  ));

  const nav = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      nav("/kastrat");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    nav("/");
  };
  return (
    <React.Fragment>
      <Navbar expand="lg">
        <Container className="kastrat-nav-container">
          <Navbar.Brand href="#home" className="brand">
            <h1>SMF Times</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <i className="fa-solid fa-burger"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto kastrat-nav-link">
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
              <Nav.Link
                href="#link"
                className="d-flex justify-content-center align-items-center ms-2 me-2"
              >
                <div className="loged-in d-flex ms-3 align-items-center">
                  <div className="image-logedin-container">
                    <img
                      src={smf}
                      alt="img-log"
                      className="img-fluid mx-auto"
                    />
                  </div>
                  <div className="name-logedin-container ms-3 text-end">
                    <Dropdown align={"end"}>
                      <Dropdown.Toggle as={CustomToggle} className="p-0">
                        <h6 className="m-0">
                          SMF FEB{" "}
                          <i class="fa-solid fa-chevron-down icon-edit"></i>
                        </h6>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="drop-logout">
                        <Dropdown.Item
                          className="text-danger"
                          onClick={() => logout()}
                        >
                          Logout
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <p className="m-0">Admin</p>
                  </div>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />

      <KastratFooter />
    </React.Fragment>
  );
}

export default KastratNav;
