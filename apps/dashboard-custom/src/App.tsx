import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import DashboardHome from './pages/DashboardHome';
import Services from './pages/Services';
import Team from './pages/Team';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Scheduling from './pages/Scheduling';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="dashboard">
        <aside className="sidebar">
          <div className="sidebar-header">
            <h1>⚖️ Dashboard</h1>
            <span className="badge">CUSTOM</span>
          </div>
          <nav className="sidebar-nav">
            <Link to="/dashboard-custom" className="nav-item">📊 Dashboard</Link>
            <Link to="/dashboard-custom/services" className="nav-item">⚙️ Layanan</Link>
            <Link to="/dashboard-custom/team" className="nav-item">👥 Tim</Link>
            <Link to="/dashboard-custom/faq" className="nav-item">❓ FAQ</Link>
            <Link to="/dashboard-custom/contact" className="nav-item">📞 Kontak</Link>
            <Link to="/dashboard-custom/booking" className="nav-item">📅 Booking</Link>
            <Link to="/dashboard-custom/scheduling" className="nav-item">📆 Scheduling</Link>
            <Link to="/dashboard-custom/articles" className="nav-item">📝 Articles</Link>
            <Link to="/website-custom" className="nav-item">🌐 Lihat Website</Link>
          </nav>
        </aside>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/scheduling" element={<Scheduling />} />
            <Route path="/articles" element={<div className="content-card"><h3>📝 Articles Management</h3><p>Fitur CUSTOM: Kelola artikel dan blog.</p></div>} />
            <Route path="*" element={<Navigate to="/dashboard-custom" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;