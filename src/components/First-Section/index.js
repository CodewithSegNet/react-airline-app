import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import heroMobile from '../../assets/images/hero-mobile.jpg'
import heroTab from '../../assets/images/hero-tab.jpg'
import heroDesktop from '../../assets/images/hero-desktop.jpg'
import saudi from '../../assets/images/saudi_logo.avif'
import trophy from '../../assets/images/trophy.png'
import trophy1 from '../../assets/images/trophy1.png'
import { FaWhatsapp } from "react-icons/fa6";
import { CgArrowRight, CgArrowUp } from 'react-icons/cg'
import React, { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"



const Section = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main  ref={ref} className="first-content" alt='hero content'>
      <section aria-label="Hero Section">
      <div className='icon whatsapp-fixed'>
        <a href="https://wa.me/+2348023185363" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className='fix-whatsapp-icon' />
        </a>
      </div>

      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              srcSet={`${heroMobile} 380w, ${heroTab} 853w, ${heroDesktop} 1200w`}
              src={heroDesktop}
              alt="Hero"
              className="d-block w-100"
              loading="lazy"
            />
            <div className="container page-container">
              <div className="carousel-caption">
                <motion.h1 
                 variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.7}}
                className='hero--text'>
                  Turn your adventure dreams into reality with <span>Dala Air</span>
                </motion.h1>
                <motion.p 
                
                variants={{
                  hidden: { opacity: 0, y: -45 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.7, delay: 0.4}}

                className='hero--parag'>
                  Let us take you on unforgettable journeys to explore the
                  world’s most exciting destinations
                </motion.p>
                <motion.button 
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.7, delay: 0.6}}
                
                type="button" className='button'>
                  <a className='btn' href="tel:+2348023185363">Book Now <CgArrowRight /></a>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>



      <section aria-label="Awards Section">

      <div className="award-logo">
        <div className='container award--logo-container'>
          <motion.div 
          
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.7, delay: 0.7}}
          
          className="awards">
            <img src={trophy1}
              alt='Presidency National Hajj Commission of Nigeria Award'
              loading="lazy"
            />
            <span>Presidency National Hajj Commission of Nigeria</span>
          </motion.div>

          <motion.div 
          
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.7, delay: 0.8}}
          
          className="second-award">
            <img src={saudi}
              alt='2 Times Saudi Agent Award Logo' loading="lazy"
            />
            <span>2 Times Saudi Agent Award</span>
          </motion.div>

          <motion.div
          
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.7, delay: 0.9}}

          className="awards">
            <img src={trophy}
              alt='Best Performing Agent in Nigeria, 2009'
              loading="lazy"
            />
            <span>Best performing Agent in Nigeria, 2009.</span>
          </motion.div>
        </div>

      </div>
      </section>
     
      <button className="scroll-to-top" onClick={scrollToTop}>
        <CgArrowUp />
      </button>
     
    </main>
  )
}

export default Section
