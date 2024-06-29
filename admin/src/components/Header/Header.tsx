import React from 'react'
import './Header.css'
import {images} from '../../../public/images/images'
function Header() {
  return (
    <div>
      

      <section className="hero">
        <div className="hero-content">
          <h1 >Welcome to Slot-In</h1>
          <p className="booking ">The Smart Way To Manage Bookings</p>
          <button className='cta-button'>Get Started</button>
        </div>
      </section>

      <section className="app-downloadss ">
        <div className="container">
          <h2>Download Our App</h2>
          <p>Manage your appointments on the go with our mobile app.</p>
          <div className="downloads-buttons">
            <a href="https://play.google.com/"><img src={images.playstore} alt="" /></a>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="feature">
            <img src={images.manage_appointment} alt="Manage Appointments"  />
            <h2>Manage Appointments</h2>
            <p>Keep track of all your bookings and never miss an appointment.</p>
          </div>
          <div className="feature">
            <img src={images.organize_services} alt="Organize Services" style={{ height: '293px', width: 'auto' }}  />
            <h2>Organize Services</h2>
            <p>List and manage all the services you offer in one place.</p>
          </div>
          <div className="feature">
            <img src={images.customer_management} alt="Customer Management"  />
            <h2>Customer Management</h2>
            <p>Maintain a database of your customers and their preferences.</p>
          </div>
        </div>
      </section>

        <div className="container">
          <h2>How Slot In Helps</h2>
          <p>Slot In provides a streamlined solution to manage your business efficiently. With our platform, you can:</p>
          <ul>
            <li>Reduce no-shows with automated reminders</li>
            <li>Increase customer satisfaction with easy booking</li>
            <li>Save time managing your schedule</li>
            <li>Access your calendar from anywhere</li>
            <li>Get insights into your business performance</li>
          </ul>
        </div>
      
      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <img src={images.register} alt="Register" />
              <h3>Register</h3>
              <p>Create an account and set up your profile.</p>
            </div>
            <div className="step">
              <img src={images.list_service} alt="List Services" style={{ height: '425px', width: '450px' }} />
              <h3>List Services</h3>
              <p>Detail the services you offer for easy booking.</p>
            </div>
            <div className="step">
              <img src={images.manage_booking} alt="Manage Bookings" />
              <h3>Manage Bookings</h3>
              <p>Keep track of all appointments and manage your calendar.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="container">
          <h2>What Our Providers Say</h2>
          <div className="testimonial-content">
            <blockquote>
              <p >"Slot In has transformed the way we manage our bookings. It's so easy to use!"</p>
              <footer>— Jane Doe, Salon Owner</footer>
            </blockquote>
            <blockquote>
              <p>"With Slot In, we have seen a significant improvement in customer satisfaction."</p>
              <footer>— John Smith, Physiotherapist</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Header
