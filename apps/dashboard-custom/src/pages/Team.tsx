import React, { useState } from 'react';
import { teamMembers as initialTeam, TeamMember } from '@lawfirm/shared';

export default function TeamPage() {
  const [team, setTeam] = useState<TeamMember[]>(initialTeam);
  const [editing, setEditing] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', position: '', photo: '', bio: '' });

  const handleDelete = (id: string) => {
    if (confirm('Yakin hapus tim ini?')) {
      setTeam(team.filter(t => t.id !== id));
    }
  };

  const handleSave = () => {
    if (editing) {
      setTeam(team.map(t => t.id === editing ? { ...t, ...formData } : t));
    } else {
      setTeam([...team, { ...formData, id: Date.now().toString() }]);
    }
    setEditing(null);
    setFormData({ name: '', position: '', photo: '', bio: '' });
  };

  const handleEdit = (member: TeamMember) => {
    setEditing(member.id);
    setFormData({ name: member.name, position: member.position, photo: member.photo, bio: member.bio });
  };

  return (
    <div>
      <div className="page-header">
        <h2>👥 Kelola Tim</h2>
        <p>Kelola tim pengacara</p>
      </div>

      <div className="content-card">
        <h3>{editing ? 'Edit Tim' : 'Tambah Tim'}</h3>
        <div className="form-group">
          <label>Nama</label>
          <input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="Nama pengacara" />
        </div>
        <div className="form-group">
          <label>Posisi</label>
          <input type="text" value={formData.position} onChange={e => setFormData({ ...formData, position: e.target.value })} placeholder="Contoh: Managing Partner" />
        </div>
        <div className="form-group">
          <label>Bio</label>
          <textarea value={formData.bio} onChange={e => setFormData({ ...formData, bio: e.target.value })} placeholder="Bio singkat..." />
        </div>
        <div className="form-actions">
          <button className="btn" onClick={handleSave}>{editing ? 'Simpan Perubahan' : 'Tambah Tim'}</button>
          {editing && <button className="btn btn-danger" onClick={() => { setEditing(null); setFormData({ name: '', position: '', photo: '', bio: '' }); }}>Batal</button>}
        </div>
      </div>

      <div className="content-card" style={{ marginTop: '30px' }}>
        <h3>Daftar Tim ({team.length})</h3>
        <table className="table">
          <thead><tr><th>Nama</th><th>Posisi</th><th>Bio</th><th>Aksi</th></tr></thead>
          <tbody>
            {team.map(member => (
              <tr key={member.id}>
                <td>{member.name}</td>
                <td>{member.position}</td>
                <td>{member.bio.substring(0, 50)}...</td>
                <td>
                  <button className="btn btn-small" onClick={() => handleEdit(member)}>Edit</button>
                  <button className="btn btn-small btn-danger" style={{ marginLeft: '10px' }} onClick={() => handleDelete(member.id)}>Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}