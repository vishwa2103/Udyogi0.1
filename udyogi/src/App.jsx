// import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import LoginPage from './pages/login/login'
import SignupPage from './pages/signup/signup'
import Home from './pages/home/home'
import Welcome from './pages/welcome/welcome'
import MerchantDashboard from './pages/merchantprofile/MerchantDashboard';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/merchantdashboard" element={<MerchantDashboard/>}/>
      </Routes>
    </Router>
  )
}

export default App
