import React, { useState } from 'react';
import { services as initialServices, Service } from '@lawfirm/shared';

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [editing, setEditing] = useState<string | null>(null);
  const [formData, setFormData] = useState({ title: '', description: '', icon: '' });

  const handleDelete = (id: string) => {
    if (confirm('Yakin hapus layanan ini?')) {
      setServices(services.filter(s => s.id !== id));
    }
  };

  const handleSave = () => {
    if (editing) {
      setServices(services.map(s => s.id === editing ? { ...s, ...formData } : s));
    } else {
      setServices([...services, { ...formData, id: Date.now().toString() }]);
    }
    setEditing(null);
    setFormData({ title: '', description: '', icon: '' });
  };

  const handleEdit = (service: Service) => {
    setEditing(service.id);
    setFormData({ title: service.title, description: service.description, icon: service.icon });
  };

  return (
    <div>
      <div className="page-header">
        <h2>⚙️ Kelola Layanan</h2>
        <p>Kelola layanan hukum (CRUD)</p>
      </div>

      <div className="content-card">
        <h3>{editing ? 'Edit Layanan' : 'Tambah Layanan'}</h3>
        <div className="form-group">
          <label>Judul Layanan</label>
          <input type="text" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} placeholder="Contoh: Hukum Keluarga" />
        </div>
        <div className="form-group">
          <label>Deskripsi</label>
          <textarea value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} placeholder="Deskripsi layanan..." />
        </div>
        <div className="form-group">
          <label>Icon (emoji)</label>
          <input type="text" value={formData.icon} onChange={e => setFormData({ ...formData, icon: e.target.value })} placeholder="Contoh: 👨‍👩‍👧‍👦" />
        </div>
        <div className="form-actions">
          <button className="btn" onClick={handleSave}>{editing ? 'Simpan Perubahan' : 'Tambah Layanan'}</button>
          {editing && <button className="btn btn-danger" onClick={() => { setEditing(null); setFormData({ title: '', description: '', icon: '' }); }}>Batal</button>}
        </div>
      </div>

      <div className="content-card" style={{ marginTop: '30px' }}>
        <h3>Daftar Layanan ({services.length})</h3>
        <table className="table">
          <thead><tr><th>Icon</th><th>Judul</th><th>Deskripsi</th><th>Aksi</th></tr></thead>
          <tbody>
            {services.map(service => (
              <tr key={service.id}>
                <td>{service.icon}</td>
                <td>{service.title}</td>
                <td>{service.description.substring(0, 50)}...</td>
                <td>
                  <button className="btn btn-small" onClick={() => handleEdit(service)}>Edit</button>
                  <button className="btn btn-small btn-danger" style={{ marginLeft: '10px' }} onClick={() => handleDelete(service.id)}>Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}