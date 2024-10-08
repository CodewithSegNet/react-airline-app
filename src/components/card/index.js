import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";
import { AiFillPhone } from "react-icons/ai";

const Card = ({ slides, settings }) => {
  return (
    <div className="custom-slider-container container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="card-slide">
            <img src={slide.src} alt={slide.alt} className="card-image" />
            <h3 className="card-title">{slide.title || ""}</h3>
            <button className="book-button">
              <a className="call-btn" href="tel:+2348027373385">Book <AiFillPhone /></a>
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Card;
