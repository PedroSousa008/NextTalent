'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const POSITIONS = [
  'GK', 'CB', 'LB', 'LWB', 'RB', 'RWB', 'CDM', 'CM', 'CAM', 'LM', 'LW', 'RM', 'RW', 'CF', 'ST'
];
const AGE_GROUPS = [
  'U6-U9', 'U10-U13', 'U14-U17', 'U18-U21', 'Senior', 'Veteran'
];

export default function ConfigurationsPage() {
  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const router = useRouter();

  function togglePosition(pos: string) {
    setSelectedPositions(prev =>
      prev.includes(pos)
        ? prev.filter(p => p !== pos)
        : prev.length < 5
        ? [...prev, pos]
        : prev
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: 48, position: 'relative' }}>
      {/* X button to exit */}
      <button onClick={() => router.push('/feed')} style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', fontSize: 32, color: '#888', cursor: 'pointer', zIndex: 10 }}>✕</button>
      <div style={{ width: 340, background: '#f5f5f5', borderRadius: 12, padding: 24, marginBottom: 32, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
        <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 16, color: 'black' }}>Position</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {POSITIONS.map(pos => (
            <button
              key={pos}
              onClick={() => togglePosition(pos)}
              style={{
                padding: '8px 16px',
                background: selectedPositions.includes(pos) ? '#222' : 'white',
                color: selectedPositions.includes(pos) ? 'white' : '#222',
                borderRadius: 8,
                border: selectedPositions.includes(pos) ? '2px solid #222' : '1px solid #ccc',
                fontWeight: 500,
                fontSize: 16,
                cursor: 'pointer',
                outline: 'none',
                transition: 'all 0.15s',
              }}
            >
              {pos}
            </button>
          ))}
        </div>
        <div style={{ marginTop: 10, color: '#888', fontSize: 14 }}>
          {selectedPositions.length}/5 selected
        </div>
      </div>
      <div style={{ width: 340, background: '#f5f5f5', borderRadius: 12, padding: 24, marginBottom: 32, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
        <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 16, color: 'black' }}>Age</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {AGE_GROUPS.map(age => (
            <button
              key={age}
              onClick={() => setSelectedAge(age)}
              style={{
                padding: '8px 16px',
                background: selectedAge === age ? '#222' : 'white',
                color: selectedAge === age ? 'white' : '#222',
                borderRadius: 8,
                border: selectedAge === age ? '2px solid #222' : '1px solid #ccc',
                fontWeight: 500,
                fontSize: 16,
                cursor: 'pointer',
                outline: 'none',
                transition: 'all 0.15s',
              }}
            >
              {age}
            </button>
          ))}
        </div>
        <div style={{ marginTop: 10, color: '#888', fontSize: 14 }}>
          {selectedAge ? `Selected: ${selectedAge}` : 'No age group selected'}
        </div>
      </div>
      {/* Apply button box */}
      {(selectedPositions.length > 0 || selectedAge) && (
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'white',
          padding: '16px 24px',
          boxShadow: '0 -2px 12px rgba(0,0,0,0.06)',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 100
        }}>
          <button
            onClick={() => router.push('/feed')}
            style={{
              background: '#222',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              padding: '12px 32px',
              fontSize: 16,
              fontWeight: 600,
              cursor: 'pointer',
              width: '100%',
              maxWidth: 340,
              transition: 'all 0.15s',
            }}
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
} 