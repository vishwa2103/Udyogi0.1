import React from "react";
import "./Welcome.css";
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="welcome-container">
      <nav className="navbar">
        <div className="nav-inner">
          <div className="logo-container">
            <Link href="#" className="logo">
              <img src={"logo1.png"} alt="Logo" className="logo-img" />
              <span className="logo-text">UDYOGI</span>
            </Link>
          </div>

          <div className="nav-links">
            <Link href="/home">Home</Link>
            <Link href="#">Jobs</Link>
            <Link href="#">How It Works</Link>
          </div>

          <div className="nav-actions">
            <Link href="/login" className="signin-btn">Login In / Register</Link>
            <button className="profile-btn">
              <svg
                className="profile-icon"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <main className="hero">
        <div className="hero-content">
          <h1 className="hero-title">UDYOGI</h1>
          <h2 className="hero-subtitle">Empowering Work. Connecting Talent.</h2>
          <p className="hero-text">
            Experience fast & easy access to global opportunities and reliable talent.
          </p>

          <div className="card-grid">
            <div className="card">
              <h3 className="card-title">WORKER: Find Jobs</h3>
              <p className="card-text">
                Access verified job postings, manage your contracts digitally, and build your professional reputation globally.
              </p>
              <button className="primary-btn">I am looking for work</button>
            </div>
            <div className="card">
              <h3 className="card-title">SEEKER: Find Talent</h3>
              <p className="card-text">
                Post requirements, filter pre-vetted professionals, and manage project milestones transparently.
              </p>
              <button className="accent-btn">I need to hire</button>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} UDYOGI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Welcome;
