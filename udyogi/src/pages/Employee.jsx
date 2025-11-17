import React from "react";
import Navbar from "../components/NavbarNew";
import EmployeeOverview from "../components/EmployeeOverview";
import "./Employee.css";
import JobRecommendations from "../components/JobRecommendations";
import AvailableJobs from "../components/AvailableJobs";
import AvailableJobsSection from "../components/AvailableJobsSection";
import Footer from "../components/Footer";

const Employee = () => {
  return (
    <>
      <Navbar />
      <EmployeeOverview />
      <JobRecommendations />
      <AvailableJobsSection />
      <Footer />
    </>
  );
};

export default Employee;
