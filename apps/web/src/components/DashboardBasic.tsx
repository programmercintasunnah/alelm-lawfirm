import React, { useState } from 'react';
import { DashboardSidebar, DashboardNavbar } from '../components/DashboardShared';

const initialServices = [
  { id: '1', title: 'Hukum Keluarga', description: 'Perceraian, hak asuh anak, warisan', icon: 'A' },
  { id: '2', title: 'Hukum Perdata', description: 'Sengketa perdata, kontrak', icon: 'B' },
  { id: '3', title: 'Perjanjian Riba', description: 'Perjanjian riba, pembiayaan', icon: 'C' }
];

export default function DashboardBasic() {
  const [services] = useState(initialServices);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', fontFamily: "'Poppins', sans-serif", background: '#f7fafc' }}>
      {/* Reusable Navbar */}
      <DashboardNavbar 
        package="basic"
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        profileModalOpen={profileModalOpen}
        setProfileModalOpen={setProfileModalOpen}
        userName="Admin"
        userRole="Administrator"
      />

      {/* Reusable Sidebar */}
      <DashboardSidebar 
        package="basic"
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentPath="/dashboard"
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
          <h2 style={{ fontSize: '1.5rem', color: '#1a365d', marginBottom: '5px' }}>Dashboard Basic</h2>
          <p style={{ color: '#718096', fontSize: '0.9rem' }}>Kelola konten website</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '15px', marginBottom: '25px' }}>
          {[
            { label: 'Layanan', value: services.length },
            { label: 'Tim', value: 3 },
            { label: 'FAQ', value: 5 },
            { label: 'Pesan', value: 12 }
          ].map(stat => (
            <div key={stat.label} style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: '#718096', fontSize: '0.75rem', fontWeight: 500, marginBottom: '8px' }}>{stat.label}</h3>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1a365d' }}>{stat.value}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: '#1a365d', marginBottom: '15px', fontSize: '1rem' }}>Kelola Layanan</h3>
          
          <div style={{ background: '#f7fafc', padding: '15px', borderRadius: '6px', marginBottom: '15px' }}>
            <h4 style={{ color: '#1a365d', marginBottom: '10px', fontSize: '0.9rem' }}>Tambah Layanan</h4>
            <input type="text" placeholder="Nama layanan" style={{ width: '100%', padding: '10px', border: '2px solid #e2e8f0', borderRadius: '4px', marginBottom: '10px', fontSize: '0.9rem' }} />
            <textarea placeholder="Deskripsi" style={{ width: '100%', padding: '10px', border: '2px solid #e2e8f0', borderRadius: '4px', minHeight: '60px', marginBottom: '10px', fontSize: '0.9rem' }} />
            <button style={{ padding: '8px 16px', background: '#c9a227', color: '#1a365d', fontWeight: 600, borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '0.85rem' }}>Simpan</button>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr>
                <th style={{ padding: '10px', textAlign: 'left', background: '#f7fafc', color: '#1a365d', fontWeight: 600, fontSize: '0.75rem' }}>Icon</th>
                <th style={{ padding: '10px', textAlign: 'left', background: '#f7fafc', color: '#1a365d', fontWeight: 600, fontSize: '0.75rem' }}>Nama</th>
                <th style={{ padding: '10px', textAlign: 'left', background: '#f7fafc', color: '#1a365d', fontWeight: 600, fontSize: '0.75rem' }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {services.map(service => (
                <tr key={service.id}>
                  <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>{service.icon}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>{service.title}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>
                    <button style={{ padding: '5px 8px', background: '#3182ce', color: 'white', fontWeight: 600, borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '0.7rem', marginRight: '5px' }}>Edit</button>
                    <button style={{ padding: '5px 8px', background: '#e53e3e', color: 'white', fontWeight: 600, borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '0.7rem' }}>Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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