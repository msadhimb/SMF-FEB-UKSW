import React, { forwardRef, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import smf from "../../../../assets/IMG_4288.PNG";
import KastratFooter from "../../Kastrat/KastratFooter/KastratFooter";

import "../Kegiatan.css";

function KegiatanNav() {
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
      nav("/kegiatan");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    nav("/");
  };

  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg" className="kegiatan-nav">
        <Container className="d-flex ">
          <Navbar.Brand href="#home">
            <div className="image-nav d-flex align-items-center justify-content-center">
              <img src={smf} alt="smf" className="img-fluid" />
              <h4 className="m-0">SMF FEB UKSW</h4>
            </div>
          </Navbar.Brand>
          <div className="loged-in d-flex ms-3 align-items-center">
            <div className="image-logedin-container">
              <img src={smf} alt="img-log" className="img-fluid mx-auto" />
            </div>
            <div className="name-logedin-container ms-3 text-end">
              <Dropdown align={"end"}>
                <Dropdown.Toggle as={CustomToggle} className="p-0">
                  <h6 className="m-0">
                    SMF FEB <i class="fa-solid fa-chevron-down icon-edit"></i>
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
        </Container>
      </Navbar>

      <Outlet />

      <KastratFooter />
    </React.Fragment>
  );
}

export default KegiatanNav;
