import React from "react";

const Navbar = () => {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">
          <div className="logo-mark" aria-hidden>
            {/* simple bridge-mark using svg */}
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="6" fill="#fff" />
              <path d="M3 15c3-3 6-6 9-6s6 3 9 6" stroke="#1E40AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="6" cy="16.5" r="1.2" fill="#FACC15"/>
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-title">Udyogi</span>
            <span className="brand-sub">The WorkBridge</span>
          </div>
        </div>

        <nav className="nav-links" aria-label="Primary">
          <a href="#jobs">Jobs</a>
          <a href="#features">Features</a>
          <a href="#testimonials">Stories</a>
          <a href="#contact">Contact</a>
          <button className="btn nav-cta">Get Started</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
