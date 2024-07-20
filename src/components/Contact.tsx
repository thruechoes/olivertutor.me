import React from 'react';
import 'tailwindcss/tailwind.css';

const Contact: React.FC = () => (
  <div className="p-4 lg:p-6 rounded-lg text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-12">Contact Oliver</h2>
    <form className="space-y-4">
      <div className="relative pb-4 md:pb-6 lg:pb-8">
        <label className="absolute -top-4 left-2 border border-black bg-pink-200 text-black-400 px-2 py-1 rounded-lg text-xs">name*</label>
        <input className="w-full px-4 py-2 border-2 border-black shadow-sm rounded-md text-center" type="text" placeholder="name" required />
      </div>
      <div className="relative pb-4 md:pb-6 lg:pb-8">
        <label className="absolute -top-4 left-2 border border-black bg-pink-200 text-black-400 px-2 py-1 rounded-lg text-xs">email address*</label>
        <input className="w-full px-4 py-2 border-2 border-black shadow-sm rounded-md text-center" type="email" placeholder="oliver@gmail.com" required />
      </div>
      <div className="relative pb-4 md:pb-6 lg:pb-8">
        <label className="absolute -top-4 left-2 border border-black bg-pink-200 text-black-400 px-2 py-1 rounded-lg text-xs">phone number</label>
        <input className="w-full px-4 py-2 border-2 border-black shadow-sm rounded-md text-center" type="tel" placeholder="### - ### - ####" />
      </div>
      <div className="relative pb-4 md:pb-6 lg:pb-8">
        <label className="absolute -top-4 left-2 border border-black bg-pink-200 text-black-400 px-2 py-1 rounded-lg text-xs">note</label>
        <textarea className="w-full px-4 py-2 border-2 border-black shadow-sm rounded-md text-center" placeholder="Write Oliver a note here!"></textarea>
      </div>
      <button className="bg-customBtn text-black px-4 py-2 rounded-md hover:bg-navbarHover" type="submit">Contact Now</button>
    </form>
  </div>
);

export default Contact;
