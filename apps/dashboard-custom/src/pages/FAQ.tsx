import React, { useState } from 'react';
import { faqs as initialFAQs, FAQ } from '@lawfirm/shared';

export default function FAQPage() {
  const [faqs, setFaqs] = useState<FAQ[]>(initialFAQs);
  const [editing, setEditing] = useState<string | null>(null);
  const [formData, setFormData] = useState({ question: '', answer: '' });

  const handleDelete = (id: string) => {
    if (confirm('Yakin hapus FAQ ini?')) {
      setFaqs(faqs.filter(f => f.id !== id));
    }
  };

  const handleSave = () => {
    if (editing) {
      setFaqs(faqs.map(f => f.id === editing ? { ...f, ...formData } : f));
    } else {
      setFaqs([...faqs, { ...formData, id: Date.now().toString() }]);
    }
    setEditing(null);
    setFormData({ question: '', answer: '' });
  };

  const handleEdit = (faq: FAQ) => {
    setEditing(faq.id);
    setFormData({ question: faq.question, answer: faq.answer });
  };

  return (
    <div>
      <div className="page-header">
        <h2>❓ Kelola FAQ</h2>
        <p>Kelola pertanyaan umum</p>
      </div>

      <div className="content-card">
        <h3>{editing ? 'Edit FAQ' : 'Tambah FAQ'}</h3>
        <div className="form-group">
          <label>Pertanyaan</label>
          <input type="text" value={formData.question} onChange={e => setFormData({ ...formData, question: e.target.value })} placeholder="Pertanyaan..." />
        </div>
        <div className="form-group">
          <label>Jawaban</label>
          <textarea value={formData.answer} onChange={e => setFormData({ ...formData, answer: e.target.value })} placeholder="Jawaban..." />
        </div>
        <div className="form-actions">
          <button className="btn" onClick={handleSave}>{editing ? 'Simpan Perubahan' : 'Tambah FAQ'}</button>
          {editing && <button className="btn btn-danger" onClick={() => { setEditing(null); setFormData({ question: '', answer: '' }); }}>Batal</button>}
        </div>
      </div>

      <div className="content-card" style={{ marginTop: '30px' }}>
        <h3>Daftar FAQ ({faqs.length})</h3>
        <table className="table">
          <thead><tr><th>Pertanyaan</th><th>Jawaban</th><th>Aksi</th></tr></thead>
          <tbody>
            {faqs.map(faq => (
              <tr key={faq.id}>
                <td>{faq.question}</td>
                <td>{faq.answer.substring(0, 50)}...</td>
                <td>
                  <button className="btn btn-small" onClick={() => handleEdit(faq)}>Edit</button>
                  <button className="btn btn-small btn-danger" style={{ marginLeft: '10px' }} onClick={() => handleDelete(faq.id)}>Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}