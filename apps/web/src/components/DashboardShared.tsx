import React from 'react';

interface SidebarProps {
  package: 'basic' | 'custom';
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  currentPath: string;
}

const menuItems = {
  basic: [
    { key: 'dashboard', label: 'Dashboard', href: '/dashboard' },
    { key: 'services', label: 'Layanan', href: '/dashboard/services' },
    { key: 'team', label: 'Tim Pengacara', href: '/dashboard/team' },
    { key: 'faq', label: 'FAQ', href: '/dashboard/faq' },
    { key: 'contact', label: 'Kontak', href: '/dashboard/contact' },
    { key: 'website', label: 'Lihat Website', href: '/website' }
  ],
  custom: [
    { key: 'dashboard', label: 'Dashboard', href: '/dashboard-custom' },
    { key: 'services', label: 'Layanan', href: '/dashboard-custom/services' },
    { key: 'team', label: 'Tim Pengacara', href: '/dashboard-custom/team' },
    { key: 'faq', label: 'FAQ', href: '/dashboard-custom/faq' },
    { key: 'contact', label: 'Kontak', href: '/dashboard-custom/contact' },
    { key: 'booking', label: 'Booking', href: '/dashboard-custom/booking' },
    { key: 'scheduling', label: 'Jadwal', href: '/dashboard-custom/scheduling' },
    { key: 'articles', label: 'Artikel', href: '/dashboard-custom/articles' },
    { key: 'website', label: 'Lihat Website', href: '/website-custom' }
  ]
};

export function DashboardSidebar({ package: pkg, sidebarOpen, setSidebarOpen, currentPath }: SidebarProps) {
  const items = menuItems[pkg];
  const isCustom = pkg === 'custom';
  const bgGradient = isCustom ? 'linear-gradient(180deg, #1a365d, #0d1f3c)' : '#1a365d';

  return (
    <aside style={{ 
      position: 'fixed', left: sidebarOpen ? 0 : '-200px', top: '60px', bottom: 0, width: '200px',
      background: bgGradient, color: 'white', padding: '15px', 
      display: 'flex', flexDirection: 'column', zIndex: 999, overflowY: 'auto',
      visibility: sidebarOpen ? 'visible' : 'hidden',
      transition: 'left 0.3s ease-in-out, visibility 0s 0.3s',
      pointerEvents: sidebarOpen ? 'auto' : 'none'
    }}>
      <div style={{ marginBottom: '15px', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <span style={{ background: '#c9a227', color: '#1a365d', padding: '2px 8px', borderRadius: '10px', fontSize: '0.6rem', fontWeight: 600 }}>
          {isCustom ? 'CUSTOM' : 'BASIC'}
        </span>
      </div>
      
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '3px', flex: 1 }}>
        {items.map(item => (
          <a key={item.key} href={item.href} 
             style={{ display: 'block', padding: '10px 12px', color: 'rgba(255,255,255,0.8)', 
                     borderRadius: '6px', fontSize: '0.8rem', textDecoration: 'none', 
                     transition: 'all 0.2s', background: 'transparent' }}>
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

interface NavbarProps {
  package: 'basic' | 'custom';
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  profileModalOpen: boolean;
  setProfileModalOpen: (open: boolean) => void;
  userName?: string;
  userRole?: string;
}

export function DashboardNavbar({ package: pkg, sidebarOpen, setSidebarOpen, profileModalOpen, setProfileModalOpen, userName, userRole }: NavbarProps) {
  const isCustom = pkg === 'custom';
  const bgColor = isCustom ? 'linear-gradient(90deg, #1a365d, #0d1f3c)' : 'white';
  const textColor = isCustom ? 'white' : '#1a365d';
  const subTextColor = isCustom ? 'rgba(255,255,255,0.7)' : '#718096';

  return (
    <>
      <header style={{ 
        position: 'fixed', top: 0, left: 0, right: 0, height: '60px', 
        background: bgColor, boxShadow: '0 2px 10px rgba(0,0,0,0.1)', 
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
        padding: '0 20px', zIndex: 1000 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} 
            style={{ padding: '8px 12px', background: isCustom ? 'rgba(255,255,255,0.2)' : '#1a365d', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '1rem' }}>
            {sidebarOpen ? '<' : '='}
          </button>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: textColor }}>
            | Dashboard {isCustom ? 'Custom' : 'Basic'}
          </span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontWeight: 600, color: textColor, fontSize: '0.85rem' }}>{userName || 'Admin'}</div>
            <div style={{ fontSize: '0.7rem', color: subTextColor }}>{userRole || (isCustom ? 'Super Admin' : 'Administrator')}</div>
          </div>
          <div onClick={() => setProfileModalOpen(true)} 
            style={{ width: '36px', height: '36px', borderRadius: '50%', background: isCustom ? '#c9a227' : '#1a365d', 
                    color: isCustom ? '#1a365d' : 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 }}>
            A
          </div>
        </div>
      </header>

      {/* Profile Modal */}
      {profileModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
          <div style={{ background: 'white', borderRadius: '12px', padding: '25px', width: '280px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#1a365d', color: 'white', 
                          display: 'flex', alignItems: 'center', justifyContent: 'center', 
                          fontSize: '1.2rem', fontWeight: 600, margin: '0 auto 10px' }}>
                A
              </div>
              <h3 style={{ color: '#1a365d', marginBottom: '5px', fontSize: '0.95rem' }}>{userName || 'Admin'}</h3>
              <p style={{ color: '#718096', fontSize: '0.8rem' }}>{userRole || (isCustom ? 'Super Admin' : 'Administrator')}</p>
            </div>
            <button onClick={() => window.location.href = isCustom ? '/website-custom' : '/website'}
                    style={{ width: '100%', padding: '10px', background: '#e53e3e', color: 'white', 
                            fontWeight: 600, borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '0.85rem' }}>
              Logout
            </button>
            <button onClick={() => setProfileModalOpen(false)}
                    style={{ width: '100%', padding: '10px', background: 'transparent', color: '#718096', 
                            fontWeight: 600, borderRadius: '6px', border: 'none', cursor: 'pointer', 
                            fontSize: '0.85rem', marginTop: '8px' }}>
              Tutup
            </button>
          </div>
        </div>
      )}
    </>
  );
}