import React from "react";
import './index.scss';
import Card from "../card/index.js";
import img1 from "../../assets/images/sam-riz.jpg";
import img2 from "../../assets/images/rob-wilson.jpg";
import img3 from "../../assets/images/yousef.jpg"; 
import img4 from "../../assets/images/caption.jpg";
import img5 from "../../assets/images/meklay-yotkhamsay-AAZaK31x6FM-unsplash.jpg";
import img6 from "../../assets/images/elimende-inagella-iDwpJIo6aq0-unsplash.jpg"; 
import img7 from "../../assets/images/umair-dingmar-m9n8W46ZEXc-unsplash.jpg";
import img8 from "../../assets/images/nicole-geri-gMJ3tFOLvnA-unsplash.jpg";
import img9 from "../../assets/images/alexander-schimmeck-DSOohFTAfno-unsplash.jpg";




const CardData = [
  { src: img1, alt: "Travel Package 1", title: "Hajj/Umrah Package" },
  { src: img2, alt: "Travel Package 2", title: "Corporate Group Tour Package" },
  { src: img7, alt: "Travel Package 2", title: "International Tour Package" },
  { src: img3, alt: "Travel Package 3", title: "Student Tour Package" },
  { src: img9, alt: "Travel Package 3", title: "Domestic & Intl Air Tickets" },
  { src: img4, alt: "Travel Package 4", title: "Domestic Tour Package" },
  { src: img5, alt: "Travel Package 2", title: "Luxury Hotel Package" },
  { src: img6, alt: "Travel Package 3", title: "Luxury Train Package" },
  { src: img8, alt: "Travel Package 3", title: "Visa Services" },
  
];

const SecondSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    lazyLoad: 'ondemand',
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 687,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="container bottom--padding">
      <div className="second--content">
        <h1>
          Explore Our <span>Exclusive Travel     </span>   <br className="break"/>    Packages
        </h1>
        <div className="card-carousel">
          <Card slides={CardData} settings={settings} />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
