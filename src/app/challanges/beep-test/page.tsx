"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function BeepTestPage() {
  const router = useRouter();
  return (
    <div style={{ minHeight: '100vh', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, height: '100vh', overflowY: 'auto' }}>
      {/* Back button */}
      <button onClick={() => router.back()} style={{ position: 'absolute', top: 24, left: 18, background: 'none', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, cursor: 'pointer' }}>
        <span style={{ color: 'grey', fontSize: 24, fontWeight: 500 }}>&larr;</span>
      </button>
      {/* Info icon */}
      <div style={{ position: 'absolute', top: 24, right: 18, zIndex: 10 }}>
        <span style={{ color: 'black', fontSize: 32, fontWeight: 700 }}>ⓘ</span>
      </div>
      {/* Top image */}
      <div style={{ marginTop: 48, marginBottom: 8 }}>
        <Image src="/player1.png" alt="Beep Test" width={120} height={160} style={{ objectFit: 'contain', filter: 'grayscale(1)' }} />
      </div>
      {/* Title */}
      <div style={{ fontWeight: 500, fontSize: 36, color: '#222', fontFamily: 'serif', marginBottom: 8, textAlign: 'center' }}>Beep Test</div>
      {/* Video icon */}
      <div style={{ marginBottom: 16 }}>
        <span style={{ fontSize: 32 }}>🎬</span>
      </div>
      {/* Table */}
      <div style={{ width: '99%', maxWidth: 520, margin: '0 auto', background: 'white', border: '1.5px solid #222', borderRadius: 0 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'serif', fontSize: 20, color: '#222' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #222', padding: 8 }}>Age</th>
              <th style={{ border: '1px solid #222', padding: 8 }}>Average</th>
              <th style={{ border: '1px solid #222', padding: 8 }}>Very Good</th>
              <th style={{ border: '1px solid #222', padding: 8 }}>Excellent</th>
              <th style={{ border: '1px solid #222', padding: 8 }}>Elite</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #222', padding: 8, fontWeight: 600 }}>10 - 12</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>&lt; 6.0</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>6.5 - 7.5</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>7.5 - 9.0</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>&gt; 9</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #222', padding: 8, fontWeight: 600 }}>13 - 14</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>&lt; 7.5</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>8.0 - 9.5</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>9.5 - 11.0</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>&gt; 11</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #222', padding: 8, fontWeight: 600 }}>15 - 17</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>&lt; 9.5</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>10.0 - 11.5</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>11.5 - 13.0</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>&gt; 13</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #222', padding: 8, fontWeight: 600 }}>18 - 20</td>
              <td style={{ border: '1px solid #222', padding: 8, background: '#ffe0b2' }}>&lt; 12.0</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>12.5 - 13.5</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>13.5 - 15.0</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>&gt; 15.0</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #222', padding: 8, fontWeight: 600 }}>21 - 25</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>&lt; 12.5</td>
              <td style={{ border: '1px solid #222', padding: 8, background: '#c8e6c9' }}>13.0 - 14.0</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>14.0 - 15.5</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>&gt; 15.5</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #222', padding: 8, fontWeight: 600 }}>26 - 30</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>&lt; 12.0</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>12.5 - 13.0</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>13.5 - 15.0</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>&gt; 15.0</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #222', padding: 8, fontWeight: 600 }}>31 - 35</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>&lt; 11.5</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>12.0 - 13.0</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>13.0 - 14.5</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>&gt; 14.5</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #222', padding: 8, fontWeight: 600 }}>36+</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>&lt; 10.5</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>11.0 - 12.5</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>12.5 - 14.0</td>
              <td style={{ border: '1px solid #222', padding: 8 }}>&gt; 14.0</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #222', padding: 8, fontWeight: 600 }}>Players</td>
              <td style={{ border: '1px solid #222', padding: 8, textAlign: 'center' }}><span style={{ fontSize: 24 }}>ⓘ</span></td>
              <td style={{ border: '1px solid #222', padding: 8, textAlign: 'center' }}><span style={{ fontSize: 24 }}>ⓘ</span></td>
              <td style={{ border: '1px solid #222', padding: 8, textAlign: 'center' }}><span style={{ fontSize: 24 }}>ⓘ</span></td>
              <td style={{ border: '1px solid #222', padding: 8, textAlign: 'center' }}><span style={{ fontSize: 24 }}>ⓘ</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ height: 32 }} />
    </div>
  );
} 