import React from 'react';
import Logo from '../svg/Logo.svg';
import '../css/Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer border-black border-t-2 py-4">
            <div className="container mx-auto px-5">
                {/*<div className="footer-content">*/}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="footer-logo mb-4 md:mb-0">
                        <img src={Logo} alt="Olivertutor.me" />
                    </div>
                    <div className="footer-links mb-4 md:mb-0">
                        <a href="/Blog" className="block md:inline-block mr-4">Blog</a>
                        <a href="/Reviews" className="block md:inline-block mr-4">Reviews</a>
                        <a href="/#contact-section" className="block md:inline-block mr-4">Contact</a>
                    </div>
                    <div className="footer-social flex space-x-4">
                        {/*<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>*/}
                        <a href="https://github.com/thruechoes" className="block md:inline-block mr-4">GitHub</a>
                        <a href="https://www.linkedin.com/in/oliver-muellerklein/" className="block md:inline-block">LinkedIn</a>
                    </div>
                </div>
                <div className="footer-copyright mt-16">
                    © {new Date().getFullYear()} OliverTutor.me All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
