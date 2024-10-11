import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import heroMobile from '../../assets/images/hero-mobile.jpg'
import heroTab from '../../assets/images/hero-tab.jpg'
import heroDesktop from '../../assets/images/hero-desktop.jpg'
import saudi from '../../assets/images/saudi_logo.avif'
import trophy from '../../assets/images/trophy.png'
import trophy1 from '../../assets/images/trophy1.png'
import { FaWhatsapp } from "react-icons/fa6";
import { CgArrowRight } from 'react-icons/cg'



const Section = () => {
  return (
    <main className="first-content" alt='hero content'>
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
                <h1 className='hero--text'>
                  Turn your adventure dreams into reality with <span>Dala Air</span>
                </h1>
                <p className='hero--parag'>
                  Let us take you on unforgettable journeys to explore the
                  world’s most exciting destinations
                </p>
                <button type="button" className='button'>
                  <a className='btn' href="tel:+2348023185363">Book Now <CgArrowRight /></a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>



      <section aria-label="Awards Section">

      <div className="award-logo">
        <div className='container award--logo-container'>
          <div className="awards">
            <img src={trophy1}
              alt='Presidency National Hajj Commission of Nigeria Award'
              loading="lazy"
            />
            <span>Presidency National Hajj Commission of Nigeria</span>
          </div>

          <div className="second-award">
            <img src={saudi}
              alt='2 Times Saudi Agent Award Logo' loading="lazy"
            />
            <span>2 Times Saudi Agent Award</span>
          </div>

          <div className="awards">
            <img src={trophy}
              alt='Best Performing Agent in Nigeria, 2009'
              loading="lazy"
            />
            <span>Best performing Agent in Nigeria, 2009.</span>
          </div>
        </div>

      </div>
      </section>
     

     
    </main>
  )
}

export default Section
