// import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import LoginPage from './pages/login/login'
import SignupPage from './pages/signup/signup'
import Home from './pages/home/home'
import Welcome from './pages/welcome/welcome'
import Employer from './pages/merchantprofile/Employer';
import Employee from './pages/Employee/Employee';
import JobPostAnalytics from "./EmployerComponents/JobPostAnalytics";
import EditJob from "./EmployerComponents/EditJob";
import DeleteJob from "./EmployerComponents/DeleteJob";
import ViewApplicants from "./EmployerComponents/ViewApplicants";
import Shortlist from "./EmployerComponents/Shortlist";
import HideShowJob from "./EmployerComponents/HideShowJob";
import EarningsOverview from "./EmployerComponents/EarningsOverview";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Welcome" element={<Welcome/>} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employer" element={<><Navbar /><div style={{padding:'4rem'}}>Employer Page</div></>} />
        <Route path="/notifications" element={<><Navbar /><div style={{padding:'4rem'}}>Notifications Page</div></>} />
        <Route path="/profile" element={<><Navbar /><div style={{padding:'4rem'}}>Profile Page</div></>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/Employee" element={<Employee/>}/>
        <Route path="/employer" element={<Employer />} />
        <Route path="/employer/JobPostAnalytics" element={<JobPostAnalytics />} />
        <Route path="/employer/EditJob" element={<EditJob />} />
        <Route path="/employer/DeleteJob" element={<DeleteJob />} />
        <Route path="/employer/ViewApplicants" element={<ViewApplicants />} />
        <Route path="/employer/Shortlist" element={<Shortlist />} />
        <Route path="/employer/HideShowJob" element={<HideShowJob />} />
        <Route path="/employer/EarningsOverview" element={<EarningsOverview />} />
      </Routes>
    </Router>
  );
};

export default App;
