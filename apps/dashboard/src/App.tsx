import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import DashboardHome from './pages/DashboardHome';
import Services from './pages/Services';
import Team from './pages/Team';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="dashboard">
        <aside className="sidebar">
          <div className="sidebar-header">
            <h1>⚖️ Dashboard</h1>
            <span className="badge">Basic</span>
          </div>
          <nav className="sidebar-nav">
            <Link to="/dashboard" className="nav-item">📊 Dashboard</Link>
            <Link to="/dashboard/services" className="nav-item">⚙️ Layanan</Link>
            <Link to="/dashboard/team" className="nav-item">👥 Tim</Link>
            <Link to="/dashboard/faq" className="nav-item">❓ FAQ</Link>
            <Link to="/dashboard/contact" className="nav-item">📞 Kontak</Link>
            <Link to="/website" className="nav-item">🌐 Lihat Website</Link>
          </nav>
        </aside>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;