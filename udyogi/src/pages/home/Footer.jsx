import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-grid">
        <div className="footer-about">
          <h3>Udyogi — The WorkBridge</h3>
          <p>Empowering professionals and employers to connect through trust and smart technology.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#jobs">Jobs</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#testimonials">Stories</a></li>
            <li><a href="#privacy">Privacy</a></li>
          </ul>
        </div>

        <div className="footer-follow">
          <h4>Follow</h4>
          <p className="socials">LinkedIn &nbsp; • &nbsp; Twitter &nbsp; • &nbsp; Instagram</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Udyogi — The WorkBridge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
