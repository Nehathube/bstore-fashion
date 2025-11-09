import React, { useState } from "react";
import Slider from "react-slick";
import "./hero.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const slides = [
    {
      title: "BEST THEMES",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod ut\nlaoreet dolore magna aliquam erat volutpat.",
      button: "Read More",
      image: "https://htmldemo.net/bstore/bstore/assets/images/slider/2.webp",
    },
    {
      title: "BEST THEMES",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod ut\nlaoreet dolore magna aliquam erat volutpat.",
      button: "Read More",
      image: "https://htmldemo.net/bstore/bstore/assets/images/slider/1.webp",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
      setAnimationKey((key) => key + 1);
    },
    customPaging: () => <span className="hero-dot" aria-hidden="true" />,
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <section >
      <div className="main-content-section">
        <div className="sub-img">
        <img
          // src="https://htmldemo.net/bstore/bstore/assets/images/product/cms11.webp"
          src="https://htmldemo.net/bstore/bstore/assets/images/product/cms11.webp"
          alt=""
          className="banner-image"
        />
      </div>
      <div className="col-md-9">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <div className="hero-image">
                <img src={slide.image} alt="Fashion" />
              </div>
              <div className="nivo-caption">
                <div className="d-table-cell" key={`${animationKey}-${index}`}>
                  <h2 className="animated bounceInDown">
                    {slide.title}
                  </h2>
                  <p className="animated bounceInUp">{slide.text}</p>
                  <button className="btn-primary animated zoomInDown">{slide.button}</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      </div>
    </section>
  );
};

export default Hero;
