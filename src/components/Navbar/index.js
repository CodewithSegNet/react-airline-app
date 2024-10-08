import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/airlinelogo-removebg-preview.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import IATAlogo from '../../assets/images/IATA-Accredited-Agent-white-900.webp';

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

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <nav
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
          <div className={`collapse navbar-collapse desktop-nav ${isNavbarOpen ? 'show' : ''}`} id="navbarTogglerDemo03">
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
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact="true"
                  to="/Service"
                  className="nav-link"
                  alt="Services"
                  style={{ color: (isNavbarOpen ? '#fff' : scrolled ? '#fff' : '') }}
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact="true"
                  to="/About Us"
                  className="nav-link"
                  alt="About Us"
                  style={{ color: (isNavbarOpen ? '#fff' : scrolled ? '#fff' : '') }}
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact="true"
                  to="/Contact Us"
                  className="nav-link"
                  alt="Contact Us"
                  style={{ color: (isNavbarOpen ? '#fff' : scrolled ? '#fff' : '') }}
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
      </nav>
    </header>
  );
};

export default Navbar;
