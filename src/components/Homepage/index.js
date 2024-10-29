import React, { useRef, useEffect, useState, Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import { motion, useInView, useAnimation } from "framer-motion";
import Loader from 'react-loaders';
import FirstSection from '../First-Section/index.js';
import SecondSection from '../Second-Section/index.js';
import ThirdSection from '../Third-Section/index.js';
import FourthSection from '../Fourth-Section/index.js';
import './index.scss';

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const images = document.querySelectorAll('img');
    const handleImageLoad = () => {
      const allLoaded = Array.from(images).every(img => img.complete);
      if (allLoaded) setLoading(false);
    };

    images.forEach(img => {
      img.addEventListener('load', handleImageLoad);
      img.addEventListener('error', handleImageLoad); 
    });

    return () => {
      images.forEach(img => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
    };
  }, []);

  return (
    <>
      {loading && (
        <div className="loader-overlay">
          <Loader type="ball-scale-ripple-multiple" />
        </div>
      )}
      <div>
        <Helmet>
          <title>Home - Dala Air Services</title>
        </Helmet>

        {/* Wrapping each section in Suspense with Loader fallback */}
        <Suspense fallback={<Loader type="ball-scale-ripple-multiple" />}>
          <FirstSection />
        </Suspense>
        <Suspense fallback={<Loader type="ball-scale-ripple-multiple" />}>
          <div className='section'>
            <SecondSection />
          </div>
        </Suspense>
        <Suspense fallback={<Loader type="ball-scale-ripple-multiple" />}>
          <section className="text--block section" ref={ref}>
            <div className="design-text section">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0 }, 
                }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                We Pride Ourselves On Being A One-Stop Shop For All Your Travel 
                Needs, And We Look Forward To The Opportunity To Serve You.
              </motion.h1>
            </div>
          </section>
        </Suspense>
        <Suspense fallback={<Loader type="ball-scale-ripple-multiple" />}>
          <div className='section'>
            <ThirdSection />
          </div>
        </Suspense>
        <Suspense fallback={<Loader type="ball-scale-ripple-multiple" />}>
          <div className='section'>
            <FourthSection />
          </div>
        </Suspense>
      </div>
    </>
  );
};

export default Home;
