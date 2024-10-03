import './index.scss';
import logo from '../../assets/images/airlinelogo-removebg-preview.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import IATAlogo from '../../assets/images/IATA-Accredited-Agent-white-900.webp';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-transparent sticky-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-brand logo mobile-logo">
          <a className="" href='#'>
            <img className='iata-logo' src={logo} alt="Airline Logo" />
          </a>
          </div>
        
          <div className="collapse navbar-collapse desktop-nav" id="navbarTogglerDemo03">
          <div className="navbar-brand logo">
          <a className="" href='#'>
            <img className='iata-logo' src={logo} alt="Airline Logo" />
          </a>
          </div>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#'>
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#'>
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="navbar-brand logo" >
            <img className='iata-logo' src={IATAlogo} alt="Airline Logo"/>
          </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;