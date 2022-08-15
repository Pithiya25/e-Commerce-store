import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [nav, setnav] = useState(false);

  return (
    <div className="navbar">
      <div className="head">
        <div className="head-text">
          Welcome to my E-shop <a href="#">Register</a> OR <a href="#">login</a>{" "}
        </div>
        <div className="head-icon">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-whatsapp"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-pinterest"></i>
        </div>
      </div>
      <div className="middle">
        <div className="contact-info">
          <p>
            <i className="fa-solid fa-phone"></i>+919773432577
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i>ankitpithiya19@gmail.com
          </p>
        </div>
        <div className="title">
          <h1>
            <span className="clr-text"> Madhav</span> Store
          </h1>
          <p>Everything for kids</p>
        </div>
        <div className="contact-text">
          <i className="fa-solid fa-message"></i>Contact Us
        </div>
        <i
          className="fa-solid fa-anchor ham-nav"
          onClick={() => {
            nav ? setnav(false) : setnav(true);
          }}
        ></i>
      </div>

      <div className={nav ? "sidenav" : "bottom"}>
        <ul>
          <li>
            <i className="fa-solid fa-house"></i>Home
          </li>
          <li>
            <i className="fa-solid fa-user"></i>Boy
          </li>
          <li>
            <i className="fa-solid fa-users"></i>Accessories
          </li>
          <li>
            <i className="fa-solid fa-calendar-days"></i>Special Offers
          </li>
          <li>
            <i className="fa-solid fa-anchor"></i>Toys{" "}
            <i className="fa fa-caret-down"></i>
            <ul>
              <li>
                <i className="fa fa-clipboard"></i> Wooden
              </li>
              <li>
                <i className="fa fa-circle"></i> Plastic
              </li>
              <li>
                <i className="fa fa-gavel"></i> Iron
              </li>
            </ul>
          </li>
          <li>
            <i className="fa-solid fa-magnifying-glass"></i>Find
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
