"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function BenficaProfileTeamPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'calendar' | 'documents' | 'squad'>('calendar');
  const [playerSort, setPlayerSort] = useState<{ col: string, asc: boolean }>({ col: '#', asc: true });

  // Full player list
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
  ];
  const sortedPlayers = [...players].sort((a, b) => {
    if (playerSort.col === '#') {
      return playerSort.asc ? a.num - b.num : b.num - a.num;
    } else if (playerSort.col === 'Players') {
      return playerSort.asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    } else if (playerSort.col === 'Age') {
      return playerSort.asc ? a.age - b.age : b.age - a.age;
    } else if (playerSort.col === 'Natio.') {
      return playerSort.asc ? a.nat.localeCompare(b.nat) : b.nat.localeCompare(a.nat);
    }
    return 0;
  });

  return (
    <div style={{ minHeight: '100vh', background: 'white', fontFamily: 'serif', color: '#222', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
      {/* Back button */}
      <button onClick={() => router.back()} style={{ position: 'absolute', top: 24, left: 18, background: 'none', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, cursor: 'pointer' }}>
        <span style={{ color: 'grey', fontSize: 24, fontWeight: 500 }}>&larr;</span>
      </button>
      {/* Team logo with DM icons */}
      <div style={{ marginTop: 32, marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 48 }}>
        {/* Team DM icon */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 8 }}>
          <Image src="/dm.png" alt="Team DM" width={40} height={40} style={{ objectFit: 'contain' }} />
          <span style={{ fontSize: 14, color: '#222', marginTop: 2 }}>Team</span>
        </div>
        <Image src="/benfica.png" alt="Benfica" width={160} height={160} style={{ objectFit: 'contain' }} />
        {/* Coach DM icon */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 8 }}>
          <Image src="/dm.png" alt="Coach DM" width={40} height={40} style={{ objectFit: 'contain' }} />
          <span style={{ fontSize: 14, color: '#222', marginTop: 2 }}>Coach</span>
        </div>
      </div>
      {/* Team name and age group */}
      <div style={{ fontWeight: 500, fontSize: 36, color: '#222', fontFamily: 'serif', marginBottom: 0, textAlign: 'center' }}>Benfica</div>
      <div style={{ fontWeight: 400, fontSize: 28, color: '#222', fontFamily: 'serif', marginBottom: 16, textAlign: 'center' }}>Senior</div>
      {/* Tabs */}
      <div style={{ width: '100%', maxWidth: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1.5px solid #eee', marginBottom: 0 }}>
        <div
          onClick={() => setActiveTab('calendar')}
          style={{
            flex: 1,
            textAlign: 'center',
            fontSize: 22,
            fontWeight: activeTab === 'calendar' ? 600 : 500,
            color: activeTab === 'calendar' ? 'black' : '#bbb',
            borderBottom: activeTab === 'calendar' ? '2px solid black' : 'none',
            paddingBottom: 4,
            cursor: 'pointer',
            fontFamily: 'serif',
            transition: 'color 0.15s, border-bottom 0.15s',
          }}
        >
          Calendar
        </div>
        <div
          onClick={() => setActiveTab('documents')}
          style={{
            flex: 1,
            textAlign: 'center',
            fontSize: 22,
            fontWeight: activeTab === 'documents' ? 600 : 500,
            color: activeTab === 'documents' ? 'black' : '#bbb',
            borderBottom: activeTab === 'documents' ? '2px solid black' : 'none',
            paddingBottom: 4,
            cursor: 'pointer',
            fontFamily: 'serif',
            transition: 'color 0.15s, border-bottom 0.15s',
          }}
        >
          Documents
        </div>
        <div
          onClick={() => setActiveTab('squad')}
          style={{
            flex: 1,
            textAlign: 'center',
            fontSize: 22,
            fontWeight: activeTab === 'squad' ? 600 : 500,
            color: activeTab === 'squad' ? 'black' : '#bbb',
            borderBottom: activeTab === 'squad' ? '2px solid black' : 'none',
            paddingBottom: 4,
            cursor: 'pointer',
            fontFamily: 'serif',
            transition: 'color 0.15s, border-bottom 0.15s',
          }}
        >
          Squad
        </div>
      </div>
      {/* Calendar Table */}
      {activeTab === 'calendar' && (
        <div style={{ width: '100%', maxWidth: 700, background: '#eee', margin: '0 auto', fontFamily: 'serif', fontSize: 18, borderRadius: 0, marginTop: 0 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'serif' }}>
            <tbody>
              <tr style={{ background: '#ddd', color: '#222', fontWeight: 500, fontSize: 18 }}>
                <td style={{ padding: '8px 8px', width: 120 }}>16/06/2025</td>
                <td style={{ textAlign: 'right', width: '30%' }}>Boca Juniors</td>
                <td style={{ textAlign: 'center', width: 60, fontWeight: 700, fontSize: 22 }}>-</td>
                <td style={{ textAlign: 'left', width: '30%' }}>Benfica</td>
                <td style={{ textAlign: 'center', width: 60 }}><Image src="/fifa.png" alt="FIFA" width={32} height={32} style={{ objectFit: 'contain' }} /></td>
              </tr>
              <tr style={{ background: '#eee', color: '#222', fontWeight: 500, fontSize: 18 }}>
                <td style={{ padding: '8px 8px', width: 120 }}>20/06/2025</td>
                <td style={{ textAlign: 'right', width: '30%' }}>Benfica</td>
                <td style={{ textAlign: 'center', width: 60, fontWeight: 700, fontSize: 22 }}>-</td>
                <td style={{ textAlign: 'left', width: '30%' }}>Auckland City</td>
                <td style={{ textAlign: 'center', width: 60 }}><Image src="/fifa.png" alt="FIFA" width={32} height={32} style={{ objectFit: 'contain' }} /></td>
              </tr>
              <tr style={{ background: '#ddd', color: '#222', fontWeight: 500, fontSize: 18 }}>
                <td style={{ padding: '8px 8px', width: 120 }}>24/06/2025</td>
                <td style={{ textAlign: 'right', width: '30%' }}>Benfica</td>
                <td style={{ textAlign: 'center', width: 60, fontWeight: 700, fontSize: 22 }}>-</td>
                <td style={{ textAlign: 'left', width: '30%' }}>Bayern Munich</td>
                <td style={{ textAlign: 'center', width: 60 }}><Image src="/fifa.png" alt="FIFA" width={32} height={32} style={{ objectFit: 'contain' }} /></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {/* Documents List */}
      {activeTab === 'documents' && (
        <div style={{ width: '100%', maxWidth: 700, background: '#eee', margin: '0 auto', fontFamily: 'serif', fontSize: 18, borderRadius: 0, marginTop: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', background: '#ccc', padding: '12px 18px', borderBottom: '1px solid #ddd' }}>
              <Image src="/doc.png" alt="doc" width={24} height={24} style={{ marginRight: 12 }} />
              <a href="#" style={{ color: '#1a4fa3', fontSize: 18, textDecoration: 'underline', fontFamily: 'serif' }}>Free Kick 1.docx</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', background: '#ccc', padding: '12px 18px', borderBottom: '1px solid #ddd' }}>
              <Image src="/doc.png" alt="doc" width={24} height={24} style={{ marginRight: 12 }} />
              <a href="#" style={{ color: '#1a4fa3', fontSize: 18, textDecoration: 'underline', fontFamily: 'serif' }}>Free Kick 2.docx</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', background: '#ccc', padding: '12px 18px' }}>
              <Image src="/doc.png" alt="doc" width={24} height={24} style={{ marginRight: 12 }} />
              <a href="#" style={{ color: '#1a4fa3', fontSize: 18, textDecoration: 'underline', fontFamily: 'serif' }}>Left Defensive Corner 1.docx</a>
            </div>
          </div>
        </div>
      )}
      {/* Squad Table */}
      {activeTab === 'squad' && (
        <div style={{ width: '100%', maxWidth: 700, background: 'white', borderRadius: 8, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', marginTop: 0, maxHeight: '70vh', overflowY: 'auto' }}>
          <div style={{ background: '#222', color: 'white', fontWeight: 700, fontSize: 22, padding: '8px 0 8px 16px', borderTopLeftRadius: 4, borderTopRightRadius: 4 }}>PLAYERS</div>
          <div style={{ minHeight: 200 }}>
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
                {sortedPlayers.map((p, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #eee', color: '#222', fontSize: 15 }}>
                    <td style={{ padding: 8, textAlign: 'center', fontWeight: 700, background: '#e0e0e0', borderRadius: 12 }}>{p.num}</td>
                    <td style={{ padding: 8 }}>
                      <div style={{ fontWeight: 700, color: 'black' }}>{p.name}</div>
                      <div style={{ fontSize: 13, color: '#888' }}>{p.position}</div>
                    </td>
                    <td style={{ padding: 8, textAlign: 'center' }}>{p.birth} ({p.age})</td>
                    <td style={{ padding: 8, textAlign: 'center', fontSize: 22 }}>{p.nat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
} 