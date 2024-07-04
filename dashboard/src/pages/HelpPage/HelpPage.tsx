import React from 'react';
import './HelpPage.css'

const HelpPage = () => {
  return (
    <div className="help-page">
      <p>Welcome to our application! Below are some common questions and answers:</p>
      <div className="faq">
        <div className="faq-item">
          <h3>How do I book an appointment?</h3>
          <p>To book an appointment, navigate to the <strong>Appointment Booking</strong> page and fill out the appointment form.</p>
        </div>
        <div className="faq-item">
          <h3>What should I do if I encounter an issue?</h3>
          <p>If you encounter any issues or have questions, please contact our support team at <strong>support@Slotin.com</strong>.</p>
        </div>
        <div className="faq-item">
          <h3>Where can I find my upcoming appointments?</h3>
          <p>Your upcoming appointments can be viewed on the <strong>Dashboard</strong> page once you're logged in.</p>
        </div>
        <div className="faq-item">
          <h3>How can I update my profile information?</h3>
          <p>To update your profile information, go to the <strong>Settings</strong> page and click on the <strong>Edit Profile</strong> button.</p>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
