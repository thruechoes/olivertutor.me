import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../svg/Logo.svg';
import '../css/Navbar.css';

const Navbar = () => {
    return (
        <nav className = "navbar">
            <div className = "navbar-content">
                <img src = { Logo } alt="OliverTutor.me Logo" className = "navbar-logo" />
                <ul className = "navbar-menu">
                    <li><i>Coming soon: </i></li>
                    <li><a href = "/">Home</a></li>
                    <li><a href = "/#contact-section">Book Session</a></li>
                    <li><a href = "/">Online Courses</a></li>
                    <li><a href = "/">Blog</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;