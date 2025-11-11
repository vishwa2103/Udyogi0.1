// import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import LoginPage from './pages/login/login'
import SignupPage from './pages/signup/signup'
import Home from './pages/home/Home'
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
import Messages from './pages/Messages/Messages';
import Settings from './pages/Settings/Settings.jsx';

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        {/* <Route path="/employee" element={<Employee />} />
        <Route path="/employer" element={<><Navbar /><div style={{padding:'4rem'}}>Employer Page</div></>} />
        <Route path="/notifications" element={<><Navbar /><div style={{padding:'4rem'}}>Notifications Page</div></>} />
        <Route path="/profile" element={<><Navbar /><div style={{padding:'4rem'}}>Profile Page</div></>} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
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
        <Route path="/messages" element={<Messages />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
