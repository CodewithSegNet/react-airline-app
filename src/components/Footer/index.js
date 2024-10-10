import { Link } from 'react-router-dom';
import './index.scss';
import { FaWhatsapp } from "react-icons/fa6";
import logo from '../../assets/images/airlinelogo-removebg-preview.png';
import { FaFacebook } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";







const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='iata--text'>
                    <h3>
                        IATA, NCAA Registered Agent/ATOL, Nigerian Hajj Commission,
                        Kano State Chambers of Commerce
                    </h3>
                </div>

                <div className='footer--title'>
                    <div className="footer--logo">
                        <Link className="logo--footer" to="/">
                            <img className="" src={logo} alt="logo" />
                        </Link>
                    </div>

                    <p className='footer--text text2'>
                        #48, Ibrahim Taiwo Road, Kano State, Nigeria.
                        <br/>
                        Amino Kano Crescent, suit 205 GCL Plaza Plot ELOT 522.
                        Abuja Office. 

                    </p>

                    <div>
                        <p className='footer--text'>
                            +234 802 737 3385
                        </p>

                        <p className='footer--text'>
                            +234 807 856 1878
                        </p>

                        <p className='footer--text'>
                            dalaair@yahoo.com
                        </p>
                    </div>


                </div>

                <div>
                    <div className='footer--icon'>
                        <div className='icon'>
                            <a href="https://www.facebook.com/your-page" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className='facebook' />
                            </a>
                        </div>
                        <div className='icon'>
                            <a href="https://wa.me/+2348027373385" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className='whatsapp' />
                            </a>
                        </div>
                        <div className='icon'>
                            <a href="mailto:dalaair@yahoo.com">
                                <AiOutlineMail className='mail' />
                            </a>
                        </div>
                    </div>

                </div>

                <hr className='line' />

                <span className='copyright'>
                    Copyright © All Right Reserved
                </span>



            </div>
        </footer>
    )
}

export default Footer;