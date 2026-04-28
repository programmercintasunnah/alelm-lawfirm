import React, { useState } from 'react';

interface Booking {
  id: string;
  clientName: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

export default function BookingPage() {
  const [bookings] = useState<Booking[]>([
    { id: '1', clientName: 'Budi Santoso', email: 'budi@email.com', phone: '081234567890', service: 'Hukum Keluarga', date: '2026-05-15', time: '10:00', status: 'pending' },
    { id: '2', clientName: 'Ani Wijaya', email: 'ani@email.com', phone: '081234567891', service: 'Hukum Perdata', date: '2026-05-14', time: '14:00', status: 'confirmed' },
    { id: '3', clientName: 'Ahmad Fauzi', email: 'ahmad@email.com', phone: '081234567892', service: 'Perjanjian Riba', date: '2026-05-13', time: '09:00', status: 'completed' },
    { id: '4', clientName: 'Siti Aminah', email: 'siti@email.com', phone: '081234567893', service: 'Hukum Keluarga', date: '2026-05-16', time: '11:00', status: 'pending' },
  ]);

  const updateStatus = (id: string, status: Booking['status']) => {
    alert(`Booking ${id} diupdate ke ${status}`);
  };

  return (
    <div>
      <div className="page-header">
        <h2>📅 Booking Management</h2>
        <p>Kelola bookings penerimaan konsultasi</p>
      </div>

      <div className="tabs">
        <button className="tab active">Semua</button>
        <button className="tab">Pending</button>
        <button className="tab">Confirmed</button>
        <button className="tab">Selesai</button>
      </div>

      <div className="content-card">
        <table className="table">
          <thead>
            <tr>
              <th>Nama Klien</th>
              <th>Layanan</th>
              <th>Tanggal</th>
              <th>Waktu</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <tr key={booking.id}>
                <td>
                  <strong>{booking.clientName}</strong><br/>
                  <small>{booking.email}</small>
                </td>
                <td>{booking.service}</td>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>
                  <span className={`status-badge ${booking.status}`}>
                    {booking.status}
                  </span>
                </td>
                <td>
                  {booking.status === 'pending' && (
                    <>
                      <button className="btn btn-small" onClick={() => updateStatus(booking.id, 'confirmed')}>Terima</button>
                      <button className="btn btn-small btn-danger" style={{marginLeft: '5px'}} onClick={() => updateStatus(booking.id, 'cancelled')}>Tolak</button>
                    </>
                  )}
                  {booking.status === 'confirmed' && (
                    <button className="btn btn-small" onClick={() => updateStatus(booking.id, 'completed')}>Selesai</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}