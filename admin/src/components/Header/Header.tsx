import React from 'react'
import './Header.css'
import {assets} from '../../assets/assets'
function Header() {
  return (
    <div>
      <div className='about'>
          <div>
          <h2>Appointment done better</h2>
          <p>Looking for you next appointment with a local barber ,hair stylist,massage ,therapist or nail artist?Neeed appointment booking for a beard trim ,an eyebrow wax,or a deep tissue massage?
             SlotIn is free beauty scheduling app and makes appointments esay to find and book within seconds.No more phone tag.Book anytime,ferom anywhere ,24/7.
          </p>
          <p>Discover top business in your area and book instanty with SlotIn</p>
          </div>
          <img src={assets.about2} alt="" />
        </div>
        <div className='about'>
        <img src={assets.about3} alt="" />
          <div>
          <h2>Something come up? We've got you</h2>
          <p>Download SlotIn,a free online appointment bokking app,and manage your appointment from anywhere.Reschedule or cancel without picking up the phone.
            And because we know life gets busy,we'll send you reminders.you'llnever forget or miss out an another appointment.
          </p>
          </div>
          </div> 
          <div className='about'>
            <div>
            <h2>Book with the best,near you</h2>
            <p>Take a scroll around the block to see top health and beauty businesses on SlotIn marketplace.
              Check out their vibe from their business profile and hear what other people are saying with verified reviews.You can even look through their portfolio of work 
              Save time and leave the stress to someone else.With SlotIn,setting uop your next beauty appointment is free and easy.
            </p>
            </div>
            <img src={assets.about1} alt="" />
          </div>
    </div>
  )
}

export default Header
