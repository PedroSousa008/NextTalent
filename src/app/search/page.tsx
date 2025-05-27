'use client';
import Image from 'next/image';
import BottomNav from '../feed/BottomNav';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LEAGUES = [
  { name: 'Premier League', logo: '/premier-league.png' },
  { name: 'LaLiga', logo: '/laliga.png' },
  { name: 'SERIE A', logo: '/seriea.png' },
  { name: 'BUNDESLIGA', logo: '/bundesliga.png' },
  { name: 'LIGUE 1', logo: '/ligue1.png' },
  { name: 'LIGA PORTUGAL', logo: '/liga-portugal.png' },
  { name: 'eredivisie', logo: '/eredivisie.png' },
  { name: 'MLS', logo: '/mls.png' },
  { name: 'Sky Bet Championship', logo: '/skybet.png' },
  { name: 'Brasileirão', logo: '/brasileirao.png' },
];

export default function SearchPage() {
  const [search, setSearch] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const filtered = search.trim() === '' ? LEAGUES : LEAGUES.map(lg => {
    if (lg.name.toLowerCase().includes(search.trim().toLowerCase())) return lg;
    return { ...lg, logo: null };
  });

  // Handler for Enter key
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      setSubmitted(true);
    }
  }

  // Reset submitted if search changes
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    setSubmitted(false);
  }

  // Pedro Sousa card data
  const pedroSousa = {
    img: '/pedro.jpg', // Use the same image as the profile page
    first: 'Pedro',
    last: 'Sousa',
    clubLogo: '/benfica.png',
    nationLogo: '/portugal.png',
    position: 'CAM/CM',
    age: 22,
    height: '1.81 m',
    weight: '77 kg',
    foot: 'Right',
    club: 'Benfica',
    nation: 'Portugal',
  };

  const showPedro = submitted && search.trim().toLowerCase() === 'pedro sousa';

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
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            style={{ width: '100%', padding: '8px 12px 8px 48px', borderRadius: 8, border: 'none', background: '#e5e5e5', fontSize: 20, color: '#888', fontWeight: 400, height: 44 }}
          />
        </div>
        <span style={{ fontSize: 26, color: '#f5b800', cursor: 'pointer' }}>★</span>
        <Image src="/configurations1.png" alt="Configurations" width={28} height={28} style={{ cursor: 'pointer' }} />
      </div>
      {/* Tabs and Description - hidden when Pedro Sousa card is shown */}
      {!showPedro && (
        <>
          {/* Tabs */}
          <div style={{ width: '100%', maxWidth: 500, display: 'flex', alignItems: 'center', marginTop: 18, marginBottom: 0, padding: '0 16px' }}>
            <div style={{ flex: 1, textAlign: 'left', fontSize: 20, fontWeight: 600 }}>
              <span style={{ color: 'black', borderBottom: '2px solid black', paddingBottom: 4, cursor: 'pointer' }}>Pro Teams</span>
            </div>
            <div style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 600 }}>
              <span style={{ color: '#bbb', fontWeight: 500, cursor: 'not-allowed' }}>College Teams</span>
            </div>
            <div style={{ flex: 1, textAlign: 'right', fontSize: 20, fontWeight: 600 }}>
              <span style={{ color: '#bbb', fontWeight: 500, cursor: 'not-allowed' }}>Agents</span>
            </div>
          </div>
          {/* Description */}
          <div style={{ width: '100%', maxWidth: 500, textAlign: 'center', color: 'black', fontSize: 16, margin: '18px 0 12px 0', fontWeight: 400, lineHeight: 1.3 }}>
            Increase your exposure and chances of being selected by sending direct emails to academy´s, semi pro and pro teams all over the world.
          </div>
        </>
      )}
      {/* Pedro Sousa Card or Leagues grid */}
      {showPedro ? (
        <div
          style={{ width: '100%', maxWidth: 500, background: 'white', borderRadius: 8, boxShadow: '0 2px 12px rgba(0,0,0,0.04)', margin: '12px 0', padding: '18px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          onClick={() => router.push('/profile')}
        >
          <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <div style={{ flex: '0 0 120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image src={pedroSousa.img} alt="Pedro Sousa" width={110} height={110} style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid #eee' }} />
            </div>
            <div style={{ flex: 1, paddingLeft: 12, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 400, color: '#222', lineHeight: 1 }}>{pedroSousa.first}</div>
              <div style={{ fontSize: 32, fontWeight: 700, color: 'black', lineHeight: 1 }}>{pedroSousa.last}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '8px 0' }}>
                <Image src={pedroSousa.clubLogo} alt={pedroSousa.club} width={38} height={38} style={{ objectFit: 'contain' }} />
                <Image src={pedroSousa.nationLogo} alt={pedroSousa.nation} width={32} height={32} style={{ objectFit: 'contain' }} />
              </div>
            </div>
            <div style={{ flex: 1.2, textAlign: 'right', color: '#888', fontSize: 20, fontWeight: 400, paddingRight: 12 }}>
              <div style={{ fontWeight: 400, color: '#888', fontSize: 20 }}>{pedroSousa.position}</div>
              <div style={{ fontWeight: 400, color: '#888', fontSize: 18 }}>Age: {pedroSousa.age}</div>
              <div style={{ fontWeight: 400, color: '#888', fontSize: 18 }}>Height: {pedroSousa.height}</div>
              <div style={{ fontWeight: 400, color: '#888', fontSize: 18 }}>Weight: {pedroSousa.weight}</div>
              <div style={{ fontWeight: 400, color: '#888', fontSize: 18 }}>Preferred Foot: {pedroSousa.foot}</div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ width: '100%', maxWidth: 500, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, background: 'white', borderRadius: 8, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          {filtered.map(lg => (
            <div key={lg.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #eee', background: 'white', minHeight: 120, height: 140, cursor: lg.logo ? 'pointer' : 'default' }}
              onClick={() => {
                if (!lg.logo) return;
                // Map logo to route
                let route = '';
                if (lg.logo.includes('liga-portugal')) route = '/LigaPortugal';
                else if (lg.logo.includes('laliga')) route = '/LaLiga';
                else if (lg.logo.includes('premier-league')) route = '/PremierLeague';
                else if (lg.logo.includes('seriea')) route = '/SerieA';
                else if (lg.logo.includes('bundesliga')) route = '/Bundesliga';
                else if (lg.logo.includes('ligue1')) route = '/Ligue1';
                else if (lg.logo.includes('eredivisie')) route = '/Eredivisie';
                else if (lg.logo.includes('mls')) route = '/MLS';
                else if (lg.logo.includes('skybet')) route = '/SkyBet';
                else if (lg.logo.includes('brasileirao')) route = '/Brasileirao';
                if (route) router.push(route);
              }}
            >
              {lg.logo && <Image src={lg.logo} alt={lg.name} width={100} height={100} style={{ objectFit: 'contain', maxWidth: '70%', maxHeight: '70%' }} />}
            </div>
          ))}
        </div>
      )}
      {/* Bottom Navigation Bar */}
      <BottomNav active='search' />
    </div>
  );
} 
      {/* Tabs */}
      <div style={{ width: '100%', maxWidth: 500, display: 'flex', alignItems: 'center', marginTop: 18, marginBottom: 0, padding: '0 16px' }}>
        <div style={{ flex: 1, textAlign: 'left', fontSize: 20, fontWeight: 600 }}>
          <span style={{ color: 'black', borderBottom: '2px solid black', paddingBottom: 4, cursor: 'pointer' }}>Pro Teams</span>
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 600 }}>
          <span style={{ color: '#bbb', fontWeight: 500, cursor: 'not-allowed' }}>College Teams</span>
        </div>
        <div style={{ flex: 1, textAlign: 'right', fontSize: 20, fontWeight: 600 }}>
          <span style={{ color: '#bbb', fontWeight: 500, cursor: 'not-allowed' }}>Agents</span>
        </div>
      </div>
      {/* Description */}
      <div style={{ width: '100%', maxWidth: 500, textAlign: 'center', color: 'black', fontSize: 16, margin: '18px 0 12px 0', fontWeight: 400, lineHeight: 1.3 }}>
        Increase your exposure and chances of being selected by sending direct emails to academy´s, semi pro and pro teams all over the world.
      </div>
      {/* Leagues grid */}
      <div style={{ width: '100%', maxWidth: 500, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, background: 'white', borderRadius: 8, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
        {filtered.map(lg => (
          <div key={lg.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #eee', background: 'white', minHeight: 120, height: 140 }}>
            {lg.logo && <Image src={lg.logo} alt={lg.name} width={100} height={100} style={{ objectFit: 'contain', maxWidth: '70%', maxHeight: '70%' }} />}
          </div>
        ))}
      </div>
      {/* Bottom Navigation Bar */}
      <BottomNav active='search' />
    </div>
  );
} 