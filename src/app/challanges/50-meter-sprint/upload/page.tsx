"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FiftyMeterSprintUploadPage() {
  const router = useRouter();
  // Local state for uploads
  const [uploads, setUploads] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('fiftyMeterSprintUploads');
      if (saved) return JSON.parse(saved);
    }
    return [];
  });
  const [showForm, setShowForm] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [time, setTime] = useState<string>('');
  const [age, setAge] = useState<number | null>(null);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editTime, setEditTime] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('fiftyMeterSprintUploads', JSON.stringify(uploads));
    }
  }, [uploads]);

  function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (file && time && age !== null) {
      setUploads([
        ...uploads,
        { label: `50 Meter Sprint at ${age}`, time: parseFloat(time), video: URL.createObjectURL(file), age },
      ]);
      setShowForm(false);
      setFile(null);
      setTime('');
      setAge(null);
    }
  }

  function handleDelete(idx: number) {
    setUploads(uploads.filter((_: typeof uploads[0], i: number) => i !== idx));
  }

  function handleEdit(idx: number) {
    setEditIndex(idx);
    setEditTime(uploads[idx].time.toString());
  }

  function handleEditSave(idx: number) {
    if (editTime) {
      setUploads(uploads.map((u: typeof uploads[0], i: number) => i === idx ? { ...u, time: parseFloat(editTime) } : u));
      setEditIndex(null);
      setEditTime('');
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: 24 }}>
      {/* Back button */}
      <button onClick={() => router.back()} style={{ position: 'absolute', top: 24, left: 18, background: 'none', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, cursor: 'pointer' }}>
        <span style={{ color: 'grey', fontSize: 24, fontWeight: 500 }}>&larr;</span>
      </button>
      <h2 style={{ fontFamily: 'serif', fontWeight: 700, fontSize: 32, marginBottom: 24, color: 'black' }}>50 Meter Sprint Results</h2>
      <button onClick={() => { setShowForm(true); setEditIndex(null); }} style={{ background: 'black', color: 'white', fontSize: 16, border: 'none', borderRadius: 8, padding: '8px 18px', cursor: 'pointer', marginBottom: 24 }}>
        + Add Video
      </button>
      {showForm && (
        <form onSubmit={handleAdd} style={{ width: '100%', maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'center', background: '#f5f6fa', borderRadius: 16, padding: 24, marginBottom: 24 }}>
          <label style={{ fontSize: 18, fontFamily: 'serif', color: '#222' }}>
            Upload Video
            <input type="file" accept="video/*" onChange={e => setFile(e.target.files?.[0] || null)} style={{ display: 'block', marginTop: 8 }} />
          </label>
          <label style={{ fontSize: 18, fontFamily: 'serif', color: '#222' }}>
            Time (seconds)
            <input type="text" value={time} onChange={e => setTime(e.target.value)} placeholder="e.g. 6.45" style={{ display: 'block', marginTop: 8, width: 80, fontSize: 18, padding: 4, borderRadius: 6, border: '1px solid #bbb' }} />
          </label>
          <label style={{ fontSize: 18, fontFamily: 'serif', color: '#222' }}>
            Age
            <input type="number" min={10} max={99} value={age ?? ''} onChange={e => setAge(Number(e.target.value))} style={{ display: 'block', marginTop: 8, width: 80, fontSize: 18, padding: 4, borderRadius: 6, border: '1px solid #bbb' }} />
          </label>
          <div style={{ display: 'flex', gap: 12 }}>
            <button type="submit" style={{ background: 'black', color: 'white', fontSize: 18, border: 'none', borderRadius: 8, padding: '10px 24px', cursor: 'pointer', marginTop: 12 }}>Save</button>
            <button type="button" onClick={() => setShowForm(false)} style={{ background: '#bbb', color: 'white', fontSize: 18, border: 'none', borderRadius: 8, padding: '10px 24px', cursor: 'pointer', marginTop: 12 }}>Cancel</button>
          </div>
        </form>
      )}
      <div style={{ width: '100%', maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
        {uploads.map((u: typeof uploads[0], i: number) => (
          <div key={i} style={{ width: '100%', background: '#f5f6fa', borderRadius: 16, padding: 18, display: 'flex', alignItems: 'center', gap: 18 }}>
            <video src={u.video} controls style={{ width: 120, borderRadius: 8, background: '#eee' }} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ fontSize: 18, fontFamily: 'serif', color: '#222', fontWeight: 500 }}>{u.label}</div>
              {editIndex === i ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <input type="text" value={editTime} onChange={e => setEditTime(e.target.value)} style={{ width: 60, fontSize: 16, padding: 4, borderRadius: 6, border: '1px solid #bbb', color: 'black' }} />
                  <button onClick={() => handleEditSave(i)} style={{ background: 'black', color: 'white', fontSize: 14, border: 'none', borderRadius: 6, padding: '6px 14px', cursor: 'pointer' }}>Save</button>
                  <button onClick={() => setEditIndex(null)} style={{ background: '#bbb', color: 'white', fontSize: 14, border: 'none', borderRadius: 6, padding: '6px 14px', cursor: 'pointer' }}>Cancel</button>
                </div>
              ) : (
                <div style={{ fontSize: 18, fontFamily: 'serif', color: '#222' }}>Time: <b>{u.time.toFixed(2)}</b> s</div>
              )}
              <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                <button onClick={() => handleEdit(i)} style={{ background: '#222', color: 'white', fontSize: 13, border: 'none', borderRadius: 6, padding: '4px 12px', cursor: 'pointer' }}>Edit</button>
                <button onClick={() => handleDelete(i)} style={{ background: '#e74c3c', color: 'white', fontSize: 13, border: 'none', borderRadius: 6, padding: '4px 12px', cursor: 'pointer' }}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 