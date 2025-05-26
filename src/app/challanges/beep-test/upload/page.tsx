"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BeepTestUploadPage() {
  const router = useRouter();
  // Placeholder: use state to simulate uploaded video and reps
  const [video, setVideo] = useState<string | null>(null);
  const [reps, setReps] = useState<number | null>(null);
  const [file, setFile] = useState<File | null>(null);

  // Fake uploaded videos
  const uploads = [
    { label: 'Beep Test at 18', reps: 12, video: '/fake-beep-18.mp4' },
    { label: 'Beep Test at 22', reps: 13, video: '/fake-beep-22.mp4' },
  ];

  function handleUpload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (file) {
      setVideo(URL.createObjectURL(file));
      // Simulate saving reps
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: 24 }}>
      {/* Back button */}
      <button onClick={() => router.back()} style={{ position: 'absolute', top: 24, left: 18, background: 'none', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, cursor: 'pointer' }}>
        <span style={{ color: 'grey', fontSize: 24, fontWeight: 500 }}>&larr;</span>
      </button>
      <h2 style={{ fontFamily: 'serif', fontWeight: 500, fontSize: 32, marginBottom: 24 }}>Beep Test Result</h2>
      <div style={{ width: '100%', maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
        {uploads.map((u, i) => (
          <div key={i} style={{ width: '100%', background: '#f5f6fa', borderRadius: 16, padding: 18, display: 'flex', alignItems: 'center', gap: 18 }}>
            <video src={u.video} controls style={{ width: 120, borderRadius: 8, background: '#eee' }} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ fontSize: 18, fontFamily: 'serif', color: '#222', fontWeight: 500 }}>{u.label}</div>
              <div style={{ fontSize: 18, fontFamily: 'serif', color: '#222' }}>Reps: <b>{u.reps}</b></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 