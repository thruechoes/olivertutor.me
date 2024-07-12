import React from 'react';
import Logo from '../svg/Logo.svg';
import '../css/Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer border-black border-t-2">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={Logo} alt="Olivertutor.me" />
                </div>
                <div className="footer-links">
                    <a href="/Blog">Blog</a>
                    <a href="/Reviews">Reviews</a>
                    <a href="/#contact-section">Contact</a>
                </div>
                <div className="footer-social">
                    {/*<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>*/}
                    <a href="https://github.com/thruechoes">GitHub</a>
                    <a href="https://www.linkedin.com/in/oliver-muellerklein/">LinkedIn</a>
                </div>
            </div>
            <div className="footer-copyright">
                © {new Date().getFullYear()} OliverTutor.me All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
