import React from "react";

const Features = () => {
  return (
    <div className="row">
      <div className="col-xl-6 col-lg-7 order-lg-last" data-aos="fade-left">
        <div className="ps-lg-5">
          <div className="title-style-fourteen">
            <div className="upper-title">Made for humans</div>
            <h2>Quality, actionable decision making process.</h2>
          </div>
          <div className="tag-line">
          Say goodbye to decision dilemmas! Let Clique Decisions make the tough choices for you, saving you time and stress.
          </div>
          <ul className="list-item">
              <li>Intuitive decision-making interface</li>
              <li>Effortlessly make decisions with decision builder</li>
              <li>Manage decisions seamlessly</li>
              <li>Enjoy an interactive decision making experience with decision view layout</li>
          </ul>
        </div>
      </div>
      {/* Emd .col */}

      <div
        className="col-xl-6 col-lg-5 text-center text-lg-left order-lg-first"
        data-aos="fade-right"
      >
        <div className="illustration-holder d-inline-block md-mt-60">
          <img src="images/assets/ils_23.svg" alt="" className="w-100" />
          <img
            src="images/assets/ils_23.1.svg"
            alt=""
            className="shapes shape-one"
          />
          <img
            src="images/assets/ils_23.2.svg"
            alt=""
            className="shapes shape-two"
          />
          <img
            src="images/assets/ils_23.3.svg"
            alt=""
            className="shapes shape-three"
          />
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default Features;
