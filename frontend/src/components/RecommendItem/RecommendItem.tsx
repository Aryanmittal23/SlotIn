import React from 'react'
import './RecommendItem.css'
import assets from '../../assets/assets'
import { Link } from 'react-router-dom';

function RecommendItem({id,name,description,image}) {
  return (
    <div className='shop-item'>
      <Link to='/ItemPage'>
      <div className="shop-item-img-container">
        <img className='shop-item-image' src={image} alt="" />
      </div>
      <div className="shop-item-info">
        <div className="shop-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className='shop-item-desc'>{description}</p>
      </div>
      </Link>
    </div>
  )
}

export default RecommendItem
