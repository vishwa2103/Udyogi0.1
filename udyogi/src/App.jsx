// import { useState } from 'react'
import React from 'react';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import LoginPage from './pages/login/login'
import SignupPage from './pages/signup/signup'
import Home from './pages/home/home'
import Welcome from './pages/Welcome/Welcome';
import MerchantDashboard from './pages/merchantprofile/MerchantDashboard';
import Profile from './pages/Profile/Profile';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/Welcome" element={<Welcome/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/merchantdashboard" element={<MerchantDashboard/>}/>
        <Route path='/' element = {<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App
