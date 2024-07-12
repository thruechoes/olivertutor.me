import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Logo from '../svg/Logo.svg';
import '../css/Navbar.css';

const NavBar: React.FC = () => (
  <nav className="bg-navbarWhite p-4 border-black border-b-2">
    <div className="container mx-auto flex justify-between items-center">
      {/*<div className="text-navbarGray font-bold text-xl">OliverTutor.me</div>*/}
      <div className="navbar-logo max-w-xs">
          <img src={Logo} alt="OliverTutor.me" />
      </div>
      <div>
        <Link to="/" className="text-navbarGray mr-4 hover:text-navbarHover">Home</Link>
        {/*<Link to="/portfolio" className="text-navbarGray mr-4 hover:text-navbarHover">Portfolio</Link>*/}
        <Link to="/reviews" className="text-navbarGray mr-4 hover:text-navbarHover">Reviews</Link>
        <Link to="/blog" className="text-navbarGray mr-4 hover:text-navbarHover">Blog</Link>
      </div>
    </div>
  </nav>
);

export default NavBar;
