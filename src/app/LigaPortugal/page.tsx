'use client';
import Image from 'next/image';
import BottomNav from '../feed/BottomNav';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const TEAMS = [
  { name: 'Arouca', logo: '/arouca.png' },
  { name: 'AVS', logo: '/avs.png' },
  { name: 'Benfica', logo: '/benfica.png' },
  { name: 'Boavista', logo: '/boavista.png' },
  { name: 'Braga', logo: '/braga.png' },
  { name: 'Casa Pia', logo: '/casapia.png' },
  { name: 'Estoril Praia', logo: '/estoril.png' },
  { name: 'Estrela da Amadora', logo: '/estrela.png' },
  { name: 'Famalicão', logo: '/famalicao.png' },
  { name: 'Farense', logo: '/farense.png' },
  { name: 'Gil Vicente', logo: '/gilvicente.png' },
  { name: 'Moreirense', logo: '/moreirense.png' },
  { name: 'Nacional', logo: '/nacional.png' },
  { name: 'Porto', logo: '/porto.png' },
  { name: 'Rio Ave', logo: '/rioave.png' },
  { name: 'Santa Clara', logo: '/santaclara.png' },
  { name: 'Sporting CP', logo: '/sporting.png' },
  { name: 'Vitória de Guimarães', logo: '/vitoria.png' },
];

const AGES = ['U-13', 'U-14', 'U-15', 'U-16', 'U-17', 'U-18', 'U-21', 'U-23', 'Senior'];

export default function LigaPortugalPage() {
  const [search, setSearch] = useState('');
  const [selectedAge, setSelectedAge] = useState('U-23');
  const [showStarred, setShowStarred] = useState(false);
  const router = useRouter();
  let filteredTeams = search.trim() === ''
    ? TEAMS
    : TEAMS.filter(team => team.name.toLowerCase().includes(search.trim().toLowerCase()));
  if (showStarred) {
    filteredTeams = filteredTeams.filter(team => team.name === 'Benfica');
  }
  return (
    <div style={{ minHeight: '100vh', background: '#f5f6fa', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 80 }}>
      {/* Search bar and icons */}
      <div style={{ width: '100%', maxWidth: 500, margin: '24px auto 0 auto', display: 'flex', alignItems: 'center', gap: 12, padding: '0 16px' }}>
        <div style={{ flex: 1, position: 'relative', height: 44, display: 'flex', alignItems: 'center' }}>
          <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#bbb', fontSize: 22, lineHeight: 1 }}>🔍</span>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ width: '100%', padding: '8px 12px 8px 48px', borderRadius: 8, border: 'none', background: '#e5e5e5', fontSize: 20, color: '#888', fontWeight: 400, height: 44 }}
          />
        </div>
        <span
          style={{ fontSize: 26, color: showStarred ? '#f5b800' : '#bbb', cursor: 'pointer', transition: 'color 0.15s' }}
          onClick={() => setShowStarred(s => !s)}
        >
          {showStarred ? '★' : '☆'}
        </span>
        <Image src="/configurations1.png" alt="Configurations" width={28} height={28} style={{ cursor: 'pointer' }} />
      </div>
      {/* League logo and name with back button */}
      <div style={{ width: '100%', maxWidth: 500, margin: '24px auto 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, position: 'relative' }}>
        <button onClick={() => router.push('/search')} style={{ position: 'absolute', left: 0, background: 'none', border: 'none', fontSize: 26, cursor: 'pointer', color: '#888', padding: 0, marginLeft: 4 }}>←</button>
        <Image src="/liga-portugal.png" alt="Liga Portugal" width={40} height={40} style={{ objectFit: 'contain' }} />
        <span style={{ fontWeight: 700, fontSize: 22, color: '#222' }}>Liga Portugal</span>
      </div>
      {/* Age tabs */}
      <div style={{ width: '100%', maxWidth: 500, display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '18px 0 0 0', padding: '0 8px', borderBottom: '1.5px solid #eee' }}>
        {AGES.map(age => (
          <span
            key={age}
            onClick={() => setSelectedAge(age)}
            style={{
              color: age === selectedAge ? 'black' : '#bbb',
              fontWeight: age === selectedAge ? 700 : 500,
              fontSize: 16,
              borderBottom: age === selectedAge ? '2px solid black' : 'none',
              padding: '0 2px 6px 2px',
              cursor: 'pointer',
              transition: 'color 0.15s, border-bottom 0.15s',
            }}
          >
            {age}
          </span>
        ))}
      </div>
      {/* Teams grid */}
      <div style={{ width: '100%', maxWidth: 500, flex: 1, overflowY: 'auto', marginTop: 8 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
          {filteredTeams.map(team => (
            <div key={team.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #eee', background: 'white', minHeight: 120, height: 140, position: 'relative' }}>
              <Image src={team.logo} alt={team.name} width={90} height={90} style={{ objectFit: 'contain', maxWidth: '70%', maxHeight: '70%' }} />
              {team.name === 'Benfica' && (
                <span style={{ position: 'absolute', top: 4, right: 8, color: '#f5b800', fontSize: 20, fontWeight: 700 }}>★</span>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Navigation Bar */}
      <BottomNav active='search' />
    </div>
  );
} 