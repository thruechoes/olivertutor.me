import React from 'react';
import Logo from '../svg/Logo.svg';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src = { Logo } alt="Olivertutor.me" />
                </div>
                <div className="footer-links">
                    {/* Adjust with your actual links */}
                    <a href="/comingsoon">Blog</a>
                    <a href="/comingsoon">Courses</a>
                    <a href="/#contact-section">Contact</a>
                </div>
                <div className="footer-social">
                    {/* Example social media icons; replace with yours */}
                    {/*<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>*/}
                    <a href = "https://github.com/thruechoes">GitHub</a>
                    <a href = "https://www.linkedin.com/in/oliver-muellerklein/">LinkedIn</a>
                </div>
            </div>
            <div className="footer-copyright">
                © {new Date().getFullYear()} OliverTutor.me All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
