import React, { useState } from "react";
import "./Settings.css";
import { User, Shield, Bell, Eye, Database, LogOut } from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("account");

  const renderContent = () => {
    switch (activeTab) {
      case "account":
        return (
          <section className="settings-content">
            <h3>Account Preferences</h3>
            <p>Manage your email, password, and language preferences.</p>
            <ul>
              <li>Email Address: <span>user@example.com</span></li>
              <li>Password: *********</li>
              <li>Language: English (US)</li>
            </ul>
            <button className="edit-btn">Edit Account</button>
          </section>
        );
      case "privacy":
        return (
          <section className="settings-content">
            <h3>Privacy & Security</h3>
            <p>Control who can see your information and activity.</p>
            <ul>
              <li>Two-step verification: <span>Enabled</span></li>
              <li>Manage blocked users</li>
              <li>Data sharing with third parties</li>
            </ul>
            <button className="edit-btn">Manage Privacy</button>
          </section>
        );
      case "notifications":
        return (
          <section className="settings-content">
            <h3>Notifications</h3>
            <p>Choose how you want to be notified.</p>
            <ul>
              <li>Email notifications: <span>Enabled</span></li>
              <li>Push notifications: <span>Enabled</span></li>
              <li>Job alerts: <span>Daily</span></li>
            </ul>
            <button className="edit-btn">Update Preferences</button>
          </section>
        );
      case "visibility":
        return (
          <section className="settings-content">
            <h3>Visibility</h3>
            <p>Manage who can see your profile and activity status.</p>
            <ul>
              <li>Profile photo visibility: <span>Public</span></li>
              <li>Online status: <span>Visible</span></li>
              <li>Connections visibility: <span>Only Me</span></li>
            </ul>
            <button className="edit-btn">Adjust Visibility</button>
          </section>
        );
      case "data":
        return (
          <section className="settings-content">
            <h3>Data Privacy</h3>
            <p>Manage your data, download copies, or delete your account.</p>
            <ul>
              <li>Download your data</li>
              <li>Delete your account</li>
            </ul>
            <button className="edit-btn danger">Manage Data</button>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="settings-container">
      <aside className="settings-sidebar">
        <h2 className="settings-title">Settings</h2>

        {[
          { id: "account", label: "Account", icon: <User /> },
          { id: "privacy", label: "Privacy", icon: <Shield /> },
          { id: "notifications", label: "Notifications", icon: <Bell /> },
          { id: "visibility", label: "Visibility", icon: <Eye /> },
          { id: "data", label: "Data Privacy", icon: <Database /> },
        ].map((item) => (
          <div
            key={item.id}
            className={`sidebar-item ${activeTab === item.id ? "active" : ""}`}
            onClick={() => setActiveTab(item.id)}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}

        <div className="sidebar-item logout">
          <LogOut />
          <span>Logout</span>
        </div>
      </aside>

      <main className="settings-main">{renderContent()}</main>
    </div>
  );
};

export default Settings;
