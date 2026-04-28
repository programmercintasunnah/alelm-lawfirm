import React, { useState } from 'react';
import { defaultContact, Contact } from '@lawfirm/shared';

export default function ContactPage() {
  const [contact, setContact] = useState<Contact>(defaultContact);
  const [formData, setFormData] = useState({ ...contact });

  const handleSave = () => {
    setContact({ ...formData, id: contact.id });
    alert('Kontak berhasil disimpan!');
  };

  return (
    <div>
      <div className="page-header">
        <h2>📞 Kelola Kontak</h2>
        <p>Kelola informasi kontak firma</p>
      </div>

      <div className="content-card">
        <h3>Informasi Kontak</h3>
        <div className="form-group">
          <label>Nomor Telepon</label>
          <input type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Alamat</label>
          <textarea value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} />
        </div>
        <div className="form-group">
          <label>WhatsApp</label>
          <input type="url" value={formData.whatsapp} onChange={e => setFormData({ ...formData, whatsapp: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Instagram</label>
          <input type="url" value={formData.instagram} onChange={e => setFormData({ ...formData, instagram: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Facebook</label>
          <input type="url" value={formData.facebook} onChange={e => setFormData({ ...formData, facebook: e.target.value })} />
        </div>
        <div className="form-group">
          <label>LinkedIn</label>
          <input type="url" value={formData.linkedin} onChange={e => setFormData({ ...formData, linkedin: e.target.value })} />
        </div>
        <div className="form-actions">
          <button className="btn" onClick={handleSave}>Simpan Perubahan</button>
        </div>
      </div>
    </div>
  );
}