// import React, { useState, useEffect } from "react";
// import "./AvailableJobsSection.css";

// const AvailableJobsSection = () => {
//   // Mock job data — replace later with backend API data
//   const [jobs, setJobs] = useState([
//     {
//       id: 1,
//       title: "Electrician",
//       employer: "SparkFix Pvt Ltd",
//       location: "Hyderabad",
//       pay: 700,
//       duration: "1 Day",
//       category: "Electrical",
//       image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
//     },
//     {
//       id: 2,
//       title: "Plumber",
//       employer: "FixIt Co.",
//       location: "Bangalore",
//       pay: 650,
//       duration: "1 Day",
//       category: "Plumbing",
//       image: "https://cdn-icons-png.flaticon.com/512/1048/1048941.png",
//     },
//     {
//       id: 3,
//       title: "Painter",
//       employer: "ColorPro Pvt Ltd",
//       location: "Chennai",
//       pay: 750,
//       duration: "2 Days",
//       category: "Painting",
//       image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
//     },
//     {
//       id: 4,
//       title: "Delivery Partner",
//       employer: "QuickGo Logistics",
//       location: "Mumbai",
//       pay: 800,
//       duration: "Flexible",
//       category: "Delivery",
//       image: "https://cdn-icons-png.flaticon.com/512/1048/1048948.png",
//     },
//     {
//       id: 5,
//       title: "Gardener",
//       employer: "GreenLeaf Pvt Ltd",
//       location: "Pune",
//       pay: 500,
//       duration: "Half Day",
//       category: "Gardening",
//       image: "https://cdn-icons-png.flaticon.com/512/618/618240.png",
//     },
//     {
//       id: 6,
//       title: "Cleaner",
//       employer: "CleanPro Services",
//       location: "Hyderabad",
//       pay: 550,
//       duration: "1 Day",
//       category: "Cleaning",
//       image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
//     },
//   ]);

//   const [filters, setFilters] = useState({
//     category: "All",
//     location: "All",
//   });

//   const [sort, setSort] = useState("Newest");
//   const [displayedJobs, setDisplayedJobs] = useState([]);

//   useEffect(() => {
//     let filtered = [...jobs];

//     if (filters.category !== "All") {
//       filtered = filtered.filter((job) => job.category === filters.category);
//     }

//     if (filters.location !== "All") {
//       filtered = filtered.filter((job) => job.location === filters.location);
//     }

//     if (sort === "Highest Pay") {
//       filtered.sort((a, b) => b.pay - a.pay);
//     } else if (sort === "Lowest Pay") {
//       filtered.sort((a, b) => a.pay - b.pay);
//     } else {
//       filtered.sort((a, b) => b.id - a.id); // Newest first
//     }

//     setDisplayedJobs(filtered);
//   }, [filters, sort, jobs]);

//   const handleRequest = (jobId) => {
//     alert(`Request sent for Job ID: ${jobId}`);
//   };

//   return (
//     <div className="available-jobs-section">
//       <h2>All Available Jobs</h2>
//       <p>Browse all open job opportunities and send a request to apply.</p>

//       {/* Filter and Sort Controls */}
//       <div className="filters-container">
//         <div className="filter-group">
//           <label>Category:</label>
//           <select
//             value={filters.category}
//             onChange={(e) =>
//               setFilters({ ...filters, category: e.target.value })
//             }
//           >
//             <option value="All">All</option>
//             <option value="Electrical">Electrical</option>
//             <option value="Plumbing">Plumbing</option>
//             <option value="Painting">Painting</option>
//             <option value="Delivery">Delivery</option>
//             <option value="Gardening">Gardening</option>
//             <option value="Cleaning">Cleaning</option>
//           </select>
//         </div>

//         <div className="filter-group">
//           <label>Location:</label>
//           <select
//             value={filters.location}
//             onChange={(e) =>
//               setFilters({ ...filters, location: e.target.value })
//             }
//           >
//             <option value="All">All</option>
//             <option value="Hyderabad">Hyderabad</option>
//             <option value="Bangalore">Bangalore</option>
//             <option value="Chennai">Chennai</option>
//             <option value="Mumbai">Mumbai</option>
//             <option value="Pune">Pune</option>
//           </select>
//         </div>

//         <div className="filter-group">
//           <label>Sort By:</label>
//           <select value={sort} onChange={(e) => setSort(e.target.value)}>
//             <option value="Newest">Newest</option>
//             <option value="Highest Pay">Highest Pay</option>
//             <option value="Lowest Pay">Lowest Pay</option>
//           </select>
//         </div>
//       </div>

//       {/* Job Cards */}
//       <div className="jobs-grid">
//         {displayedJobs.length > 0 ? (
//           displayedJobs.map((job) => (
//             <div key={job.id} className="job-card">
//               <img src={job.image} alt={job.title} />
//               <h3>{job.title}</h3>
//               <p className="employer">{job.employer}</p>
//               <p className="location">{job.location}</p>
//               <p className="details">
//                 <strong>Pay:</strong> ₹{job.pay}/day <br />
//                 <strong>Duration:</strong> {job.duration}
//               </p>
//               <button
//                 className="request-btn"
//                 onClick={() => handleRequest(job.id)}
//               >
//                 Send Request
//               </button>
//             </div>
//           ))
//         ) : (
//           <p className="no-results">No jobs found with selected filters.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AvailableJobsSection;

