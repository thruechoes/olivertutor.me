import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Contact from '../components/Contact';
import Calc3Sample1 from '../images/calc3-sample1.png';
import Calc3Sample2 from '../images/calc3-sample2.png';

import ResumeImage from '../images/resume-writing.png';
import BirdBooks from '../images/bird-books.png';
import GirlBooks from '../images/girl-books.png';
import NaturePaper from '../images/miao-2019-dl-img.png';


const Portfolio: React.FC = () => {
    useEffect(() => {
        // Scroll to top of page when linked here from button
        window.scrollTo(0, 0);
    });
  return (
    <div className="min-h-screen bg-gray-100">
      {/*<div className="container mx-auto p-5">*/}
        <h1 className="text-6xl font-bold text-center text-customPurple mb-10 p-5">Portfolio</h1>
        <section className="w-full mt-0 space-y-8 border-black border-t-2">
        <div className="relative bg-customPurple mt-0 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 section-border">
          {/*<img src={NaturePaper} alt="Oliver's Resume" className="w-full md:w-1/2" />*/}
          <img src={ResumeImage} alt="Oliver's Resume" className="w-full md:w-1/2 border-black border-b-2 md:border-b-0" />
          <div className="flex-1 space-y-4 p-2 pl-20 pr-8">
            <h2 className="text-md md:text-lg lg:text-2xl font-bold pb-2">Deepening Ecology through Artificial Intelligence (AI)</h2>
            {/*<h4 className="text-md pb-8">AI Research During Oliver's PhD Program at UC Berkeley</h4>*/}
            <p className="text-sm lg:text-md">AI Research during Oliver's PhD program at UC Berkeley included a Computer Vision paper in Nature and 11 other scientific publications.</p>
            {/*<p className="text-sm">Oliver has had 12 scientific publications during his PhD program at UC Berkeley. He co-wrote a Computer Vision paper with the incredible Dr. Zhongqi Miao that was published in the prestigious journal Nature.</p>*/}
            <p className="text-sm lg:text-md pb-2">Most of Oliver's publications can be found at his ResearchGate profile via the link below.</p>
            <Link to="https://www.researchgate.net/profile/Oliver-Muellerklein-2/research">
              <button className="bg-customBtn text-black px-4 py-2 rounded-md hover:bg-navbarHover hover:text-black">Go to ResearchGate</button>
            </Link>
            {/*<button className="bg-customBtn text-black px-4 py-2 rounded-md hover:bg-navbarHover hover:text-black">Download Resume</button>*/}
          </div>
        </div>
      </section>

      <section className="mt-0 space-y-8 border-t-2 border-b-2 border-black">
        <div className="bg-customGreen mt-0 flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
          <div className="flex-1 space-y-4 p-4 pl-8 pr-20 text-right">
            <h2 className="text-md md:text-lg lg:text-2xl font-bold pb-2">AI Researcher and Engineer Work</h2>
            {/*<p className="text-sm">As an AI Researcher and Engineer, Oliver has built AI systems for various tech Startups across the domains of fitness coaching, cybersecurity, and b2b marketing.</p>*/}
            <p className="text-sm pb-4">Oliver has built complete Chatbots and other AI systems for various tech Startups. Download an example diagram of a Mixture-of-Experts and RAG fitness trainer Chatbot.</p>
            <a 
            href="/images/nlp/MoE-and-RAG-diagram.png"
            download="MoE-and-RAG-digram.png"
            className="bg-customBtn text-black px-4 py-2 rounded-md hover:bg-navbarHover hover:text-black">
              Download Sample
            </a>
          </div>
          <img src={BirdBooks} alt="Portfolio" className="w-full md:w-1/2 border-l-2 md:border-l-2 border-black border-t-2 md:border-t-0" />
        </div>
      </section>

      <div className="relative bg-customPink mt-0 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 section-border">
        {/*<div className="w-full md:w-1/2 flex flex-col space-y-4">
            <img src={Calc3Sample1} alt="Multivariate Calculus Sample 1" className="w-full" />
            <img src={Calc3Sample2} alt="Multivariate Calculus Sample 2" className="w-full" />
        </div>*/}
        <img src={GirlBooks} alt="Blog" className="w-full md:w-1/2 border-black border-b-2 md:border-b-0" />
        <div className="flex-1 space-y-4 p-4 pl-20 pr-8">
          <h2 className="text-lg lg:text-2xl font-bold pb-2">Study Guides and Tutorials</h2>
          <p className="text-sm pb-4">Oliver has written and distributed several study guides with step-by-step solutions for Probability & Statistics and Multivariate Calculus. PDFs of these study guides are freely available at Oliver's Github via the following link.</p>
          <a href="https://github.com/thruechoes/study-guides" target="_blank" rel="noopener noreferrer">
            <button className="bg-customBtn text-black px-4 py-2 rounded-md hover:bg-navbarHover">Link to PDFs</button>
          </a>
        </div>
      </div>
        <section className="bg-customGreen flex flex-col md:flex-row items-center space-y-4 md:space-y-0 border-t-2 border-black w-full p-4 mt-0">
        <div className="flex-1 space-y-4 p-4">
          <h2 className="text-6xl mb-4">Master AI and Data Science!</h2>
          <p className="mr-2">Passionate about AI and Data Science? Elevate your skills with personalized, one-on-one tutoring sessions. Ready to dive deeper? Contact Oliver now!</p>
        </div>
        <div className="flex-1 space-y-4 p-4">
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;