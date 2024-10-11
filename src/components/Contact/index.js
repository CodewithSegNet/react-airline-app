import "./index.scss"
import heroMobile from '../../assets/images/hero-mobile.jpg'
import heroTab from '../../assets/images/hero-tab.jpg'
import heroDesktop from '../../assets/images/hero-desktop.jpg'
import { Helmet } from 'react-helmet-async';
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import React, { useRef, useState  } from 'react';
import emailjs from '@emailjs/browser';




const ContactUs = () => {

  const form = useRef();
  const [message, setMessage] = useState(null); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cnj393s', 'template_sps0479', form.current, {
        publicKey: '0zoHpmLCfIabYLn17',
      })
      .then(
        () => {
          setMessage({ type: 'success', text: 'Message was sent successfully!' });
        },
        (error) => {
          setMessage({ type: 'error', text: 'Failed to send message. Please try again.' });
        },
      );
  };


    return(
        <main className="second-content">
           <Helmet>
        <title>Contact Us - Dala Air Services</title>
      </Helmet>
<section className=''>
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
             <span > <Link className="backlink" to="/"> Home </Link>  </span> <span className="separator"> &gt; </span>
             Contact Us
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

</section>



<section className="section">
  <div className="container contact-us">

    <div>
    <div className="contact--text">
    <h2> <span> Your Journey Starts Here: </span> Get in Touch with Us!</h2>
    <p>
    At Dala Air Service Ltd, we’re dedicated to making your travel dreams a reality. 
    Whether you have questions about our packages, need assistance with bookings, 
    or want personalized travel advice, our team is here to help you every step of the way.
     Reach out to us, and let’s start planning your next adventure together!
    </p>
  </div>
    </div>
<div className="form">
{message && (
                <div className={`message ${message.type === 'success' ? 'success' : 'error'}`}>
                  {message.text}
                </div>
              )}

<form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
</div>
  </div>

</section>
        </main>
    )
}

export default ContactUs

