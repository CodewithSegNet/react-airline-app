import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import heroMobile from '../../assets/images/hero-mobile.jpg'
import heroTab from '../../assets/images/hero-tab.jpg'
import heroDesktop from '../../assets/images/hero-desktop.jpg'
import { Helmet } from 'react-helmet-async';
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Card from "../card/index.js";
import img1 from "../../assets/images/sam-riz.jpg";
import img2 from "../../assets/images/rob-wilson.jpg";
import img3 from "../../assets/images/yousef.jpg";
import img4 from "../../assets/images/caption.jpg";
import img5 from "../../assets/images/meklay-yotkhamsay-AAZaK31x6FM-unsplash.jpg";
import img6 from "../../assets/images/elimende-inagella-iDwpJIo6aq0-unsplash.jpg";
import img7 from "../../assets/images/umair-dingmar-m9n8W46ZEXc-unsplash.jpg";
import img8 from "../../assets/images/nicole-geri-gMJ3tFOLvnA-unsplash.jpg";
import img9 from "../../assets/images/alexander-schimmeck-DSOohFTAfno-unsplash.jpg";
import country1 from '../../assets/images/Canada.jpeg'
import country2 from '../../assets/images/AUSTRALIA.jpeg'
import country3 from '../../assets/images/uk.jpeg'
import country4 from '../../assets/images/usa.jpeg'
import country5 from '../../assets/images/shegan.jpeg'
import country6 from '../../assets/images/Türkiye.jpeg'
import country7 from '../../assets/images/egpyt.jpeg'
import country8 from '../../assets/images/china.jpeg'
import country9 from '../../assets/images/vietnam.jpeg'
import country10 from '../../assets/images/thai.jpeg'
import country11 from '../../assets/images/Malaysia.jpeg'
import country12 from '../../assets/images/SaudiArabia.jpeg'
import country13 from '../../assets/images/singapore.jpeg'
import inbound from '../../assets/images/mecca.jpg'
import inbound1 from '../../assets/images/bardan.jpeg'
import inbound2 from '../../assets/images/kuakata.jpg'
import inbound3 from '../../assets/images/saintMart.jpeg'
import inbound4 from '../../assets/images/ranga.jpeg'
import inbound5 from '../../assets/images/sundor.jpeg'
import inbound6 from '../../assets/images/sylhet.jpg'
import inbound7 from '../../assets/images/cox.jpg'
import inbound8 from '../../assets/images/Sylhetangladesh.jpeg'
import outbound from '../../assets/images/sticker3-removebg-preview.png'
import outbound2 from '../../assets/images/India-removebg-preview.png'
import outbound3 from '../../assets/images/Bhutan-removebg-preview.png'
import outbound4 from '../../assets/images/Skyline-removebg-preview.png'
import outbound5 from '../../assets/images/don-removebg-preview.png'
import outbound6 from '../../assets/images/Singapore2-removebg-preview.png'
import outbound7 from '../../assets/images/Nepal-removebg-preview.png'
import outbound8 from '../../assets/images/Stickers-removebg-preview.png'
import outbound9 from '../../assets/images/VietnamSticker-removebg-preview.png'
import outbound10 from '../../assets/images/Dubai-removebg-preview.png'












const CardData = [
  { src: img1, alt: "Travel Package 1", title: "Hajj/Umrah Package" },
  { src: img2, alt: "Travel Package 2", title: "Corporate Group Tour Package" },
  { src: img7, alt: "Travel Package 2", title: "International Tour Package" },
  { src: img3, alt: "Travel Package 3", title: "Student Tour Package" },
  { src: img9, alt: "Travel Package 3", title: "Domestic & Intl Air Tickets" },
  { src: img4, alt: "Travel Package 4", title: "Domestic Tour Package" },
  { src: img5, alt: "Travel Package 2", title: "Luxury Hotel Package" },
  { src: img6, alt: "Travel Package 3", title: "Luxury Train Package" },
  { src: img8, alt: "Travel Package 3", title: "Visa Services" },

];




