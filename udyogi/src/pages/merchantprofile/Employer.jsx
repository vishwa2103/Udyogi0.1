import React from "react";
import "./MerchantDashboard.css";
import NavBar from "../../Components/NavBar";
import { Link } from "react-router-dom";

const Employer = () => {
  return (
    <div>
      <NavBar />

      {/* ================== STATS SECTION ================== */}
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

      {/* ================== JOB MANAGEMENT ================== */}
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

      {/* ================== NOTIFICATIONS ================== */}
      <section className="notifications">
        <h2>🔔 Notifications</h2>
        <ul>
          <li>New job application received for "Electrician Needed".</li>
          <li>Your merchant verification was approved!</li>
          <li>Feedback received from Worker ID #2531.</li>
        </ul>
      </section>

      {/* ================== EARNINGS & SUPPORT ================== */}
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

      {/* ================== NEW SECTIONS ================== */}
      <section className="additional-section">
        <h2>🆘 Help & Support</h2>
        <p>Find answers to common questions or report an issue.</p>
        <div className="help-links">
          <Link to="/support/faqs" className="help-link">📖 FAQs</Link>
          <Link to="/support/contact" className="help-link">📩 Contact Support</Link>
          <Link to="/support/report" className="help-link">🚨 Report an Issue</Link>
        </div>
      </section>

      <section className="additional-section">
        <h2>⚖️ Privacy & Terms</h2>
        <p>Review our policies, terms, and data usage information.</p>
        <div className="help-links">
          <Link to="/policies/privacy" className="help-link">🔒 Privacy Policy</Link>
          <Link to="/policies/terms" className="help-link">📜 Terms & Conditions</Link>
        </div>
      </section>

      <section className="additional-section">
        <h2>✅ Verification</h2>
        <p>Verify your business identity and build trust with job seekers.</p>
        <div className="help-links">
          <Link to="/employer/verification" className="help-link">🪪 Upload ID / Documents</Link>
          <Link to="/employer/verification-status" className="help-link">📄 Check Verification Status</Link>
        </div>
      </section>
    </div>
  );
};

export default Employer;
