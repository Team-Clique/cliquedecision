import React from "react";
import { Link } from "react-router-dom";

const HeroBannerThirteen = () => {
  return (
    // <!--
    // =============================================
    //     Theme Hero Banner
    // ==============================================
    // -->
    <div className="hero-banner-thirteen lg-container" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            
            <h1 className="hero-heading">Come to decisions in a better way.</h1>
            <p className="hero-sub-heading">
              Clique Decisions delivers quick & painless decisions for you 
            </p>
            <a href="#" className="theme-btn-fourteen">
              Get Started - It’s Free
            </a>
            <div className="info">No credit card required</div>
          </div>
        </div>

        <div className="screen-holder">
          <img
            src="images/assets/ils_22.svg"
            alt="illustration"
            className="img-meta"
          />
          <img
            src="images/assets/ils_22.1.svg"
            alt="illustration"
            className="shapes shape-one"
          />
          <img
            src="images/assets/ils_22.2.svg"
            alt="illustration"
            className="shapes shape-two"
          />
        </div>
        {/* <!-- /.screen-holder --> */}
      </div>
    </div>
    // <!-- /.hero-banner-thirteen -->
  );
};

export default HeroBannerThirteen;
