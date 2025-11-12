import React, { useState } from "react";
import "./Profile.css";
import {
  FiSettings,
  FiLogOut,
  FiPlusCircle,
  FiBriefcase,
  FiSun,
  FiMoon,
  FiUserCheck,
  FiStar,
  FiBell
} from "react-icons/fi";
import { FaWallet } from "react-icons/fa";  // Font Awesome


const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Open Button */}
      <button className="profile-open-btn" onClick={() => setIsOpen(true)}>
        Merchant Profile
      </button>

      {/* Backdrop */}
      <div
        className={`profile-backdrop ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide-out Panel */}
      <aside className={`profile-panel ${isOpen ? "is-open" : ""}`}>
        <header className="profile-header">
          <h2>Merchant Profile</h2>
          <button className="profile-close-btn" onClick={() => setIsOpen(false)}>
            ✕
          </button>
        </header>

        {/* Profile Content */}
        <div className="profile-body">
          <div className="profile-user">
            <img
              src="https://placehold.co/96x96/1E40AF/FACC15?text=M"
              alt="Merchant Logo"
              className="profile-user__image"
            />
            <h3 className="profile-name">ABC Constructions</h3>
            <p className="profile-email">contact@abcconstructions.com</p>

            {/* NEW: Verified Badge */}
            <span className="profile-verified">
              <FiUserCheck /> Verified Merchant
            </span>

            {/* NEW: Analytics */}
            <div className="profile-stats">
              <div>
                <strong>4.5 ★</strong>
                <span>Rating</span>
              </div>
              <div>
                <strong>124</strong>
                <span>Jobs Done</span>
              </div>
              <div>
                <strong>41%</strong>
                <span>Repeat Hires</span>
              </div>
            </div>
          </div>

          {/* NEW: Quick Actions */}
          <h4 className="section-title">Quick Actions</h4>
          <ul className="profile-nav">
            <li>
              <button className="profile-nav-item primary">
                <FiPlusCircle /> Post Job
              </button>
            </li>
            <li>
              <button className="profile-nav-item">
                <FiBriefcase /> Manage Jobs
              </button>
            </li>
            <li>
              <button className="profile-nav-item">
                <FaWallet /> Wallet & Billing
              </button>
            </li>
            <li>
              <button className="profile-nav-item">
                <FiBell /> Notifications
              </button>
            </li>
          </ul>

          {/* NEW: Recently Hired Workers */}
          <h4 className="section-title">Recently Hired</h4>
          <div className="recent-workers">
            {["Ravi", "Amit", "Farhan"].map((name, index) => (
              <div className="worker-card" key={index}>
                <img
                  src={`https://placehold.co/48x48?text=${name.charAt(0)}`}
                  alt={name}
                />
                <p>{name}</p>
                <button className="rehire-btn">Hire Again</button>
              </div>
            ))}
          </div>

          <hr className="profile-divider" />

          {/* Logout */}
          <button className="profile-logout">
            <FiLogOut /> Logout
          </button>
        </div>

        {/* Footer - Theme Toggle */}
        <footer className="profile-footer">
          <span>Theme</span>
          <button
            className="profile-theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </footer>
      </aside>
    </div>
  );
};

export default Profile;
