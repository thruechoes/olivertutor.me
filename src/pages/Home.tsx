import React from 'react';
import { Link } from 'react-router-dom';
import ComputerImage from '../images/computer2-1.png';
import BirdBooks from '../images/bird-books.png';
import ContactImage from '../images/contact-image.png';
import GirlBooks from '../images/girl-books.png';
import ResumeImage from '../images/resume-writing.png';
import Scheduling from '../images/scheduling.png';
import Review from '../components/Review';
import Contact from '../components/Contact';
import  { reviews, colors, getRandomColor, sliderSettings } from '../reviews/reviewsData';
import 'tailwindcss/tailwind.css';
/* Custom css in Home.css */
import './Home.css';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh'}} className="border-black">
      <section className="mt-0 space-y-8">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 bg-customPurple border-t-2 border-b-2 border-black">
            <div className="flex-1">
              <img src={ComputerImage} alt="Olivertutor.me" className="w-full md:w-full border-b-2 border-black md:border-r-2 md:border-black md:border-b-0" />
            </div>
            <div className="flex-1 p-4 space-y-4 pl-12 md:w-1/2">
              <h1 className="text-5xl font-bold pb-8">Enhance Your Career With Confidence</h1>
              <a href="#contact-section">
                <button className="bg-customBtn text-black px-4 py-2 rounded-md hover:bg-navbarHover hover:text-black">Book Tutoring</button>
              </a>
            </div>
          </div>
      </section>

      {/* Reviews Section */}
        <div className = "bg-white">
        { <section className="space-y-4 bg-white shadow-lg rounded-lg p-6 mt-12 min-h-[400px]">
          <Slider {...sliderSettings}>
            {reviews.map((review, idx) => (
              <div key={idx} className="p-2">
                <Review 
                  reviewer={review.reviewer}
                  location={review.location}
                  date={review.date}
                  lessons={review.lessons}
                  quote={review.quote}
                  whole={review.whole}
                  backgroundColor={colors[idx % colors.length]}
                />
              </div>
            ))}
          </Slider>
        </section>}
        </div>

      <section className="bg-customGreen mt-0 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 border-t-2 border-b-2 border-black min-h-[400px]">
        <div className="w-1/2 mx-auto">
          <div className="flex-1 space-y-4 p-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">About Oliver</h2>
            <p>Hi, I'm Oliver! I am here to guide you through the fascinating world of <i>Artificial Intelligence (AI)</i>, Python programming, and other topics in Data Science. No matter how much experience you have, I will help make these topics less intimidating and more digestible.</p>
          </div>
        </div>
      </section>

      <section className="mt-0 space-y-8">
        <div className="relative bg-customPurple mt-0 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 section-border">
          <img src={ResumeImage} alt="Oliver's Resume" className="w-full md:w-1/2  border-black border-b-2 md:border-b-0" />
          <div className="flex-1 space-y-4 p-4 pl-36">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-8 lg:pr-36">Check out Oliver's Resume</h2>
            <a 
            href="/oliver_resume_june2024.pdf"
            download="oliver_resume_june2024.pdf"
            className="bg-customBtn text-black px-4 py-2 rounded-md hover:bg-navbarHover hover:text-black">
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <section className="mt-0 space-y-8 border-t-2 border-b-2 border-black">
        <div className="bg-customGreen mt-0 flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
          <div className="flex-1 space-y-4 p-4 pr-36 text-right">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-8 lg:pl-52">Here is Oliver's Portfolio</h2>
            <Link to="/portfolio">
              <button className="bg-customBtn text-black px-4 py-2 rounded-md hover:bg-navbarHover hover:text-black">View Portfolio</button>
            </Link>
          </div>
          <img src={BirdBooks} alt="Portfolio" className="w-full md:w-1/2 border-l-2 md:border-l-2 border-black border-t-2 md:border-t-0" />
        </div>
      </section>

      <div className="relative bg-customPink mt-0 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 section-border">
        <img src={GirlBooks} alt="Blog" className="w-full md:w-1/2 border-black border-b-2 md:border-b-0" />
        <div className="flex-1 space-y-4 p-4 pl-36">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-8 lg:pr-48">Oliver on the latest in AI</h2>
          <Link to="/blog">
            <button className="bg-customBtn text-black px-4 py-2 rounded-md hover:bg-navbarHover">Read Blog</button>
          </Link>
        </div>
      </div>

      <div className="bg-customGreen flex mt-0 flex-col md:flex-row items-center space-y-4 md:space-y-0 border-t-2 border-b-2 border-black">
        <div className="flex-1 space-y-4 p-4 pr-36 text-right">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-8 lg:pl-40">Schedule your tutoring session</h2>
          <a href="#contact-section">
            <button className="bg-customBtn text-black px-4 py-2 rounded-md hover:bg-navbarHover">Book Tutoring</button>
          </a>
        </div>
        <img src={Scheduling} alt="Scheduling" className="w-full md:w-1/2 border-l-2 md:border-l-2 border-black border-t-2 md:border-t-0" />
      </div>

      <section id="contact-section" className="bg-customGreen mt-0 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 border-b-2 border-black">
        <img src={ContactImage} alt="Blog" className="w-full md:w-1/2 border-black border-b-2 md:border-b-0" />
        <div className="flex-1 space-y-4 p-1 lg:pb-4">
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default Home;
