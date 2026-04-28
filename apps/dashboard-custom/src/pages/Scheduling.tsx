import React, { useState } from 'react';

interface Schedule {
  id: string;
  lawyer: string;
  date: string;
  time: string;
  available: boolean;
}

export default function SchedulingPage() {
  const [schedules] = useState<Schedule[]>([
    { id: '1', lawyer: 'Ahmad Wijaya', date: '2026-05-15', time: '09:00', available: true },
    { id: '2', lawyer: 'Ahmad Wijaya', date: '2026-05-15', time: '10:00', available: true },
    { id: '3', lawyer: 'Ahmad Wijaya', date: '2026-05-15', time: '11:00', available: false },
    { id: '4', lawyer: 'Ahmad Wijaya', date: '2026-05-15', time: '14:00', available: true },
    { id: '5', lawyer: 'Siti Rahayu', date: '2026-05-15', time: '09:00', available: true },
    { id: '6', lawyer: 'Siti Rahayu', date: '2026-05-15', time: '10:00', available: true },
    { id: '7', lawyer: 'Budi Santoso', date: '2026-05-16', time: '09:00', available: true },
  ]);

  const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
  const times = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];

  return (
    <div>
      <div className="page-header">
        <h2>📆 Scheduling</h2>
        <p>Kelola jadwal pengacara</p>
      </div>

      <div className="content-card">
        <h3>Kalender Mingguan</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '100px repeat(7, 1fr)', gap: '10px', marginBottom: '30px' }}>
          <div></div>
          {days.map(day => (
            <div key={day} style={{ textAlign: 'center', fontWeight: 600, color: '#1a365d', padding: '10px', background: '#f7fafc', borderRadius: '8px' }}>
              {day}
            </div>
          ))}
          
          {times.map(time => (
            <React.Fragment key={time}>
              <div style={{ display: 'flex', alignItems: 'center', fontWeight: 500, color: '#4a5568' }}>{time}</div>
              {[...Array(7)].map((_, i) => (
                <div key={i} style={{ padding: '15px', background: i % 3 === 0 ? '#fed7d7' : '#c6f6d5', borderRadius: '8px', textAlign: 'center', cursor: 'pointer' }}>
                  {i % 3 === 0 ? '❌' : '✅'}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="content-card" style={{ marginTop: '30px' }}>
        <h3>Manage Jadwal</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Pengacara</th>
              <th>Tanggal</th>
              <th>Waktu</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map(schedule => (
              <tr key={schedule.id}>
                <td>{schedule.lawyer}</td>
                <td>{schedule.date}</td>
                <td>{schedule.time}</td>
                <td>
                  <span className={`status-badge ${schedule.available ? 'confirmed' : 'cancelled'}`}>
                    {schedule.available ? 'Tersedia' : 'Tidak Tersedia'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}