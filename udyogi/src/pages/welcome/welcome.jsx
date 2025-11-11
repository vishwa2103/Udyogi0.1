import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome-container">
      {/* =============================== NAVBAR =============================== */}
      <nav className="navbar">
        <div className="nav-inner">
          <div className="logo-container">
            <Link to="#" className="logo">
              <img src={"logo1.png"} alt="Logo" className="logo-img" />
              <span className="logo-text">UDYOGI</span>
            </Link>
          </div>

          <div className="nav-links">
            <Link to="/home">Home</Link>
            <Link to="#">Jobs</Link>
            <Link to="#">How It Works</Link>
          </div>
          <div className="nav-actions">
            <Link to="/login" className="signin-btn">
              Login / Register
            </Link>
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

      {/* =============================== HERO =============================== */}
      <main className="hero">
        <div className="hero-content">
          <h1 className="hero-title">UDYOGI</h1>
          <h2 className="hero-subtitle">Empowering Work. Connecting Talent.</h2>
          <p className="hero-text">
            Experience fast & easy access to global opportunities and reliable
            talent.
          </p>

          <div className="card-grid">
            <div className="card">
              <h3 className="card-title">WORKER: Find Jobs</h3>
              <p className="card-text">
                Access verified job postings, manage your contracts digitally,
                and build your professional reputation globally.
              </p>
              <button className="primary-btn">I am looking for work</button>
            </div>
            <div className="card">
              <h3 className="card-title">SEEKER: Find Talent</h3>
              <p className="card-text">
                Post requirements, filter pre-vetted professionals, and manage
                project milestones transparently.
              </p>
              <button className="accent-btn">I need to hire</button>
            </div>
          </div>
        </div>
      </main>

      {/* =============================== WHY CHOOSE =============================== */}
      <section className="why-udyogi">
  <h2 className="section-title">Why Choose UDYOGI?</h2>
  <div className="features-grid">
    {/* Verified Opportunities */}
    <div className="feature-card">
      <div className="feature-icon">
        {/* Shield Check SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="#1E40AF">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5 2a9.97 9.97 0 01-5.58 8.94l-1.17.61a1 1 0 01-.9 0l-1.17-.61A9.97 9.97 0 015 12V7a2 2 0 011.17-1.79l5-2.5a1 1 0 01.9 0l5 2.5A2 2 0 0119 7v5z" />
        </svg>
      </div>
      <h3>Verified Opportunities</h3>
      <p>Every job and profile is verified to ensure authenticity and trust.</p>
    </div>

    {/* Secure Payments */}
    <div className="feature-card">
      <div className="feature-icon">
        {/* Lock Shield SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="#1E40AF">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.104 0 2 .896 2 2v1H10v-1c0-1.104.896-2 2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 10V8a6 6 0 1112 0v2m-9 3h6v5H9v-5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l7 3v6a10 10 0 01-7 9 10 10 0 01-7-9V5l7-3z" />
        </svg>
      </div>
      <h3>Secure Payments</h3>
      <p>Get paid safely and on time with our secure payment system.</p>
    </div>

    {/* Global Access */}
    <div className="feature-card">
      <div className="feature-icon">
        {/* Globe SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="#1E40AF">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 110 18 9 9 0 010-18z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.05 11h19.9M12 3c2.5 3 2.5 15 0 18M3.6 7.5h16.8M3.6 16.5h16.8" />
        </svg>
      </div>
      <h3>Global Access</h3>
      <p>Connect with clients and professionals across borders effortlessly.</p>
    </div>
  </div>
</section>


      {/* =============================== HOW IT WORKS =============================== */}
      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Create Your Profile</h3>
            <p>Sign up as a worker or seeker and set up your verified profile.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Connect & Collaborate</h3>
            <p>Browse through verified listings and connect instantly.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Work & Earn</h3>
            <p>
              Complete projects and get paid securely through UDYOGI’s trusted
              system.
            </p>
          </div>
        </div>
      </section>

      {/* =============================== TESTIMONIALS =============================== */}
      <section className="testimonials">
        <h2 className="section-title">What Our Users Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              “UDYOGI helped me find consistent work with verified clients. The
              process was smooth!”
            </p>
            <h4>– Ramesh, Electrician</h4>
          </div>
          <div className="testimonial-card">
            <p>
              “We hired skilled workers in less than a day. Reliable and
              transparent platform.”
            </p>
            <h4>– Sneha, Construction Manager</h4>
          </div>
        </div>
      </section>

      {/* =============================== CALL TO ACTION =============================== */}
      <section className="cta-section">
        <h2>Join UDYOGI Today!</h2>
        <p>
          Empower your career or business with a trusted network of professionals.
        </p>
        <div className="cta-buttons">
          <Link to="/register" className="primary-btn">
            Get Started
          </Link>
          <Link to="/about" className="accent-btn">
            Learn More
          </Link>
        </div>
      </section>

      {/* =============================== FOOTER =============================== */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} UDYOGI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Welcome;
