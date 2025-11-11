import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import LoginPage from './pages/login/login'
import SignupPage from './pages/signup/signup'
import Welcome from './pages/Welcome/welcome'
import Employee from './pages/Employee'
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home"
import MerchantDashboard from "./pages/merchantprofile/MerchantDashboard"
import Profile from "./pages/Profile/profile";
import Notifications from "./components/Notifications";
import HowItWork from "./components/HowItWorks";
// import HowItWorks from "./components/Howisitworks";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employer" element={<><Navbar /><div style={{padding:'4rem'}}>Employer Page</div></>} />
        {/* <Route path="/notifications" element={<><Navbar /><div style={{padding:'4rem'}}>Notifications Page</div></>} /> */}
        <Route path="/profile" element={<><Navbar /><div style={{padding:'4rem'}}>Profile Page</div></>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/merchantdashboard" element={<MerchantDashboard/>}/>
        <Route path='/profile' element = {<Profile/>}/>
        <Route path = '/notifications' element = {<Notifications/>}/>
        <Route path = '/howItWorks' element = {<HowItWork/>}/>
      </Routes>
    </Router>
  );
};

export default App;
