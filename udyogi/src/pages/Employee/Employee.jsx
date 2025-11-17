import React from "react";
import "./Employee.css";
import { TrendingUp, Briefcase, DollarSign, Clock, Star, HelpCircle, FileText, Shield } from "lucide-react";
import NavBar from "../../Components/NavBar";
import { Link } from "react-router-dom";

const Employee = ({
  name = "John Doe",
  todayEarnings = 450,
  todayJobs = 3,
  totalEarnings = 12500,
  totalJobs = 180,
  avgRating = 4.7,
  nextGoal = 15000,
}) => {
  const progress = Math.min((totalEarnings / nextGoal) * 100, 100);

  return (
    <>
      <NavBar />
      <section className="employee-overview">
        <div className="overview-header">
          <h1 className="welcome-text">Welcome back, {name} 👋</h1>
          <p className="sub-text">Here's your work summary and progress</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card highlight">
            <div className="icon-wrapper">
              <DollarSign size={24} />
            </div>
            <div className="stat-content">
              <h2>₹{todayEarnings}</h2>
              <p>Earned Today</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="icon-wrapper">
              <Briefcase size={24} />
            </div>
            <div className="stat-content">
              <h2>{todayJobs}</h2>
              <p>Jobs Completed Today</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="icon-wrapper">
              <TrendingUp size={24} />
            </div>
            <div className="stat-content">
              <h2>₹{totalEarnings.toLocaleString()}</h2>
              <p>Total Earnings</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="icon-wrapper">
              <Clock size={24} />
            </div>
            <div className="stat-content">
              <h2>{totalJobs}</h2>
              <p>Total Jobs Done</p>
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="progress-section">
          <div className="progress-header">
            <h3>Next Reward Milestone</h3>
            <span>₹{nextGoal.toLocaleString()}</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="progress-text">
            You’ve reached <strong>{progress.toFixed(1)}%</strong> of your next milestone!
          </p>
        </div>

        {/* Motivation */}
        <div className="motivation-box">
          <p>
            <Star size={18} color="#FACC15" style={{ marginRight: "5px" }} />
            Great work! Your average rating is <strong>{avgRating}/5</strong>.
            Keep pushing forward to unlock your next reward!
          </p>
        </div>
      </section>

      {/* ---------------------- SUPPORT & INFO SECTIONS ---------------------- */}
      <section className="support-section">
        <h2>🛠️ Help & Support</h2>
        <div className="support-options">
          <Link to="/support/faqs" className="support-card">
            <HelpCircle size={24} />
            <h3>FAQs</h3>
            <p>Common questions and quick answers.</p>
          </Link>

          <Link to="/support/contact" className="support-card">
            <HelpCircle size={24} />
            <h3>Contact Support</h3>
            <p>Reach out to our support team for help.</p>
          </Link>

          <Link to="/support/report" className="support-card">
            <HelpCircle size={24} />
            <h3>Report an Issue</h3>
            <p>Found a bug or issue? Let us know.</p>
          </Link>
        </div>
      </section>

      <section className="privacy-section">
        <h2>📜 Privacy & Terms</h2>
        <div className="privacy-card">
          <FileText size={24} />
          <p>
            Review our <Link to="/privacy-policy">Privacy Policy</Link> and{" "}
            <Link to="/terms-of-service">Terms of Service</Link> to learn how we
            handle your data and responsibilities as a user.
          </p>
        </div>
      </section>

      <section className="verification-section">
        <h2>✅ Verification</h2>
        <div className="verification-card">
          <Shield size={24} />
          <p>
            Verify your ID or upload necessary documents to boost your profile
            trust and get access to more job opportunities.
          </p>
          <Link to="/verification">
            <button className="verify-btn">Start Verification</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Employee;
