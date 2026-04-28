import React, { useState } from 'react';

const initialBookings = [
  { id: '1', clientName: 'Budi Santoso', service: 'Hukum Keluarga', date: '2026-05-15', status: 'pending' },
  { id: '2', clientName: 'Ani Wijaya', service: 'Hukum Perdata', date: '2026-05-14', status: 'confirmed' },
  { id: '3', clientName: 'Ahmad Fauzi', service: 'Perjanjian Riba', date: '2026-05-13', status: 'completed' }
];

const initialServices = [
  { id: '1', title: 'Hukum Keluarga', description: 'Perceraian, hak asuh anak, warisan', icon: '👨‍👩‍👧‍👦' },
  { id: '2', title: 'Hukum Perdata', description: 'Sengketa perdata, kontrak', icon: '📜' },
  { id: '3', title: 'Perjanjian Riba', description: 'Perjanjian riba, pembiayaan', icon: '💰' }
];

export default function DashboardCustom() {
  const [bookings] = useState(initialBookings);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Poppins', sans-serif" }}>
      <aside style={{ 
        width: '200px', 
        background: 'linear-gradient(180deg, #1a365d, #0d1f3c)', 
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
          <span style={{ background: '#c9a227', color: '#1a365d', padding: '2px 8px', borderRadius: '10px', fontSize: '0.65rem', fontWeight: 600 }}>CUSTOM</span>
        </div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: 1 }}>
          {[
            { key: 'dashboard', label: '📊 Dashboard', href: '/dashboard-custom' },
            { key: 'services', label: '⚙️ Layanan', href: '/dashboard-custom/services' },
            { key: 'team', label: '👥 Tim', href: '/dashboard-custom/team' },
            { key: 'faq', label: '❓ FAQ', href: '/dashboard-custom/faq' },
            { key: 'contact', label: '📞 Kontak', href: '/dashboard-custom/contact' },
            { key: 'booking', label: '📅 Booking', href: '/dashboard-custom/booking' },
            { key: 'scheduling', label: '📆 Scheduling', href: '/dashboard-custom/scheduling' },
            { key: 'articles', label: '📝 Articles', href: '/dashboard-custom/articles' },
            { key: 'website', label: '🌐 Website', href: '/website-custom' }
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
            <h2 style={{ fontSize: '1.5rem', color: '#1a365d', marginBottom: '5px' }}>Dashboard CUSTOM</h2>
            <p style={{ color: '#718096', fontSize: '0.9rem' }}>Kelola konten dan booking</p>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', padding: '10px', background: '#1a365d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>☰</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '15px', marginBottom: '25px' }}>
          {[
            { label: 'Total Booking', value: 48 },
            { label: 'Pending', value: 12 },
            { label: 'Confirmed', value: 28 },
            { label: 'Revenue', value: 'Rp 84jt', premium: true }
          ].map(stat => (
            <div key={stat.label} style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', borderLeft: stat.premium ? '3px solid #805ad5' : '3px solid #c9a227' }}>
              <h3 style={{ color: '#718096', fontSize: '0.75rem', fontWeight: 500, marginBottom: '8px' }}>{stat.label}</h3>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1a365d' }}>{stat.value}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', marginBottom: '25px' }}>
          <h3 style={{ color: '#1a365d', marginBottom: '15px', fontSize: '1rem' }}>📅 Recent Bookings</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr>
                <th style={{ padding: '10px', textAlign: 'left', background: '#f7fafc', color: '#1a365d', fontWeight: 600, fontSize: '0.8rem' }}>Nama Klien</th>
                <th style={{ padding: '10px', textAlign: 'left', background: '#f7fafc', color: '#1a365d', fontWeight: 600, fontSize: '0.8rem' }}>Layanan</th>
                <th style={{ padding: '10px', textAlign: 'left', background: '#f7fafc', color: '#1a365d', fontWeight: 600, fontSize: '0.8rem' }}>Tanggal</th>
                <th style={{ padding: '10px', textAlign: 'left', background: '#f7fafc', color: '#1a365d', fontWeight: 600, fontSize: '0.8rem' }}>Status</th>
                <th style={{ padding: '10px', textAlign: 'left', background: '#f7fafc', color: '#1a365d', fontWeight: 600, fontSize: '0.8rem' }}>Aksi</th>
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
                      {booking.status}
                    </span>
                  </td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>
                    {booking.status === 'pending' && (
                      <>
                        <button style={{ padding: '5px 10px', background: '#38a169', color: 'white', fontWeight: 600, borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '0.75rem', marginRight: '3px' }}>Terima</button>
                        <button style={{ padding: '5px 10px', background: '#e53e3e', color: 'white', fontWeight: 600, borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '0.75rem' }}>Tolak</button>
                      </>
                    )}
                    {booking.status === 'confirmed' && (
                      <button style={{ padding: '5px 10px', background: '#3182ce', color: 'white', fontWeight: 600, borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '0.75rem' }}>Selesai</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px' }}>
          {[
            { icon: '📅', title: 'Booking', desc: 'Kelola booking' },
            { icon: '📆', title: 'Scheduling', desc: 'Kelola jadwal' },
            { icon: '📝', title: 'Articles', desc: 'Kelola blog' },
            { icon: '💬', title: 'Live Chat', desc: 'Chat klien' }
          ].map(feature => (
            <div key={feature.title} style={{ background: '#f7fafc', padding: '15px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '12px' }}>
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
          aside { display: ${menuOpen ? 'flex' : 'none'} !important; position: fixed; z-index: 1000; width: 180px; }
          main { margin-left: 0; }
        }
      `}</style>
    </div>
  );
}