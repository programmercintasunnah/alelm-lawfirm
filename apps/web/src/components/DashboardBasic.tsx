import React, { useState } from 'react';

const initialServices = [
  { id: '1', title: 'Hukum Keluarga', description: 'Perceraian, hak asuh anak, warisan', icon: '👨‍👩‍👧‍👦' },
  { id: '2', title: 'Hukum Perdata', description: 'Sengketa perdata, kontrak', icon: '📜' },
  { id: '3', title: 'Perjanjian Riba', description: 'Perjanjian riba, pembiayaan', icon: '💰' }
];

export default function DashboardBasic() {
  const [services] = useState(initialServices);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Poppins', sans-serif" }}>
      <aside style={{ 
        width: '200px', 
        background: '#1a365d', 
        color: 'white', 
        padding: '20px', 
        position: 'fixed', 
        height: '100vh',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <h1 style={{ fontSize: '1rem', fontFamily: "'Playfair Display', serif", marginBottom: '5px' }}>⚖️ Dashboard</h1>
          <span style={{ background: '#c9a227', color: '#1a365d', padding: '2px 8px', borderRadius: '10px', fontSize: '0.65rem', fontWeight: 600 }}>BASIC</span>
        </div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: 1 }}>
          {[
            { key: 'services', label: '⚙️ Layanan', href: '/dashboard' },
            { key: 'team', label: '👥 Tim', href: '/dashboard/team' },
            { key: 'faq', label: '❓ FAQ', href: '/dashboard/faq' },
            { key: 'contact', label: '📞 Kontak', href: '/dashboard/contact' },
            { key: 'website', label: '🌐 Lihat Website', href: '/website' }
          ].map(item => (
            <a key={item.key} href={item.href} style={{ display: 'block', padding: '10px 12px', color: 'rgba(255,255,255,0.8)', borderRadius: '4px', fontSize: '0.85rem', textDecoration: 'none', transition: 'all 0.2s' }}>
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      <main style={{ marginLeft: '200px', flex: 1, padding: '20px', background: '#f7fafc' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', color: '#1a365d', marginBottom: '5px' }}>Dashboard Basic</h2>
            <p style={{ color: '#718096', fontSize: '0.9rem' }}>Kelola konten website</p>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', padding: '10px', background: '#1a365d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>☰</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '15px', marginBottom: '25px' }}>
          {[
            { label: 'Layanan', value: services.length },
            { label: 'Tim', value: 3 },
            { label: 'FAQ', value: 5 },
            { label: 'Inquiry', value: 12 }
          ].map(stat => (
            <div key={stat.label} style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: '#718096', fontSize: '0.75rem', fontWeight: 500, marginBottom: '8px' }}>{stat.label}</h3>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1a365d' }}>{stat.value}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: '#1a365d', marginBottom: '15px', fontSize: '1rem' }}>Kelola Layanan (CRUD)</h3>
          
          <div style={{ background: '#f7fafc', padding: '15px', borderRadius: '6px', marginBottom: '15px' }}>
            <h4 style={{ color: '#1a365d', marginBottom: '10px', fontSize: '0.9rem' }}>Tambah Layanan Baru</h4>
            <input type="text" placeholder="Nama layanan" style={{ width: '100%', padding: '10px', border: '2px solid #e2e8f0', borderRadius: '4px', marginBottom: '10px', fontSize: '0.9rem' }} />
            <textarea placeholder="Deskripsi" style={{ width: '100%', padding: '10px', border: '2px solid #e2e8f0', borderRadius: '4px', minHeight: '60px', marginBottom: '10px', fontSize: '0.9rem' }} />
            <button style={{ padding: '8px 16px', background: '#c9a227', color: '#1a365d', fontWeight: 600, borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '0.85rem' }}>Tambah</button>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr>
                <th style={{ padding: '10px', textAlign: 'left', background: '#f7fafc', color: '#1a365d', fontWeight: 600, fontSize: '0.8rem' }}>Icon</th>
                <th style={{ padding: '10px', textAlign: 'left', background: '#f7fafc', color: '#1a365d', fontWeight: 600, fontSize: '0.8rem' }}>Nama</th>
                <th style={{ padding: '10px', textAlign: 'left', background: '#f7fafc', color: '#1a365d', fontWeight: 600, fontSize: '0.8rem' }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {services.map(service => (
                <tr key={service.id}>
                  <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>{service.icon}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>{service.title}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>
                    <button style={{ padding: '5px 10px', background: '#c9a227', color: '#1a365d', fontWeight: 600, borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '0.75rem', marginRight: '5px' }}>Edit</button>
                    <button style={{ padding: '5px 10px', background: '#e53e3e', color: 'white', fontWeight: 600, borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '0.75rem' }}>Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <style>{`
        @media (max-width: 768px) {
          aside { display: ${menuOpen ? 'flex' : 'none'} !important; position: fixed; z-index: 1000; width: 180px; }
          main { margin-left: 0; }
        }
      `}</style>
    </div>
  );
}