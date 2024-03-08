import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialContent = [
    {
      icon: "fa-facebook",
      link: "https://www.facebook.com/",
    },
    {
      icon: "fa-twitter",
      link: "https://twitter.com/",
    },
    {
      icon: "fa-linkedin",
      link: "https://www.linkedin.com/",
    },
  ];
  return (
    <div className="d-lg-flex align-items-center justify-content-between">
      <div className="logo text-center">
        {/* <a href="#">
          <img src="images/logo/cliqueLogo.png" width={"120px"}  alt="logo" />
        </a> */}
      </div>
      {/* <ul className="style-none footer-nav d-flex flex-wrap justify-content-center md-pt-10 md-pb-20">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About us</Link>
        </li>
        <li>
          <Link to="/">App</Link>
        </li>
        <li>
          <Link to="/">Features</Link>
        </li>
      </ul> */}
      <ul className="d-flex justify-content-center social-icon style-none">
        {socialContent.map((val, i) => (
          <li key={i}>
            <a href={val.link} target="_blank" rel="noreferrer">
              <i className={`fa ${val.icon}`}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
