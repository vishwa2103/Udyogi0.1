import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-container">
        {/* Brand Info */}
        <div className="footer-section">
          <h2 className="footer-logo">Udyogi<span>.</span></h2>
          <p className="footer-description">
            Bridging the gap between skilled workers and employers.  
            Udyogi helps you find work opportunities that match your skills, location,  
            and interests — empowering your career growth.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/employee">Employee</a></li>
            <li><a href="/employer">Employer</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Use</a></li>
            <li><a href="/faq">Help Center</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:support@udyogi.in">support@udyogi.in</a></p>
          <p>Phone: +91 98765 43210</p>
          <p>Hyderabad, India</p>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Udyogi — The WorkBridge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
