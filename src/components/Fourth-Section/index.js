import React from "react";
import "./index.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../carousel/index";
import img1 from "../../assets/images/pngegg1.png";
import img2 from "../../assets/images/pngegg2.png";
import img4 from "../../assets/images/pngegg4.png";
import img5 from "../../assets/images/pngegg13.png";
import img6 from "../../assets/images/pngegg14.png";
import img8 from "../../assets/images/pngegg6.png";
import img9 from "../../assets/images/pngegg7.png";
import img10 from "../../assets/images/pngegg8.png";
import img11 from "../../assets/images/pngegg15.png";
import img12 from "../../assets/images/pngegg16.png";
import img13 from "../../assets/images/pngegg9.png";
import img14 from "../../assets/images/pngegg10.png";
import img15 from "../../assets/images/pngegg11.png";
import img16 from "../../assets/images/pngegg12.png";
import img17 from "../../assets/images/pngegg.png";
import img18 from "../../assets/images/resize.png";
import img19 from "../../assets/images/qatar.png";
import img20 from "../../assets/images/Logo-saudi.png";
import img21 from "../../assets/images/pngwing.com.png";
import img22 from "../../assets/images/Air_Arabia.png";
import img23 from "../../assets/images/pngegg18.png";
import img24 from "../../assets/images/pngwing.png";
import img25 from "../../assets/images/images.jpeg";
import img26 from "../../assets/images/pngegg17.png";









import './index.scss';

const FourthSection = () => {
  const carouselData1 = [
    { src: img1, alt: "Image 1" },
    { src: img6, alt: "Image 01" },
    { src: img2, alt: "Image 2" },
    { src: img11, alt: "Image 02" },
    { src: img12, alt: "Image 03" },
    { src: img9, alt: "Reverse Image 3" },
    { src: img5, alt: "Image 0" },
    { src: img13, alt: "Image 5" },
    { src: img10, alt: "Reverse Image 4" },
    { src: img14, alt: "Image 6" },
    { src: img15, alt: "Image 7" },
    { src: img4, alt: "Image 4" },
    
  ];

  const carouselData2 = [
    { src: img8, alt: "Reverse Image 2" },
    { src: img16, alt: "Image 8" },
    { src: img17, alt: "Image 04" },
    { src: img18, alt: "Image 05" },
    { src: img19, alt: "ReImage2" },
    { src: img20, alt: "Image20" },
    { src: img21, alt: "Image21" },
    { src: img22, alt: "Image22" },
    { src: img23, alt: "Image23" },
    { src: img24, alt: "Image24" },
    { src: img25, alt: "Image25" },
    { src: img26, alt: "Imag26" },
  ];

  const sliderSettings1 = {
    dots: false,
    infinite: true,
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderSettings2 = {
    dots: false,
    infinite: true,
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    autoplay: true,
    speed: 2300,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <div className="container partner-title">
        <p className="partners">Our Partners</p>
        <h1>
          We Work With The <span> Best Partners </span>
        </h1>
      </div>

      <div>
        <Carousel slides={carouselData1} settings={sliderSettings1} />
        <Carousel slides={carouselData2} settings={sliderSettings2} />
      </div>


    
    </div>
  );
};

export default FourthSection;
