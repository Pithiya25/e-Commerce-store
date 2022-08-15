import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <div className="container-footer">
      <div className="left">
        <div className="title-footer">
          <h1>
            <span className="clr-text"> Madhav</span> Store
          </h1>
          <p>Everything for kids World</p>
        </div>
      </div>
      <div className="center">
        <div className="footer-icon">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-whatsapp"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-pinterest"></i>
        </div>
        <p>
          Design by <span className="clr-text">ANKIT PITHIYA</span>
        </p>
      </div>
      <div className="right">
        <p> &copy;2022 All Copyright Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
