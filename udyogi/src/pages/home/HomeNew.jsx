import React from "react";
import "./HomeNew.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

/* Inline SVG illustration component for the hero (keeps no external asset requirement) */
const HeroIllustration = () => (
  <svg className="hero-svg" viewBox="0 0 800 520" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="g1" x1="0" x2="1">
        <stop offset="0" stopColor="#ffffff" stopOpacity="0.06"/>
        <stop offset="1" stopColor="#ffffff" stopOpacity="0"/>
      </linearGradient>
    </defs>

    <rect x="0" y="0" width="800" height="520" rx="24" fill="url(#g1)"/>

    {/* decorative circles */}
    <circle cx="620" cy="120" r="80" fill="#FACC15" opacity="0.12"/>
    <circle cx="160" cy="420" r="120" fill="#1E40AF" opacity="0.08"/>

    {/* stylized connection nodes */}
    <g fill="#fff" opacity="0.95">
      <rect x="120" y="120" width="160" height="110" rx="14" fill="#ffffff"/>
      <rect x="320" y="80" width="220" height="140" rx="14" fill="#ffffff"/>
      <rect x="210" y="300" width="300" height="120" rx="14" fill="#ffffff"/>
      {/* small bridge arc */}
      <path d="M80 340 C200 240, 420 240, 540 340" stroke="#1E40AF" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
  </svg>
);

const JobCard = ({ title, company, location, type }) => (
  <article className="job-card" role="article" aria-label={`${title} at ${company}`}>
    <h3>{title}</h3>
    <p className="company">{company}</p>
    <p className="meta">{location} • {type}</p>
    <div className="job-actions">
      <button className="btn apply">Apply</button>
      <button className="btn outline">Save</button>
    </div>
  </article>
);

const Home = () => {
  const jobs = [
    {title: "Frontend Developer", company: "TechNova Pvt Ltd", location: "Remote", type: "Full-time"},
    {title: "Backend Engineer", company: "CoreStack", location: "Bengaluru, India", type: "Full-time"},
    {title: "Product Designer", company: "PixelWorks", location: "Remote", type: "Contract"},
    {title: "Data Analyst", company: "Insight Labs", location: "Hyderabad, India", type: "Full-time"},
    {title: "DevOps Engineer", company: "CloudWave", location: "Remote", type: "Full-time"},
    {title: "Talent Acquisition", company: "HireRight", location: "Mumbai, India", type: "Part-time"},
  ];

  return (
    <div className="page">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <h1>Your Bridge to a Brighter Career</h1>
            <p className="lead">
              Find curated opportunities, connect directly with verified employers, and build the career you deserve.
            </p>

            <div className="hero-ctas">
              <a href="#jobs" className="btn primary">Explore Jobs</a>
              <a href="#features" className="btn ghost">Hire Talent</a>
            </div>

            <ul className="hero-features" aria-hidden>
              <li><strong>AI Matching</strong> • jobs that actually fit you</li>
              <li><strong>Verified Employers</strong> • safer hiring & applying</li>
              <li><strong>Career Tools</strong> • resume, mock interviews, analytics</li>
            </ul>
          </div>

          <div className="hero-right" aria-hidden>
            <div className="hero-card">
              <HeroIllustration />
            </div>
          </div>
        </section>

        {/* ABOUT / VISION */}
        <section className="about" id="about">
          <div className="about-grid">
            <div className="about-text">
              <h2>Empowering connections that matter</h2>
              <p>Udyogi combines data-driven recommendations, a trusted employer network, and practical career tools to help professionals and companies thrive—faster and with confidence.</p>
              <a className="btn subtle" href="#features">See How It Works</a>
            </div>

            <div className="about-visual" aria-hidden>
              {/* decorative illustration */}
              <div className="about-visual-box">
                <svg viewBox="0 0 200 140" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <rect x="8" y="18" width="84" height="52" rx="10" fill="#fff" stroke="#E6EEF8"/>
                  <rect x="108" y="6" width="84" height="70" rx="10" fill="#fff" stroke="#E6EEF8"/>
                  <path d="M0 110 C60 70, 140 70, 200 110" stroke="#1E40AF" strokeWidth="4" fill="none"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="features" id="features">
          <h2>Why people choose Udyogi</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🎯</div>
              <h3>Smart Job Matching</h3>
              <p>AI recommendations that match your skills and ambitions, reducing application noise.</p>
            </div>

            <div className="feature">
              <div className="feature-icon">🛡️</div>
              <h3>Verified Employers</h3>
              <p>Work only with vetted organizations — we prioritize trust and safety.</p>
            </div>

            <div className="feature">
              <div className="feature-icon">📈</div>
              <h3>Career Growth Tools</h3>
              <p>Resume builder, interview practice, and analytics to track progress.</p>
            </div>

            <div className="feature">
              <div className="feature-icon">💬</div>
              <h3>Direct Communication</h3>
              <p>Message employers in-platform to speed up hiring conversations.</p>
            </div>
          </div>
        </section>

        {/* JOB EXPLORER */}
        <section className="jobs" id="jobs">
          <div className="jobs-head">
            <h2>Discover your next opportunity</h2>
            <p className="muted">Search jobs by title, company or location</p>
            <div className="search-row" aria-hidden>
              <input className="search" placeholder="e.g., Frontend Developer, Remote" />
              <button className="btn primary">Search</button>
            </div>
          </div>

          <div className="jobs-grid" role="list">
            {jobs.map((j, idx) => <JobCard key={idx} {...j} />)}
          </div>

          <div className="jobs-more">
            <button className="btn outline">See More Jobs</button>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="testimonials" id="testimonials" aria-label="Success stories">
          <h2>Success stories</h2>

          <div className="testimonial-grid">
            <blockquote className="testimonial-card">
              <p>“Udyogi matched me to my dream role and the interview process was painless. Highly recommend!”</p>
              <cite>— Aditi Sharma, UI Designer</cite>
            </blockquote>

            <blockquote className="testimonial-card">
              <p>“We reduced time-to-hire by 40% using Udyogi’s candidate insights and direct messaging.”</p>
              <cite>— Rajesh Patel, HR, TechCore</cite>
            </blockquote>

            <div className="impact">
              <div className="stat">
                <strong>10k+</strong>
                <span>professionals</span>
              </div>
              <div className="stat">
                <strong>2k+</strong>
                <span>companies</span>
              </div>
              <div className="stat">
                <strong>95%</strong>
                <span>satisfaction</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-strong" aria-hidden>
          <div className="cta-inner">
            <h2>Ready to build your career?</h2>
            <p>Join thousands already bridging to better opportunities with Udyogi.</p>
            <div className="cta-actions">
              <a href="#jobs" className="btn primary large">Get Started</a>
              <a href="#features" className="btn ghost large">Learn More</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
