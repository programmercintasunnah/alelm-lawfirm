import React, { useState } from 'react';

const initialServices = [
  { id: '1', title: 'Hukum Keluarga', description: 'Perceraian, hak asuh anak, warisan', icon: '👨‍👩‍👧‍👦' },
  { id: '2', title: 'Hukum Perdata', description: 'Sengketa perdata, kontrak', icon: '📜' },
  { id: '3', title: 'Perjanjian Riba', description: 'Perjanjian riba, pembiayaan', icon: '💰' }
];

export default function DashboardBasic() {
  const [services, setServices] = useState(initialServices);
  const [activeTab, setActiveTab] = useState('services');

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: '260px', background: '#1a365d', color: 'white', padding: '20px', position: 'fixed', height: '100vh' }}>
        <h1 style={{ fontSize: '1.25rem', fontFamily: "'Playfair Display', serif", marginBottom: '10px' }}>⚖️ Dashboard</h1>
        <span style={{ background: '#c9a227', color: '#1a365d', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600 }}>BASIC</span>
        
        <nav style={{ marginTop: '30px' }}>
          {[
            { key: 'services', label: '⚙️ Layanan', href: '/dashboard' },
            { key: 'team', label: '👥 Tim', href: '/dashboard/team' },
            { key: 'faq', label: '❓ FAQ', href: '/dashboard/faq' },
            { key: 'contact', label: '📞 Kontak', href: '/dashboard/contact' },
            { key: 'website', label: '🌐 Lihat Website', href: '/website' }
          ].map(item => (
            <a key={item.key} href={item.href} style={{ display: 'block', padding: '14px 20px', color: 'rgba(255,255,255,0.8)', borderLeft: '3px solid transparent', textDecoration: 'none' }}>
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      <main style={{ marginLeft: '260px', flex: 1, padding: '30px' }}>
        <h2 style={{ fontSize: '2rem', color: '#1a365d', marginBottom: '8px' }}>Dashboard Basic</h2>
        <p style={{ color: '#718096', marginBottom: '30px' }}>Kelola konten website</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          {[
            { label: 'Layanan', value: services.length },
            { label: 'Tim Pengacara', value: 3 },
            { label: 'FAQ', value: 5 },
            { label: 'Inquiry', value: 12 }
          ].map(stat => (
            <div key={stat.label} style={{ background: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: '#718096', fontSize: '0.9rem', fontWeight: 500, marginBottom: '10px' }}>{stat.label}</h3>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: '#1a365d' }}>{stat.value}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: '#1a365d', marginBottom: '20px', fontSize: '1.25rem' }}>Kelola Layanan (CRUD)</h3>
          
          <div style={{ background: '#f7fafc', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
            <h4 style={{ color: '#1a365d', marginBottom: '15px' }}>Tambah Layanan Baru</h4>
            <input type="text" placeholder="Nama layanan" style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '6px', marginBottom: '15px' }} />
            <textarea placeholder="Deskripsi" style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '6px', minHeight: '80px', marginBottom: '15px' }} />
            <button style={{ padding: '10px 20px', background: '#c9a227', color: '#1a365d', fontWeight: 600, borderRadius: '6px', border: 'none', cursor: 'pointer' }}>Tambah</button>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ padding: '15px', textAlign: 'left', background: '#f7fafc', color: '#1a365d', fontWeight: 600 }}>Icon</th>
                <th style={{ padding: '15px', textAlign: 'left', background: '#f7fafc', color: '#1a365d', fontWeight: 600 }}>Nama</th>
                <th style={{ padding: '15px', textAlign: 'left', background: '#f7fafc', color: '#1a365d', fontWeight: 600 }}>Deskripsi</th>
                <th style={{ padding: '15px', textAlign: 'left', background: '#f7fafc', color: '#1a365d', fontWeight: 600 }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {services.map(service => (
                <tr key={service.id}>
                  <td style={{ padding: '15px', borderBottom: '1px solid #e2e8f0' }}>{service.icon}</td>
                  <td style={{ padding: '15px', borderBottom: '1px solid #e2e8f0' }}>{service.title}</td>
                  <td style={{ padding: '15px', borderBottom: '1px solid #e2e8f0' }}>{service.description}</td>
                  <td style={{ padding: '15px', borderBottom: '1px solid #e2e8f0' }}>
                    <button style={{ padding: '8px 15px', background: '#c9a227', color: '#1a365d', fontWeight: 600, borderRadius: '6px', border: 'none', cursor: 'pointer', marginRight: '10px' }}>Edit</button>
                    <button style={{ padding: '8px 15px', background: '#e53e3e', color: 'white', fontWeight: 600, borderRadius: '6px', border: 'none', cursor: 'pointer' }}>Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}