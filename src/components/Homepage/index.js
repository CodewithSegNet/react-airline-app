import FirstSection from '../First-Section/index.js';
import SecondSection from '../Second-Section/index.js';
import ThirdSection from '../Third-Section/index.js';
import FourthSection from '../Fourth-Section/index.js';
import { Helmet } from 'react-helmet-async';
import './index.scss';

const Home = () => {
  return (
   
    <div>
       <Helmet>
    <title>Home - Dala Air Services</title>
  </Helmet>
      <div className=''>
      <FirstSection />
      </div>
      <div className='section'>
      <SecondSection />
      </div>
      <section className="text--block section">
<div className="design-text section">
<h1>
We Pride Ourselves On Being A One-Stop Shop For All Your Travel 
Needs, And We Look Forward To The Opportunity To Serve You.
</h1>

</div>
      </section>

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

