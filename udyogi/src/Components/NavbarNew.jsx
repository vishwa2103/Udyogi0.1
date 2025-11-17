// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import { Bell, User, Menu, X } from "lucide-react";
// // import "./Navbar.css";

// // const Navbar = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);

// //   // Detect scroll to trigger sticky shrink effect
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 10);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   const navLinks = [
// //     { name: "Home", path: "/" },
// //     { name: "Employee", path: "/employee" },
// //     { name: "Employer", path: "/employer" },
// //     { name: "Notifications", path: "/notifications" },
// //   ];

// //   return (
// //     <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
// //       <div className="navbar-container">
// //         {/* Logo */}
// //         <div className="navbar-logo">
// //           <div className="logo-icon">U</div>
// //           <span className="logo-text">Udyogi</span>
// //         </div>

// //         {/* Desktop Menu */}
// //         <div className="navbar-links">
// //           {navLinks.map((link) => (
// //             <Link key={link.name} to={link.path} className="nav-link">
// //               {link.name}
// //             </Link>
// //           ))}
// //           <Link to="/profile" className="nav-link profile-link">
// //             <User size={18} />
// //             <span>Profile</span>
// //           </Link>
// //         </div>

// //         {/* Mobile Menu Button */}
// //         <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
// //           {menuOpen ? <X size={24} /> : <Menu size={24} />}
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       {menuOpen && (
// //         <div className="mobile-menu">
// //           {navLinks.map((link) => (
// //             <Link
// //               key={link.name}
// //               to={link.path}
// //               className="mobile-link"
// //               onClick={() => setMenuOpen(false)}
// //             >
// //               {link.name}
// //             </Link>
// //           ))}
// //           <Link
// //             to="/profile"
// //             className="mobile-link"
// //             onClick={() => setMenuOpen(false)}
// //           >
// //             <div className="mobile-profile">
// //               <User size={18} />
// //               <span>Profile</span>
// //             </div>
// //           </Link>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;
// import React, { useState } from 'react';
// import { Home, Briefcase, Bell, User, Menu, X } from 'lucide-react'; // Using Lucide Icons for a modern look
// // Removed: import './Navbar.css'; // This line caused the error

// // Props for the Navbar component
// // - `logoSrc`: URL for the application logo
// // - `appName`: Name of the application
// // - `onNavigate`: A function to handle navigation (e.g., using React Router's `Maps` function)
// // - `currentPage`: A string representing the currently active page for highlighting
// export default function Navbar({
//   logoSrc = 'https://placehold.co/40x40/1E40AF/FACC15?text=U', // Default Udyogi placeholder logo
//   appName = 'Udyogi',
//   onNavigate, // Expects a function like `(path) => navigate(path)`
//   currentPage = 'home' // 'home', 'employee', 'employer', 'notifications', 'profile'
// }) {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Helper function to handle navigation and close mobile menu
//   const handleNavigation = (path, pageName) => {
//     if (onNavigate) {
//       onNavigate(path);
//     }
//     // Optional: Log which page is intended for navigation
//     console.log(`Navigating to: ${pageName} (${path})`);
//     setIsMobileMenuOpen(false); // Close menu on navigation
//   };

//   // Determine active link classes
//   const getNavLinkClass = (page) =>
//     `nav-item ${currentPage === page ? 'nav-item-active' : ''}`;

//   return (
//     // Use a React Fragment (<>) to return multiple elements (the nav and the style)
//     <>
//       <nav className="navbar-container">
//         <div className="navbar-content">
//           {/* Logo and App Name */}
//           <div className="navbar-brand">
//             <img src={logoSrc} alt={`${appName} Logo`} className="navbar-logo" />
//             <span className="navbar-app-name">{appName}</span>
//           </div>

//           {/* Desktop Navigation Links */}
//           <div className="navbar-links-desktop">
//             <button
//               onClick={() => handleNavigation('/home', 'home')}
//               className={getNavLinkClass('home')}
//             >
//               <Home size={18} /> Home
//             </button>
//             <button
//               onClick={() => handleNavigation('/employee', 'employee')}
//               className={getNavLinkClass('employee')}
//             >
//               <Briefcase size={18} /> Employee
//             </button>
//             <button
//               onClick={() => handleNavigation('/employer', 'employer')}
//               className={getNavLinkClass('employer')}
//             >
//               <Briefcase size={18} /> Employer
//             </button>
//           </div>

//           {/* Desktop Utility Icons */}
//           <div className="navbar-utility-desktop">
//             <button
//               onClick={() => handleNavigation('/notifications', 'notifications')}
//               className={getNavLinkClass('notifications') + ' nav-icon-button'}
//               aria-label="Notifications"
//             >
//               <Bell size={20} />
//               {/* Optional: Notification badge */}
//               <span className="notification-badge">3</span>
//             </button>
//             <button
//               onClick={() => handleNavigation('/profile', 'profile')}
//               className={getNavLinkClass('profile') + ' nav-icon-button'}
//               aria-label="Profile"
//             >
//               <User size={20} />
//             </button>
//           </div>

//           {/* Mobile Menu Toggle Button */}
//           <button
//             className="navbar-mobile-toggle"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label="Toggle navigation menu"
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {isMobileMenuOpen && (
//           <div className="navbar-mobile-menu">
//             <button
//               onClick={() => handleNavigation('/home', 'home')}
//               className={getNavLinkClass('home')}
//             >
//               <Home size={18} /> Home
//             </button>
//             <button
//               onClick={() => handleNavigation('/employee', 'employee')}
//               className={getNavLinkClass('employee')}
//             >
//               <Briefcase size={18} /> Employee
//             </button>
//             <button
//               onClick={() => handleNavigation('/employer', 'employer')}
//               className={getNavLinkClass('employer')}
//             >
//               <Briefcase size={18} /> Employer
//             </button>
//             <div className="mobile-menu-divider"></div> {/* Visual divider */}
//             <button
//               onClick={() => handleNavigation('/notifications', 'notifications')}
//               className={getNavLinkClass('notifications')}
//             >
//               <Bell size={18} /> Notifications <span className="notification-badge-mobile">3</span>
//             </button>
//             <button
//               onClick={() => handleNavigation('/profile', 'profile')}
//               className={getNavLinkClass('profile')}
//             >
//               <User size={18} /> Profile
//             </button>
//           </div>
//         )}
//       </nav>

//       {/* Embedded CSS: 
//         All styles from Navbar.css are placed inside this <style> tag.
//         This resolves the CSS import error.
//       */}
//       <style>{`
//         /* Color Variables for easy theme management */
//         :root {
//           --primary-color: #1E40AF; /* Deep Blue */
//           --accent-color: #FACC15; /* Warm Yellow */
//           --background-color: #F9FAFB; /* Soft White */
//           --text-color: #111827; /* Charcoal */
//           --light-gray: #E5E7EB; /* For borders/separators */
//           --white: #ffffff;
//         }

//         /* Base Navbar Container */
//         .navbar-container {
//           background-color: var(--white); /* White background for the navbar itself */
//           box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* Subtle shadow for depth */
//           padding: 0.75rem 1.5rem; /* Padding top/bottom and left/right */
//           position: sticky;
//           top: 0;
//           z-index: 1000; /* Ensure it stays on top of other content */
//         }

//         /* Navbar Content - Flex container for alignment */
//         .navbar-content {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           max-width: 1200px; /* Max width for content on large screens */
//           margin: 0 auto; /* Center the content */
//         }

//         /* Navbar Brand (Logo + App Name) */
//         .navbar-brand {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem; /* Space between logo and name */
//         }

//         .navbar-logo {
//           width: 2.5rem; /* 40px */
//           height: 2.5rem; /* 40px */
//           border-radius: 0.375rem; /* Slightly rounded corners for the logo */
//           object-fit: cover; /* Ensure logo image covers the area */
//         }

//         .navbar-app-name {
//           font-size: 1.25rem; /* 20px - text-xl */
//           font-weight: 700; /* font-bold */
//           color: var(--primary-color); /* Deep Blue */
//           display: none; /* Hidden by default on small screens */
//         }

//         /* Desktop Navigation Links */
//         .navbar-links-desktop {
//           display: none; /* Hidden by default, shown on medium+ screens */
//           gap: 1.5rem; /* Space between nav items */
//         }

//         .nav-item {
//           display: flex;
//           align-items: center;
//           gap: 0.5rem; /* Space between icon and text */
//           padding: 0.5rem 0.75rem; /* Padding for click area */
//           font-size: 0.9375rem; /* ~15px */
//           font-weight: 500; /* medium */
//           color: var(--text-color); /* Charcoal text */
//           background: none;
//           border: none;
//           cursor: pointer;
//           transition: color 0.3s ease, background-color 0.3s ease;
//           border-radius: 0.375rem; /* Slight roundness for hover */
//         }

//         .nav-item:hover {
//           color: var(--primary-color); /* Deep Blue on hover */
//           background-color: var(--background-color); /* Soft white background on hover */
//         }

//         /* Active Nav Item Styling */
//         .nav-item-active {
//           color: var(--primary-color); /* Deep Blue for active link */
//           font-weight: 600; /* Semi-bold */
//           position: relative;
//         }

//         .nav-item-active::after {
//           content: '';
//           position: absolute;
//           bottom: -4px; /* Adjust as needed */
//           left: 50%;
//           transform: translateX(-50%);
//           width: calc(100% - 1.5rem); /* Adjust width to match padding */
//           height: 2px;
//           background-color: var(--primary-color); /* Underline for active link */
//           border-radius: 1px;
//         }

//         /* Desktop Utility Icons (Bell, User) */
//         .navbar-utility-desktop {
//           display: none; /* Hidden by default, shown on medium+ screens */
//           gap: 1.25rem; /* Space between icons */
//         }

//         .nav-icon-button {
//           position: relative; /* For notification badge positioning */
//           color: var(--text-color); /* Charcoal */
//           padding: 0.5rem;
//         }

//         .nav-icon-button:hover {
//           color: var(--primary-color); /* Deep Blue on hover */
//         }

//         .notification-badge {
//           position: absolute;
//           top: -0.25rem; /* Adjust positioning */
//           right: -0.25rem; /* Adjust positioning */
//           background-color: #EF4444; /* Red for notifications */
//           color: var(--white);
//           font-size: 0.625rem; /* 10px */
//           font-weight: 700;
//           border-radius: 9999px; /* Fully rounded */
//           padding: 0.125rem 0.375rem; /* Small padding */
//           min-width: 1rem; /* Ensure it's always a circle/oval */
//           text-align: center;
//         }

//         /* Mobile Toggle Button (Hamburger/X) */
//         .navbar-mobile-toggle {
//           display: block; /* Shown by default, hidden on medium+ screens */
//           background: none;
//           border: none;
//           color: var(--text-color);
//           cursor: pointer;
//           padding: 0.5rem;
//         }

//         /* Mobile Navigation Menu */
//         .navbar-mobile-menu {
//           display: flex;
//           flex-direction: column;
//           background-color: var(--white);
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//           padding: 1rem 1.5rem;
//           margin-top: 0.5rem;
//           border-radius: 0.5rem;
//           animation: slideDown 0.3s ease-out forwards; /* Simple animation */
//         }

//         .navbar-mobile-menu .nav-item {
//           width: 100%;
//           justify-content: flex-start; /* Align text/icon to start */
//           padding: 0.75rem 1rem;
//           margin-bottom: 0.25rem;
//           border-radius: 0.5rem;
//         }

//         .navbar-mobile-menu .nav-item-active {
//             background-color: var(--background-color);
//             border-left: 4px solid var(--primary-color); /* Accent border for active item */
//             padding-left: calc(1rem - 4px); /* Adjust padding due to border */
//             color: var(--primary-color);
//         }

//         .navbar-mobile-menu .nav-item-active::after {
//             display: none; /* Hide desktop active indicator */
//         }

//         .mobile-menu-divider {
//           border-top: 1px solid var(--light-gray);
//           margin: 0.5rem 0;
//         }

//         .notification-badge-mobile {
//           background-color: #EF4444; /* Red */
//           color: var(--white);
//           font-size: 0.75rem;
//           font-weight: 600;
//           border-radius: 9999px;
//           padding: 0.1rem 0.5rem;
//           margin-left: auto; /* Push badge to the right */
//         }

//         /* Responsive Breakpoints */
//         @media (min-width: 768px) { /* md breakpoint */
//           .navbar-app-name {
//             display: block; /* Show app name on medium screens */
//           }
//           .navbar-links-desktop {
//             display: flex; /* Show desktop links */
//           }
//           .navbar-utility-desktop {
//             display: flex; /* Show desktop utility icons */
//           }
//           .navbar-mobile-toggle {
//             display: none; /* Hide mobile toggle */
//           }
//           .navbar-mobile-menu {
//             display: none; /* Hide mobile menu */
//           }
//         }

//         /* Keyframe for mobile menu slide down animation */
//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Bell, User, Menu, X } from "lucide-react";
// import "./Navbar.css";

const NavbarNew = () => {
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

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "nav-link active profile-link" : "nav-link profile-link"
            }
          >
            <User size={18} />
            <span>Profile</span>
          </NavLink>
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

          <NavLink
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
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavbarNew;
