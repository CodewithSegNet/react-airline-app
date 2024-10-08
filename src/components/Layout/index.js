import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/index.js';
import Footer from '../Footer/index.js';
import './index.scss';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
