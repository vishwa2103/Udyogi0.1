import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Welcome Back 👋</h2>
        <form className="login-form">
          <input
            type="text"
            placeholder="Email or Phone Number"
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="login-input"
          />
          <Link to="/homeNew">
          <button type="submit" className="login-btn">
            Login
          </button>
          </Link>
          <a href="#" className="forgot-link">
            Forgot Password?
          </a>
        </form>
        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
