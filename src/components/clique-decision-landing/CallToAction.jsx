import React from "react";

const CallToAction = () => {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-xl-8 col-lg-11 m-auto"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="title-style-seven text-center">
            <h2>Try it now!</h2>
            <p>Unlock the freedom to experiment at no cost, liberating your choices and reclaiming precious time from the burden of agonizing decisions. </p>
          </div>
          {/* <!-- /.title-style-six --> */}
        </div>
      </div>
      {/* End .row */}

      <div
        className="text-center mt-50"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="150"
      >
        <a href="#" className="theme-btn-fourteen">
          Create your decisions
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
