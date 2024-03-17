import React from 'react';




const HeroBannerThirteen = () => {


  return (

    <div className="hero-banner-thirteen lg-container" id="home">
        <div className="container"> {/* Container for content */}
        <div className="row"> {/* Row for content */}
          <div className="col-lg-6"> {/* Column for text content */}
            <h1 className="hero-heading">Come to decisions in a better way.</h1> {/* Main heading */}
            <p className="hero-sub-heading"> {/* Subheading */}
              CliqueDecison is an option randomizer to help you pick between some options!
            </p>
     
       {/* Button to navigate to second page */}
             <a href="/SecondPage" className="theme-btn-fourteen">
              Decide For Me
            </a>
          </div>
       
           
        
        </div>

      
      </div>
    </div>

  );
};

export default HeroBannerThirteen;
