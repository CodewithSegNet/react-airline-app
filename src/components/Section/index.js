import './index.scss';
import Navbar from '../Navbar/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroMobile from '../../assets/images/hero-mobile.jpg'
import heroTab from '../../assets/images/hero-tab.jpg'
import heroDesktop from '../../assets/images/hero-desktop.jpg'
import saudi from '../../assets/images/saudi_logo.avif'
import trophy from '../../assets/images/trophy.png'
import trophy1 from '../../assets/images/trophy1.png'
import trophy2 from '../../assets/images/trophy2.png'



import { CgArrowRight } from "react-icons/cg";

const Section = () => {
  return (
    <main className="first-content">
    <Navbar />
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
            />
            <div className="container">
              <div className="carousel-caption">
                <h1>
                  Turn your adventure dreams into reality with <span>Dala Air</span>
                </h1>
                <p>
                  Let us take you on unforgettable journeys to explore the world’s most exciting destinations
                </p>
                <button type="button" className="btn">
                  Book Now <CgArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container award-logo'>
     
        <div className='awards'>
          <img src={trophy1}/>
          <span>
          Presidency National Hajj Commission of Nigeria 
          </span>
        </div>

        <div className='second-award'>
          <img src={saudi}/>
          <span>
          2 Times Saudi Agent Award        
           </span>
        </div>

        <div className='awards'>
          <img src={trophy}/>
          <span>
          Best performing Agent in Nigeria, 2009.   
           </span>
        </div>
      </div>
    </main>
  );
};

export default Section;