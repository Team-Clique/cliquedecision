import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    fade: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: false,
    centerPadding: "0",
  };
  const testimonialContent = [
    {
      _id: 1,
      img: "img_113",
      name: "Random Person 1",
      designation: "Random Position 1",
      descriptions: ` As a busy entrepreneur, decision fatigue is real. But thanks to Clique Decisions, I can now delegate complex decisions confidently and focus on what truly matters. A game-changer for my productivity!`,
    },
    {
      _id: 1,
      img: "img_114",
      name: "Random Person 2",
      designation: "Random Position 2",
      descriptions: `I was skeptical at first, but Clique Decisions exceeded my expectations. The interface is user-friendly, and the results are spot-on. It's like having a magic wand for decision-making!`,
    },
  ];
  return (
    <>
      <Slider {...settings}>
        {testimonialContent.map((review) => (
          <div className="item" key={review._id}>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="feedback-wrapper">
                  <div className="tag">Client Feefdback</div>
                  <p className="pe-xl-5">{review.descriptions}</p>
                  <h4 className="name">{review.name}</h4>
                  <div className="cr-position">{review.designation}</div>
                </div>
                {/* <!-- /.feedback-wrapper --> */}
              </div>
              {/* End .col */}
              <div className="col-lg-6 col-md-5">
                <div className="img-meta sm-mb-30">
                  <img src={`images/media/${review.img}.jpg`} alt="social" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;
