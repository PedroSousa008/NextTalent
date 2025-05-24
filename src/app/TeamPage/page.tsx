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
  const [playerSort, setPlayerSort] = useState<{ col: string, asc: boolean }>({ col: '#', asc: true });

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

  const staff = [
    { name: 'Andy Myers', job: 'Manager', age: 48, appointed: '14 July 2019', lastClub: 'Chelsea' },
    { name: 'Jon Harley', job: 'Assistant Manager', age: 42, appointed: '14 July 2019', lastClub: 'Chelsea' },
    { name: 'Jack Mesure', job: 'Assistant Manager', age: 45, appointed: '31 July 2021', lastClub: 'Bristol Rovers' },
    { name: 'Claude Makélélé', job: 'Technical Mentor', age: 49, appointed: '15 August 2019', lastClub: 'Eupen' },
    { name: 'Neil Bath', job: 'Head of Youth Dept', age: 48, appointed: '07 July 2011', lastClub: 'Chelsea' },
    { name: 'Elliot Axtell', job: 'Conditioning Coach', age: 42, appointed: '14 July 2019', lastClub: 'Watford' },
    { name: 'Mark Beeney', job: 'Head of Goalkeeping Dept', age: 40, appointed: '14 July 2021', lastClub: 'Chelsea' },
    { name: 'Alex Scott', job: 'Performance Analyst', age: 37, appointed: '15 August 2019', lastClub: 'Worthing FC' },
    { name: 'Anders Jensen', job: 'Scout', age: 24, appointed: '01 October 2018', lastClub: 'Sarpsborg 08' },
    { name: 'Carl Magnay', job: 'Scout', age: 33, appointed: '01 September 2019', lastClub: 'Chelsea' },
  ];

  const players = [
    { num: 1, name: 'Anatoliy Trubin', position: 'Goalkeeper', birth: '01/08/2001', age: 23, nat: '🇺🇦' },
    { num: 24, name: 'Samuel Soares', position: 'Goalkeeper', birth: '15/06/2002', age: 22, nat: '🇵🇹' },
    { num: 4, name: 'António Silva', position: 'Centre Back', birth: '30/10/2003', age: 21, nat: '🇵🇹' },
    { num: 44, name: 'Tomás Araújo', position: 'Centre Back', birth: '16/05/2002', age: 23, nat: '🇵🇹' },
    { num: 81, name: 'Adrian Bajrami', position: 'Centre Back', birth: '05/04/2002', age: 23, nat: '🇦🇱🇨🇭' },
    { num: 30, name: 'Nicolás Otamendi', position: 'Centre Back', birth: '12/02/1988', age: 37, nat: '🇦🇷' },
    { num: 3, name: 'Álvaro Carreras', position: 'Left Back', birth: '23/03/2003', age: 22, nat: '🇪🇸' },
    { num: 26, name: 'Samuel Dahl', position: 'Left Back', birth: '04/03/2003', age: 22, nat: '🇸🇪' },
    { num: 6, name: 'Alexander Bah', position: 'Right Back', birth: '09/12/1997', age: 27, nat: '🇩🇰🇬🇲' },
    { num: 71, name: 'Leandro Santos', position: 'Right Back', birth: '28/09/2005', age: 19, nat: '🇵🇹' },
    { num: 61, name: 'Florentino', position: 'Defensive Midfielder', birth: '19/08/1999', age: 25, nat: '🇦🇴' },
    { num: 16, name: 'Manu Silva', position: 'Defensive Midfielder', birth: '12/06/2001', age: 23, nat: '🇵🇹' },
    { num: 23, name: 'Orkun Kökçü', position: 'Central Midfielder', birth: '29/12/2000', age: 24, nat: '🇹🇷🇳🇱' },
    { num: 8, name: 'Fredrik Aursnes', position: 'Central Midfielder', birth: '10/12/1995', age: 29, nat: '🇳🇴🇨🇭' },
    { num: 18, name: 'Leandro Barreiro', position: 'Central Midfielder', birth: '03/01/2000', age: 25, nat: '🇱🇺🇵🇹' },
    { num: 85, name: 'Renato Sanches', position: 'Central Midfielder', birth: '18/08/1997', age: 27, nat: '🇵🇹🇨🇻' },
    { num: 84, name: 'João Rego', position: 'Attacking Midfielder', birth: '20/06/2005', age: 19, nat: '🇵🇹' },
    { num: 10, name: 'Pedro Sousa', position: 'Attacking Midfielder', birth: '13/04/2003', age: 22, nat: '🇵🇹' },
    { num: 17, name: 'Kerem Aktürkoğlu', position: 'Left Winger', birth: '21/10/1998', age: 26, nat: '🇹🇷' },
    { num: 21, name: 'Andreas Schjelderup', position: 'Left Winger', birth: '01/06/2004', age: 20, nat: '🇳🇴' },
    { num: 27, name: 'Bruma', position: 'Left Winger', birth: '24/10/1994', age: 30, nat: '🇵🇹🇬🇼' },
    { num: 25, name: 'Gianluca Prestianni', position: 'Right Winger', birth: '31/01/2006', age: 19, nat: '🇦🇷🇮🇹' },
    { num: 47, name: 'Tiago Gouveia', position: 'Right Winger', birth: '18/06/2001', age: 23, nat: '🇵🇹' },
    { num: 11, name: 'Ángel Di María', position: 'Right Winger', birth: '14/02/1988', age: 37, nat: '🇦🇷🇮🇹' },
    { num: 14, name: 'Vangelis Pavlidis', position: 'Striker', birth: '21/11/1998', age: 26, nat: '🇬🇷' },
    { num: 7, name: 'Zeki Amdouni', position: 'Striker', birth: '04/12/2000', age: 24, nat: '🇨🇭🇹🇷' },
    { num: 9, name: 'Arthur Cabral', position: 'Striker', birth: '25/04/1998', age: 27, nat: '🇧🇷' },
    { num: 19, name: 'Andrea Belotti', position: 'Striker', birth: '20/12/1993', age: 31, nat: '🇮🇹' },
    // Empty rows for more players
    {}, {},
  ];

  const sortedPlayers = [...players].filter(p => p && p.name).sort((a, b) => {
    if (!a || !b) return 0;
    if (playerSort.col === '#') {
      return playerSort.asc ? (a.num ?? 0) - (b.num ?? 0) : (b.num ?? 0) - (a.num ?? 0);
    } else if (playerSort.col === 'Players') {
      return playerSort.asc ? (a.name ?? '').localeCompare(b.name ?? '') : (b.name ?? '').localeCompare(a.name ?? '');
    } else if (playerSort.col === 'Age') {
      return playerSort.asc ? (a.age ?? 0) - (b.age ?? 0) : (b.age ?? 0) - (a.age ?? 0);
    } else if (playerSort.col === 'Natio.') {
      return playerSort.asc ? (a.nat ?? '').localeCompare(b.nat ?? '') : (b.nat ?? '').localeCompare(a.nat ?? '');
    }
    return 0;
  });

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
      {selectedTab === 'league' && (
        <>
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
                    <div style={{ display: 'flex', alignItems: 'center', background: '#222', color: '#fff', fontWeight: 600, fontSize: 15, padding: '8px 0 0 8px', gap: 8 }}>
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
                    <span style={{ minWidth: 28, marginLeft: 8, fontWeight: 700, color: game.result === 'W' ? '#2ecc40' : game.result === 'D' ? '#f5b800' : '#e74c3c', background: '#e0e0e0', borderRadius: 6, padding: '2px 8px', fontSize: 15, display: 'inline-block', textAlign: 'center' }}>{game.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {/* Staff and Team Table */}
      {selectedTab === 'staff' && (
        <div style={{ width: '100%', maxWidth: 500, marginTop: 18, background: 'white', borderRadius: 8, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <div style={{ background: '#222', color: 'white', fontWeight: 700, fontSize: 22, padding: '8px 0 8px 16px', borderTopLeftRadius: 4, borderTopRightRadius: 4 }}>COACHING STAFF</div>
          <div style={{ maxHeight: 320, overflowY: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white' }}>
              <thead>
                <tr style={{ background: '#eee', color: '#888', fontWeight: 600, fontSize: 16 }}>
                  <th style={{ padding: 8, textAlign: 'left' }}>Name</th>
                  <th style={{ padding: 8, textAlign: 'left' }}>Job</th>
                  <th style={{ padding: 8, textAlign: 'center' }}>Age</th>
                  <th style={{ padding: 8, textAlign: 'center' }}>Appointed</th>
                  <th style={{ padding: 8, textAlign: 'left' }}>Last Club</th>
                </tr>
              </thead>
              <tbody>
                {staff.map((s, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #eee', color: '#222', fontSize: 15 }}>
                    <td style={{ padding: 8 }}>{s.name}</td>
                    <td style={{ padding: 8 }}>{s.job}</td>
                    <td style={{ padding: 8, textAlign: 'center' }}>{s.age}</td>
                    <td style={{ padding: 8, textAlign: 'center' }}>{s.appointed}</td>
                    <td style={{ padding: 8 }}>{s.lastClub}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Players Table */}
          <div style={{ background: '#222', color: 'white', fontWeight: 700, fontSize: 22, padding: '8px 0 8px 16px', borderTopLeftRadius: 4, borderTopRightRadius: 4, marginTop: 24 }}>PLAYERS</div>
          <div style={{ maxHeight: 320, overflowY: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white' }}>
              <thead>
                <tr style={{ background: '#eee', color: '#888', fontWeight: 600, fontSize: 16 }}>
                  <th style={{ padding: 8, textAlign: 'center', cursor: 'pointer' }} onClick={() => setPlayerSort(s => ({ col: '#', asc: s.col === '#' ? !s.asc : true }))}>
                    # {playerSort.col === '#' ? (playerSort.asc ? '↑' : '↓') : ''}
                  </th>
                  <th style={{ padding: 8, textAlign: 'left', cursor: 'pointer' }} onClick={() => setPlayerSort(s => ({ col: 'Players', asc: s.col === 'Players' ? !s.asc : true }))}>
                    Players {playerSort.col === 'Players' ? (playerSort.asc ? '↑' : '↓') : ''}
                  </th>
                  <th style={{ padding: 8, textAlign: 'center', cursor: 'pointer' }} onClick={() => setPlayerSort(s => ({ col: 'Age', asc: s.col === 'Age' ? !s.asc : true }))}>
                    Age {playerSort.col === 'Age' ? (playerSort.asc ? '↑' : '↓') : ''}
                  </th>
                  <th style={{ padding: 8, textAlign: 'center', cursor: 'pointer' }} onClick={() => setPlayerSort(s => ({ col: 'Natio.', asc: s.col === 'Natio.' ? !s.asc : true }))}>
                    Natio. {playerSort.col === 'Natio.' ? (playerSort.asc ? '↑' : '↓') : ''}
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedPlayers.map((p, idx) => p && p.name ? (
                  <tr key={idx} style={{ borderBottom: '1px solid #eee', color: '#222', fontSize: 15 }}>
                    <td style={{ padding: 8, textAlign: 'center', fontWeight: 700, background: '#e0e0e0', borderRadius: 12 }}>{p.num}</td>
                    <td style={{ padding: 8 }}>
                      <div style={{ fontWeight: 700, color: 'black' }}>{p.name}</div>
                      <div style={{ fontSize: 13, color: '#888' }}>{p.position}</div>
                    </td>
                    <td style={{ padding: 8, textAlign: 'center' }}>{p.birth} ({p.age})</td>
                    <td style={{ padding: 8, textAlign: 'center', fontSize: 22 }}>{p.nat}</td>
                  </tr>
                ) : (
                  <tr key={idx}><td colSpan={4} style={{ height: 36 }}></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {/* Contacts Table */}
      {selectedTab === 'contacts' && (
        <div style={{ width: '100%', maxWidth: 500, marginTop: 18, background: 'white', borderRadius: 8, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <div style={{ background: '#222', color: 'white', fontWeight: 700, fontSize: 28, padding: '12px 0 12px 16px', borderTopLeftRadius: 4, borderTopRightRadius: 4, fontFamily: 'serif', letterSpacing: 1 }}>COACHING STAFF</div>
          <div style={{ overflowX: 'auto', width: '100%' }}>
            <table style={{ minWidth: 900, width: '100%', borderCollapse: 'collapse', background: 'white' }}>
              <thead>
                <tr style={{ background: '#e0e0e0', color: '#bbb', fontWeight: 600, fontSize: 20, fontFamily: 'serif' }}>
                  <th style={{ padding: 10, textAlign: 'left' }}>Name</th>
                  <th style={{ padding: 10, textAlign: 'left' }}>Job</th>
                  <th style={{ padding: 10, textAlign: 'center' }}>Phone Number</th>
                  <th style={{ padding: 10, textAlign: 'left' }}>Email</th>
                  <th style={{ padding: 10, textAlign: 'left' }}>Instagram</th>
                  <th style={{ padding: 10, textAlign: 'left' }}>Twitter</th>
                  <th style={{ padding: 10, textAlign: 'left' }}>LinkedIn</th>
                </tr>
              </thead>
              <tbody>
                {staff.map((s, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #eee', color: '#222', fontSize: 17, fontFamily: 'serif' }}>
                    <td style={{ padding: 10 }}>{s.name}</td>
                    <td style={{ padding: 10 }}>{s.job}</td>
                    <td style={{ padding: 10, textAlign: 'center' }}>----------</td>
                    <td style={{ padding: 10 }}>{s.name ? s.name.toLowerCase().replace(/ /g, '') + '@fc.com' : '----------'}</td>
                    <td style={{ padding: 10 }}>{s.name === 'Jon Harley' ? '@harley_jon' : s.name === 'Claude Makélélé' ? '@makeleleofficial' : '----------'}</td>
                    <td style={{ padding: 10 }}>{s.name === 'Jon Harley' ? '@harley_jon_tw' : s.name === 'Claude Makélélé' ? '@makelele_tw' : '----------'}</td>
                    <td style={{ padding: 10 }}>{s.name === 'Jon Harley' ? 'linkedin.com/in/harleyjon' : s.name === 'Claude Makélélé' ? 'linkedin.com/in/makelele' : '----------'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
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