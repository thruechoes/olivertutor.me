import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Logo from '../svg/Logo.svg';
import '../css/Navbar.css';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getLinkClass = (path: string) => (
    `text-navbarGray mr-4 hover:text-navbarHover ${
      location.pathname === path ? 'font-bold' : ''
    }`
  );

  return (
    <nav className="bg-navbarWhite p-4 border-black border-b-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="navbar-logo max-w-xs">
          <img src={Logo} alt="OliverTutor.me" />
        </div>
        <div className="hidden md:flex space-x-12">
          <Link to="/" className={getLinkClass('/')}>home</Link>
          <Link to="/reviews" className={getLinkClass('/reviews')}>reviews</Link>
          <Link to="/blog" className={getLinkClass('/blog')}>blog</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleDropdown} className="text-navbarGray focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <Link to="/" className="block text-navbarGray py-2 hover:text-navbarHover">home</Link>
          <Link to="/reviews" className="block text-navbarGray py-2 hover:text-navbarHover">reviews</Link>
          <Link to="/blog" className="block text-navbarGray py-2 hover:text-navbarHover">blog</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
