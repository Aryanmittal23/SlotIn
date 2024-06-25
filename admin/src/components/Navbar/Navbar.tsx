import React from 'react';
import './Navbar.css';
import { assets } from "../../assets/assets";
function Navbar() {
  return (
  <div>
    <div className='navbar'>
        <img className='logo' src={assets.logo} alt="" />
        <button className='register-btn'>Register your Business</button>
        <img className='profile' src={assets.profile_image} alt=""  />
        
    </div>
    <hr />
  </div> 
  )
}

export default Navbar
