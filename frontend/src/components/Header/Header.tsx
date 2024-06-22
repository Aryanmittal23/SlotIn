import React from 'react'
import assets from '../../assets/assets'
import './Header.css'

function Header() {
  return (
    
      <div className='header'>
      <div className="header-contents">
        <h2>
          Say goodbye to long queues 
      <br />
      and wasted time with Slot-in</h2>
        <p>the ultimate solution for busy individuals who value their time.</p>
        <button>Get Started</button>
      </div>
      <img src={assets.header_img2} alt="" className='header_img2' />
    </div>
   
  )
}

export default Header
