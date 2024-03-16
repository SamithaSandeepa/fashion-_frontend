import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css'; // Make sure the CSS file is in the same directory
import './AdminDashboard.css'; 
export const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="dashboard-buttons">
        <Link to="/sentiment-analysis" className="dashboard-link">Customer Sentiment Analysis</Link>
        <Link to="/fashion-trend-analysis" className="dashboard-link">Fashion Trend Analysis</Link>
      </div>
    </div>
  );
};

