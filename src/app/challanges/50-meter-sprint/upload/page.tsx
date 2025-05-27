"use client";
import { useRouter } from 'next/navigation';

export default function FiftyMeterSprintUploadPage() {
  const router = useRouter();
  return (
    <div style={{ minHeight: '100vh', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {/* Back button */}
      <button onClick={() => router.back()} style={{ position: 'absolute', top: 24, left: 18, background: 'none', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, cursor: 'pointer' }}>
        <span style={{ color: 'grey', fontSize: 24, fontWeight: 500 }}>&larr;</span>
      </button>
      <div style={{ marginTop: 80, fontWeight: 500, fontSize: 32, color: '#222', fontFamily: 'serif', marginBottom: 24, textAlign: 'center' }}>
        Upload 50 Meter Sprint Result
      </div>
      <div style={{ fontSize: 20, color: '#555', fontFamily: 'serif', textAlign: 'center', maxWidth: 340 }}>
        This is where you can upload or view your 50 Meter Sprint video and results. (Feature coming soon!)
      </div>
    </div>
  );
} 