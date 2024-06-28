import React from 'react';
import './ListYourBusiness.css'
import images from "../../images/images"
function ListYourBusiness() {
  return (
    <div>
      <header >
          <div >Slot In</div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="in.html" className="hover:underline">Dashboard</a></li>
              <li><a href="/" className="hover:underline">Profile</a></li>
              <li><a href="/" className="hover:underline">Help</a></li>
              <li><a href="/" className="hover:underline">Logout</a></li>
            </ul>
          </nav>
        
      </header>

      <section className="hero bg-blue-600 text-white text-center p-10">
        <div className="hero-content">
          <h1 >Welcome to Slot-In</h1>
          <p className="booking ">The Smart Way To Manage Bookings</p>
          <a href="#" className="cta-button bg-white text-blue-600 px-4 py-2 mt-6 inline-block rounded">Get Started</a>
        </div>
      </section>

      <section className="app-downloadss p-10">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold">Download Our App</h2>
          <p className="mt-4">Manage your appointments on the go with our mobile app.</p>
          <div className="downloads-buttons mt-6">
            <a href="#"><img src={images.playstore} alt="" className="mx-auto" /></a>
          </div>
        </div>
      </section>

      <section className="features p-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="feature text-center">
            <img src={images.manage_appointment} alt="Manage Appointments" className="mx-auto" />
            <h2 className="text-xl font-bold mt-4">Manage Appointments</h2>
            <p className="mt-2">Keep track of all your bookings and never miss an appointment.</p>
          </div>
          <div className="feature text-center">
            <img src={images.organize_services} alt="Organize Services" style={{ height: '293px', width: 'auto' }} className="mx-auto" />
            <h2 className="text-xl font-bold mt-4">Organize Services</h2>
            <p className="mt-2">List and manage all the services you offer in one place.</p>
          </div>
          <div className="feature text-center">
            <img src={images.customer_management} alt="Customer Management" className="mx-auto" />
            <h2 className="text-xl font-bold mt-4"ß>Customer Management</h2>
            <p className="mt-2">Maintain a database of your customers and their preferences.</p>
          </div>
        </div>
      </section>

      <section className="how-it-helps p-10 bg-gray-100">
        <div className="container mx-auto">
          <h2 id="help" className="text-3xl font-bold mb-4">How Slot In Helps</h2>
          <p className="text-xl">Slot In provides a streamlined solution to manage your business efficiently. With our platform, you can:</p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Reduce no-shows with automated reminders</li>
            <li>Increase customer satisfaction with easy booking</li>
            <li>Save time managing your schedule</li>
            <li>Access your calendar from anywhere</li>
            <li>Get insights into your business performance</li>
          </ul>
        </div>
      </section>

      <section className="how-it-works p-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <div className="steps grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="step text-center">
              <img src={images.register} alt="Register" className="mx-auto" />
              <h3 className="text-xl font-semibold pt-6">Register</h3>
              <p className="mt-2">Create an account and set up your profile.</p>
            </div>
            <div className="step text-center">
              <img src={images.list_service} alt="List Services" style={{ height: '425px', width: '450px' }} className="mx-auto" />
              <h3 className="text-xl font-semibold pt-6">List Services</h3>
              <p className="mt-2">Detail the services you offer for easy booking.</p>
            </div>
            <div className="step text-center">
              <img src={images.manage_booking} alt="Manage Bookings" className="mx-auto" />
              <h3 className="text-xl font-semibold pt-6">Manage Bookings</h3>
              <p className="mt-2">Keep track of all appointments and manage your calendar.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial p-10 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">What Our Providers Say</h2>
          <div className="testimonial-content space-y-6">
            <blockquote className="text-center">
              <p className="text-xl">"Slot In has transformed the way we manage our bookings. It's so easy to use!"</p>
              <footer className="mt-2">— Jane Doe, Salon Owner</footer>
            </blockquote>
            <blockquote className="text-center">
              <p className="text-xl">"With Slot In, we have seen a significant improvement in customer satisfaction."</p>
              <footer className="mt-2">— John Smith, Physiotherapist</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ListYourBusiness


