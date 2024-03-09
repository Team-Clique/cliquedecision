import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../../components/product/Product';
import SecondPage from '../product/pages/SecondPage';

const HeroBannerThirteen = () => {
  const [stage, setStage] = useState(0);

  return (

    <div className="hero-banner-thirteen lg-container" id="home">
      <div className="container">
        <div className="row">

            {stage === 0 &&(
          <div className="col-lg-6">
    

            <h1 className="hero-heading">Come to decisions in a better way.</h1>
            <p className="hero-sub-heading">
              CliqueDecison is option randomizer to help you pick between some
              options!
            </p>
       
             <a href="/SecondPage" className="theme-btn-fourteen">
              Decide For Me
            </a>
          </div>
            )}
            {stage === 1 &&
             <div className="col-lg-6">
                <SecondPage />
             </div>
             }
        </div>

        {/* <div className="screen-holder">
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
        </div> */}
        {/* <!-- /.screen-holder --> */}
      </div>
    </div>
    // <!-- /.hero-banner-thirteen -->
  );
};

export default HeroBannerThirteen;