import React, { useState, useEffect } from "react";
import "./AvailableJobsSection.css";

const AvailableJobsSection = () => {
  // Mock job data — replace later with backend API data
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Electrician",
      employer: "SparkFix Pvt Ltd",
      location: "Hyderabad",
      pay: 700,
      duration: "1 Day",
      category: "Electrical",
      image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
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
      title: "Painter",
      employer: "ColorPro Pvt Ltd",
      location: "Chennai",
      pay: 750,
      duration: "2 Days",
      category: "Painting",
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    },
    {
      id: 4,
      title: "Delivery Partner",
      employer: "QuickGo Logistics",
      location: "Mumbai",
      pay: 800,
      duration: "Flexible",
      category: "Delivery",
      image: "https://cdn-icons-png.flaticon.com/512/1048/1048948.png",
    },
    {
      id: 5,
      title: "Gardener",
      employer: "GreenLeaf Pvt Ltd",
      location: "Pune",
      pay: 500,
      duration: "Half Day",
      category: "Gardening",
      image: "https://cdn-icons-png.flaticon.com/512/618/618240.png",
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
    {
      id: 7,
      title: "AC Technician",
      employer: "CoolCare Pvt Ltd",
      location: "Bangalore",
      pay: 900,
      duration: "2 Days",
      category: "Electrical",
      image: "https://cdn-icons-png.flaticon.com/512/3076/3076238.png",
    },
    {
      id: 8,
      title: "Carpenter",
      employer: "WoodWorks",
      location: "Chennai",
      pay: 850,
      duration: "3 Days",
      category: "Construction",
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055683.png",
    },
    {
      id: 9,
      title: "Security Guard",
      employer: "SafeZone Pvt Ltd",
      location: "Mumbai",
      pay: 600,
      duration: "Night Shift",
      category: "Security",
      image: "https://cdn-icons-png.flaticon.com/512/1048/1048956.png",
    },
    {
      id: 10,
      title: "House Helper",
      employer: "HomeCare Services",
      location: "Hyderabad",
      pay: 500,
      duration: "Half Day",
      category: "Domestic",
      image: "https://cdn-icons-png.flaticon.com/512/1046/1046781.png",
    },
  ]);

  const [filters, setFilters] = useState({
    category: "All",
    location: "All",
  });

  const [sort, setSort] = useState("Newest");
  const [displayedJobs, setDisplayedJobs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // initially show 6 jobs

  useEffect(() => {
    let filtered = [...jobs];

    if (filters.category !== "All") {
      filtered = filtered.filter((job) => job.category === filters.category);
    }

    if (filters.location !== "All") {
      filtered = filtered.filter((job) => job.location === filters.location);
    }

    if (sort === "Highest Pay") {
      filtered.sort((a, b) => b.pay - a.pay);
    } else if (sort === "Lowest Pay") {
      filtered.sort((a, b) => a.pay - b.pay);
    } else {
      filtered.sort((a, b) => b.id - a.id); // Newest first
    }

    setDisplayedJobs(filtered.slice(0, visibleCount));
  }, [filters, sort, jobs, visibleCount]);

  const handleRequest = (jobId) => {
    alert(`Request sent for Job ID: ${jobId}`);
  };

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6); // show 6 more
  };

  return (
    <div className="available-jobs-section">
      <h2>All Available Jobs</h2>
      <p>Browse all open job opportunities and send a request to apply.</p>

      {/* Filter and Sort Controls */}
      <div className="filters-container">
        <div className="filter-group">
          <label>Category:</label>
          <select
            value={filters.category}
            onChange={(e) =>
              setFilters({ ...filters, category: e.target.value })
            }
          >
            <option value="All">All</option>
            <option value="Electrical">Electrical</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Painting">Painting</option>
            <option value="Delivery">Delivery</option>
            <option value="Gardening">Gardening</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Security">Security</option>
            <option value="Construction">Construction</option>
            <option value="Domestic">Domestic</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Location:</label>
          <select
            value={filters.location}
            onChange={(e) =>
              setFilters({ ...filters, location: e.target.value })
            }
          >
            <option value="All">All</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Sort By:</label>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="Newest">Newest</option>
            <option value="Highest Pay">Highest Pay</option>
            <option value="Lowest Pay">Lowest Pay</option>
          </select>
        </div>
      </div>

      {/* Job Cards */}
      <div className="jobs-grid">
        {displayedJobs.length > 0 ? (
          displayedJobs.map((job) => (
            <div key={job.id} className="job-card">
              <img src={job.image} alt={job.title} />
              <h3>{job.title}</h3>
              <p className="employer">{job.employer}</p>
              <p className="location">{job.location}</p>
              <p className="details">
                <strong>Pay:</strong> ₹{job.pay}/day <br />
                <strong>Duration:</strong> {job.duration}
              </p>
              <button
                className="request-btn"
                onClick={() => handleRequest(job.id)}
              >
                Send Request
              </button>
            </div>
          ))
        ) : (
          <p className="no-results">No jobs found with selected filters.</p>
        )}
      </div>

      {/* View More Button */}
      {displayedJobs.length < jobs.filter(
        j =>
          (filters.category === "All" || j.category === filters.category) &&
          (filters.location === "All" || j.location === filters.location)
      ).length && (
        <button className="view-more-btn" onClick={handleViewMore}>
          View More Jobs
        </button>
      )}
    </div>
  );
};

export default AvailableJobsSection;
