import React from "react";
import { Link } from "react-router-dom";

const FeltFooter = () => {
  return (
    <footer className="mt-3 mb-3">
      <div className="felt-footer-container d-flex justify-content-between align-items-center">
        <div className="contact">
          <Link>
            <i className="fa-brands fa-instagram me-2"></i>
          </Link>
          <Link>
            <i className="fa-brands fa-twitter"></i>
          </Link>
        </div>
        <p className="m-0">
          Copyright <i className="fa-regular fa-copyright"></i> 2023 SMF UKSW
        </p>
        <Link
          to="https://msadhimb.github.io/portofolioMarkIII/"
          className="footer-options"
        >
          Developer
        </Link>
      </div>
    </footer>
  );
};

export default FeltFooter;
