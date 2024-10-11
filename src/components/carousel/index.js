import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss"

const Carousel = ({ slides, settings }) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
    
    
    initial={{ opacity: 0, y: 75 }}
    animate={controls}
    variants={{
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.8, delay: 0.9 }}

ref={ref}
    className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default Carousel;
