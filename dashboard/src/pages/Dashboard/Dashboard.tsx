import React from 'react';
import './Dashboard.css';

const DashboardOverview = () => {
  // Mock dashboard data
  const dashboardData = {
    totalAppointments: 120,
    upcomingAppointments: 10,
    totalCustomers: 85,
    earnings: 3500
  };

  return (
    <div className="dashboard-overview">
      <h2>Dashboard Overview</h2>
      <div className="stats">
        <div className="stat">
          <h3>Total Appointments</h3>
          <p>{dashboardData.totalAppointments}</p>
        </div>
        <div className="stat">
          <h3>Upcoming Appointments</h3>
          <p>{dashboardData.upcomingAppointments}</p>
        </div>
        <div className="stat">
          <h3>Total Customers</h3>
          <p>{dashboardData.totalCustomers}</p>
        </div>
        <div className="stat">
          <h3>Earnings</h3>
          <p>${dashboardData.earnings}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
