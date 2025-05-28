"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function TwoKmTimeTrialPage() {
  const router = useRouter();
  // Table data
  const table = [
    { age: '10 - 12', ranges: [
      { label: 'Average', min: 600, max: Infinity, display: '> 10:00' },
      { label: 'Very Good', min: 570, max: 600, display: '09:30 - 10:00' },
      { label: 'Excellent', min: 540, max: 570, display: '09:00 - 09:30' },
      { label: 'Elite', min: 0, max: 540, display: '< 09:00' },
    ] },
    { age: '13 - 14', ranges: [
      { label: 'Average', min: 540, max: Infinity, display: '> 09:00' },
      { label: 'Very Good', min: 510, max: 540, display: '08:30 - 09:00' },
      { label: 'Excellent', min: 480, max: 510, display: '08:00 - 08:30' },
      { label: 'Elite', min: 0, max: 480, display: '< 08:00' },
    ] },
    { age: '15 - 17', ranges: [
      { label: 'Average', min: 510, max: Infinity, display: '> 08:30' },
      { label: 'Very Good', min: 480, max: 510, display: '08:00 - 08:30' },
      { label: 'Excellent', min: 450, max: 480, display: '07:30 - 08:00' },
      { label: 'Elite', min: 0, max: 450, display: '< 07:30' },
    ] },
    { age: '18 - 20', ranges: [
      { label: 'Average', min: 480, max: Infinity, display: '> 08:00' },
      { label: 'Very Good', min: 450, max: 480, display: '07:30 - 08:00' },
      { label: 'Excellent', min: 420, max: 450, display: '07:00 - 07:30' },
      { label: 'Elite', min: 0, max: 420, display: '< 07:00' },
    ] },
    { age: '21 - 25', ranges: [
      { label: 'Average', min: 480, max: Infinity, display: '> 08:00' },
      { label: 'Very Good', min: 450, max: 480, display: '07:30 - 08:00' },
      { label: 'Excellent', min: 420, max: 450, display: '07:00 - 07:30' },
      { label: 'Elite', min: 0, max: 420, display: '< 07:00' },
    ] },
    { age: '26 - 30', ranges: [
      { label: 'Average', min: 510, max: Infinity, display: '> 08:30' },
      { label: 'Very Good', min: 480, max: 510, display: '08:00 - 08:30' },
      { label: 'Excellent', min: 450, max: 480, display: '07:30 - 08:00' },
      { label: 'Elite', min: 0, max: 450, display: '< 07:30' },
    ] },
    { age: '31 - 35', ranges: [
      { label: 'Average', min: 540, max: Infinity, display: '> 09:00' },
      { label: 'Very Good', min: 510, max: 540, display: '08:30 - 09:00' },
      { label: 'Excellent', min: 480, max: 510, display: '08:00 - 08:30' },
      { label: 'Elite', min: 0, max: 480, display: '< 08:30' },
    ] },
    { age: '36+', ranges: [
      { label: 'Average', min: 570, max: Infinity, display: '> 09:30' },
      { label: 'Very Good', min: 540, max: 570, display: '09:30 - 10:00' },
      { label: 'Excellent', min: 540, max: 570, display: '09:00 - 09:30' },
      { label: 'Elite', min: 0, max: 540, display: '< 09:30' },
    ] },
  ];

  // Get uploads from localStorage
  const [uploads, setUploads] = useState<{label: string, time: number, video: string, age: number}[]>([]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('twoKmTimeTrialUploads');
      if (saved) setUploads(JSON.parse(saved));
    }
  }, []);

  // Find latest upload for each age group
  const latestTimes: Record<string, number> = {};
  uploads.forEach(u => {
    const age = u.age;
    let group = '';
    if (age >= 10 && age <= 12) group = '10 - 12';
    else if (age >= 13 && age <= 14) group = '13 - 14';
    else if (age >= 15 && age <= 17) group = '15 - 17';
    else if (age >= 18 && age <= 20) group = '18 - 20';
    else if (age >= 21 && age <= 25) group = '21 - 25';
    else if (age >= 26 && age <= 30) group = '26 - 30';
    else if (age >= 31 && age <= 35) group = '31 - 35';
    else if (age >= 36) group = '36+';
    latestTimes[group] = u.time;
  });

  return (
    <div style={{ minHeight: '100vh', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, height: '100vh', overflowY: 'auto' }}>
      {/* Back button */}
      <button onClick={() => router.back()} style={{ position: 'absolute', top: 24, left: 18, background: 'none', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, cursor: 'pointer' }}>
        <span style={{ color: 'grey', fontSize: 24, fontWeight: 500 }}>&larr;</span>
      </button>
      {/* Info icon */}
      <div style={{ position: 'absolute', top: 24, right: 18, zIndex: 10, cursor: 'pointer' }} onClick={() => router.push('/challanges/2km-time-trial/info')}>
        <span style={{ color: 'black', fontSize: 32, fontWeight: 700 }}>ⓘ</span>
      </div>
      {/* Top image */}
      <div style={{ marginTop: 48, marginBottom: 8 }}>
        <Image src="/player3.png" alt="2km Time Trial" width={120} height={160} style={{ objectFit: 'contain', filter: 'grayscale(1)' }} />
      </div>
      {/* Title */}
      <div style={{ fontWeight: 500, fontSize: 36, color: '#222', fontFamily: 'serif', marginBottom: 8, textAlign: 'center' }}>2km Time Trial</div>
      {/* Video icon */}
      <div style={{ marginBottom: 16, cursor: 'pointer' }} onClick={() => router.push('/challanges/2km-time-trial/upload')}>
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
            {table.map(row => {
              const seconds = latestTimes[row.age] ?? null;
              return (
                <tr key={row.age}>
                  <td style={{ border: '1px solid #222', padding: 8, fontWeight: 600 }}>{row.age}</td>
                  {row.ranges.map((r) => {
                    let bg = 'white';
                    if (seconds !== null) {
                      if (r.label === 'Average' && seconds >= r.min && seconds < r.max) {
                        bg = '#ffe0b2';
                      } else if ((r.label === 'Very Good' || r.label === 'Excellent') && seconds >= r.min && seconds < r.max) {
                        bg = '#c8e6c9';
                      } else if (r.label === 'Elite' && seconds >= r.min && seconds < r.max) {
                        bg = '#b2ebf2';
                      }
                    }
                    return (
                      <td key={r.label} style={{ border: '1px solid #222', padding: 8, background: bg }}>{r.display}</td>
                    );
                  })}
                </tr>
              );
            })}
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
      <div style={{ height: 48 }} />
    </div>
  );
} 
 