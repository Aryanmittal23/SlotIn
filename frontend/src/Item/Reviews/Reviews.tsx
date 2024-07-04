import React from 'react';
import './Review.css'; // Import custom CSS for styling

const Review = ({ reviews }) => {
  return (
    <div className="reviews">
      <h2>Customer Reviews</h2>
      <table className="reviews-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Comment</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <td>{review.user}</td>
              <td>{review.comment}</td>
              <td>{review.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Review;
