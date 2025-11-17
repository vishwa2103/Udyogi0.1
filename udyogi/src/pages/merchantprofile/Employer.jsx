import React from "react";
import "./MerchantDashboard.css";
import NavBar from "./../home/Navbar";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";


const Employer = () => {
  return (
    <div>
      <NavBar />

      <section className="stats-section">
        <div className="stat-card">
          <div className="icon">📊</div>
          <h3>
            <Link to="/employer/job-analytics" className="link-text">
              Job Post Analytics
            </Link>
          </h3>
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

      <section className="job-management">
        <h2>Job Post Management</h2>
        <div className="job-actions">
          <Link to="/employer/EditJob">
            <button className="action-btn edit">✏️ Edit</button>
          </Link>

          <Link to="/employer/DeleteJob">
            <button className="action-btn delete">🗑️ Delete</button>
          </Link>

          <Link to="/employer/ViewApplicants">
            <button className="action-btn view">👁️ View Applicants</button>
          </Link>

          <Link to="/employer/Shortlist">
            <button className="action-btn view">📥 Shortlist</button>
          </Link>

          <Link to="/employer/HideShowJob">
            <button className="action-btn view">🔒 Hide/Show Job</button>
          </Link>
        </div>
      </section>

      <section className="notifications">
        <h2>🔔 Notifications</h2>
        <ul>
          <li>New job application received for "Electrician Needed".</li>
          <li>Your merchant verification was approved!</li>
          <li>Feedback received from Worker ID #2531.</li>
        </ul>
      </section>

      <section className="extras">
        <div className="earnings">
          <h2>💵 Earnings Overview</h2>
          <p>Track your total spending and profits per project.</p>
          <Link to="/employer/earnings">
            <button className="cta-btn">View Detailed Report</button>
          </Link>
        </div>

        <div className="support">
          <h2>🛠️ Support</h2>
          <p>Need help? Contact our merchant support team for assistance.</p>
          <Link to="/support">
            <button className="cta-btn">Contact Support</button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
      
  );
};

export default Employer;
