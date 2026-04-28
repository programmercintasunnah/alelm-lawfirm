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
  const [activeTab, setActiveTab] = useState('dashboard');
  const [bookings] = useState(initialBookings);

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: '280px', background: 'linear-gradient(180deg, #1a365d, #0d1f3c)', color: 'white', padding: '20px', position: 'fixed', height: '100vh' }}>
        <h1 style={{ fontSize: '1.25rem', fontFamily: "'Playfair Display', serif", marginBottom: '10px' }}>⚖️ Dashboard</h1>
        <span style={{ background: '#c9a227', color: '#1a365d', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600 }}>CUSTOM</span>
        
        <nav style={{ marginTop: '30px' }}>
          {[
            { key: 'dashboard', label: '📊 Dashboard', href: '/dashboard-custom' },
            { key: 'services', label: '⚙️ Layanan', href: '/dashboard-custom/services' },
            { key: 'team', label: '👥 Tim', href: '/dashboard-custom/team' },
            { key: 'faq', label: '❓ FAQ', href: '/dashboard-custom/faq' },
            { key: 'contact', label: '📞 Kontak', href: '/dashboard-custom/contact' },
            { key: 'booking', label: '📅 Booking', href: '/dashboard-custom/booking' },
            { key: 'scheduling', label: '📆 Scheduling', href: '/dashboard-custom/scheduling' },
            { key: 'articles', label: '📝 Articles', href: '/dashboard-custom/articles' },
            { key: 'website', label: '🌐 Lihat Website', href: '/website-custom' }
          ].map(item => (
            <a key={item.key} href={item.href} style={{ display: 'block', padding: '14px 20px', color: 'rgba(255,255,255,0.8)', borderLeft: '3px solid transparent', textDecoration: 'none' }}>
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      <main style={{ marginLeft: '280px', flex: 1, padding: '30px' }}>
        <h2 style={{ fontSize: '2rem', color: '#1a365d', marginBottom: '8px' }}>Dashboard CUSTOM</h2>
        <p style={{ color: '#718096', marginBottom: '30px' }}>Kelola konten dan booking</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          {[
            { label: 'Total Booking', value: 48 },
            { label: 'Pending', value: 12 },
            { label: 'Confirmed', value: 28 },
            { label: 'Revenue', value: 'Rp 84jt', premium: true }
          ].map(stat => (
            <div key={stat.label} style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', borderLeft: stat.premium ? '4px solid #805ad5' : '4px solid #c9a227' }}>
              <h3 style={{ color: '#718096', fontSize: '0.9rem', fontWeight: 500, marginBottom: '10px' }}>{stat.label}</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1a365d' }}>{stat.value}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', marginBottom: '30px' }}>
          <h3 style={{ color: '#1a365d', marginBottom: '20px', fontSize: '1.25rem' }}>📅 Recent Bookings</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ padding: '15px', textAlign: 'left', background: '#f7fafc', color: '#1a365d', fontWeight: 600 }}>Nama Klien</th>
                <th style={{ padding: '15px', textAlign: 'left', background: '#f7fafc', color: '#1a365d', fontWeight: 600 }}>Layanan</th>
                <th style={{ padding: '15px', textAlign: 'left', background: '#f7fafc', color: '#1a365d', fontWeight: 600 }}>Tanggal</th>
                <th style={{ padding: '15px', textAlign: 'left', background: '#f7fafc', color: '#1a365d', fontWeight: 600 }}>Status</th>
                <th style={{ padding: '15px', textAlign: 'left', background: '#f7fafc', color: '#1a365d', fontWeight: 600 }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(booking => (
                <tr key={booking.id}>
                  <td style={{ padding: '15px', borderBottom: '1px solid #e2e8f0' }}>{booking.clientName}</td>
                  <td style={{ padding: '15px', borderBottom: '1px solid #e2e8f0' }}>{booking.service}</td>
                  <td style={{ padding: '15px', borderBottom: '1px solid #e2e8f0' }}>{booking.date}</td>
                  <td style={{ padding: '15px', borderBottom: '1px solid #e2e8f0' }}>
                    <span style={{ 
                      padding: '5px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 500,
                      background: booking.status === 'pending' ? '#fefcbf' : booking.status === 'confirmed' ? '#c6f6d5' : '#bee3f8',
                      color: booking.status === 'pending' ? '#744210' : booking.status === 'confirmed' ? '#22543d' : '#2a4365'
                    }}>
                      {booking.status}
                    </span>
                  </td>
                  <td style={{ padding: '15px', borderBottom: '1px solid #e2e8f0' }}>
                    {booking.status === 'pending' && (
                      <>
                        <button style={{ padding: '8px 15px', background: '#38a169', color: 'white', fontWeight: 600, borderRadius: '6px', border: 'none', cursor: 'pointer', marginRight: '5px' }}>Terima</button>
                        <button style={{ padding: '8px 15px', background: '#e53e3e', color: 'white', fontWeight: 600, borderRadius: '6px', border: 'none', cursor: 'pointer' }}>Tolak</button>
                      </>
                    )}
                    {booking.status === 'confirmed' && (
                      <button style={{ padding: '8px 15px', background: '#3182ce', color: 'white', fontWeight: 600, borderRadius: '6px', border: 'none', cursor: 'pointer' }}>Selesai</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {[
            { icon: '📅', title: 'Booking Management', desc: 'Kelola semua booking' },
            { icon: '📆', title: 'Scheduling', desc: 'Kelola jadwal pengacara' },
            { icon: '📝', title: 'Articles', desc: 'Kelola blog & artikel' },
            { icon: '💬', title: 'Live Chat', desc: 'Chat dengan klien' }
          ].map(feature => (
            <div key={feature.title} style={{ background: '#f7fafc', padding: '20px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ fontSize: '2rem' }}>{feature.icon}</span>
              <div>
                <h4 style={{ color: '#1a365d', marginBottom: '5px' }}>{feature.title}</h4>
                <p style={{ fontSize: '0.9rem', color: '#718096' }}>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}