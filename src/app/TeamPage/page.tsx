"use client";
import Image from 'next/image';
import BottomNav from '../feed/BottomNav';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

function TeamPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const age = searchParams.get('age') || 'U23';
  const [isFavourite, setIsFavourite] = useState(false);
  const [showFullTable, setShowFullTable] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'league' | 'staff' | 'contacts'>('league');

  useEffect(() => {
    // On mount, check localStorage for favourite state
    setIsFavourite(localStorage.getItem('benfica_fav') === 'true');
  }, []);

  function toggleFavourite() {
    const newFav = !isFavourite;
    setIsFavourite(newFav);
    localStorage.setItem('benfica_fav', newFav ? 'true' : 'false');
  }

  const leagueTable = [
    { pos: 1, name: 'Sporting', logo: '/sporting.png', mp: 34, w: 25, d: 7, l: 2, g: '+61', pts: 82 },
    { pos: 2, name: 'Benfica', logo: '/benfica.png', mp: 34, w: 25, d: 5, l: 4, g: '+56', pts: 80 },
    { pos: 3, name: 'Porto', logo: '/porto.png', mp: 34, w: 22, d: 5, l: 7, g: '+35', pts: 71 },
    { pos: 4, name: 'Braga', logo: '/braga.png', mp: 34, w: 19, d: 9, l: 6, g: '+25', pts: 66 },
    { pos: 5, name: 'Santa Clara', logo: '/santaclara.png', mp: 34, w: 17, d: 6, l: 11, g: '+4', pts: 57 },
    { pos: 6, name: 'Vitória SC', logo: '/vitoria.png', mp: 34, w: 14, d: 12, l: 8, g: '+10', pts: 54 },
    { pos: 7, name: 'Famalicão', logo: '/famalicao.png', mp: 34, w: 12, d: 11, l: 11, g: '+5', pts: 47 },
    { pos: 8, name: 'Estoril Praia', logo: '/estoril.png', mp: 34, w: 12, d: 10, l: 12, g: '-5', pts: 46 },
    { pos: 9, name: 'Casa Pia', logo: '/casapia.png', mp: 34, w: 12, d: 9, l: 13, g: '-5', pts: 45 },
    { pos: 10, name: 'Moreirense', logo: '/moreirense.png', mp: 34, w: 10, d: 10, l: 14, g: '-8', pts: 40 },
    { pos: 11, name: 'Rio Ave', logo: '/rioave.png', mp: 34, w: 9, d: 11, l: 14, g: '-16', pts: 38 },
    { pos: 12, name: 'Arouca', logo: '/arouca.png', mp: 34, w: 9, d: 11, l: 14, g: '-14', pts: 38 },
    { pos: 13, name: 'Gil Vicente', logo: '/gilvicente.png', mp: 34, w: 8, d: 10, l: 16, g: '-13', pts: 34 },
    { pos: 14, name: 'Nacional', logo: '/nacional.png', mp: 34, w: 9, d: 7, l: 18, g: '-18', pts: 34 },
    { pos: 15, name: 'Estrela Amadora', logo: '/estrela.png', mp: 34, w: 7, d: 8, l: 19, g: '-26', pts: 29 },
    { pos: 16, name: 'AVS', logo: '/avs.png', mp: 34, w: 5, d: 12, l: 17, g: '-35', pts: 27 },
    { pos: 17, name: 'Farense', logo: '/farense.png', mp: 34, w: 6, d: 9, l: 19, g: '-21', pts: 27 },
    { pos: 18, name: 'Boavista', logo: '/boavista.png', mp: 34, w: 6, d: 6, l: 22, g: '-35', pts: 24 },
  ];

  const lastGames = [
    { comp: 'Liga Portugal', compFlag: '/liga-portugal.png', date: '17.05.', home: { name: 'Braga', logo: '/braga.png' }, away: { name: 'Benfica', logo: '/benfica.png' }, score: '1 1', result: 'D' },
    { comp: 'Liga Portugal', compFlag: '/liga-portugal.png', date: '10.05.', home: { name: 'Benfica', logo: '/benfica.png' }, away: { name: 'Sporting CP', logo: '/sporting.png' }, score: '1 1', result: 'D' },
    { comp: 'Liga Portugal', compFlag: '/liga-portugal.png', date: '03.05.', home: { name: 'Estoril', logo: '/estoril.png' }, away: { name: 'Benfica', logo: '/benfica.png' }, score: '1 2', result: 'W' },
    { comp: 'Liga Portugal', compFlag: '/liga-portugal.png', date: '27.04.', home: { name: 'Benfica', logo: '/benfica.png' }, away: { name: 'AFS', logo: '/avs.png' }, score: '6 0', result: 'W' },
    { comp: 'Taça de Portugal', compFlag: '/liga-portugal.png', date: '23.04.', home: { name: 'Benfica', logo: '/benfica.png' }, away: { name: 'Tirsense', logo: '/boavista.png' }, score: '4 0', result: 'W' },
    { comp: 'Liga Portugal', compFlag: '/liga-portugal.png', date: '19.04.', home: { name: 'Vitoria Guimaraes', logo: '/vitoria.png' }, away: { name: 'Benfica', logo: '/benfica.png' }, score: '0 3', result: 'W' },
    { comp: 'Liga Portugal', compFlag: '/liga-portugal.png', date: '13.04.', home: { name: 'Benfica', logo: '/benfica.png' }, away: { name: 'Arouca', logo: '/arouca.png' }, score: '2 2', result: 'D' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 80 }}>
      {/* Top bar with back and star */}
      <div style={{ width: '100%', maxWidth: 500, margin: '24px auto 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, position: 'relative' }}>
        <button onClick={() => router.push('/LigaPortugal')} style={{ position: 'absolute', left: 0, background: 'none', border: 'none', fontSize: 26, cursor: 'pointer', color: '#888', padding: 0, marginLeft: 4 }}>←</button>
        <span
          onClick={toggleFavourite}
          style={{ position: 'absolute', right: 0, fontSize: 32, color: isFavourite ? '#f5b800' : '#bbb', cursor: 'pointer', marginRight: 4 }}
        >
          {isFavourite ? '★' : '☆'}
        </span>
      </div>
      {/* Team logo */}
      <div style={{ marginTop: 8, marginBottom: 8 }}>
        <Image src="/benfica.png" alt="Benfica" width={180} height={180} style={{ objectFit: 'contain' }} />
      </div>
      {/* Team name and age group */}
      <div style={{ textAlign: 'center', marginBottom: 8 }}>
        <div style={{ fontWeight: 700, fontSize: 28, color: '#222' }}>Benfica</div>
        <div style={{ fontWeight: 400, fontSize: 24, color: '#222' }}>{age}</div>
      </div>
      {/* Tabs */}
      <div style={{ width: '100%', maxWidth: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '18px 0 0 0', borderBottom: '1.5px solid #eee' }}>
        <div
          style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: selectedTab === 'league' ? 700 : 500, color: selectedTab === 'league' ? 'black' : '#bbb', borderBottom: selectedTab === 'league' ? '2px solid black' : 'none', paddingBottom: 4, cursor: 'pointer', transition: 'color 0.15s, border-bottom 0.15s' }}
          onClick={() => setSelectedTab('league')}
        >
          League Table
        </div>
        <div
          style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: selectedTab === 'staff' ? 700 : 500, color: selectedTab === 'staff' ? 'black' : '#bbb', borderBottom: selectedTab === 'staff' ? '2px solid black' : 'none', paddingBottom: 4, cursor: 'pointer', transition: 'color 0.15s, border-bottom 0.15s' }}
          onClick={() => setSelectedTab('staff')}
        >
          Staff and Team
        </div>
        <div
          style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: selectedTab === 'contacts' ? 700 : 500, color: selectedTab === 'contacts' ? 'black' : '#bbb', borderBottom: selectedTab === 'contacts' ? '2px solid black' : 'none', paddingBottom: 4, cursor: 'pointer', transition: 'color 0.15s, border-bottom 0.15s' }}
          onClick={() => setSelectedTab('contacts')}
        >
          Contacts
        </div>
      </div>
      {/* League Table */}
      <div style={{ width: '100%', maxWidth: 500, marginTop: 18 }}>
        <div style={{ background: '#222', color: 'white', fontWeight: 700, fontSize: 22, padding: '8px 0 8px 16px', borderTopLeftRadius: 4, borderTopRightRadius: 4 }}>League</div>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#f5f5f5' }}>
          <thead>
            <tr style={{ color: '#888', fontWeight: 500, fontSize: 15, background: '#e5e5e5' }}>
              <th style={{ padding: 6 }}>#</th>
              <th style={{ padding: 6 }}>Team</th>
              <th style={{ padding: 6 }}>MP</th>
              <th style={{ padding: 6 }}>W</th>
              <th style={{ padding: 6 }}>D</th>
              <th style={{ padding: 6 }}>L</th>
              <th style={{ padding: 6 }}>G</th>
              <th style={{ padding: 6 }}>PTS</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: 'center', fontSize: 15, color: '#222' }}>
            <tr><td>1.</td><td>Sporting</td><td>34</td><td>25</td><td>7</td><td>2</td><td>+61</td><td>82</td></tr>
            <tr><td>2.</td><td>Benfica</td><td>34</td><td>25</td><td>5</td><td>4</td><td>+56</td><td>80</td></tr>
            <tr><td>3.</td><td>Porto</td><td>34</td><td>22</td><td>5</td><td>7</td><td>+35</td><td>71</td></tr>
            <tr><td>4.</td><td>Braga</td><td>34</td><td>19</td><td>9</td><td>6</td><td>+25</td><td>66</td></tr>
          </tbody>
        </table>
        <div style={{ textAlign: 'center', color: '#888', fontSize: 16, marginTop: 8 }}>
          <button onClick={() => setShowFullTable(true)} style={{ background: 'none', border: 'none', color: '#888', fontSize: 16, cursor: 'pointer', textDecoration: 'underline' }}>Open Full Table</button>
        </div>
      </div>
      {/* Full Table Modal */}
      {showFullTable && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#181818', borderRadius: 12, padding: 24, maxWidth: 600, width: '95vw', maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 4px 32px rgba(0,0,0,0.4)', position: 'relative' }}>
            <button onClick={() => setShowFullTable(false)} style={{ position: 'absolute', top: 12, right: 16, background: 'none', border: 'none', color: '#fff', fontSize: 28, cursor: 'pointer', zIndex: 10 }}>✕</button>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'transparent' }}>
              <thead>
                <tr style={{ color: '#bbb', fontWeight: 600, fontSize: 16, background: 'transparent' }}>
                  <th style={{ padding: 6, textAlign: 'left' }}>#</th>
                  <th style={{ padding: 6, textAlign: 'left' }}>Team</th>
                  <th style={{ padding: 6 }}>MP</th>
                  <th style={{ padding: 6 }}>W</th>
                  <th style={{ padding: 6 }}>D</th>
                  <th style={{ padding: 6 }}>L</th>
                  <th style={{ padding: 6 }}>G</th>
                  <th style={{ padding: 6 }}>PTS</th>
                </tr>
              </thead>
              <tbody>
                {leagueTable.map(row => (
                  <tr key={row.pos} style={{ color: row.name === 'Benfica' ? '#fff' : '#eee', fontWeight: row.name === 'Benfica' ? 700 : 400, background: row.name === 'Benfica' ? '#444' : 'transparent' }}>
                    <td style={{ padding: 6 }}>{row.pos}.</td>
                    <td style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 6 }}>
                      <Image src={row.logo} alt={row.name} width={24} height={24} style={{ objectFit: 'contain', filter: row.name === 'Benfica' ? 'none' : 'grayscale(1)' }} />
                      {row.name}
                    </td>
                    <td>{row.mp}</td>
                    <td>{row.w}</td>
                    <td>{row.d}</td>
                    <td>{row.l}</td>
                    <td>{row.g}</td>
                    <td style={{ fontWeight: 700 }}>{row.pts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {/* Games List */}
      <div style={{ width: '100%', maxWidth: 500, marginTop: 18 }}>
        <div style={{ background: '#222', color: 'white', fontWeight: 700, fontSize: 22, padding: '8px 0 8px 16px', borderTopLeftRadius: 4, borderTopRightRadius: 4 }}>Last Games</div>
        <div style={{ background: '#181818', maxHeight: 340, overflowY: 'auto', borderRadius: 0, padding: 0 }}>
          {lastGames.map((game, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid #222', padding: 0 }}>
              {/* Competition header */}
              {(idx === 0 || lastGames[idx-1].comp !== game.comp) && (
                <div style={{ display: 'flex', alignItems: 'center', background: '#101820', color: '#fff', fontWeight: 600, fontSize: 15, padding: '8px 0 0 8px', gap: 8 }}>
                  <Image src={game.compFlag} alt={game.comp} width={18} height={18} style={{ marginRight: 4 }} />
                  <span>{game.comp}</span>
                  <span style={{ fontSize: 11, color: '#bbb', marginLeft: 8 }}>{game.comp === 'Liga Portugal' ? 'PORTUGAL' : 'PORTUGAL'}</span>
                </div>
              )}
              {/* Game row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 8px', background: '#181818', color: '#fff', fontSize: 16 }}>
                <span style={{ minWidth: 54, color: '#bbb', fontSize: 14 }}>{game.date}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, flex: 1, justifyContent: 'flex-end' }}>
                  <Image src={game.home.logo} alt={game.home.name} width={22} height={22} style={{ objectFit: 'contain' }} />
                  <span style={{ fontWeight: 600, color: game.home.name === 'Benfica' ? '#fff' : '#bbb' }}>{game.home.name}</span>
                  <span style={{ fontWeight: 700, fontSize: 15, margin: '0 2px', color: '#fff' }}>{game.score.split(' ')[0]}</span>
                  <span style={{ fontWeight: 700, fontSize: 15, margin: '0 2px', color: '#fff' }}>-</span>
                  <span style={{ fontWeight: 700, fontSize: 15, margin: '0 2px', color: '#fff' }}>{game.score.split(' ')[1]}</span>
                  <span style={{ fontWeight: 600, color: game.away.name === 'Benfica' ? '#fff' : '#bbb' }}>{game.away.name}</span>
                  <Image src={game.away.logo} alt={game.away.name} width={22} height={22} style={{ objectFit: 'contain' }} />
                </div>
                <span style={{ minWidth: 28, marginLeft: 8, fontWeight: 700, color: game.result === 'W' ? '#2ecc40' : game.result === 'D' ? '#f5b800' : '#e74c3c', background: '#222', borderRadius: 6, padding: '2px 8px', fontSize: 15, display: 'inline-block', textAlign: 'center' }}>{game.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Navigation Bar */}
      <BottomNav active='search' />
    </div>
  );
}

export default function TeamPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TeamPageContent />
    </Suspense>
  );
} 