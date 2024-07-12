import React from 'react';
import 'tailwindcss/tailwind.css';
import { truncateText } from '../utils/truncateText';

interface ReviewProps {
  reviewer: string;
  location: string;
  date: string;
  lessons: number;
  quote: string;
  whole: string;
  backgroundColor: string;
}

const Review: React.FC<ReviewProps> = ({ reviewer, location, date, lessons, quote, whole, backgroundColor }) => {
  const truncatedWhole = truncateText(whole, 240); 

  return (
    <div className={'p-4 bg-gray-100 rounded-2xl shadow-md w-full flex flex-col border-2 border-black'} style={{ backgroundColor, height: '300px' }}>
      <div className="text-center">
        <span className="font-bold">{reviewer}</span>
        <span className="ml-2">{location}</span>
      </div>
      <p className="text-center"><i>{lessons} lessons with Oliver</i></p>
      <div className="text-yellow-300 text-center">
        {'★'.repeat(5)} {/* 5 gold stars */}
      </div>
      <p className="font-bold text-center mt-2">{quote}</p>
      <div className="text-sm text-center overflow-hidden overflow-ellipsis" style={{ height: '80px', whiteSpace: 'normal', lineHeight: '1.5' }}>
        {truncatedWhole}
      </div>
      <p className="text-xs text-right italic mt-auto">{date}</p>
    </div>
  );
};

export default Review;


