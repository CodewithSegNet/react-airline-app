import FirstSection from '../First-Section/index.js';
import SecondSection from '../Second-Section/index.js';
import ThirdSection from '../Third-Section/index.js';
import FourthSection from '../Fourth-Section/index.js';
import './index.scss';

const Home = () => {
  return (
    <div>
      <div className=''>
      <FirstSection />
      </div>
      <div className='section'>
      <SecondSection />
      </div>
      <div className='section'>
      <ThirdSection />
      </div>
      <div className='section'>
        <FourthSection />
      </div>
    </div>
  )
}

export default Home

