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
                    <li><a href = "/">Home</a></li>
                    <li><a href = "/book-session">Book Session</a></li>
                    <li><a href = "/online-courses">Online Courses</a></li>
                    <li><a href = "/blog">Blog</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;