"use client";
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import BottomNav from '../../feed/BottomNav';

const MOCK_TEAMS: { [key: string]: any } = {
  "chelsea-fc": {
    logo: "/chelsea.png",
    name: "Chelsea FC",
    age: "U23",
    starred: true,
    table: [
      { team: "Southampton FC", mp: 3, w: 3, d: 0, l: 0, g: "+11", pts: 9 },
      { team: "Reading FC", mp: 3, w: 1, d: 1, l: 1, g: "-6", pts: 4 },
      { team: "Brighton & Hove Albion FC", mp: 3, w: 1, d: 0, l: 2, g: "-2", pts: 3 },
      { team: "Chelsea FC", mp: 3, w: 0, d: 1, l: 2, g: "-3", pts: 1 },
    ],
    games: [
      { date: "28/09/2021", home: "Chelsea FC", score: "2 - 4", away: "Brighton & Hove Albion FC", color: "#f88" },
      { date: "27/10/2021", home: "Reading FC", score: "3 - 3", away: "Chelsea FC", color: "#fc6" },
      { date: "24/11/2021", home: "Chelsea FC", score: "4 - 5", away: "Southampton FC", color: "#f88" },
      { date: "25/01/2022", home: "Southampton FC", score: "-", away: "Chelsea FC", color: "#eee" },
      { date: "29/02/2022", home: "Chelsea FC", score: "-", away: "Reading FC", color: "#eee" },
    ]
  }
};

export default function TeamPage() {
  const router = useRouter();
  const params = useParams();
  const teamKey = typeof params.team === 'string' ? params.team : Array.isArray(params.team) ? params.team[0] : 'chelsea-fc';
  const team = MOCK_TEAMS[teamKey] || MOCK_TEAMS['chelsea-fc'];

  return (
    <div style={{ minHeight: '100vh', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 80 }}>
      {/* Top bar */}
      <div style={{ width: '100%', maxWidth: 500, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 16px 0 16px' }}>
        <button onClick={() => router.back()} style={{ background: 'none', border: 'none', fontSize: 32, color: 'black', cursor: 'pointer' }}>←</button>
        <span style={{ fontSize: 28, color: '#f5b800', fontWeight: 700 }}>{team.starred ? '★' : '☆'}</span>
      </div>
      {/* Logo and name */}
      <div style={{ width: '100%', maxWidth: 500, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 8 }}>
        <Image src={team.logo} alt={team.name} width={180} height={180} style={{ objectFit: 'contain', marginBottom: 8 }} />
        <div style={{ fontWeight: 600, fontSize: 28, color: '#222', marginTop: 8 }}>{team.name}</div>
        <div style={{ fontWeight: 400, fontSize: 22, color: '#222', marginTop: 2 }}>{team.age}</div>
      </div>
      {/* Tabs */}
      <div style={{ width: '100%', maxWidth: 500, display: 'flex', alignItems: 'center', marginTop: 24, borderBottom: '1.5px solid #eee' }}>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 600, color: 'black', borderBottom: '2px solid black', paddingBottom: 4, cursor: 'pointer' }}>League Table</div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 500, color: '#bbb', cursor: 'not-allowed' }}>Staff and Team</div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 500, color: '#bbb', cursor: 'not-allowed' }}>Contacts</div>
      </div>
      {/* League Table */}
      <div style={{ width: '100%', maxWidth: 500, marginTop: 16 }}>
        <div style={{ background: '#222', color: 'white', fontWeight: 600, fontSize: 22, padding: '8px 16px' }}>GROUP A</div>
        <div style={{ display: 'grid', gridTemplateColumns: '32px 1.5fr 32px 32px 32px 32px 48px 48px', background: '#eee', color: '#888', fontWeight: 600, fontSize: 15, padding: '8px 0' }}>
          <div style={{ textAlign: 'center' }}>#</div>
          <div style={{ textAlign: 'left', paddingLeft: 8 }}>Team</div>
          <div style={{ textAlign: 'center' }}>MP</div>
          <div style={{ textAlign: 'center' }}>W</div>
          <div style={{ textAlign: 'center' }}>D</div>
          <div style={{ textAlign: 'center' }}>L</div>
          <div style={{ textAlign: 'center' }}>G</div>
          <div style={{ textAlign: 'center' }}>PTS</div>
        </div>
        {team.table.map((row: any, idx: number) => (
          <div key={row.team} style={{ display: 'grid', gridTemplateColumns: '32px 1.5fr 32px 32px 32px 32px 48px 48px', background: idx % 2 === 0 ? '#fff' : '#f5f5f5', color: '#222', fontWeight: 500, fontSize: 16, padding: '8px 0' }}>
            <div style={{ textAlign: 'center' }}>{idx + 1}.</div>
            <div style={{ textAlign: 'left', paddingLeft: 8 }}>{row.team}</div>
            <div style={{ textAlign: 'center' }}>{row.mp}</div>
            <div style={{ textAlign: 'center' }}>{row.w}</div>
            <div style={{ textAlign: 'center' }}>{row.d}</div>
            <div style={{ textAlign: 'center' }}>{row.l}</div>
            <div style={{ textAlign: 'center' }}>{row.g}</div>
            <div style={{ textAlign: 'center' }}>{row.pts}</div>
          </div>
        ))}
      </div>
      {/* Games List */}
      <div style={{ width: '100%', maxWidth: 500, marginTop: 24 }}>
        <div style={{ background: '#222', color: 'white', fontWeight: 600, fontSize: 22, padding: '8px 16px' }}>{team.name} U17 Games</div>
        {team.games.map((game: any, idx: number) => (
          <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.2fr 1fr 1.2fr 1.2fr', alignItems: 'center', background: idx % 2 === 0 ? '#fff' : '#f5f5f5', color: '#222', fontWeight: 500, fontSize: 16, padding: '8px 0' }}>
            <div style={{ textAlign: 'center' }}>{game.date}</div>
            <div style={{ textAlign: 'right', paddingRight: 8 }}>{game.home}</div>
            <div style={{ textAlign: 'center' }}><span style={{ background: game.color, color: '#fff', borderRadius: 4, padding: '2px 10px', fontWeight: 700 }}>{game.score}</span></div>
            <div style={{ textAlign: 'left', paddingLeft: 8 }}>{game.away}</div>
            <div></div>
          </div>
        ))}
      </div>
      {/* Bottom Navigation Bar */}
      <BottomNav active='search' />
    </div>
  );
} 