import React from 'react';
import './Review.css'
const Reviews = ({ reviews }) => {
  return (
    <div className="reviews">
      <h2>Customer Reviews</h2>
      {reviews.map(review => (
        <div key={review.id} className="review">
          <h3>{review.user}</h3>
          <p>{review.comment}</p>
          <p>Rating: {review.rating} / 5</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
