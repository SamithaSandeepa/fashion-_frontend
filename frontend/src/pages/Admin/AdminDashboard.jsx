import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css'; // Make sure the CSS file is in the same directory
import './AdminDashboard.css'; 
// export const AdminDashboard = () => {
//   return (
//     <div className="admin-dashboard">
//       <h2>Admin Dashboard</h2>
//       <div className="dashboard-buttons">
//         <Link to="/sentiment-analysis" className="dashboard-link">Customer Sentiment Analysis</Link>
//         <Link to="/fashion-trend-analysis" className="dashboard-link">Fashion Trend Analysis</Link>
//       </div>
//     </div>
//   );
// };
export const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <br></br>
      <br></br>
      <div className="dashboard-buttons">
        <Link to="/sentiment-analysis" className="dashboard-link" id="sentiment-analysis-btn">
          <span>Customer Sentiments Analysis</span>
        </Link>
        <Link to="/fashion-trend-analysis" className="dashboard-link" id="fashion-trend-analysis-btn">
          <span>Fashion Trends Analysis</span>
        </Link>
      </div>
    </div>
  );
};
