import './index.scss';
import svg from '../../assets/images/drawkit-transport-scene-12.svg';
import svg2 from '../../assets/images/drawkit-transport-scene-4.svg';
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";


const ThirdSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  return (
    <section className="container" ref={ref}>
      <div className="third--content third--title" >
        <div className='svg--img'>
          <motion.img

            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.9 }}

            src={svg} alt='travel illustration' />
        </div>

        <motion.div

          initial={{ opacity: 0, x: 50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.5 }}

        >
          <div>
            <h2>
              Let’s Go <span> Travel Around</span> <br /> The World
            </h2>
          </div>
          <p className='align'>
            We offer an array of exotic vacations at Dala Air Services Ltd, from Hajj and
            Umrah trips to beachside and hillside retreats, jungle vacations,
            and riverside getaways, just to name a few. We pride ourselves on our ability to
            help our clients find the best flight schedules and manage air tickets for various airlines.
          </p>

          <p className='align'>
            our team of experts is highly skilled and experienced in visa processing services, and we are
            able to assist with visa applications for most countries except in some restricted countries over
            the world; We also Offer a comprehensive world-wide hotel reservation service, so you can find the
            perfect accommodation for your trip.
          </p>
        </motion.div>
      </div>


      <div className="third--content third--content--sec-text">
        <motion.div

          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.8, delay: 3 }}

        >
          <div>
            <h2>
              Explore the <span>World <br /> with Us!</span>
            </h2>
          </div>

          <p className='align'>
            We have a proud history of providing exceptional
            travel experiences to our clients. At Dala Air Services Ltd, we Specialize in offering
            exciting domestic and international tour packages from Nigeria,
            designed to suit every budget and preference. Our commitment to
            providing affordable international and domestic air tickets sets
            us apart in the industry.
          </p>
          <p className='align'>
            We are dedicated to making sure you have he best travel experience possible,
            and we are always here to help with any questions or concerns you may have. take
            a look at our services and let us help you plan your next joyful journey, in our
            country and outside the country.
          </p>

        </motion.div>

        <div className='svg--img'>
          <motion.img

            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.9, delay: 3.5 }}

            src={svg2} alt='travel illustration' />
        </div>
      </div>
    </section>
  )
}

export default ThirdSection;