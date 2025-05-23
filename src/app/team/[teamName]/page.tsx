"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import BottomNav from "../../feed/BottomNav";

const MOCK_TEAMS: { [key: string]: {
  logo: string;
  name: string;
  age: string;
  starred: boolean;
  table: { team: string; mp: number; w: number; d: number; l: number; g: string; pts: number; }[];
  games: { date: string; home: string; score: string; away: string; color: string; }[];
} } = {
  "Chelsea FC": {
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
    ],
  },
};

export default function TeamPage({ params }: { params: { teamName: string } }) {
  const router = useRouter();
  const teamName = decodeURIComponent(params.teamName);
  const team = MOCK_TEAMS[teamName] || MOCK_TEAMS["Chelsea FC"];
  return (
    <div style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: 80 }}>
      {/* Top bar */}
      <div style={{ width: "100%", maxWidth: 500, display: "flex", alignItems: "center", justifyContent: "space-between", margin: "24px auto 0 auto", position: "relative" }}>
        <button onClick={() => router.back()} style={{ background: "none", border: "none", fontSize: 32, cursor: "pointer", color: "#111", padding: 0 }}>←</button>
        <span style={{ flex: 1 }}></span>
        <span style={{ fontSize: 32, color: team.starred ? "#f5b800" : "#bbb", marginRight: 8 }}>★</span>
      </div>
      {/* Logo and name */}
      <div style={{ width: "100%", maxWidth: 500, display: "flex", flexDirection: "column", alignItems: "center", marginTop: 8 }}>
        <Image src={team.logo} alt={team.name} width={180} height={180} style={{ objectFit: "contain" }} />
        <div style={{ fontWeight: 700, fontSize: 28, color: "#222", marginTop: 8 }}>{team.name}</div>
        <div style={{ fontWeight: 500, fontSize: 22, color: "#222", marginTop: 2 }}>{team.age}</div>
      </div>
      {/* Tabs */}
      <div style={{ width: "100%", maxWidth: 500, display: "flex", alignItems: "center", marginTop: 24, borderBottom: "1.5px solid #eee" }}>
        <div style={{ flex: 1, textAlign: "center", fontSize: 18, fontWeight: 700, color: "black", borderBottom: "2px solid black", paddingBottom: 4, cursor: "pointer" }}>League Table</div>
        <div style={{ flex: 1, textAlign: "center", fontSize: 18, fontWeight: 500, color: "#bbb", paddingBottom: 4, cursor: "not-allowed" }}>Staff and Team</div>
        <div style={{ flex: 1, textAlign: "center", fontSize: 18, fontWeight: 500, color: "#bbb", paddingBottom: 4, cursor: "not-allowed" }}>Contacts</div>
      </div>
      {/* League Table */}
      <div style={{ width: "100%", maxWidth: 500, background: "#222", color: "white", fontWeight: 600, fontSize: 22, padding: "8px 16px 4px 16px", marginTop: 16 }}>GROUP A</div>
      <div style={{ width: "100%", maxWidth: 500, background: "#eee", color: "#444", fontWeight: 500, fontSize: 15, display: "grid", gridTemplateColumns: "32px 1.5fr 32px 32px 32px 32px 40px 40px", alignItems: "center", padding: "0 0 0 0" }}>
        <div style={{ padding: "6px 0 6px 0", textAlign: "center" }}>#</div>
        <div style={{ padding: "6px 0" }}>Team</div>
        <div style={{ padding: "6px 0", textAlign: "center" }}>MP</div>
        <div style={{ padding: "6px 0", textAlign: "center" }}>W</div>
        <div style={{ padding: "6px 0", textAlign: "center" }}>D</div>
        <div style={{ padding: "6px 0", textAlign: "center" }}>L</div>
        <div style={{ padding: "6px 0", textAlign: "center" }}>G</div>
        <div style={{ padding: "6px 0", textAlign: "center" }}>PTS</div>
      </div>
      {team.table.map((row: any, idx: number) => (
        <div key={row.team} style={{ width: "100%", maxWidth: 500, background: idx % 2 === 0 ? "#fff" : "#f5f5f5", color: "#222", fontWeight: 500, fontSize: 15, display: "grid", gridTemplateColumns: "32px 1.5fr 32px 32px 32px 32px 40px 40px", alignItems: "center" }}>
          <div style={{ padding: "6px 0 6px 0", textAlign: "center" }}>{idx + 1}.</div>
          <div style={{ padding: "6px 0" }}>{row.team}</div>
          <div style={{ padding: "6px 0", textAlign: "center" }}>{row.mp}</div>
          <div style={{ padding: "6px 0", textAlign: "center" }}>{row.w}</div>
          <div style={{ padding: "6px 0", textAlign: "center" }}>{row.d}</div>
          <div style={{ padding: "6px 0", textAlign: "center" }}>{row.l}</div>
          <div style={{ padding: "6px 0", textAlign: "center" }}>{row.g}</div>
          <div style={{ padding: "6px 0", textAlign: "center" }}>{row.pts}</div>
        </div>
      ))}
      {/* Games */}
      <div style={{ width: "100%", maxWidth: 500, background: "#222", color: "white", fontWeight: 600, fontSize: 22, padding: "8px 16px 4px 16px", marginTop: 16 }}>Chelsea FC U17 Games</div>
      {team.games.map((game: any, idx: number) => (
        <div key={idx} style={{ width: "100%", maxWidth: 500, display: "grid", gridTemplateColumns: "1.2fr 1.2fr 1fr 1.2fr 1.2fr", alignItems: "center", background: idx % 2 === 0 ? "#fff" : "#f5f5f5", fontSize: 15, color: "#222" }}>
          <div style={{ padding: "6px 0 6px 16px" }}>{game.date}</div>
          <div style={{ padding: "6px 0" }}>{game.home}</div>
          <div style={{ padding: "6px 0", textAlign: "center" }}><span style={{ background: game.color, color: "#222", borderRadius: 4, padding: "2px 10px", fontWeight: 700 }}>{game.score}</span></div>
          <div style={{ padding: "6px 0" }}>{game.away}</div>
          <div></div>
        </div>
      ))}
      {/* Bottom Navigation Bar */}
      <BottomNav active="search" />
    </div>
  );
} 