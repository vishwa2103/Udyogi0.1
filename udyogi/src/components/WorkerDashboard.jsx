// src/pages/WorkerDashboard.jsx
import React, { useState } from "react";
import { Bell, User, Home, Briefcase } from "lucide-react";

export default function WorkerDashboard() {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("recent");

  const topRequests = [
    { id: 1, title: "Plumbing Work", location: "Hyderabad", pay: "₹800/day", duration: "2 days" },
    { id: 2, title: "Electrician Helper", location: "Bangalore", pay: "₹1,000/day", duration: "3 days" },
    { id: 3, title: "Painter", location: "Chennai", pay: "₹900/day", duration: "1 week" },
  ];

  const allWorks = [
    { id: 4, title: "House Cleaning", location: "Hyderabad", pay: "₹700/day" },
    { id: 5, title: "Gardening", location: "Vijayawada", pay: "₹850/day" },
    { id: 6, title: "Wall Repair", location: "Bangalore", pay: "₹1,100/day" },
  ];

  const handleAccept = (id) => alert(`Accepted request ID ${id}`);
  const handleReject = (id) => alert(`Rejected request ID ${id}`);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* HEADER */}
      <header className="bg-white shadow-md py-3 px-6 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <img src="/udyogi-logo.png" alt="Udyogi" className="w-8 h-8" />
          <h1 className="text-xl font-semibold text-gray-800">Udyogi</h1>
        </div>
        <nav className="flex items-center gap-6 text-gray-700">
          <button className="hover:text-blue-600 flex items-center gap-1"><Home size={18}/>Home</button>
          <button className="hover:text-blue-600 flex items-center gap-1"><Briefcase size={18}/>Worker</button>
          <button className="hover:text-blue-600 flex items-center gap-1"><Briefcase size={18}/>Employer</button>
          <button className="hover:text-blue-600"><Bell size={20}/></button>
          <button className="hover:text-blue-600"><User size={20}/></button>
        </nav>
      </header>

      {/* BODY */}
      <main className="flex-1 px-8 py-6">
        {/* Top 3 Work Requests */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Top Work Requests</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {topRequests.map((req) => (
              <div key={req.id} className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg">{req.title}</h3>
                <p className="text-gray-600">{req.location}</p>
                <p className="text-gray-700 mt-1">Pay: {req.pay}</p>
                <p className="text-gray-700">Duration: {req.duration}</p>
                <div className="flex gap-3 mt-4">
                  <button onClick={() => handleAccept(req.id)} className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600">Accept</button>
                  <button onClick={() => handleReject(req.id)} className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">Reject</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Works Section */}
        <section className="mt-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Available Works</h2>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Filter by location or title..."
                className="border rounded-lg px-3 py-1"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
              <select
                className="border rounded-lg px-3 py-1"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="recent">Sort: Recent</option>
                <option value="pay">Sort: Pay (High → Low)</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {allWorks
              .filter((w) => w.title.toLowerCase().includes(filter.toLowerCase()) || w.location.toLowerCase().includes(filter.toLowerCase()))
              .map((work) => (
                <div key={work.id} className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
                  <h3 className="font-bold text-lg">{work.title}</h3>
                  <p className="text-gray-600">{work.location}</p>
                  <p className="text-gray-700 mt-1">Pay: {work.pay}</p>
                  <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    View Details
                  </button>
                </div>
              ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-gray-200 py-6 px-8 mt-10">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="font-semibold text-lg">Udyogi – The WorkBridge</h3>
            <p className="text-sm text-gray-400">Connecting Workers and Employers Seamlessly</p>
          </div>
          <div>
            <p>📞 Contact: +91 98765 43210</p>
            <p>📧 Email: support@udyogi.com</p>
            <p>🌐 www.udyogi.com</p>
          </div>
        </div>
        <p className="text-center text-gray-400 mt-4 text-sm">© 2025 Udyogi. All rights reserved.</p>
      </footer>
    </div>
  );
}
