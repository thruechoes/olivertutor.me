import React from 'react';
import Reviews from '../components/Reviews.js';
import Contact from '../components/Contact.js';
import '../css/Home.css';
import ComputerImage from '../images/computer2-1.png';
import BirdBooks from '../images/bird-books.png';
import ContactImage from '../images/contact-image.png';
import GirlBooks from '../images/girl-books.png';
import ResumeImage from '../images/resume-writing.png';
import Scheduling from '../images/scheduling.png';

const Home = () => {
    return (
        <div className = "home-container">  
            {/* Main Header */}
            <div className = "row">
                <div className = "column">
                    <img src = { ComputerImage } alt = "Olivertutor.me" className = "full-img" />
                </div>
                <div className = "column intro-section">
                    <h1>Enhance Your Career With Confidence</h1>
                    <p>Join me on this exciting journey into AI and Python. Let's not just learn, but innovate, explore, and lead the future together.</p>
                    <button className = "book-tutoring-btn">Book Tutoring</button>
                </div>
            </div>

            {/* Reviews Section */}
            <Reviews />

            {/* About Oliver */}
            <div className = "row">
                <section className = "about-oliver">
                    <h2>About Oliver: <i>from Bayesian Inference to Generative AI</i></h2>
                    <div className = "row">
                        <div className = "column-about">
                            <p className = "shift-p">Hello! I'm Oliver, and I'm here to guide you through the fascinating and intricate realms of AI and Python. Teaching myself coding and AI, I know how daunting and intimidating complex topics can be.</p>
                        </div>
                        <div className = "column-about">
                            <p className = "shift-p"> I offer a down-to-earth teaching style that helps make this complex material less intimidating and more digestible. I am your teammate.</p>
                        </div>
                        <p className = "shift-p">Here's why I believe our journey together will be enlightening and rewarding.</p>
                    </div>
                </section>
            </div>

            {/* Oliver's Resume */}
            <div className = "row">
                <div className = "column resume-image">
                    <img src = { ResumeImage } alt = "Oliver's Resume" />
                </div>
                <div className = "column resume-section">
                    <h2 className = "big-font">Check out Oliver's Resume</h2>
                    <h4>1. Hands-on Experience</h4>
                    <p>As Lead AI Researcher at Yeuvi LLC, I craft cutting-edge AI solutions for the business world. I bring this real-world, practical knowledge into our tutoring sessions, ensuring you're not just learning the theory but also its impactful applications.</p>
                    <button className = "resume-button">View Resume</button>
                </div>
            </div>

            {/* Oliver's Portfolio */}
            <div className = "row">
                <div className = "column portfolio-section">
                    <h2>Oliver's Portfolio</h2>
                    <h4>2. A Self-taught Journey</h4>
                    <p>My path into the world of coding, statistics, ML, and AI started from scratch. I've been in the shoes of both a beginner and an expert, and this allows me to tailor our sessions to precisely where you are and where you aim to be.</p>
                    <button className = "portfolio-button">View Portfolio</button>
                </div>
                <div className = "column portfolio-image">
                    <img src = { BirdBooks } alt = "Publications Galore" />
                </div>
            </div>

            {/* Image with Books */}
            <div className = "row">
                <div className = "column blog-image">
                    <img src = { GirlBooks } alt = "Oliver's Blog" />
                </div>
                <div className = "column blog-section">
                    <h2>Want to read the blog?</h2>
                    <h4>3. A Story of Resilience and Curiosity</h4>
                    <p>My upbringing in the hills of West Virginia, learning about nature's marvels, and my evolution into the world of code have crafted my unique teaching philosophy. With me, every session is not just about codes and algorithms; it's about understanding the deeper "why" and "how" behind them.</p>
                    <button className = "gray-btn">Read Blog</button>
                </div>
            </div>

            {/* Scheduling */}
            <div className = "row">
                <div className = "column scheduling-section">
                    <h2>Schedule your tutoring session</h2>
                    <h4>4. A Blend of Academic and Practical Excellence</h4>
                    <p>My journey at UC Berkeley has seen me publish 12 scientific papers, deeply rooted in Python and AI. Together, we can navigate this confluence of academic rigor and real-world applications for a holistic learning experience.</p>
                    <button className = "book-tutoring-btn">Book Tutoring</button>
                </div>
                <div className = "column scheduling-image">
                    <img src = { Scheduling } alt = "Schedule your Session" />
                </div>
            </div>

            {/* Contact Oliver */}
            <div className = "row">
                <div className = "column contact-image">
                    <img src = { ContactImage } alt = "Student giving a thumbs up!" />
                </div>
                <div className = "column contact-oliver">
                    <Contact />
                    {/*<h2>Contact Oliver</h2>
                    <form>
                        <input type = "text" placeholder = "Name" />
                        <input type = "email" placeholder = "Email Address" />
                        <input type = "tel" placeholder = "Phone Number" />
                        <textarea placeholder = "Write Oliver a note here!"></textarea>
                        <button type = "submit">Contact Now</button>
                </form>*/}
                </div>
            </div>
        </div>
    );
}

export default Home;