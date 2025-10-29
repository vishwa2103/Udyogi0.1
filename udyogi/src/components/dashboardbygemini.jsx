import React, { useState, useMemo } from 'react';
import { Home, Briefcase, User, Bell, MapPin, IndianRupee, Clock, Search, Filter, X, Menu, CheckCircle, XCircle } from 'lucide-react';

// Main App Component - Encapsulates the entire dashboard
export default function App() {

  // --- STATE MANAGEMENT ---
  // A single source of truth for all dynamic parts of the UI.
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("pay-desc");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Modal state for better user feedback instead of jarring alerts.
  const [modal, setModal] = useState({ isOpen: false, title: '', message: '', type: 'info' });

  // --- MOCK DATA ---
  // Expanded and more realistic data set for a better demonstration.
  const topRequests = [
    { id: 1, title: "Urgent Plumbing Work", location: "Hyderabad", pay: 1200, duration: "2 days", type: 'Plumbing', recommended: true },
    { id: 2, title: "Commercial Electrician Helper", location: "Bangalore", pay: 1500, duration: "3 days", type: 'Electrical', recommended: true },
    { id: 3, title: "Apartment Complex Painter", location: "Chennai", pay: 1100, duration: "1 week", type: 'Painting', recommended: true },
  ];

  const allWorks = [
    { id: 4, title: "Residential House Cleaning", location: "Hyderabad", pay: 750, duration: "1 day", type: 'Cleaning' },
    { id: 5, title: "Landscaped Garden Maintenance", location: "Vijayawada", pay: 850, duration: "Ongoing", type: 'Gardening' },
    { id: 6, title: "Exterior Wall Plastering", location: "Bangalore", pay: 1800, duration: "5 days", type: 'Construction' },
    { id: 7, title: "Office Interior Painting", location: "Hyderabad", pay: 1300, duration: "4 days", type: 'Painting' },
    { id: 8, title: "Fixture Installation", location: "Bangalore", pay: 900, duration: "2 days", type: 'Electrical' },
    { id: 9, title: "Kitchen Deep Cleaning", location: "Chennai", pay: 800, duration: "1 day", type: 'Cleaning' },
    { id: 10, title: "Rooftop Waterproofing", location: "Vijayawada", pay: 2000, duration: "3 days", type: 'Construction' },
  ];
  
  // --- DERIVED STATE & LOGIC ---
  // Using useMemo to efficiently filter and sort data without re-calculating on every render.
  const filteredAndSortedWorks = useMemo(() => {
    let works = allWorks.filter(w =>
      w.title.toLowerCase().includes(filter.toLowerCase()) ||
      w.location.toLowerCase().includes(filter.toLowerCase()) ||
      w.type.toLowerCase().includes(filter.toLowerCase())
    );

    switch (sort) {
      case 'pay-desc':
        works.sort((a, b) => b.pay - a.pay);
        break;
      case 'pay-asc':
        works.sort((a, b) => a.pay - b.pay);
        break;
      case 'recent':
        // Assuming higher ID is more recent
        works.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return works;
  }, [filter, sort]);
  
  // --- EVENT HANDLERS ---
  // Centralized handlers provide clear actions and trigger feedback.
  const handleAccept = (id, title) => {
    setModal({
      isOpen: true,
      title: 'Request Accepted',
      message: `You have accepted the job: "${title}". The employer will be notified.`,
      type: 'success'
    });
  };

  const handleReject = (id, title) => {
     setModal({
      isOpen: true,
      title: 'Request Rejected',
      message: `You have rejected the job: "${title}".`,
      type: 'danger'
    });
  };
  
  const closeModal = () => setModal({ ...modal, isOpen: false });

  // --- UI COMPONENTS (Sub-components defined within for encapsulation) ---
  
  // A reusable card component for displaying job details.
  const JobCard = ({ work, isTopRequest = false }) => (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out p-6 flex flex-col border border-slate-200">
      {work.recommended && <div className="text-xs font-semibold text-indigo-600 bg-indigo-100 self-start px-3 py-1 rounded-full mb-3">Recommended for you</div>}
      <h3 className="font-bold text-lg text-slate-800">{work.title}</h3>
      <div className="flex items-center gap-2 text-slate-500 mt-2 text-sm">
        <MapPin size={16} />
        <span>{work.location}</span>
      </div>
       <div className="my-4 pt-4 border-t border-slate-200 flex-1 space-y-2">
         <div className="flex items-center gap-3 text-slate-600">
           <IndianRupee size={18} className="text-green-600"/>
           <span className="font-semibold text-green-700 text-lg">{work.pay.toLocaleString('en-IN')}<span className="text-sm font-normal text-slate-500">/day</span></span>
         </div>
         <div className="flex items-center gap-3 text-slate-600">
           <Clock size={18} className="text-blue-600"/>
           <span className="font-medium">{work.duration}</span>
         </div>
       </div>
      <div className="flex gap-3 mt-auto">
        {isTopRequest ? (
          <>
            <button onClick={() => handleAccept(work.id, work.title)} className="flex-1 text-center py-2.5 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-300">Accept</button>
            <button onClick={() => handleReject(work.id, work.title)} className="flex-1 text-center py-2.5 bg-slate-200 text-slate-700 rounded-lg font-semibold hover:bg-slate-300 transition-colors duration-300">Reject</button>
          </>
        ) : (
          <button className="w-full text-center py-2.5 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">View Details</button>
        )}
      </div>
    </div>
  );
  
  // A simple, elegant modal for notifications.
  const FeedbackModal = () => {
    if (!modal.isOpen) return null;

    const colors = {
      success: { icon: CheckCircle, bg: 'bg-emerald-100', text: 'text-emerald-800', iconColor: 'text-emerald-500' },
      danger: { icon: XCircle, bg: 'bg-rose-100', text: 'text-rose-800', iconColor: 'text-rose-500' },
      info: { icon: Bell, bg: 'bg-blue-100', text: 'text-blue-800', iconColor: 'text-blue-500' },
    };
    
    const { icon: Icon, bg, text, iconColor } = colors[modal.type];

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={closeModal}>
        <div className={`bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-auto transform transition-all duration-300 ease-out scale-95 animate-modal-pop`} onClick={e => e.stopPropagation()}>
          <div className="flex flex-col items-center text-center">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${bg} mb-4`}>
              <Icon size={40} className={iconColor} />
            </div>
            <h2 className={`text-2xl font-bold ${text}`}>{modal.title}</h2>
            <p className="text-slate-600 mt-2">{modal.message}</p>
            <button onClick={closeModal} className="mt-6 w-full py-2.5 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">Close</button>
          </div>
        </div>
      </div>
    );
  };
  
  // --- MAIN RENDER ---
  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
      <FeedbackModal />

      {/* HEADER */}
      <header className="bg-white/80 backdrop-blur-lg shadow-sm py-3 px-4 sm:px-6 flex justify-between items-center sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <img src="https://placehold.co/40x40/6366f1/ffffff?text=U" alt="Udyogi Logo" className="rounded-lg" />
          <h1 className="text-xl font-bold text-indigo-600 hidden sm:block">Udyogi</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <a href="#" className="text-indigo-600 border-b-2 border-indigo-600 pb-1">Dashboard</a>
          <a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">My Jobs</a>
          <a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">Earnings</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="text-slate-500 hover:text-indigo-600 relative">
            <Bell size={22}/>
            <span className="absolute -top-1 -right-1.5 w-4 h-4 bg-rose-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
          </button>
          <button className="text-slate-500 hover:text-indigo-600">
            <User size={22}/>
          </button>
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-slate-600">
             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-md p-4 animate-slide-down">
          <a href="#" className="block py-2 text-indigo-600 font-semibold">Dashboard</a>
          <a href="#" className="block py-2 text-slate-600 hover:text-indigo-600">My Jobs</a>
          <a href="#" className="block py-2 text-slate-600 hover:text-indigo-600">Earnings</a>
        </nav>
      )}

      {/* BODY */}
      <main className="px-4 sm:px-6 py-8">
        {/* Welcome & Stats Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800">Welcome Back, Worker!</h2>
          <p className="text-slate-500 mt-1">Here's your job summary for today.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-sm font-semibold text-slate-500">Active Applications</h3>
                <p className="text-3xl font-bold text-indigo-600 mt-1">5</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-sm font-semibold text-slate-500">Jobs Completed</h3>
                <p className="text-3xl font-bold text-emerald-600 mt-1">27</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-sm font-semibold text-slate-500">Avg. Rating</h3>
                <p className="text-3xl font-bold text-amber-500 mt-1">4.8/5</p>
              </div>
               <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-sm font-semibold text-slate-500">Total Earnings (Oct)</h3>
                <p className="text-3xl font-bold text-slate-800 mt-1">₹18,500</p>
              </div>
          </div>
        </section>

        {/* Top Work Requests */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-5 text-slate-800">New High-Priority Requests</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topRequests.map((req) => <JobCard key={req.id} work={req} isTopRequest />)}
          </div>
        </section>

        {/* All Works Section */}
        <section>
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
            <h2 className="text-2xl font-semibold text-slate-800">Explore All Available Works</h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
                <input
                  type="text"
                  placeholder="Filter by job, location..."
                  className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                />
              </div>
              <div className="relative">
                 <Filter size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
                <select
                  className="w-full appearance-none border border-slate-300 rounded-lg pl-10 pr-4 py-2 bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option value="pay-desc">Pay: High to Low</option>
                  <option value="pay-asc">Pay: Low to High</option>
                  <option value="recent">Most Recent</option>
                </select>
              </div>
            </div>
          </div>
          
          {filteredAndSortedWorks.length > 0 ? (
             <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredAndSortedWorks.map((work) => <JobCard key={work.id} work={work} />)}
             </div>
          ) : (
             <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
                <p className="text-slate-500">No jobs match your current filter.</p>
             </div>
          )}
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-800 text-slate-300 py-10 px-4 sm:px-8 mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg text-white">Udyogi – The WorkBridge</h3>
              <p className="text-sm text-slate-400 mt-2">Connecting Workers and Employers Seamlessly.</p>
            </div>
            <div className="text-sm">
                <h4 className="font-semibold text-white mb-2">Quick Links</h4>
                <a href="#" className="block text-slate-400 hover:text-white mb-1">About Us</a>
                <a href="#" className="block text-slate-400 hover:text-white mb-1">Help Center</a>
                <a href="#" className="block text-slate-400 hover:text-white">Terms of Service</a>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Contact Us</h4>
              <p className="text-sm text-slate-400">📞 +91 98765 43210</p>
              <p className="text-sm text-slate-400">📧 support@udyogi.com</p>
            </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-400 text-sm">
            <p>© 2025 Udyogi. All rights reserved.</p>
        </div>
      </footer>

      {/* Add custom CSS for animations if needed */}
      <style>{`
        @keyframes modal-pop {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-modal-pop {
          animation: modal-pop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        @keyframes slide-down {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down {
            animation: slide-down 0.3s ease-out forwards;
        }
        body {
            font-family: 'Inter', sans-serif;
        }
      `}</style>
       <link rel="preconnect" href="https://fonts.googleapis.com" />
       <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
       <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"></link>
    </div>
  );
}
