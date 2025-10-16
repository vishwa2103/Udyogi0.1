import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

const SignupPage = () => {
  const [role, setRole] = useState("seeker");

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2 className="signup-title">Create Your Account</h2>

        <div className="role-toggle">
          <button
            className={`role-btn ${role === "seeker" ? "active" : ""}`}
            onClick={() => setRole("seeker")}
          >
            Seeker
          </button>
          <button
            className={`role-btn ${role === "merchant" ? "active" : ""}`}
            onClick={() => setRole("merchant")}
          >
            Merchant
          </button>
        </div>

        <form className="signup-form">
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Email or Phone Number" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        <p className="login-text">
          Already have an account?{" "}
          <Link to="/login" className="login-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