const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    lazyLoad: 'ondemand',
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 687,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const countries = [
    {
      imgSrc: country12,
      altText: 'country saudia arabia',
      visaType: 'Saudi Arabia Visa',
      className: 'countries-block block-alt'
    },
    {
      imgSrc: country1,
      altText: 'country canada',
      visaType: 'Canada Tourist Visa',
      className: 'countries-block'
    },
    {
      imgSrc: country2,
      altText: 'country australia',
      visaType: 'Australia Tourist Visa File Process',
      className: 'countries-block block-alt'
    },
    {
      imgSrc: country3,
      altText: 'country uk',
      visaType: 'UK Tourist Visa File Process',
      className: 'countries-block'
    },
    {
      imgSrc: country4,
      altText: 'country usa',
      visaType: 'USA Tourist Visa File Process',
      className: 'countries-block block-alt'
    },
    {
      imgSrc: country5,
      altText: 'schengen visa',
      visaType: 'Schengen Visa File Process',
      className: 'countries-block'
    },
    {
      imgSrc: country6,
      altText: 'country China',
      visaType: 'China',
      className: 'countries-block block-alt'
    },
    {
      imgSrc: country7,
      altText: 'country egypt',
      visaType: 'Egypt',
      className: 'countries-block block'
    },
    {
      imgSrc: country8,
      altText: 'country vietnam',
      visaType: 'Vietnam Visa Approval',
      className: 'countries-block block-alt'
    },
    {
      imgSrc: country9,
      altText: 'country uae',
      visaType: 'Dubai E Visa',
      className: 'countries-block block'
    },
    {
      imgSrc: country10,
      altText: 'country thailand',
      visaType: 'Thailand Visa Approval',
      className: 'countries-block block-alt'
    },
    {
      imgSrc: country11,
      altText: 'country malaysia',
      visaType: 'Malaysia E Visa',
      className: 'countries-block block'
    },
    {
      imgSrc: country13,
      altText: 'country malaysia',
      visaType: 'Singapore',
      className: 'countries-block block-alt'
    }

  ];

  const inboundDestinations = [
    { src: inbound, alt: 'Destination 1', text: 'Mecca' },
    { src: inbound2, alt: 'Destination 2', text: "Cox's Bazar" },
    { src: inbound8, alt: 'Destination 2', text: 'Sylhet' },
    { src: inbound3, alt: 'Destination 2', text: 'Saint Martin' },
    { src: inbound4, alt: 'Destination 2', text: 'Rangamati' },
    { src: inbound5, alt: 'Destination 2', text: 'Sundorban' },
    { src: inbound6, alt: 'Destination 2', text: 'Sylhet' },
    { src: inbound7, alt: 'Destination 2', text: 'Kuakata' },
    { src: inbound1, alt: 'Destination 2', text: 'Bardorban' }
  ];

  const outboundDestinations = [
    { src: outbound, alt: 'Destination 1'},
    { src: outbound2, alt: 'Destination 2'},
    { src: outbound3, alt: 'Destination 3'},
    { src: outbound4, alt: 'Destination 4'},
    { src: outbound5, alt: 'Destination 5'},
    { src: outbound6, alt: 'Destination 6'},
    { src: outbound7, alt: 'Destination 7'},
    { src: outbound8, alt: 'Destination 8'},
    { src: outbound9, alt: 'Destination 9'},
    { src: outbound10, alt: 'Destination 13'}
  ];

  return (
    <main className="second-content">
      <Helmet>
        <title>Services - Dala Air Services</title>
      </Helmet>

      <section className='sections-bottom-pad'>
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
              <div className="container second--carousel">
                <div className="carousel-caption">
                  <h5 className='service--text'>
                    <span > <Link className="backlink" to="/"> Home </Link>  </span> <span className="separator"> &gt; </span> Services
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="section">

        <div className="container">
          <div className="visa-service">
            <div className="visa-service-title">
              <h2>
                Country Of <span> Visa Services</span>
              </h2>
            </div>
            <p className="visa-service-parag">
              At Dala Air Services Ltd we provides reliable visa services to help 
              you navigate the complexities of international travel. 
              Whether you're planning a short getaway or a long-term stay, 
              our expert team offers guidance on visa requirements, application processes, 
              and necessary documentation for a variety of countries.
            </p>
          </div>


          <div className='countries'>
            <div className='countries-container'>
              {countries.map((country, index) => (
                <div className={country.className} key={index}>
                  <div className='countries-block-img'>
                    <img src={country.imgSrc} className='countries-img' alt={country.altText} loading="lazy"  />
                  </div>
                  <p className='countries-name'>
                    {country.visaType}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className='section'>
        <div className="container">
          <div className="visa-service">
            <div className="visa-service-title">
              <h2>
                <span>Inbound </span> Destinations
              </h2>
            </div>
            <p className="visa-service-parag">
              Our inbound destination services provide travelers 
              with a seamless and memorable experience. 
              From reliable airport transfers to guided tours, 
              we ensure every aspect of your journey is smooth, 
              secure, and designed to meet your needs.
            </p>
          </div>


          <div className='inbound-destination'>
      <div className='inbound-container'>
        {inboundDestinations.map((destination, index) => (
          <div className='inbound-container-block' key={index}>
            <img src={destination.src} className='inbound-img' alt={destination.alt} loading="lazy"  />
            <p className='inbound-text'>{destination.text}</p>
          </div>
        ))}
      </div>
    </div>

        </div>

      </section>




      <section className="text--block section">
<div className="design-text section">
<h1>
We Pride Ourselves On Being A One-Stop Shop For All Your Travel 
Needs, And We Look Forward To The Opportunity To Serve You.
</h1>

</div>
      </section>




      <section className='section'>
        <div className="container">
          <div className="visa-service">
            <div className="visa-service-title">
              <h2>
                <span>Outbound </span> Destinations
              </h2>
            </div>
            <p className="visa-service-parag">
            Our outbound destination services take you across the globe with ease and comfort. 
            Whether you're planning a vacation, business trip, or cultural exploration, 
            we offer comprehensive travel solutions to popular international destinations.
            </p>
          </div>


          <div className='inbound-destination'>
      <div className='inbound-container'>
        {outboundDestinations.map((destination, index) => (
          <div className='outbound-container-block' key={index}>
            <img src={destination.src} className='inbound-img' alt={destination.alt} loading="lazy"  />
          </div>
        ))}
      </div>
    </div>

        </div>

      </section>




      <section className="section">
        <div className="second--content service-carousel">
          <div className='container'>
            <h1>
              Explore Our <span>Exclusive Travel     </span>   <br className="break" />    Packages
            </h1>
            <div className="card-carousel">
              <Card slides={CardData} settings={settings} />
            </div>
          </div>
        </div>


      </section>

    </main>
  )
}

export default Services;