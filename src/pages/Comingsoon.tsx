import React from 'react';
import ComputerImage from '../images/computer2-1.png';
import 'tailwindcss/tailwind.css';

const Comingsoon: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
      <img src={ComputerImage} alt="Olivertutor.me" className="w-full md:w-1/2" />
      <div className="p-4 space-y-4">
        <h1 className="text-4xl font-bold">This page is coming soon!</h1>
        <p>Join me on this exciting journey into AI and Python. But this section is in the works!</p>
        <a href="/#contact-section">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Book a session</button>
        </a>
      </div>
    </div>
  );
};

export default Comingsoon;
