"use client";
import { useRouter } from 'next/navigation';
import BottomNav from '../feed/BottomNav';

export default function BlankPage() {
  const router = useRouter();

  return (
    <div style={{ minHeight: '100vh', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 80 }}>
      {/* Top bar with back button */}
      <div style={{ width: '100%', maxWidth: 500, margin: '24px auto 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, position: 'relative' }}>
        <button onClick={() => router.back()} style={{ position: 'absolute', left: 0, background: 'none', border: 'none', fontSize: 26, cursor: 'pointer', color: '#888', padding: 0, marginLeft: 4 }}>←</button>
      </div>

      {/* Content */}
      <div style={{ marginTop: 100, textAlign: 'center' }}>
        <h1 style={{ fontSize: 24, color: '#222', marginBottom: 16 }}>Profile Coming Soon</h1>
        <p style={{ fontSize: 16, color: '#666' }}>This player's profile is under development.</p>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNav active='search' />
    </div>
  );
} 