import Image from 'next/image';

const LEAGUES = [
  { name: 'Premier League', logo: '/leagues/premier-league.png' },
  { name: 'LaLiga', logo: '/leagues/laliga.png' },
  { name: 'SERIE A', logo: '/leagues/seriea.png' },
  { name: 'BUNDESLIGA', logo: '/leagues/bundesliga.png' },
  { name: 'LIGUE 1', logo: '/leagues/ligue1.png' },
  { name: 'LIGA PORTUGAL', logo: '/leagues/liga-portugal.png' },
  { name: 'eredivisie', logo: '/leagues/eredivisie.png' },
  { name: 'MLS', logo: '/leagues/mls.png' },
  { name: 'Sky Bet Championship', logo: '/leagues/skybet.png' },
  { name: 'Brasileirão', logo: '/leagues/brasileirao.png' },
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
            placeholder="Pesquisa"
            style={{ width: '100%', padding: '8px 12px 8px 38px', borderRadius: 8, border: 'none', background: '#e5e5e5', fontSize: 20, color: '#888', fontWeight: 400 }}
            disabled
          />
        </div>
        <span style={{ fontSize: 26, color: '#f5b800', cursor: 'pointer' }}>★</span>
        <span style={{ fontSize: 26, color: '#888', cursor: 'pointer' }}>⚙️</span>
      </div>
      {/* Tabs */}
      <div style={{ width: '100%', maxWidth: 500, display: 'flex', alignItems: 'center', marginTop: 18, marginBottom: 0, padding: '0 16px' }}>
        <div style={{ flex: 1, display: 'flex', gap: 24, fontSize: 20, fontWeight: 600 }}>
          <span style={{ color: 'black', borderBottom: '2px solid black', paddingBottom: 4, cursor: 'pointer' }}>Pro Teams</span>
          <span style={{ color: '#bbb', fontWeight: 500, cursor: 'not-allowed' }}>College Teams</span>
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
          <div key={lg.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid #eee', padding: '24px 0', background: 'white', minHeight: 120 }}>
            <Image src={lg.logo} alt={lg.name} width={100} height={100} style={{ objectFit: 'contain', marginBottom: 8 }} />
            <span style={{ fontWeight: 600, fontSize: 20, color: '#222', marginTop: 8 }}>{lg.name}</span>
          </div>
        ))}
      </div>
      {/* Bottom Navigation Bar */}
      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, background: '#f5f6fa', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 64, zIndex: 100 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#bbb', opacity: 0.6 }}>
          <span role="img" aria-label="feed" style={{ fontSize: 28, opacity: 0.6 }}>⚽️</span>
          <span style={{ fontSize: 14, opacity: 0.6 }}>Feed</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'black', opacity: 1 }}>
          <span role="img" aria-label="search" style={{ fontSize: 28, opacity: 1 }}>🔍</span>
          <span style={{ fontSize: 14, opacity: 1 }}>Search</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#bbb', opacity: 0.6 }}>
          <span role="img" aria-label="upload" style={{ fontSize: 28, opacity: 0.6 }}>📷</span>
          <span style={{ fontSize: 14, opacity: 0.6 }}>Upload</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#bbb', opacity: 0.6 }}>
          <span role="img" aria-label="notifications" style={{ fontSize: 28, opacity: 0.6 }}>🔔</span>
          <span style={{ fontSize: 14, opacity: 0.6 }}>Notifications</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#bbb', opacity: 0.6 }}>
          <span role="img" aria-label="profile" style={{ fontSize: 28, opacity: 0.6 }}>👤</span>
          <span style={{ fontSize: 14, opacity: 0.6 }}>Profile</span>
        </div>
      </div>
    </div>
  );
} 