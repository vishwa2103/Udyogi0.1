import React from "react";
import Navbar from "./../home/Navbar";
import "./Notifications.css";


const Notifications = () => {
  // Mock data
  const profile = {
    name: "Kalava Dhilli Rao",
    title: "Enthusiast Problem Solver | Full Stack Web Developer | Solved 200+ DSA problems",
    location: "Bhimavaram, Andhra Pradesh",
    premium: true,
  };

  const notifications = [
    {
      id: 1,
      user: "Divakar G",
      text: "connection is hiring for a Senior Software Engineer at Andor Tech. Explore jobs in your network.",
      time: "4h",
      type: "job",
    },
    {
      id: 2,
      user: "Poorna Hari",
      text: "posted: We went in to build a project. We walked out understanding how banks fight fraud in real time...",
      time: "4h",
      type: "post",
    },
    {
      id: 3,
      user: "Software Engineer",
      text: "new opportunities in Chennai.",
      time: "6h",
      type: "job",
    },
    {
      id: 4,
      user: "Software Engineer",
      text: "new opportunities in Hyderabad.",
      time: "6h",
      type: "job",
    },
    {
      id: 5,
      user: "TCS Walk-in",
      text: "new opportunity in Hyderabad. Results from the new AI-powered job search.",
      time: "7h",
      type: "job",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="notifications-page">
        {/* Left Sidebar */}
        <aside className="left-sidebar">
          <div className="profile-card">
            <div className="profile-cover"></div>
            <div className="profile-info">
              <div className="profile-avatar">KD</div>
              <h3>{profile.name}</h3>
              <p className="profile-title">{profile.title}</p>
              <span className="profile-location">{profile.location}</span>
              {profile.premium && <span className="premium-badge">Premium</span>}
            </div>
          </div>

          <div className="manage-notifications">
            <p>Manage your notifications</p>
            <a href="#">View settings</a>
          </div>
        </aside>

        {/* Center Content */}
        <main className="main-content">
          <div className="filter-bar">
            <button className="active">All</button>
            <button>Jobs</button>
            <button>My posts</button>
            <button>Mentions</button>
          </div>

          <div className="notifications-list">
            {notifications.map((n) => (
              <div key={n.id} className="notification-card">
                <div className="notification-avatar">{n.user.charAt(0)}</div>
                <div className="notification-body">
                  <p>
                    <strong>{n.user}</strong> {n.text}
                  </p>
                  <span className="time">{n.time} ago</span>
                </div>
                {n.type === "job" && (
                  <button className="view-job-btn">View Job</button>
                )}
              </div>
            ))}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="right-sidebar">
          <div className="ad-card">
            <img
              src="https://placehold.co/300x200?text=See+Who’s+Hiring"
              alt="Advertisement"
            />
            <p>Discover hiring opportunities on Udyogi.</p>
          </div>

          <footer className="footer-links">
            <a href="#">About</a>
            <a href="#">Accessibility</a>
            <a href="#">Help Center</a>
            <a href="#">Privacy & Terms</a>
            <a href="#">Advertising</a>
            <a href="#">Business Services</a>
            <a href="#">Get the App</a>
            <p>© 2025 Udyogi Corporation</p>
          </footer>
        </aside>
      </div>
    </>
  );
};

export default Notifications;
