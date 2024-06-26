import React from 'react';
import './ImageGallery.css'
const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Product image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageGallery;
