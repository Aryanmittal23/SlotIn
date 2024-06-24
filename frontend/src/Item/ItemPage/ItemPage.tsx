import React from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';
import ImageGallery from '../ImageGallery/ImageGallery';
import Reviews from '../Reviews/Reviews';
//import AddToCartButton from './AddToCartButton';
import assets from '../../assets/assets'
import './ItemPage.css'
const ItemPage = () => {
  const product = {
    id: 1,
    title: 'Sample Product',
    price: 29.99,
    description: 'This is a great product!',
    images: [
      'https://via.placeholder.com/300'
    ],
    reviews: [
      { id: 1, user: 'John Doe', comment: 'Amazing product!', rating: 5 },
      { id: 2, user: 'Jane Smith', comment: 'Pretty good', rating: 4 },
    ],
  };

  return (
    <div className="item-page">
      
      <div className="content">
        <div>
        <ImageGallery images={product.images} />
        <h1>{product.title}</h1>
        <p>address:Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Nisi dignissimos</p>
        <h2>Services</h2>
        <hr />
        <p>single haircut</p>
        <p>this service is just haircut whatever you want</p>
        <button>Book</button>
        <ProductDetails price={product.price}/>
        <Reviews reviews={product.reviews} />
        </div>
        <div>
          <h2>About us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Error qui totam aliquam. Aspernatur accusantium 
          porro numquam, debitis laboriosam, repellendus quas possimus
           non nam autem, deleniti nostrum maiores necessitatibus culpa 
           ad quia nemo iusto. Laboriosam veniam at incidunt ad voluptatum earum.</p>
           <h3>Business hours</h3>
           <ul>
            <li>Sunaday  11:00Am-8:00Pm</li>
            <br />
            <li>Monday   11:00Am-8:00Pm</li>
            <br />
            <li>Tuesday   11:00Am-8:00Pm</li>
            <br />
            <li>Wednesday   11:00Am-8:00Pm</li>
            <br />
            <li>Thursday   11:00Am-8:00Pm</li>
            <br />
            <li>Friday     11:00Am-8:00Pm</li>
            <br />
            <li>Satuday   11:00Am-8:00Pm</li>
            <br />
           </ul>
           
           <div className="item-social-icons">
           <h3>Social media</h3>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
