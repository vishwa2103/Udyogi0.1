import React, { useState, useEffect, useRef } from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

const translations = {
  EN: {
    hero_title: "UDYOGI",
    hero_subtitle: "Empowering Work. Connecting Talent.",
    hero_text:
      "Experience fast & easy access to global opportunities and reliable talent.",
    worker_title: "WORKER: Find Jobs",
    worker_desc:
      "Access verified job postings, manage your contracts digitally, and build your professional reputation globally.",
    worker_btn: "I am looking for work",
    seeker_title: "SEEKER: Find Talent",
    seeker_desc:
      "Post requirements, filter pre-vetted professionals, and manage project milestones transparently.",
    seeker_btn: "I need to hire",
  },
  HI: {
    hero_title: "उद्योगी",
    hero_subtitle: "काम को सशक्त बनाना। प्रतिभा को जोड़ना।",
    hero_text:
      "वैश्विक अवसरों और विश्वसनीय प्रतिभा तक तेज और आसान पहुंच का अनुभव करें।",
    worker_title: "कर्मचारी: नौकरियाँ खोजें",
    worker_desc:
      "सत्यापित नौकरी पोस्टिंग तक पहुँचें, अपने अनुबंधों को डिजिटल रूप से प्रबंधित करें, और वैश्विक स्तर पर अपनी पेशेवर प्रतिष्ठा बनाएं।",
    worker_btn: "मैं काम की तलाश में हूँ",
    seeker_title: "नियोक्ता: प्रतिभा खोजें",
    seeker_desc:
      "आवश्यकताओं को पोस्ट करें, पूर्व-जाँचे गए पेशेवरों को फ़िल्टर करें, और पारदर्शी रूप से परियोजना प्रबंधन करें।",
    seeker_btn: "मुझे भर्ती करनी है",
  },
};

const Welcome = () => {
  const [lang, setLang] = useState("EN");
  const [tagline, setTagline] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const typingTimeoutRef = useRef(null);

  const heroText = translations[lang].hero_text;

  // Typing effect for hero tagline
  useEffect(() => {
    let i = 0;
    const speed = 40;

    function typeWriter() {
      if (i < heroText.length) {
        setTagline(heroText.substring(0, i + 1));
        i++;
        typingTimeoutRef.current = setTimeout(typeWriter, speed);
      }
    }

    typeWriter();
    return () => clearTimeout(typingTimeoutRef.current);
  }, [lang, heroText]);

  // Fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="welcome-container">
      {/* Navbar */}
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
            {/* Language Dropdown */}
            <div className="language-dropdown">
              <button
                id="language-toggle-button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                {lang} ▼
              </button>
              {isMenuOpen && (
                <ul className="dropdown-menu">
                  {Object.keys(translations).map((code) => (
                    <li key={code} onClick={() => { setLang(code); setIsMenuOpen(false); }}>
                      {code}
                    </li>
                  ))}
                </ul>
              )}
            </div>

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

      {/* Hero Section */}
      <main className="hero fade-in-up">
        <div className="hero-content">
          <h1 className="hero-title">{translations[lang].hero_title}</h1>
          <h2 className="hero-subtitle">{translations[lang].hero_subtitle}</h2>
          <p className="hero-text">{tagline}</p>

          <div className="card-grid fade-in-up">
            <div className="card">
              <h3 className="card-title">{translations[lang].worker_title}</h3>
              <p className="card-text">{translations[lang].worker_desc}</p>
              <button className="primary-btn">{translations[lang].worker_btn}</button>
            </div>
            <div className="card">
              <h3 className="card-title">{translations[lang].seeker_title}</h3>
              <p className="card-text">{translations[lang].seeker_desc}</p>
              <button className="accent-btn">{translations[lang].seeker_btn}</button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} UDYOGI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Welcome;
