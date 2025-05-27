"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SprintTestPage() {
  const router = useRouter();
  // Table data
  const table = [
    { age: '10 - 12', ranges: [
      { label: 'Average', min: 0, max: 4.5, color: 'yellow' },
      { label: 'Very Good', min: 4.4, max: 4.0, color: 'green' },
      { label: 'Excellent', min: 3.9, max: 3.5, color: 'green' },
      { label: 'Elite', min: 3.4, max: 0, color: 'blue' },
    ] },
    { age: '13 - 14', ranges: [
      { label: 'Average', min: 0, max: 4.0, color: 'yellow' },
      { label: 'Very Good', min: 3.9, max: 3.5, color: 'green' },
      { label: 'Excellent', min: 3.4, max: 3.0, color: 'green' },
      { label: 'Elite', min: 2.9, max: 0, color: 'blue' },
    ] },
    { age: '15 - 17', ranges: [
      { label: 'Average', min: 0, max: 3.5, color: 'yellow' },
      { label: 'Very Good', min: 3.4, max: 3.0, color: 'green' },
      { label: 'Excellent', min: 2.9, max: 2.5, color: 'green' },
      { label: 'Elite', min: 2.4, max: 0, color: 'blue' },
    ] },
    { age: '18 - 20', ranges: [
      { label: 'Average', min: 0, max: 3.0, color: 'yellow' },
      { label: 'Very Good', min: 2.9, max: 2.5, color: 'green' },
      { label: 'Excellent', min: 2.4, max: 2.0, color: 'green' },
      { label: 'Elite', min: 1.9, max: 0, color: 'blue' },
    ] },
    { age: '21 - 25', ranges: [
      { label: 'Average', min: 0, max: 2.5, color: 'yellow' },
      { label: 'Very Good', min: 2.4, max: 2.0, color: 'green' },
      { label: 'Excellent', min: 1.9, max: 1.5, color: 'green' },
      { label: 'Elite', min: 1.4, max: 0, color: 'blue' },
    ] },
    { age: '26 - 30', ranges: [
      { label: 'Average', min: 0, max: 3.0, color: 'yellow' },
      { label: 'Very Good', min: 2.9, max: 2.5, color: 'green' },
      { label: 'Excellent', min: 2.4, max: 2.0, color: 'green' },
      { label: 'Elite', min: 1.9, max: 0, color: 'blue' },
    ] },
    { age: '31 - 35', ranges: [
      { label: 'Average', min: 0, max: 3.5, color: 'yellow' },
      { label: 'Very Good', min: 3.4, max: 3.0, color: 'green' },
      { label: 'Excellent', min: 2.9, max: 2.5, color: 'green' },
      { label: 'Elite', min: 2.4, max: 0, color: 'blue' },
    ] },
    { age: '36+', ranges: [
      { label: 'Average', min: 0, max: 4.0, color: 'yellow' },
      { label: 'Very Good', min: 3.9, max: 3.5, color: 'green' },
      { label: 'Excellent', min: 3.4, max: 3.0, color: 'green' },
      { label: 'Elite', min: 2.9, max: 0, color: 'blue' },
    ] },
  ];

  // Get uploads from localStorage
  const [uploads, setUploads] = useState<{label: string, reps: number, video: string}[]>([]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sprintTestUploads');
      if (saved) setUploads(JSON.parse(saved));
    }
  }, []);

  // Find latest reps for each age group
  const latestReps: Record<string, number> = {};
  uploads.forEach(u => {
    const match = u.label.match(/(\d+)/g);
    if (match) {
      const age = parseInt(match[0], 10);
      let group = '';
      if (age >= 10 && age <= 12) group = '10 - 12';
      else if (age >= 13 && age <= 14) group = '13 - 14';
      else if (age >= 15 && age <= 17) group = '15 - 17';
      else if (age >= 18 && age <= 20) group = '18 - 20';
      else if (age >= 21 && age <= 25) group = '21 - 25';
      else if (age >= 26 && age <= 30) group = '26 - 30';
      else if (age >= 31 && age <= 35) group = '31 - 35';
      else if (age >= 36) group = '36+';
      latestReps[group] = u.reps;
    }
  });

  return (
    <div style={{ minHeight: '100vh', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, height: '100vh', overflowY: 'auto' }}>
      {/* Back button */}
      <button onClick={() => router.back()} style={{ position: 'absolute', top: 24, left: 18, background: 'none', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, cursor: 'pointer' }}>
        <span style={{ color: 'grey', fontSize: 24, fontWeight: 500 }}>&larr;</span>
      </button>
      {/* Info icon */}
      <div style={{ position: 'absolute', top: 24, right: 18, zIndex: 10, cursor: 'pointer' }} onClick={() => router.push('/challanges/sprint-test/info')}>
        <span style={{ color: 'black', fontSize: 32, fontWeight: 700 }}>ⓘ</span>
      </div>
      {/* Top image */}
      <div style={{ marginTop: 48, marginBottom: 8 }}>
        <Image src="/player5.png" alt="Sprint Test" width={120} height={160} style={{ objectFit: 'contain', filter: 'grayscale(1)' }} />
      </div>
      {/* Title */}
      <div style={{ fontWeight: 500, fontSize: 36, color: '#222', fontFamily: 'serif', marginBottom: 8, textAlign: 'center' }}>Sprint Test</div>
      {/* Video icon */}
      <div style={{ marginBottom: 16, cursor: 'pointer' }} onClick={() => router.push('/challanges/sprint-test/upload')}>
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
              const reps = latestReps[row.age] ?? null;
              return (
                <tr key={row.age}>
                  <td style={{ border: '1px solid #222', padding: 8, fontWeight: 600 }}>{row.age}</td>
                  {row.ranges.map((r) => {
                    let bg = 'white';
                    if (reps !== null && reps >= r.min && reps <= r.max) {
                      if (r.color === 'yellow') bg = '#ffe0b2';
                      else if (r.color === 'green') bg = '#c8e6c9';
                      else if (r.color === 'blue') bg = '#b2ebf2';
                    }
                    return (
                      <td key={r.label} style={{ border: '1px solid #222', padding: 8, background: bg }}>{r.label === 'Average' ? `> ${r.max}` : r.label === 'Very Good' ? `${r.min} - ${r.max}` : r.label === 'Excellent' ? `${r.min} - ${r.max}` : `< ${row.ranges[row.ranges.length-2].max}`}</td>
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
 
 