import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
        <h1 style={{ color: "#1E40AF" }}>Welcome to Udyogi – The WorkBridge</h1>
        <p style={{ marginTop: "1rem", color: "#111827" }}>
          Connect, work, and earn effortlessly. Navigate to the Employee page to
          view your performance summary.
        </p>
      </div>
    </>
  );
};

export default Home;
