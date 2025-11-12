import React, { useState } from "react";
import "./Settings.css";
import { User, Shield, Bell, Eye, Database, LogOut } from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("account");

  const renderContent = () => {
    switch (activeTab) {
      case "account":
        return (
          <div className="settings-content">
            <h3>Account Preferences</h3>
            <p>Manage your email, password, and language preferences.</p>
            <ul>
              <li>Email Address: <span>user@example.com</span></li>
              <li>Password: *********</li>
              <li>Language: English (US)</li>
            </ul>
          </div>
        );
      case "privacy":
        return (
          <div className="settings-content">
            <h3>Privacy & Security</h3>
            <p>Control who can see your information and activity.</p>
            <ul>
              <li>Two-step verification: <span>Enabled</span></li>
              <li>Manage blocked users</li>
              <li>Data sharing with third parties</li>
            </ul>
          </div>
        );
      case "notifications":
        return (
          <div className="settings-content">
            <h3>Notifications</h3>
            <p>Choose how you want to be notified.</p>
            <ul>
              <li>Email notifications: <span>Enabled</span></li>
              <li>Push notifications: <span>Enabled</span></li>
              <li>Job alerts: <span>Daily</span></li>
            </ul>
          </div>
        );
      case "visibility":
        return (
          <div className="settings-content">
            <h3>Visibility</h3>
            <p>Manage who can see your profile and activity status.</p>
            <ul>
              <li>Profile photo visibility: <span>Public</span></li>
              <li>Online status: <span>Visible</span></li>
              <li>Connections visibility: <span>Only Me</span></li>
            </ul>
          </div>
        );
      case "data":
        return (
          <div className="settings-content">
            <h3>Data Privacy</h3>
            <p>Manage your data, download copies, or delete your account.</p>
            <ul>
              <li>Download your data</li>
              <li>Delete your account</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="linkedin-settings-container">
      <aside className="settings-sidebar">
        <h2 className="settings-header">Settings</h2>
        <div
          className={`sidebar-item ${activeTab === "account" ? "active" : ""}`}
          onClick={() => setActiveTab("account")}
        >
          <User className="icon" /> Account
        </div>
        <div
          className={`sidebar-item ${activeTab === "privacy" ? "active" : ""}`}
          onClick={() => setActiveTab("privacy")}
        >
          <Shield className="icon" /> Privacy
        </div>
        <div
          className={`sidebar-item ${activeTab === "notifications" ? "active" : ""}`}
          onClick={() => setActiveTab("notifications")}
        >
          <Bell className="icon" /> Notifications
        </div>
        <div
          className={`sidebar-item ${activeTab === "visibility" ? "active" : ""}`}
          onClick={() => setActiveTab("visibility")}
        >
          <Eye className="icon" /> Visibility
        </div>
        <div
          className={`sidebar-item ${activeTab === "data" ? "active" : ""}`}
          onClick={() => setActiveTab("data")}
        >
          <Database className="icon" /> Data Privacy
        </div>

        <div className="sidebar-item logout">
          <LogOut className="icon" /> Logout
        </div>
      </aside>

      <main className="settings-main">{renderContent()}</main>
    </div>
  );
};

export default Settings;
