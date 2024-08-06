import React from 'react';
import Review from '../components/Review';
import { reviews, colors, sliderSettings } from '../reviews/reviewsData';
import 'tailwindcss/tailwind.css';
import './Home.css'; 

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const adjustedSliderSettings = {
    ...sliderSettings,
    dots: false,
};

const ReviewPage: React.FC = () => {
    const getReviewsForRow = (rowIndex: number) => {
        const offset = rowIndex * 2; 
        const adjustedReviews = reviews.slice(offset).concat(reviews.slice(0, offset)); // Slice and concatenate reviews
        const adjustedColors = colors.slice(offset).concat(colors.slice(0, offset)); // Slice and concatenate colors
        return { adjustedReviews, adjustedColors };
    };

    const getRowStyle = (rowIndex: number) => {
        if (rowIndex === 0) return {}; // No offset for the first row
        const offsetPercentage = 5; // 50% offset
        const offset = rowIndex % 2 === 0 ? 0 : offsetPercentage; // Alternate offset
        return { marginLeft: `${offset}%` };
    };
  
    return (
      <div style={{ minHeight: '100vh' }} className="mb-60">
        <section className="mt-0 space-y-8">
          <div className="flex flex-col items-center bg-white p-6">
            <h1 className="text-6xl font-bold pb-2 mt-12 text-customPurple">180 Reviews</h1>
            <div className="flex mb-12">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-4xl star-stroke">★</span>
              ))}
            </div>
          </div>
        </section>
        <div className="bg-white">
        {Array.from({ length: 5 }).map((_, rowIndex) => {
          const { adjustedReviews, adjustedColors } = getReviewsForRow(rowIndex);
          return (
            <section key={rowIndex} className="space-y-4 bg-white rounded-lg">
              <Slider {...adjustedSliderSettings}>
                {adjustedReviews.map((review, idx) => (
                  <div key={idx} className="p-2">
                    <Review 
                      reviewer={review.reviewer}
                      location={review.location}
                      date={review.date}
                      lessons={review.lessons}
                      quote={review.quote}
                      whole={review.whole}
                      backgroundColor={adjustedColors[idx % adjustedColors.length]}
                    />
                  </div>
                ))}
              </Slider>
            </section>
          );
        })}
        </div>
      </div>
    );
  };
  
  export default ReviewPage;