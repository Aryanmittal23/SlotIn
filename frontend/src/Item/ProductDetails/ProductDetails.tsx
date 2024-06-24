import React from 'react';
import './ProductDetails.css'
const ProductDetails = ({ price, description }) => {
  return (
    <div className="product-details">
      <h2>Price: ${price}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProductDetails;
