import React from 'react';

export default function DashboardHome() {
  return (
    <div>
      <div className="page-header">
        <h2>Dashboard CUSTOM</h2>
        <p>Kelola konten dan booking - Paket Custom</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Booking</h3>
          <div className="value">48</div>
        </div>
        <div className="stat-card">
          <h3>Pending</h3>
          <div className="value">12</div>
        </div>
        <div className="stat-card">
          <h3>Confirmed</h3>
          <div className="value">28</div>
        </div>
        <div className="stat-card premium">
          <h3>Revenue</h3>
          <div className="value">Rp 84jt</div>
        </div>
      </div>

      <div className="feature-grid">
        <div className="feature-item">
          <div className="feature-icon">📅</div>
          <div>
            <h4>Booking Management</h4>
            <p>Kelola semua booking konsultasi</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📆</div>
          <div>
            <h4>Scheduling</h4>
            <p>Kelola jadwal pengacara</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📝</div>
          <div>
            <h4>Articles</h4>
            <p>Kelola blog dan artikel</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">💬</div>
          <div>
            <h4>Live Chat</h4>
            <p>Chat dengan klien</p>
          </div>
        </div>
      </div>

      <div className="content-card">
        <h3>Recent Bookings</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Nama Klien</th>
              <th>Layanan</th>
              <th>Tanggal</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Budi Santoso</td>
              <td>Hukum Keluarga</td>
              <td>15 Mei 2026</td>
              <td><span className="status-badge pending">Pending</span></td>
            </tr>
            <tr>
              <td>Ani Wijaya</td>
              <td>Perdata</td>
              <td>14 Mei 2026</td>
              <td><span className="status-badge confirmed">Confirmed</span></td>
            </tr>
            <tr>
              <td>Ahmad Fauzi</td>
              <td>Perjanjian Riba</td>
              <td>13 Mei 2026</td>
              <td><span className="status-badge completed">Completed</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}