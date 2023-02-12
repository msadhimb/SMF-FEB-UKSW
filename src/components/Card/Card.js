import React from "react";
import "./Card.css";

import newspaper from "../../assets/Fara.png";
import catalog from "../../assets/catalog.png";
import kritik from "../../assets/kritik.png";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <React.Fragment>
      <div className="card-container">
        <div className="container pt-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xl-4">
              <Link to={"/kastrat"}>
                <div className="card">
                  <div className="card-pict">
                    <img
                      src={newspaper}
                      className="img-fluid card-image p-0"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">kastrat 2021</h3>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-xl-4">
              <Link to={"/kastrat"}>
                <div className="card">
                  <div className="card-pict">
                    <img
                      src={catalog}
                      className="img-fluid card-image p-0"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Katalog Kastrat</h3>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-xl-4">
              <a href="#">
                <div className="card">
                  <div className="card-pict">
                    <img
                      src={kritik}
                      className="img-fluid card-image p-0"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Kritik dan Saran</h3>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cards;
