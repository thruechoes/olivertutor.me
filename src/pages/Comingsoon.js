import React from 'react';
import '../css/Home.css';
import ComputerImage from '../images/computer2-1.png';

const Comingsoon = () => {
    return (
        <div className = "coming-soon">
            <div className = "row borderer">
                <div className = "column borderer">
                    <img src = { ComputerImage } alt = "Olivertutor.me" className = "full-img" />
                </div>
                <div className = "column intro-section borderer">
                    <h1>This page is coming soon!</h1>
                    <p>Join me on this exciting journey into AI and Python. But this section is in the works!</p>
                    <a href = "/#contact-section">
                        <button className = "book-tutoring-btn">Book a session</button>
                    </a>
                </div>
            </div>
            <div className = "row borderer">
                <section className = "about-oliver">
                </section>
            </div>
        </div>
    )
};

export default Comingsoon;