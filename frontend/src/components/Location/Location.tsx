import React from 'react'
import assets from '../../assets/assets'
import './Location.css'
function Location() {
  return (
   
    <div className='location-card'>
      <div>
      <h2>Turn on location services</h2>
      <p>Get recommendations of great business! Turn on location services so we can show you what's nearby.</p>
      <button >Search Near Me</button>
      <button >Not Now</button>
      </div>
      <img className='location-img' src={assets.location2} alt="" />
    
    </div>
    
  )
}

export default Location
