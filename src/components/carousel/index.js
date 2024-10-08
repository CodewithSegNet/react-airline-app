import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss"

const Carousel = ({ slides, settings }) => {
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
