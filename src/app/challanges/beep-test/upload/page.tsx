"use client";
import { useState } from 'react';

export default function BeepTestUploadPage() {
  // Placeholder: use state to simulate uploaded video and reps
  const [video, setVideo] = useState<string | null>(null);
  const [reps, setReps] = useState<number | null>(null);
  const [file, setFile] = useState<File | null>(null);

  function handleUpload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (file) {
      setVideo(URL.createObjectURL(file));
      // Simulate saving reps
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: 24 }}>
      <h2 style={{ fontFamily: 'serif', fontWeight: 500, fontSize: 32, marginBottom: 24 }}>Beep Test Result</h2>
      {video && reps !== null ? (
        <div style={{ width: '100%', maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
          <video src={video} controls style={{ width: '100%', borderRadius: 16, background: '#eee' }} />
          <div style={{ fontSize: 22, fontFamily: 'serif', color: '#222' }}>Reps: <b>{reps}</b></div>
        </div>
      ) : (
        <form onSubmit={handleUpload} style={{ width: '100%', maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'center', background: '#f5f6fa', borderRadius: 16, padding: 24 }}>
          <label style={{ fontSize: 18, fontFamily: 'serif', color: '#222' }}>
            Upload Video
            <input type="file" accept="video/*" onChange={e => setFile(e.target.files?.[0] || null)} style={{ display: 'block', marginTop: 8 }} />
          </label>
          <label style={{ fontSize: 18, fontFamily: 'serif', color: '#222' }}>
            Number of Reps
            <input type="number" min={0} step={1} value={reps ?? ''} onChange={e => setReps(Number(e.target.value))} style={{ display: 'block', marginTop: 8, width: 80, fontSize: 18, padding: 4, borderRadius: 6, border: '1px solid #bbb' }} />
          </label>
          <button type="submit" style={{ background: 'black', color: 'white', fontSize: 18, border: 'none', borderRadius: 8, padding: '10px 24px', cursor: 'pointer', marginTop: 12 }}>Save</button>
        </form>
      )}
    </div>
  );
} 