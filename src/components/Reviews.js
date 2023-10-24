import React, { useState } from 'react';

const reviewsData = [   
    {
        id: 1,
        name: "Mar",
        title: "Oliver is a Great Teacher!",
        text: "He is super knowledgeable, patient, and helpful. I highly recommend him to anyone looking for an experienced Data Science tutor.",
        rating: 5,
        lessons: 9,
        date: "30-Aug-2023",
        subjects: "Data Science, Machine Learning"
    },
    {
        id: 2,
        name: "Hannah",
        title: "My Favorite Tutor",
        text: "5-star teacher",
        rating: 5,
        lessons: 4,
        date: "30-Aug-2023",
        subjects: "Data Science, Statistical Analysis"
    },
    {
        id: 3,
        name: "Evan",
        title: "Helpful and Knowledgeable",
        text: "Oliver helped me tackle some issues I've been having with my portfolio. Within one session most of my problems were solved. I would definitely use him again.",
        rating: 5,
        lessons: 3,
        date: "07-Sept-2023",
        subjects: "React, JavaScript"
    },
    {
        id: 4,
        name: "Preeti",
        title: "Excellent Tutor",
        text: "He was a very patient and great tutor. I really look forward to working with him again on future projects.",
        rating: 5,
        lessons: 4,
        date: "03-May-2023",
        subjects: "Python, Machine Learning"
    }
];

/* Randomly pick colors */
const reviewColors = ["#FFC8FF", "#C5ABFF", "#A7FFD5"];

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * reviewColors.length);
    return reviewColors[randomIndex];
};

/* Carousel shows 3 reviews at once */
const chunkArray = (array, chunkSize) => {
    const chunked = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunked.push(array.slice(i, i + chunkSize));
    }
    return chunked;
};

const Reviews = () => {
    const [currentReview, setCurrentReview] = useState(0);

    const nextReview = () => {
        setCurrentReview(prevReview => (prevReview + 1) % reviewsData.length);
    }

    const prevReview = () => {
        setCurrentReview(prevReview => (prevReview - 1 + reviewsData.length) % reviewsData.length);
    }

    const reviewChunks = chunkArray(reviewsData, 3);

    return (
        <section className = "reviews-section">
            <h2>What people are saying</h2>
            <div className = "row reviews-container">
                { reviewsData.map(review => (
                    <div key = { review.id }
                      className = "column-thirds review-card borderer"
                      style = {{ backgroundColor: getRandomColor() }}>
                        <div className = "row lil-data centered-content">
                            <div className = "column-review">
                                { review.name },
                            </div>
                            <div className = "column-review">
                                { review.lessons } lessons with Oliver
                            </div>
                        </div>
                        <div className = "star-rating centered-content">
                            { Array(review.rating).fill().map((_, i) => (
                                <span key = { i }>★</span>
                            ))}
                        </div>
                        <h3>{ review.title }</h3>
                        <p className = "lil-data">{ review.text }</p>
                    </div>
                ))} 
            </div>
        </section>
    );

    {/* ** Carousel Version - INCOMPLETE ***/}
    {/*return (
        <section className = "reviews-section">
            <h2>What people are saying</h2>
            <div className = "carousel-container">
                <button onClick = { prevReview }>&lt;</button>
                    { reviewChunks.map((chunk, chunkIndex) => (
                        <div key = { chunkIndex } className = "carousel-item">
                        { chunk.map(review => (
                            <div key = { review.id }
                                className = "review-card"
                                style = {{ backgroundColor: getRandomColor() }}>
                                <div className = "row">
                                    <div className = "column">
                                        { reviewsData[currentReview].name },
                                    </div>
                                    <div className = "column">
                                        { reviewsData[currentReview].lessons } lessons with Oliver
                                    </div>
                                </div>
                                <div className = "star-rating">
                                    { Array(reviewsData[currentReview].rating).fill().map((_, i) => (
                                        <span key = { i }>★</span>
                                    ))}
                                </div>
                                <h3>{ reviewsData[currentReview].title }</h3>
                                <p>{ reviewsData[currentReview].text }</p>
                            </div>
                        ))}
                        </div>
                    ))}
                <button onClick = { nextReview }>&gt;</button>
                                    </div>*/}
            {/*<Slider {...settings}>
                {reviewsData.map((review, index) => (
                    <div key = { review.id } 
                        className = "review-card"
                        style = {{ backgroundColor: reviewColors[index % reviewColors.length]}}>
                        <div className = "star-rating">
                            {Array(review.rating).fill().map((_, i) =>(
                                <span key = { i }>★</span>
                            ))}
                        </div>
                        <p>{ review.title }</p>
                        <p>{ review.name }</p>
                    </div>
                ))}
            </Slider>*/}
            {/*<div className = "row reviews-container">
                <Slider {...settings}>
                { reviewsData.map((review, index) => (
                    <div key = { review.id } 
                        className = "column-thirds review-card"
                        style = {{ backgroundColor: reviewColors[index % reviewColors.length]}}>
                        <div className = "row lil-data centered-content">
                            <div className = "column">
                                { review.name },
                            </div>
                            <div className = "column">
                                { review.lessons } lessons with Oliver
                            </div>
                        </div>
                        <div className = "star-rating centered-content">
                            { Array(review.rating).fill().map((_, i) => (
                                <span key = { i }>★</span>
                            ))}
                        </div>
                        <h3>{ review.title }</h3>
                        <p>{ review.text }</p>
                    </div>
                ))}
                </Slider>
            </div>
            <button className = "more-reviews-button">More Reviews</button>
        </section>
    );*/}
}

export default Reviews;
