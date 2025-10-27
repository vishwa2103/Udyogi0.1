
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employer" element={<><Navbar /><div style={{padding:'4rem'}}>Employer Page</div></>} />
        <Route path="/notifications" element={<><Navbar /><div style={{padding:'4rem'}}>Notifications Page</div></>} />
        <Route path="/profile" element={<><Navbar /><div style={{padding:'4rem'}}>Profile Page</div></>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/merchantdashboard" element={<MerchantDashboard/>}/>
      </Routes>
    </Router>
  );
};

export default App;
