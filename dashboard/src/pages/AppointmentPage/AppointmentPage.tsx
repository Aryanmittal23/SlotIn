import React, { useState } from 'react';
import AppointmentForm from '../../components/AppointmentForm/AppointmentForm';
import './AppointmentPage.css'; // Import custom CSS for styling

const AppointmentPage = () => {
  const [appointment, setAppointment] = useState(null);

  const handleFormSubmit = (formData) => {
    setAppointment(formData);
  };

  return (
    <div className="appointment-page">
      
      <AppointmentForm onSubmit={handleFormSubmit} />
      {appointment && (
        <div className="appointment-details">
          <h2>Appointment Details</h2>
          <p><span>Date:</span> {appointment.date}</p>
          <p><span>Time:</span> {appointment.time}</p>
          <p><span>Customer Name:</span> {appointment.customerName}</p>
          <p><span>Customer Email:</span> {appointment.customerEmail}</p>
          <p><span>Notes:</span> {appointment.notes}</p>
        </div>
      )}
    </div>
  );
};

export default AppointmentPage;
