import React from 'react';
import './Dashboard.css'
const DashboardOverview = () => {
  return (
    <div className="dashboard-overview">
      <h2>Dashboard Overview</h2>
      <div className="stats">
        <div className="stat">
          <h3>Total Appointments</h3>
          <p>120</p>
        </div>
        <div className="stat">
          <h3>Upcoming Appointments</h3>
          <p>10</p>
        </div>
        <div className="stat">
          <h3>Total Customers</h3>
          <p>85</p>
        </div>
        <div className="stat">
          <h3>Earnings</h3>
          <p>$3,500</p>
        </div>
      </div>
      
    </div>
  );
};

export default DashboardOverview;
