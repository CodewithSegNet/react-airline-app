import './index.scss';
import svg from '../../assets/images/drawkit-transport-scene-12.svg';
import svg2 from '../../assets/images/drawkit-transport-scene-4.svg';



const ThirdSection = () => {
    return (
<section className="container">
      <div className="third--content third--title">
        
        <div className='svg--img'>
            <img src={svg} alt='travel illustration' />
        </div>

        <div>
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
        </div>
      </div>


      <div className="third--content third--content--sec-text">
        <div>
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
       
        </div>

        <div className='svg--img'>
            <img src={svg2} alt='travel illustration' />
        </div>
      </div>
    </section>
    )
}

export default ThirdSection;