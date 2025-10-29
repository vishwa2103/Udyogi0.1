import React, { useState } from "react";
import "./AvailableJobs.css";

const AvailableJobs = () => {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Newest");

  const jobs = [
    {
      id: 1,
      title: "House Painter",
      employer: "ColorPro Pvt Ltd",
      location: "Hyderabad",
      pay: 750,
      duration: "2 Days",
      category: "Painting",
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    },
    {
      id: 2,
      title: "Plumber",
      employer: "FixIt Co.",
      location: "Bangalore",
      pay: 650,
      duration: "1 Day",
      category: "Plumbing",
      image: "https://cdn-icons-png.flaticon.com/512/1048/1048941.png",
    },
    {
      id: 3,
      title: "Electrician",
      employer: "SparkFix Services",
      location: "Chennai",
      pay: 700,
      duration: "1 Day",
      category: "Electrical",
      image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
    },
    {
      id: 4,
      title: "Gardener",
      employer: "GreenLeaf Pvt Ltd",
      location: "Pune",
      pay: 500,
      duration: "Half Day",
      category: "Gardening",
      image: "https://cdn-icons-png.flaticon.com/512/618/618240.png",
    },
    {
      id: 5,
      title: "Delivery Partner",
      employer: "QuickGo Logistics",
      location: "Mumbai",
      pay: 800,
      duration: "Flexible",
      category: "Delivery",
      image: "https://cdn-icons-png.flaticon.com/512/1048/1048948.png",
    },
    {
      id: 6,
      title: "Cleaner",
      employer: "CleanPro Services",
      location: "Hyderabad",
      pay: 550,
      duration: "1 Day",
      category: "Cleaning",
      image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
    },
  ];

  // Filtering
  const filteredJobs =
    filter === "All" ? jobs : jobs.filter((job) => job.category === filter);

  // Sorting
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sort === "Highest Pay") return b.pay - a.pay;
    if (sort === "Lowest Pay") return a.pay - b.pay;
    return b.id - a.id; // newest by ID
  });

  return (
    <div className="available-jobs">
      <h2>All Available Jobs</h2>
      <p>Browse all job opportunities posted by verified employers and merchants</p>

      {/* Filter & Sort Controls */}
      <div className="filter-sort-bar">
        <div className="filter-group">
          <label htmlFor="filter">Filter by:</label>
          <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Painting">Painting</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Electrical">Electrical</option>
            <option value="Gardening">Gardening</option>
            <option value="Delivery">Delivery</option>
            <option value="Cleaning">Cleaning</option>
          </select>
        </div>

        <div className="sort-group">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="Newest">Newest</option>
            <option value="Highest Pay">Highest Pay</option>
            <option value="Lowest Pay">Lowest Pay</option>
          </select>
        </div>
      </div>

      {/* Job Cards */}
      <div className="job-list">
        {sortedJobs.map((job) => (
          <div key={job.id} className="job-card">
            <img src={job.image} alt={job.title} className="job-image" />
            <h3>{job.title}</h3>
            <p className="employer">{job.employer}</p>
            <p className="location">{job.location}</p>
            <p className="details">
              <strong>Pay:</strong> ₹{job.pay}/day <br />
              <strong>Duration:</strong> {job.duration}
            </p>
            <button className="request-btn">Send Request</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableJobs;
