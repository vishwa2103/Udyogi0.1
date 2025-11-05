import React, { useState } from "react";
import "./Messages.css";
import {
  Search,
  Send,
  Paperclip,
  Phone,
  Eye,
  Smile,
  Bell,
} from "lucide-react";

const Messages = () => {
  const [selectedTab, setSelectedTab] = useState("Seekers");
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageInput, setMessageInput] = useState("");

  const chatList = [
    {
      id: 1,
      name: "Ramesh Kumar",
      role: "Worker",
      photo: "https://i.pravatar.cc/50?img=3",
      lastMessage: "Can you start tomorrow?",
      time: "2m ago",
      unread: 1,
    },
    {
      id: 2,
      name: "Sita Devi",
      role: "Worker",
      photo: "https://i.pravatar.cc/50?img=5",
      lastMessage: "I completed the work!",
      time: "1h ago",
      unread: 0,
    },
    {
      id: 3,
      name: "Ravi Traders",
      role: "Merchant",
      photo: "https://i.pravatar.cc/50?img=7",
      lastMessage: "Please share your quote.",
      time: "3h ago",
      unread: 2,
    },
  ];

  const [messages, setMessages] = useState([
    {
      sender: "Ramesh Kumar",
      text: "Can you start tomorrow?",
      time: "10:30 AM",
      type: "text",
    },
    {
      sender: "You",
      text: "Yes, I’ll be there.",
      time: "10:31 AM",
      type: "text",
    },
  ]);

  const handleSend = () => {
    if (messageInput.trim() === "") return;
    setMessages([
      ...messages,
      { sender: "You", text: messageInput, time: "Now", type: "text" },
    ]);
    setMessageInput("");
  };

  return (
    <div className="messages-container">
      {/* Left Sidebar */}
      <div className="chat-sidebar">
        <div className="sidebar-header">
          <h2>Chats</h2>
          <Bell className="icon" />
        </div>

        <div className="tab-switch">
          <button
            className={selectedTab === "Seekers" ? "active" : ""}
            onClick={() => setSelectedTab("Seekers")}
          >
            Seekers
          </button>
          <button
            className={selectedTab === "Merchants" ? "active" : ""}
            onClick={() => setSelectedTab("Merchants")}
          >
            Merchants
          </button>
        </div>

        <div className="search-bar">
          <Search className="search-icon" />
          <input type="text" placeholder="Search user or job..." />
        </div>

        <div className="chat-list">
          {chatList.map((chat) => (
            <div
              key={chat.id}
              className={`chat-item ${
                selectedChat?.id === chat.id ? "active-chat" : ""
              }`}
              onClick={() => setSelectedChat(chat)}
            >
              <img src={chat.photo} alt={chat.name} className="chat-avatar" />
              <div className="chat-info">
                <div className="chat-header">
                  <span className="chat-name">{chat.name}</span>
                  <span className="chat-time">{chat.time}</span>
                </div>
                <div className="chat-body">
                  <span className="chat-message">{chat.lastMessage}</span>
                  {chat.unread > 0 && (
                    <span className="unread-badge">{chat.unread}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="chat-window">
        {selectedChat ? (
          <>
            <div className="chat-header-bar">
              <div className="user-details">
                <img
                  src={selectedChat.photo}
                  alt={selectedChat.name}
                  className="user-avatar"
                />
                <div>
                  <h3>{selectedChat.name}</h3>
                  <span className="role-badge">{selectedChat.role}</span>
                </div>
              </div>
              <div className="chat-actions">
                <Phone className="icon" />
                <Eye className="icon" />
              </div>
            </div>

            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message-bubble ${
                    msg.sender === "You" ? "sent" : "received"
                  }`}
                >
                  {msg.text}
                  <span className="msg-time">{msg.time}</span>
                </div>
              ))}
            </div>

            <div className="chat-input-bar">
              <Paperclip className="icon" />
              <input
                type="text"
                placeholder="Type a message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <Smile className="icon" />
              <button onClick={handleSend}>
                <Send className="icon send-icon" />
              </button>
            </div>
          </>
        ) : (
          <div className="no-chat-selected">Select a chat to start messaging</div>
        )}
      </div>
    </div>
  );
};

export default Messages;
