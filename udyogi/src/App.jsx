import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import HomeNew from "./pages/home/HomeNew";
import Employee from "./pages/Employee";
import Navbar from "./components/Navbar";
//import ""./App.css";
import Welcome from "./pages/welcome/welcome";
import MerchantDashboard from "./pages/merchantprofile/MerchantDashboard";
import Profile from "./pages/Profile/Profile";



const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/homeNew' element = {<HomeNew />}/> 
        <Route path="/" element={<Welcome/>} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employer" element={<><Navbar /><div style={{padding:'4rem'}}>Employer Page</div></>} />
        <Route path="/notifications" element={<><Navbar /><div style={{padding:'4rem'}}>Notifications Page</div></>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/merchantdashboard" element={<MerchantDashboard/>}/>
        
      </Routes>
    </Router>
    </>
  );
};

export default App;
