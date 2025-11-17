import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Bell, User, Menu, X } from "lucide-react";
import "./NavBar.css";
  
const Navbar = ({ onProfileClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/homeNew" },
    { name: "Employee", path: "/employee" },
    { name: "Employer", path: "/employer" },
    { name: "Notifications", path: "/notifications" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
       
       <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <div className="logo-icon">U</div>
          <span className="logo-text">Udyogi</span>
        </div>

        {/* Desktop Links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}   
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            > 
              {link.name}
            </NavLink>
          ))}

          {/* <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "nav-link active profile-link" : "nav-link profile-link"
            }
          >
            <User size={18} />
            <span>Profile</span>
          </NavLink> */}
          <button
              className="nav-link profile-link"
              onClick={onProfileClick}>
          <User size={18} />
          <span>Profile</span>
          </button>

        </div>

        {/* Mobile Toggle */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "mobile-link active" : "mobile-link"
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          {/* <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "mobile-link active" : "mobile-link"
            }
            onClick={() => setMenuOpen(false)}
          >
            <div className="mobile-profile">
              <User size={18} />
              <span>Profile</span>
            </div>
          </NavLink> */}
          <button
              className="nav-link profile-link"
              onClick={onProfileClick}>
          <User size={18} />
          <span>Profile</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

