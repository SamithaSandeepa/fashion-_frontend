import React from 'react';
import './Reviews.css'; // This file should contain the CSS for your reviews layout

export const Reviewsexplain = () => {
  // Example reviews data. Replace with actual data fetch or state management
  const Reviewsexplain = [
    {
      review: "The customer service at that store was terrible. The staff was rude and unhelpful, and the products they sell are of poor quality. I had a really bad experience",
      explanation: "The model categorized the review as Negative because of Poor Quality, color faded, staining, low durability, Bad Experience, terrible, rude"
    },
    // Add more reviews here
  ];

  return (
    <div className="reviews-container">
      <h1>Negative Reviews</h1>
      <h2>Sleeveless Racer Muscle Back Maxi Dress</h2>
      {Reviewsexplain.map((review, index) => (
        <div key={index} className="review-card">
          <p className="review">{review.review}</p>
          <p className="explanation">{review.explanation}</p>
          <div className="actions">
            {/* Example actions */}
            <button>✔</button>
            {/* Add more actions if needed */}
          </div>
        </div>
      ))}
    </div>
  );
};


