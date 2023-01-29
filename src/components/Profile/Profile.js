import React from "react";
import "./Profile.css";

import pictProfile from "../../assets/IMG_4288.PNG";
import Cards from "../Card/Card";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const profil = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <React.Fragment>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#50545c",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#fff",
            },
            links: {
              color: "#fff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div
        className="container-fluid pt-2 pb-2"
        style={{
          position: "relative",
          zIndex: 999,
          backgroundColor: "#ffff",
          opacity: 0.9,
        }}
      >
        <div className="row d-flex justify-content-center align-items-center">
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
              <a href="#">
                <i className="fa-solid fa-envelope icon me-3 email"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-tiktok icon me-3 tiktok"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram icon me-3 instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-twitter icon me-3 twitter"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin icon me-3 linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-youtube icon me-3 youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Cards />
    </React.Fragment>
  );
};

export default profil;
