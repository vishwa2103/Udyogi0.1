import React from "react";
import "./JobRecommendations.css";

const JobRecommendations = () => {
  const jobs = [
    {
      id: 1,
      title: "Electrician",
      employer: "SparkFix Pvt Ltd",
      location: "Hyderabad, Telangana",
      pay: "₹600/day",
      duration: "1 Day",
      image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
    },
    {
      id: 2,
      title: "House Cleaning",
      employer: "CleanPro Services",
      location: "Bengaluru, Karnataka",
      pay: "₹500/day",
      duration: "Half Day",
      image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
    },
    {
      id: 3,
      title: "Plumber",
      employer: "FixIt Plumbing Co.",
      location: "Chennai, Tamil Nadu",
      pay: "₹700/day",
      duration: "1 Day",
      image: "https://cdn-icons-png.flaticon.com/512/1048/1048941.png",
    },
    {
      id: 4,
      title: "Delivery Partner",
      employer: "FastTrack Logistics",
      location: "Mumbai, Maharashtra",
      pay: "₹800/day",
      duration: "Flexible",
      image: "https://cdn-icons-png.flaticon.com/512/1048/1048948.png",
    },
    {
      id: 5,
      title: "Gardener",
      employer: "GreenLeaf Services",
      location: "Pune, Maharashtra",
      pay: "₹550/day",
      duration: "1 Day",
      image: "https://cdn-icons-png.flaticon.com/512/618/618240.png",
    },
    {
      id: 6,
      title: "Painter",
      employer: "ColorPro Pvt Ltd",
      location: "Visakhapatnam, Andhra Pradesh",
      pay: "₹750/day",
      duration: "2 Days",
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    },
  ];

  return (
    <div className="job-recommendations">
      <h2>Recommended Jobs for You</h2>
      <p>Based on your skills and location, here are the best job matches today:</p>

      <div className="job-cards">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <img src={job.image} alt={job.title} className="job-image" />
            <h3>{job.title}</h3>
            <p className="employer">{job.employer}</p>
            <p className="location">{job.location}</p>
            <p className="details">
              <strong>Pay:</strong> {job.pay} <br />
              <strong>Duration:</strong> {job.duration}
            </p>
            <div className="job-actions">
              <button className="accept-btn">Accept</button>
              <button className="reject-btn">Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobRecommendations;
