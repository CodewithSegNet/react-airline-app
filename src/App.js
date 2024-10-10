import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Homepage';
import Services from './components/Services'; 
import AboutUs from './components/About';
import ContactUs from './components/Contact';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Services" element={<Services />} />
          <Route path="About-Us" element={<AboutUs />} />
          <Route path="Contact-Us" element={<ContactUs />} />
        </Route>
      </Routes>

    </>
  );
}


// serviceWorkerRegistration.register();

export default App;
