import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/index.js';
import Footer from '../Footer/index.js';
import Book from '../book/index.js';
import './index.scss';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="main---content">
        <Outlet />
      </div>
      <Book />
      <Footer /> 
    </>
  );
}

export default Layout;
