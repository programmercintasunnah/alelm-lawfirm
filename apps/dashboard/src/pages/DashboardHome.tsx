import React, { useState } from 'react';
import { services, teamMembers, faqs, defaultContact } from '@lawfirm/shared';

export default function DashboardHome() {
  const [stats] = useState({
    services: services.length,
    team: teamMembers.length,
    faqs: faqs.length,
    inquiries: 12
  });

  return (
    <div>
      <div className="page-header">
        <h2>Dashboard</h2>
        <p>Kelola konten website</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Layanan</h3>
          <div className="value">{stats.services}</div>
        </div>
        <div className="stat-card">
          <h3>Tim Pengacara</h3>
          <div className="value">{stats.team}</div>
        </div>
        <div className="stat-card">
          <h3>FAQ</h3>
          <div className="value">{stats.faqs}</div>
        </div>
        <div className="stat-card">
          <h3>Inquiry Masuk</h3>
          <div className="value">{stats.inquiries}</div>
        </div>
      </div>

      <div className="content-card">
        <h3>Informasi Firma</h3>
        <p><strong>Nama:</strong> 雷法学院</p>
        <p><strong>Email:</strong> {defaultContact.email}</p>
        <p><strong>Phone:</strong> {defaultContact.phone}</p>
        <p><strong>Alamat:</strong> {defaultContact.address}</p>
      </div>
    </div>
  );
}