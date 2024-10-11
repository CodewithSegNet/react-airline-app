import { CgArrowRight } from 'react-icons/cg'
import "./index.scss"
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";





const Book = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);


    return (
        <section className="section book-now" ref={ref}>
       <div
       
       
       className="">
        <div className="book--content container">
        <motion.h3
        
       initial={{ opacity: 0, x: -50 }}
       animate={controls}
       variants={{
         visible: { opacity: 1, x: 0 }, 
       }}
       transition={{ duration: 0.5, delay: 0.7 }}
        
        
        >
          Don't Settle For anything Less Than The Best, 
          Let Us Help Plan Your Next Great Escape.
        </motion.h3>
        <motion.button
        
         
       initial={{ opacity: 0, x: 50 }}
       animate={controls}
       variants={{
         visible: { opacity: 1, x: 0 }, 
       }}
       transition={{ duration: 0.5, delay: 0.9 }}
        
        type="button" className='button'>
        <a className='book-btn' href="tel:+2348023185363">Book Now <CgArrowRight /></a>
        </motion.button>
        </div>
       
      </div>
        </section>
 
    )
}

export default Book