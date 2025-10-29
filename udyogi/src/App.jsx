
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import LoginPage from './pages/login/login'
import SignupPage from './pages/signup/signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/Welcome" element={<Welcome/>} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employer" element={<><Navbar /><div style={{padding:'4rem'}}>Employer Page</div></>} />
        <Route path="/notifications" element={<><Navbar /><div style={{padding:'4rem'}}>Notifications Page</div></>} />
        <Route path="/profile" element={<><Navbar /><div style={{padding:'4rem'}}>Profile Page</div></>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/merchantdashboard" element={<MerchantDashboard/>}/>
        <Route path='/' element = {<Profile/>}/>
        <Route path="/Welcome" element={<Welcome/>} />
      </Routes>
    </Router>
  );
};

export default App;
