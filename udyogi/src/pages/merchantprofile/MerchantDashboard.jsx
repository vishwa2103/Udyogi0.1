import React, { useState } from "react";
import "./MerchantDashboard.css";

const MerchantDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`merchant-dashboard ${darkMode ? "dark-mode" : ""}`}>
      {/* Header */}
      <header className="dashboard-header">
        <h1 className="dashboard-title">Merchant Dashboard</h1>
        <div className="header-right">
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? "🌙 Dark" : "☀️ Light"}
          </button>
          <div className="profile">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Merchant Profile"
              className="profile-pic"
            />
            <span className="profile-name">John Merchant</span>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-card">
          <div className="icon">📊</div>
          <h3>Job Post Analytics</h3>
          <p>Views, Engagement, Applications</p>
        </div>

        <div className="stat-card">
          <div className="icon">⭐</div>
          <h3>Profile Rating</h3>
          <p>4.8 / 5 (Based on 126 Reviews)</p>
        </div>

        <div className="stat-card">
          <div className="icon">💼</div>
          <h3>Total Jobs Posted</h3>
          <p>28 Active Jobs</p>
        </div>

        <div className="stat-card">
          <div className="icon">💰</div>
          <h3>Total Hires</h3>
          <p>102 Workers Hired</p>
        </div>
      </section>

      {/* Job Management */}
      <section className="job-management">
        <h2>Job Post Management</h2>
        <div className="job-actions">
          <button className="action-btn edit">✏️ Edit</button>
          <button className="action-btn delete">🗑️ Delete</button>
          <button className="action-btn view">👁️ View Applicants</button>
          <button className="action-btn view">📥 Shortlist</button>
          <button className="action-btn view">🔒 Hide/Show Job</button>
        </div>
      </section>

      {/* Notifications */}
      <section className="notifications">
        <h2>🔔 Notifications</h2>
        <ul>
          <li>New job application received for "Electrician Needed".</li>
          <li>Your merchant verification was approved!</li>
          <li>Feedback received from Worker ID #2531.</li>
        </ul>
      </section>

      {/* Extras: Earnings & Support */}
      <section className="extras">
        <div className="earnings">
          <h2>💵 Earnings Overview</h2>
          <p>Track your total spending and profits per project.</p>
          <button className="cta-btn">View Detailed Report</button>
        </div>

        <div className="support">
          <h2>🛠️ Support</h2>
          <p>Need help? Contact our merchant support team for assistance.</p>
          <button className="cta-btn">Contact Support</button>
        </div>
      </section>
    </div>
  );
};

export default MerchantDashboard;
