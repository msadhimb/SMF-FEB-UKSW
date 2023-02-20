import React from "react";
import "./Profile.css";

import pictProfile from "../../assets/IMG_4288.PNG";
import Cards from "../Card/Card";
import { Link } from "react-router-dom";

const profil = () => {
  return (
    <React.Fragment>
      <div className="profile-container">
        <div className="container-fluid pt-2 pb-4  ">
          <div className="row d-flex justify-content-center align-items-center text-white">
            <div className="col-md-4">
              <div className="image-profile">
                <img src={pictProfile} alt="profile" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-4 p-3">
              <h3 className="text-start">@NgeheClub</h3>
              <p className="text-start">
                Akun Resmi Badan Eksekutif Mahasiswa Fakultas Ekonomi dan Bisnis
                Universitas Indonesia Organization Relations & Non-Profit:
                087780516770 Project & Media Partnership: 081384805665
              </p>
              <h4 className="text-start">Contact Us</h4>
              <div className="d-flex contact-us">
                <a
                  href="#"
                  className="email-container d-flex justify-content-center align-items-center"
                >
                  <i className="fa-solid fa-envelope icon email"></i>
                </a>
                <a
                  href="#"
                  className="li-container d-flex justify-content-center align-items-center"
                >
                  <i className="fa-brands fa-linkedin icon linkedin"></i>
                </a>

                <a
                  href="#"
                  className="ig-container d-flex justify-content-center align-items-center"
                >
                  <i className="fa-brands fa-instagram icon instagram"></i>
                </a>
                <a
                  href="#"
                  className="twt-container d-flex justify-content-center align-items-center"
                >
                  <i className="fa-brands fa-twitter icon twitter"></i>
                </a>
                <a
                  href="#"
                  className="tt-container d-flex justify-content-center align-items-center"
                >
                  <i className="fa-brands fa-tiktok icon tiktok"></i>
                </a>
                <Link
                  to={`https://wa.me/6285727520642`}
                  className="wa-container d-flex justify-content-center align-items-center"
                >
                  <i className="fa-brands fa-whatsapp icon wa"></i>
                </Link>
                <a
                  href="#"
                  className="yt-container d-flex justify-content-center align-items-center"
                >
                  <i className="fa-brands fa-youtube icon youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="wave"
        >
          <path
            fill="#ffff"
            fill-opacity="1"
            d="M0,288L13.3,288C26.7,288,53,288,80,250.7C106.7,213,133,139,160,101.3C186.7,64,213,64,240,85.3C266.7,107,293,149,320,160C346.7,171,373,149,400,144C426.7,139,453,149,480,154.7C506.7,160,533,160,560,165.3C586.7,171,613,181,640,186.7C666.7,192,693,192,720,208C746.7,224,773,256,800,277.3C826.7,299,853,309,880,293.3C906.7,277,933,235,960,229.3C986.7,224,1013,256,1040,240C1066.7,224,1093,160,1120,149.3C1146.7,139,1173,181,1200,181.3C1226.7,181,1253,139,1280,144C1306.7,149,1333,203,1360,234.7C1386.7,267,1413,277,1427,282.7L1440,288L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Cards />
    </React.Fragment>
  );
};

export default profil;
