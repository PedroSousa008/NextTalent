import Image from 'next/image';
import BottomNav from '../feed/BottomNav';

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
  return (
    <div style={{ minHeight: '100vh', background: '#f5f6fa', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 80 }}>
      {/* Search bar and icons */}
      <div style={{ width: '100%', maxWidth: 500, margin: '24px auto 0 auto', display: 'flex', alignItems: 'center', gap: 12, padding: '0 16px' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <span style={{ position: 'absolute', left: 12, top: 10, color: '#bbb', fontSize: 22 }}>🔍</span>
          <input
            type="text"
            placeholder="Search"
            style={{ width: '100%', padding: '8px 12px 8px 44px', borderRadius: 8, border: 'none', background: '#e5e5e5', fontSize: 20, color: '#888', fontWeight: 400 }}
            disabled
          />
        </div>
        <span style={{ fontSize: 26, color: '#f5b800', cursor: 'pointer' }}>★</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 26, height: 26, background: '#e5e5e5', borderRadius: 6 }}>
          <Image src="/configurations1.png" alt="Configurations" width={22} height={22} style={{ cursor: 'pointer', display: 'block' }} />
        </span>
      </div>
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
        {LEAGUES.map(lg => (
          <div key={lg.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #eee', background: 'white', minHeight: 120, height: 140 }}>
            <Image src={lg.logo} alt={lg.name} width={100} height={100} style={{ objectFit: 'contain' }} />
          </div>
        ))}
      </div>
      {/* Bottom Navigation Bar */}
      <BottomNav active='search' />
    </div>
  );
} 