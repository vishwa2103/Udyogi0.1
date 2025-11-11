// src/pages/HowItWorks.jsx
import React from "react";
import "./Howisitwork.css";
import { Briefcase, Users, Bell, Search, MapPin } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <Users size={32} color="#1e40af" />,
    title: "1️⃣ Create Your Profile",
    text: "Whether you're a worker or an employer, start by creating your profile with simple details — no resumes needed.",
  },
  {
    id: 2,
    icon: <Briefcase size={32} color="#1e40af" />,
    title: "2️⃣ Post or Find Work",
    text: "Employers post job opportunities such as farm work, shop help, delivery, or construction. Workers can browse or wait for matching jobs.",
  },
  {
    id: 3,
    icon: <Search size={32} color="#1e40af" />,
    title: "3️⃣ Smart Matching System",
    text: "Our system automatically connects employers with nearby workers who have matching skills and availability.",
  },
  {
    id: 4,
    icon: <Bell size={32} color="#1e40af" />,
    title: "4️⃣ Instant Notifications",
    text: "When a job is posted, nearby workers get instant notifications through the app or SMS, so they never miss an opportunity.",
  },
  {
    id: 5,
    icon: <MapPin size={32} color="#1e40af" />,
    title: "5️⃣ Work. Earn. Grow.",
    text: "Workers can accept jobs, connect with employers, and start earning. Employers find help faster — everyone benefits.",
  },
];

const HowItWorks = () => {
  return (
    <div className="howitworks-page">
      {/* Header */}
      <section className="howitworks-hero">
        <h1>How Udyogi Works</h1>
        <p>
          Udyogi connects people who need work with those who need workers — fast, local, and fair.
          From farmers to students, from shops to builders — everyone can find or offer work easily.
        </p>
      </section>

      {/* Steps */}
      <section className="howitworks-steps">
        {steps.map((step) => (
          <div key={step.id} className="howitworks-card">
            <div className="icon-wrapper">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </section>

      {/* Mission */}
      <section className="howitworks-mission">
        <h2>Our Mission</h2>
        <p>
          We believe every person deserves access to work — whether educated or not.
          Udyogi’s goal is to empower individuals by connecting them to real, nearby opportunities.
          Work should be easy to find, honest, and rewarding.
        </p>
      </section>

      {/* CTA */}
      <section className="howitworks-cta">
        <h3>Ready to get started?</h3>
        <p>Join thousands of workers and employers building a better future together.</p>
        <div className="cta-buttons">
          <a href="/register" className="cta-btn primary">Join as Worker</a>
          <a href="/post-job" className="cta-btn secondary">Hire Workers</a>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
