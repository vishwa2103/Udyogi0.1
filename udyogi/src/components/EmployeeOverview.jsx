// import React from "react";
// import "./EmployeeOverview.css";
// import { TrendingUp, Briefcase, DollarSign, Clock } from "lucide-react";

// const EmployeeOverview = ({
//   name = "John Doe",
//   todayEarnings = 450,
//   todayJobs = 3,
//   totalEarnings = 12500,
//   totalJobs = 180,
//   avgRating = 4.7,
// }) => {
//   return (
//     <section className="employee-overview">
//       <div className="overview-header">
//         <h1 className="welcome-text">Welcome back, {name} 👋</h1>
//         <p className="sub-text">Here’s a quick summary of your performance</p>
//       </div>

//       <div className="stats-grid">
//         {/* Today Earnings */}
//         <div className="stat-card highlight">
//           <div className="icon-wrapper">
//             <DollarSign size={24} />
//           </div>
//           <div className="stat-content">
//             <h2>₹{todayEarnings}</h2>
//             <p>Earned Today</p>
//           </div>
//         </div>

//         {/* Today Jobs */}
//         <div className="stat-card">
//           <div className="icon-wrapper">
//             <Briefcase size={24} />
//           </div>
//           <div className="stat-content">
//             <h2>{todayJobs}</h2>
//             <p>Jobs Completed Today</p>
//           </div>
//         </div>

//         {/* Total Earnings */}
//         <div className="stat-card">
//           <div className="icon-wrapper">
//             <TrendingUp size={24} />
//           </div>
//           <div className="stat-content">
//             <h2>₹{totalEarnings.toLocaleString()}</h2>
//             <p>Total Earnings</p>
//           </div>
//         </div>

//         {/* Total Jobs */}
//         <div className="stat-card">
//           <div className="icon-wrapper">
//             <Clock size={24} />
//           </div>
//           <div className="stat-content">
//             <h2>{totalJobs}</h2>
//             <p>Total Jobs Done</p>
//           </div>
//         </div>
//       </div>

//       {/* Motivation Section */}
//       <div className="motivation-box">
//         <p>
//           ⭐ Great work! Your average rating is <strong>{avgRating}/5</strong> — keep it up!  
//           You’re <span className="accent-text">one step closer</span> to reaching your next reward milestone.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default EmployeeOverview;

import React from "react";
import "./EmployeeOverview.css";
import { TrendingUp, Briefcase, DollarSign, Clock, Star } from "lucide-react";

const EmployeeOverview = ({
  name = "John Doe",
  todayEarnings = 450,
  todayJobs = 3,
  totalEarnings = 12500,
  totalJobs = 180,
  avgRating = 4.7,
  nextGoal = 15000,
}) => {
  const progress = Math.min((totalEarnings / nextGoal) * 100, 100);

  return (
    <section className="employee-overview">
      <div className="overview-header">
        <h1 className="welcome-text">Welcome back, {name} 👋</h1>
        <p className="sub-text">Here’s your work summary and progress</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card highlight">
          <div className="icon-wrapper">
            <DollarSign size={24} />
          </div>
          <div className="stat-content">
            <h2>₹{todayEarnings}</h2>
            <p>Earned Today</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon-wrapper">
            <Briefcase size={24} />
          </div>
          <div className="stat-content">
            <h2>{todayJobs}</h2>
            <p>Jobs Completed Today</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon-wrapper">
            <TrendingUp size={24} />
          </div>
          <div className="stat-content">
            <h2>₹{totalEarnings.toLocaleString()}</h2>
            <p>Total Earnings</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon-wrapper">
            <Clock size={24} />
          </div>
          <div className="stat-content">
            <h2>{totalJobs}</h2>
            <p>Total Jobs Done</p>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="progress-section">
        <div className="progress-header">
          <h3>Next Reward Milestone</h3>
          <span>₹{nextGoal.toLocaleString()}</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="progress-text">
          You’ve reached <strong>{progress.toFixed(1)}%</strong> of your next milestone!
        </p>
      </div>

      {/* Motivation */}
      <div className="motivation-box">
        <p>
          <Star size={18} color="#FACC15" style={{ marginRight: "5px" }} />
          Great work! Your average rating is <strong>{avgRating}/5</strong>.  
          Keep pushing forward to unlock your next reward!
        </p>
      </div>
    </section>
  );
};

export default EmployeeOverview;
