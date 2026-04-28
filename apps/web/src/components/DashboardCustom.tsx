import React, { useState } from 'react';
import { DashboardSidebar, DashboardNavbar } from '../components/DashboardShared';

const initialBookings = [
  { id: '1', clientName: 'Budi Santoso', service: 'Hukum Keluarga', date: '2026-05-15', status: 'pending' },
  { id: '2', clientName: 'Ani Wijaya', service: 'Hukum Perdata', date: '2026-05-14', status: 'confirmed' },
  { id: '3', clientName: 'Ahmad Fauzi', service: 'Perjanjian Riba', date: '2026-05-13', status: 'completed' }
];

export default function DashboardCustom() {
  const [bookings] = useState(initialBookings);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', fontFamily: "'Poppins', sans-serif", background: '#f7fafc' }}>
      {/* Reusable Navbar */}
      <DashboardNavbar 
        package="custom"
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        profileModalOpen={profileModalOpen}
        setProfileModalOpen={setProfileModalOpen}
        userName="Admin"
        userRole="Super Admin"
      />

      {/* Reusable Sidebar */}
      <DashboardSidebar 
        package="custom"
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentPath="/dashboard-custom"
      />

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div onClick={() => setSidebarOpen(false)} 
             style={{ position: 'fixed', top: '60px', left: 0, right: 0, bottom: 0, 
                     background: 'rgba(0,0,0,0.5)', zIndex: 998 }} />
      )}

      {/* Main Content */}
      <main style={{ marginTop: '60px', padding: '20px', marginLeft: sidebarOpen ? '220px' : '20px', transition: 'margin-left 0.3s' }}>
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#1a365d', marginBottom: '5px' }}>Dashboard Custom</h2>
          <p style={{ color: '#718096', fontSize: '0.9rem' }}>Kelola konten dan booking</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '15px', marginBottom: '25px' }}>
          {[
            { label: 'Total Booking', value: 48 },
            { label: 'Menunggu', value: 12 },
            { label: 'Dikonfirmasi', value: 28 },
            { label: 'Pendapatan', value: 'Rp 84jt', premium: true }
          ].map(stat => (
            <div key={stat.label} style={{ background: 'white', padding: '20px', borderRadius: '8px', 
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.08)', 
                                        borderLeft: stat.premium ? '3px solid #805ad5' : '3px solid #c9a227' }}>
              <h3 style={{ color: '#718096', fontSize: '0.75rem', fontWeight: 500, marginBottom: '8px' }}>{stat.label}</h3>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1a365d' }}>{stat.value}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', marginBottom: '25px' }}>
          <h3 style={{ color: '#1a365d', marginBottom: '15px', fontSize: '1rem' }}>Booking Terbaru</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr>
                <th style={{ padding: '10px', textAlign: 'left', background: '#f7fafc', color: '#1a365d', fontWeight: 600, fontSize: '0.75rem' }}>Nama Klien</th>
                <th style={{ padding: '10px', textAlign: 'left', background: '#f7fafc', color: '#1a365d', fontWeight: 600, fontSize: '0.75rem' }}>Layanan</th>
                <th style={{ padding: '10px', textAlign: 'left', background: '#f7fafc', color: '#1a365d', fontWeight: 600, fontSize: '0.75rem' }}>Tanggal</th>
                <th style={{ padding: '10px', textAlign: 'left', background: '#f7fafc', color: '#1a365d', fontWeight: 600, fontSize: '0.75rem' }}>Status</th>
                <th style={{ padding: '10px', textAlign: 'left', background: '#f7fafc', color: '#1a365d', fontWeight: 600, fontSize: '0.75rem' }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(booking => (
                <tr key={booking.id}>
                  <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>{booking.clientName}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>{booking.service}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>{booking.date}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>
                    <span style={{ 
                      padding: '3px 8px', borderRadius: '10px', fontSize: '0.7rem', fontWeight: 500,
                      background: booking.status === 'pending' ? '#fefcbf' : booking.status === 'confirmed' ? '#c6f6d5' : '#bee3f8',
                      color: booking.status === 'pending' ? '#744210' : booking.status === 'confirmed' ? '#22543d' : '#2a4365'
                    }}>
                      {booking.status === 'pending' ? 'Menunggu' : booking.status === 'confirmed' ? 'Dikonfirmasi' : 'Selesai'}
                    </span>
                  </td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>
                    {booking.status === 'pending' && (
                      <>
                        <button style={{ padding: '5px 8px', background: '#38a169', color: 'white', fontWeight: 600, borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '0.7rem', marginRight: '3px' }}>Terima</button>
                        <button style={{ padding: '5px 8px', background: '#e53e3e', color: 'white', fontWeight: 600, borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '0.7rem' }}>Tolak</button>
                      </>
                    )}
                    {booking.status === 'confirmed' && (
                      <button style={{ padding: '5px 8px', background: '#3182ce', color: 'white', fontWeight: 600, borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '0.7rem' }}>Selesai</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px' }}>
          {[
            { icon: '', title: 'Booking', desc: 'Kelola booking' },
            { icon: '', title: 'Jadwal', desc: 'Atur jadwal' },
            { icon: '', title: 'Artikel', desc: 'Tulis blog' },
            { icon: '', title: 'Live Chat', desc: 'Chat klien' }
          ].map(feature => (
            <div key={feature.title} style={{ background: 'white', padding: '15px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <span style={{ fontSize: '1.5rem' }}>{feature.icon}</span>
              <div>
                <h4 style={{ color: '#1a365d', marginBottom: '3px', fontSize: '0.9rem' }}>{feature.title}</h4>
                <p style={{ fontSize: '0.75rem', color: '#718096' }}>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <style>{`
        @media (max-width: 768px) {
          main { margin-left: 0 !important; }
        }
      `}</style>
    </div>
  );
}