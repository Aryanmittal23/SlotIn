import React from 'react'
import './RecommendItem.css'
import assets from '../../assets/assets'


function RecommendItem({id,name,description,image}) {
  return (
    <div className='shop-item'>
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
    </div>
  )
}

export default RecommendItem
