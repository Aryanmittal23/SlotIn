

import React from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';
import ImageGallery from '../ImageGallery/ImageGallery';
import Reviews from '../Reviews/Reviews';
import { Link } from 'react-router-dom';
import assets from '../../assets/assets';
import './ItemPage.css'; // Import CSS for styling


const ItemPage = () => {
  const businessHours = [
    { day: 'Tuesday', hours: '11:00 AM - 8:00 PM' },
    { day: 'Monday', hours: '11:00 AM - 8:00 PM' },
    { day: 'Sunday', hours: '11:00 AM - 8:00 PM' },
    { day: 'Wednesday', hours: '11:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '11:00 AM - 8:00 PM' },
    { day: 'Tuesadya', hours: '11:00 AM - 8:00 PM' },
    { day: 'Friday', hours: '11:00 AM - 8:00 PM' },
  ];

  const product = {
    id: 1,
    title: 'Sample Product',
    price: 29.99,
    description: 'This is a great product!',
    images: ['https://via.placeholder.com/300'],
    reviews: [
      { id: 1, user: 'John Doe', comment: 'Amazing service!', rating: 5 },
      { id: 2, user: 'Jane Smith', comment: 'Pretty good', rating: 4 },
    ],
  };

  return (
    <div className="item-page">
      <div className="content">
        <div>
          <ImageGallery images={product.images} />
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h3 className="mt-4 text-2xl font-bold">Services</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Description</th>
                <th>Price</th>
                <th>Book Now</th>
              </tr>
            </thead>
            <tbody className="table">
              <tr>
                <td className="table">Single haircut</td>
                <td className="table">This service is just a haircut, whatever you want.</td>
                <td className='table'>$34</td>
                <td className="table">
                  <Link to="/booking">
                    <button>Book</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
          <Reviews reviews={product.reviews} />
        </div>
        <div>
          <h2>About us</h2>
          <p>
            Welcome to [Barber Shop Name], where style meets precision. Located in the heart of [City/Town], we pride
            ourselves on providing exceptional grooming services tailored to meet the unique needs of each client. Our
            team of experienced barbers is passionate about their craft, combining traditional barbering techniques with
            the latest trends to ensure you leave looking and feeling your best.
          </p>
          <div>
            <h3>Business hours</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Opening Hours</th>
                </tr>
              </thead>
              <tbody>
                {businessHours.map(({ day, hours }) => (
                  <tr key={day}>
                    <td>{day}</td>
                    <td>{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="item-social-icons">
            <h3>Social media</h3>
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
