'use client';

const POSITIONS = [
  'GK', 'CB', 'LB', 'LWB', 'RB', 'RWB', 'CDM', 'CM', 'CAM', 'LM', 'LW', 'RM', 'RW', 'CF', 'ST'
];
const AGE_GROUPS = [
  'U6-U9', 'U10-U13', 'U14-U17', 'U18-U21', 'Senior', 'Veteran'
];

export default function ConfigurationsPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: 48 }}>
      <div style={{ width: 340, background: '#f5f5f5', borderRadius: 12, padding: 24, marginBottom: 32, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
        <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 16, color: 'black' }}>Position</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {POSITIONS.map(pos => (
            <div key={pos} style={{ padding: '8px 16px', background: 'white', borderRadius: 8, border: '1px solid #ccc', fontWeight: 500, color: '#222', fontSize: 16 }}>{pos}</div>
          ))}
        </div>
      </div>
      <div style={{ width: 340, background: '#f5f5f5', borderRadius: 12, padding: 24, marginBottom: 32, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
        <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 16, color: 'black' }}>Age</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {AGE_GROUPS.map(age => (
            <div key={age} style={{ padding: '8px 16px', background: 'white', borderRadius: 8, border: '1px solid #ccc', fontWeight: 500, color: '#222', fontSize: 16 }}>{age}</div>
          ))}
        </div>
      </div>
    </div>
  );
} 