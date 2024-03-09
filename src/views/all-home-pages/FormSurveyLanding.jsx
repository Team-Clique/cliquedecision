import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Features from "../../components/clique-decision-landing/Features";
// import HowWorks from "../../components/clique-decision-landing/HowWorks";
// import Testimonial from "../../components/clique-decision-landing/Testimonial";
import HeaderLandingFormSurvey from "../../components/clique-decision-landing/HeaderLandingFormSurvey";
import HeroBannerThirteen from "../../components/clique-decision-landing/HeroBannerThirteen";
// import CallToAction from "../../components/clique-decision-landing/CallToAction";
import Footer from "../../components/clique-decision-landing/Footer";


const FormSurveyLanding = () => {
  useEffect(() => {
    // Check if AOS is available (assuming it's included as a script)
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init();
    }
  }, []);
  return (
    <div className="main-page-wrapper p0 font-gordita">
      <Helmet>
        <title>
          Clique Decision
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLandingFormSurvey />
      {/* End Header */}

      <HeroBannerThirteen />
      {/* End Hero banner */}

      {/* <!-- 
        =============================================
            Fancy Feature Thirty Four
        ============================================== 
        --> */}
      <div className="fancy-feature-thirtyFour mt-150 md-mt-100">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12  m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="title-style-eleven text-center mb-70 md-mb-10" style={{height:"80vh", marginTop:"150px"}}>
                <div className="upper-title">HOW IT WORKS</div>
                <h2>
                  Create decisions, answers, & get quick results that people enjoy being decided for them.
                </h2>
              </div>
            </div>
          </div>

       
        </div>
      </div>
      {/* <!-- /.fancy-feature-thirtyFour --> */}

      {/* <!-- 
        =============================================
            Block Style Thirty Six
        ============================================== 
        --> */}
      {/* <div
        className="block-style-thirtySix lg-container pt-225 md-pt-120"
        id="feature"
      ><select name="" id=""></select>
        <div className="container">
          <Features />
        </div>
      </div>
      */}


      {/* <div
      className="fancy-feature-thirtyFour mt-150 md-mt-100"
        data-aos="fade-up"
        id="product"
      >
        <div className="container" style={{margin:"0px"}} >
            <Product />
        </div>
      </div> */}


      {/* <div
        className=" lg-container pt-180 md-pt-110"
        data-aos="fade-up"
        id="feedback"
      >
        <div className="client-feedback-slider-eight">
          <div className="container">
            <div className="main-content position-relative">
              <div className="clientSliderSeven">
                <Testimonial />
              </div>
            </div>
            
          </div>
        </div>
      </div> */}
      {/* <!-- /.client-feedback-slider-eight --> */}

      {/* <!-- /.feature-blog-five --> */}

      {/* <div className="fancy-short-banner-fifteen mt-150 md-mt-80">
        <CallToAction />
      </div> */}
      {/* // <!-- /.fancy-short-banner-fifteen --> */}

      {/* <!--
        =====================================================
            Footer Style Nine
        =====================================================
        --> */}
      <div className="theme-footer-nine lg-container">
        <div className="container">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default FormSurveyLanding;
