import { Link } from 'react-router-dom';
import './index.scss';
import { FaWhatsapp } from "react-icons/fa6";
import logo from '../../assets/images/airlinelogo-removebg-preview.png';
import { FaFacebook } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";







const Footer = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [isInView, controls]);
  
  

    return (
        <footer className='footer' ref={ref}>
            <div className='container'>
                <motion.div
                
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0 }, 
                }}
                transition={{ duration: 0.7, delay: 0.4 }}

                className='iata--text'>
                    <h3>
                        IATA, NCAA Registered Agent/ATOL, Nigerian Hajj Commission,
                        Kano State Chambers of Commerce
                    </h3>
                </motion.div>

                <div className='footer--title'>
                    <div className="footer--logo">
                        <Link className="logo--footer" to="/">
                            <motion.img
                            
                            initial={{ opacity: 0, y: 50 }}
                            animate={controls}
                            variants={{
                              visible: { opacity: 1, y: 0 }, 
                            }}
                            transition={{ duration: 0.7, delay: 0.7 }}
                            
                            className="" src={logo} alt="logo" />
                        </Link>
                    </div>

                    <motion.p
                    
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    variants={{
                      visible: { opacity: 1, y: 0 }, 
                    }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                    
                    className='footer--text text2'>
                        #48, Ibrahim Taiwo Road, Kano State, Nigeria.
                        <br/>
                        Amino Kano Crescent, suit 205 GCL Plaza Plot ELOT 522.
                        Abuja Office. 

                    </motion.p>

                    <motion.div
                    
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    variants={{
                      visible: { opacity: 1, y: 0 }, 
                    }}
                    transition={{ duration: 0.7, delay: 1.3 }}

                    >
                        <p className='footer--text'>
                            +234 802 737 3385
                        </p>

                        <p className='footer--text'>
                            +234 807 856 1878
                        </p>

                        <p className='footer--text'>
                            dalaair@yahoo.com
                        </p>
                    </motion.div>


                </div>

                <div>
                    <div className='footer--icon'>
                        <motion.div
                        
                        initial={{ opacity: 0, y: 50 }}
                        animate={controls}
                        variants={{
                          visible: { opacity: 1, y: 0 }, 
                        }}
                        transition={{ duration: 0.7, delay: 0.7 }}
                        
                        className='icon'>
                            <a href="https://www.facebook.com/your-page" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className='facebook' />
                            </a>
                        </motion.div>
                        <motion.div
                        
                        
                        initial={{ opacity: 0, y: 50 }}
                        animate={controls}
                        variants={{
                          visible: { opacity: 1, y: 0 }, 
                        }}
                        transition={{ duration: 0.7, delay: 0.9} }

                        className='icon'>
                            <a href="https://wa.me/+2348023185363" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className='whatsapp' />
                            </a>
                        </motion.div>
                        <motion.div
                        
                        
                        initial={{ opacity: 0, y: 50 }}
                        animate={controls}
                        variants={{
                          visible: { opacity: 1, y: 0 }, 
                        }}
                        transition={{ duration: 0.7, delay: 1.3 }}
                        
                        className='icon'>
                            <a href="mailto:dalaair@yahoo.com">
                                <AiOutlineMail className='mail' />
                            </a>
                        </motion.div>
                    </div>

                </div>

                <hr className='line' />

                <motion.span 
                
                
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0 }, 
                }}
                transition={{ duration: 0.7, delay: 1.4 }}
                
                className='copyright'>
                    Copyright © All Right Reserved
                </motion.span>



            </div>
        </footer>
    )
}

export default Footer;