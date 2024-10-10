import "./index.scss"
import heroMobile from '../../assets/images/hero-mobile.jpg'
import heroTab from '../../assets/images/hero-tab.jpg'
import heroDesktop from '../../assets/images/hero-desktop.jpg'
import { Helmet } from 'react-helmet-async';
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';




const AboutUs = () => {
    return(
        <main className="second-content">
        <Helmet>
        <title>About Us - Dala Air Services</title>
      </Helmet>
      <section className='sections-bottom-pad'>
      <div className='icon whatsapp-fixed'>
        <a href="https://wa.me/+2348027373385" target="_blank" rel="noopener noreferrer">
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
            <div className="container second--carousel">
              <div className="carousel-caption">
                <h5 className='service--text'>
             <span > <Link className="backlink" to="/"> Home </Link>  </span> <span className="separator"> &gt; </span> About Us
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      </section>
     
        </main>
    )
}

export default AboutUs