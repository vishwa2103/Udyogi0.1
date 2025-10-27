import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="welcome-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="#" className="navbar-brand">
            UDYOGI
          </Link>

          <div className="navbar-links">
            <Link to="#">Home</Link>
            <Link to="#">Jobs</Link>
            <Link to="#">How It Works</Link>
          </div>

          <button className="btn btn-accent">Sign In / Register</button>

          <button className="menu-toggle" onClick={toggleMobileMenu}>
            ☰
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <Link to="/home">Home</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/">How It Works</Link>
            <Link to="#" className="mobile-signin">
              Sign In / Register
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>UDYOGI</h1>
        <h2>India’s #1 Platform for Skilled Work & Verified Workers</h2>
        <p>Access opportunities and top talent with speed, safety, and trust.</p>
      </section>

      {/* Cards Section */}
      <section className="cards-section">
        <div className="card">
          <h3>WORKER: Find Jobs</h3>
          <p>Explore verified jobs, digital contracts, and secure payments.</p>
          <button className="btn btn-primary">I am looking for work</button>
        </div>

        <div className="card">
          <h3>SEEKER: Find Talent</h3>
          <p>
            Post your requirements, connect with verified professionals, and
            manage projects.
          </p>
          <button className="btn btn-accent">I need to hire</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h3>UDYOGI</h3>
            <p>Connecting trusted talent with verified opportunities.</p>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="#">Find Jobs</Link></li>
              <li><Link to="#">Post Work</Link></li>
              <li><Link to="#">Terms</Link></li>
              <li><Link to="#">Privacy</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <ul>
              <li>support@udyogi.com</li>
              <li>+1 (555) 123-4567</li>
              <li>World Tower, GA 30303</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025 UDYOGI Platform. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Welcome;