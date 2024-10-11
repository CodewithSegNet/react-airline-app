import FirstSection from '../First-Section/index.js';
import SecondSection from '../Second-Section/index.js';
import ThirdSection from '../Third-Section/index.js';
import FourthSection from '../Fourth-Section/index.js';
import { Helmet } from 'react-helmet-async';
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import './index.scss';






const Home = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);


  return (
   
    <div>
       <Helmet>
    <title>Home - Dala Air Services</title>
  </Helmet>
      <div className=''>
      <FirstSection />
      </div>
      <div className='section'>
      <SecondSection />
      </div>
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

      <div className='section'>
      <ThirdSection />
      </div>
      <div className='section'>
        <FourthSection />
      </div>
    </div>
  )
}

export default Home

