import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="row justify-content-end">
      <div
        className="col-lg-3 col-md-12 footer-about-widget"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <a href="index.html" className="logo">
          <img src="images/logo/cliequeLogo.png" alt="" />
        </a>
      </div>
      {/* /.about-widget */}
      <div
        className="col-lg-3 col-md-4 footer-list"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="50"
      >
        <h5 className="footer-title">Services</h5>
        <ul>
          <li>
            <Link to="/blog-details">Web Design</Link>
          </li>
          <li>
            <Link to="/blog-details">Development</Link>
          </li>
          <li>
            <Link to="/blog-details">Wordpress</Link>
          </li>
          <li>
            <Link to="/blog-details">Online Marketing</Link>
          </li>
          <li>
            <Link to="/blog-details">Content</Link>
          </li>
        </ul>
      </div>
      {/* /.footer-list */}
      <div
        className="col-lg-3 col-md-4 footer-list"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
      >
        <h5 className="footer-title">About us</h5>
        <ul>
          <li>
            <Link to="/about-cs">About us</Link>
          </li>
          
          <li>
            <Link to="/contact-cs">Contact us</Link>
          </li>
        </ul>
      </div>
      {/* /.footer-list */}
      <div
        className="col-lg-3 col-md-4 address-list"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="150"
      >
        <h5 className="footer-title">Address</h5>
        <ul>
          <li>
            <a href="#">cliquedecisions@gmail.com</a>
          </li>
          <li>
            <a href="#" className="mobile-num">
              +222 222 2222
            </a>
          </li>
        </ul>
      </div>
      {/* /.footer-list */}
    </div>
    //.row
  );
};

export default Footer;
