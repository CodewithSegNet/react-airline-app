import "./index.scss"
import heroMobile from '../../assets/images/hero-mobile.jpg'
import heroTab from '../../assets/images/hero-tab.jpg'
import heroDesktop from '../../assets/images/hero-desktop.jpg'
import aboutUs from '../../assets/images/aboutUs.jpeg'
import aboutUs2 from '../../assets/images/aboutUs2.jpeg'
import aboutUs3 from '../../assets/images/ceo.jpeg'
import { Helmet } from 'react-helmet-async';
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';




const AboutUs = () => {
  return (
    <main className="second-content">
      <Helmet>
        <title>About Us - Dala Air Services</title>
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
                    <span > <Link className="backlink" to="/"> Home </Link>  </span> <span className="separator"> &gt; </span> About Us
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">

        <div>
          <div className="container">
            <div className="about--content">


              <div className="about-text">
                <h1 className="about-first-header">
                  Our <span> History</span>
                </h1>

                <p className="align">
                  Our company is focused on providing exciting domestic and internationalal tour
                  packages from Nigeria, designed to suit every budget and
                  preference. Our commitment to providing affordable internationaal and
                  domestic air tickets sets us part in the industry.
                </p>

                <p className="align">
                  We pride ourselves on our ability to help our clients find the best
                  flight schedules and manage air tickets for various airlines. Our team
                  of experts in highly skilled and experienced in visa processing services,
                  and we are able to assist with visa applications for most countries except
                  in some restricted countries over the world; We also offer a comprehensive
                  world-wide hotel reservation service, so you can find the perfect accommodation
                  for your trip, no matter where you're headed. We are dedicated to making sure you
                  have the best travel experience possible.
                </p>
              </div>



              <div className="about--img">
                <img src={aboutUs} className="about-img-block" alt="our history" />
              </div>
            </div>


            <div className="about--content about--gap">

              <div className="about--img">
                <img src={aboutUs2} className="about-img-block" alt="our history" />
              </div>

              <div className="about-text">
                <h1 className="second-header">
                  Our <span> Goal</span>
                </h1>

                <p className="align">
                  We are a team of travel experts, united by a love for industry and a
                  commitment to delivering on our promises. Our deep expertise and experience
                  in the the wholesale tourism market allow us to anticipate and exceed the needs
                  of our customers. We pride ourselves on providing professional and quality service,
                  always going the extra mile to ensure that your travel experience is nothing short of
                  extraordinary.
                </p>

                <p className="align">
                  We believe that tourism is not just a business, but a true passion. it is this dedication that
                  sets us apart and drives us to provide the best service possible. Join us no the adventure of a
                  lifetime and let us help you make your travel dreams a reality.
                </p>
              </div>
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








      <section className="section">

        <div>
          <div className="container">
            <div className="about--content">


              <div className="about-text">
                <h1 className="about-first-header">
                  Chairman <span> Message</span>
                </h1>

                <p className="align">
                  From the year 1990, Dala Air Services is working succussfully with a lot of renowned companies
                  as exclusive Hajj, Umrah, Tourism & Hotels. In this success 32 years, Dala Air Services accrues
                  huge renown by working together with renowned companies in Nigeria. In this meanwhile, Dala Air
                  Services wants to join with your company as an Exclusive Travel Agency. Building on our success,
                  we handle not only travel agency services but also operate and organize air travel charter services
                  for carriage of passengers within and outside Nigeria. We currently have the Nigerian Civil Aviation
                  Authority Travel Agency Operating License (ATOL). Also, We are an approved member of international
                  Airline Travel Association (IATA), We hold Go-Standard IATA License.
                </p>
              </div>


              <div className="about--img about-sec-img">
                <img src={aboutUs2} className="about-img-block" alt="our history" />
              </div>

            </div>




            <div className="about--content about--gap">

              <div className="about--img about-sec-img">
                <img src={aboutUs3} className="about-img-block" alt="our history" />
              </div>

              <div className="about-text">
                <h1 className="second-header">
                  CEO <span> Message </span>
                </h1>

                <p className="align">
                  It is my pleasure to welcome your to Dala Air Services Limited. I hope the information here provides you with
                  greater understanding of our company, our brand promise and our core beliefs. We have a proven track record of
                  top-quanlity serivces, with reliability and care, to the full satisfaction of our clients. We have built long
                  term relationship with our valuesd customers.
                </p>

                <p className="align">
                  Dala Air Services is recognised for its quick adaption and response to meet the needs of the client.
                  Whether it is about your Hajj, Umrah, Business Travel, Holiday Planning, Visa Consultation, Air Ticketing,
                  Hotel Booking, Corporate Event, Individual/Family program and transportation Services, our dedicated staff is here
                  to make sure you are taken care of and focused on your business or pleasure.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>

    </main>
  )
}

export default AboutUs