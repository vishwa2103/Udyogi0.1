import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Udyogi – The WorkBridge</h1>
          <p>
            Empowering professionals and employers to connect effortlessly through AI-powered job matching.
          </p>
          <div className="hero-buttons">
            <button className="btn primary">Find Jobs</button>
            <button className="btn secondary">Hire Talent</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/hero-illustration.png" alt="WorkBridge" />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step-card">
            <h3>1. Create Your Profile</h3>
            <p>Showcase your skills, experience, and achievements in minutes.</p>
          </div>
          <div className="step-card">
            <h3>2. Get Matched</h3>
            <p>Let Udyogi’s AI find opportunities that fit your career goals.</p>
          </div>
          <div className="step-card">
            <h3>3. Connect & Apply</h3>
            <p>Engage with employers directly and get hired faster than ever.</p>
          </div>
        </div>
      </section>

      {/* FEATURED JOBS */}
      <section className="featured-jobs">
        <h2>Featured Jobs</h2>
        <div className="job-list">
          {[1,2,3,4,5,6].map((job) => (
            <div key={job} className="job-card">
              <h3>Frontend Developer</h3>
              <p className="company">TechNova Pvt Ltd</p>
              <p>Remote • Full-Time</p>
              <button className="btn apply">Apply Now</button>
            </div>
          ))}
        </div>
        <button className="btn more">See More Jobs</button>
      </section>

      {/* WHY US */}
      <section className="why-us">
        <h2>Why Choose Udyogi?</h2>
        <div className="features">
          <div className="feature-card">
            <h3>🎯 Smart AI Matching</h3>
            <p>Get instantly matched with roles that align with your unique skills and goals.</p>
          </div>
          <div className="feature-card">
            <h3>🛡️ Verified Employers</h3>
            <p>Work only with trusted, verified organizations across industries.</p>
          </div>
          <div className="feature-card">
            <h3>💬 Real-time Chat</h3>
            <p>Connect seamlessly with employers to discuss opportunities directly.</p>
          </div>
          <div className="feature-card">
            <h3>📈 Application Tracking</h3>
            <p>Stay updated at every stage of your application journey.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>Success Stories</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>“Udyogi helped me land a dream remote job in less than 3 weeks!”</p>
            <h4>- Aditi Sharma, UI Designer</h4>
          </div>
          <div className="testimonial">
            <p>“Our hiring process became 2x faster and more efficient!”</p>
            <h4>- Rajesh Patel, HR at TechCore</h4>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Build Your Career?</h2>
        <p>Join thousands of professionals who trust Udyogi to advance their future.</p>
        <button className="btn cta-btn">Get Started</button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div className="about">
            <h3>Udyogi – The WorkBridge</h3>
            <p>Empowering job seekers and employers through innovation and trust.</p>
          </div>
          <div className="links">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Jobs</li>
              <li>Employers</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="socials">
            <h4>Follow Us</h4>
            <p>LinkedIn | Twitter | Instagram</p>
          </div>
        </div>
        <div className="copyright">
          <p>© 2025 Udyogi – The WorkBridge. All rights reserved.</p>
        </div>
      </footer>
    </div>
      </>
  );

};

export default Home;
