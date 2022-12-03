/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">Sooman</span>
        <div className="links">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Created By Sooman Shaikh
        </p>
      </div>
    </footer>
  );
}

export default Footer;
