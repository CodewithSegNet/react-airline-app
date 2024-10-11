import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import React, { useState, useEffect,  useRef  } from 'react';
import logo from '../../assets/images/airlinelogo-removebg-preview.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import IATAlogo from '../../assets/images/IATA-Accredited-Agent-white-900.webp';
import { motion, useInView, useAnimation } from "framer-motion"






const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };


  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      console.log("Element is in view!");
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);


  // const toggleNavbar = () => {
  //   setIsNavbarOpen(!isNavbarOpen);
  // };

  const toggleNavbar = () => {
    const navbar = document.querySelector('.navbar-collapse');

    if (isNavbarOpen) {
      // Add close class before collapsing
      navbar.classList.remove('show');
      navbar.classList.add('close');
      
      setTimeout(() => {
        setIsNavbarOpen(false);
      }, 500); // Match the transition duration
    } else {
      // Open the navbar
      navbar.classList.remove('close');
      setIsNavbarOpen(true);
    }
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
    
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={ref}>
      <motion.nav
         variants={{
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7}}
        className={`navbar navbar-expand-lg fixed-top ${
          scrolled ? 'navbar-scrolled' : ''
        } ${isNavbarOpen ? 'navbar-open' : ''}`}
      >
        <div className="container-fluid">
          <div className="logo mobile-logo">
            <Link className="" to="/">
              <img className="iata-logo" src={logo} alt="logo" />
            </Link>
          </div>
          <button
             className={`navbar-toggler ${isNavbarOpen ? 'navbar-toggler-open' : ''}`}
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#navbarTogglerDemo03"
             aria-controls="navbarTogglerDemo03"
             aria-expanded={isNavbarOpen ? 'true' : 'false'}
             aria-label="Toggle navigation"
             onClick={toggleNavbar}
             style={{
              backgroundColor: 'transparent',  
              color: '#002244',           
              border: '2px solid #002244',
            }}           
            >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse desktop-nav ${isNavbarOpen ? 'show' : ''}`} id="navbarTogglerDemo03"
          >
            
            <div className="navbar-brand logo">
              <Link className="" to="/">
                <img className="iata-logo logo2" src={logo} alt="logo" />
              </Link>
            </div>
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <NavLink
                  exact="true"
                  activeclassname="active"
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  alt="Home"
                  style={{ color: (isNavbarOpen ? '#fff' : scrolled ? '#fff' : '') }}
                  onClick={closeNavbar}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact="true"
                  to="/Services"
                  className="nav-link"
                  alt="Services"
                  style={{ color: (isNavbarOpen ? '#fff' : scrolled ? '#fff' : '') }}
                  onClick={closeNavbar}
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact="true"
                  to="/About-Us"
                  className="nav-link"
                  alt="About Us"
                  style={{ color: (isNavbarOpen ? '#fff' : scrolled ? '#fff' : '') }}
                  onClick={closeNavbar}
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact="true"
                  to="/Contact-Us"
                  className="nav-link"
                  alt="ContactUs"
                  style={{ color: (isNavbarOpen ? '#fff' : scrolled ? '#fff' : '') }}
                  onClick={closeNavbar}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>

            <div className="navbar-brand logo--iata">
              <img className="iata-logo logo2" src={IATAlogo} alt="logo" />
            </div>
          </div>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;