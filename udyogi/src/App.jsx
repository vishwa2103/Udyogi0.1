// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'
// import LoginPage from './pages/login/login'
// import SignupPage from './pages/signup/signup'
// import Navbar from './pages/components/navbar';

// function App() {
//   const [count, setCount] = useState(0)
//   //<WelcomeDashboard />
  

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Navbar />} />
//         {/* <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/WorkerDashboard" element={<h1>Worker Dashboard</h1>} /> */}
//       </Routes>
//     </Router>
//   )
// }

// export default App

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employer" element={<><Navbar /><div style={{padding:'4rem'}}>Employer Page</div></>} />
        <Route path="/notifications" element={<><Navbar /><div style={{padding:'4rem'}}>Notifications Page</div></>} />
        <Route path="/profile" element={<><Navbar /><div style={{padding:'4rem'}}>Profile Page</div></>} />
      </Routes>
    </Router>
  );
};

export default App;
