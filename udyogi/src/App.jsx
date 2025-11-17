import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import HomeNew from "./pages/home/HomeNew";
import Employee from "./pages/Employee";
import Navbar from "./components/NavbarNew";
//import ""./App.css";
import Welcome from "./pages/welcome/welcome";
// import MerchantDashboard from "./pages/merchantprofile/MerchantDashboard";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Employer from "./pages/merchantprofile/Employer";
import Notifications from "./pages/Notifications/Notifications";


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/homeNew' element = {<HomeNew />}/> 
        <Route path="/" element={<Welcome/>} />
        <Route path="/login" element= {<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employer" element={<Employer />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home/>}/>
        {/* <Route path="/merchantdashboard" element={<MerchantDashboard/>}/> */}
        
      </Routes>
    </Router>
    </>
  );
};

export default App;
