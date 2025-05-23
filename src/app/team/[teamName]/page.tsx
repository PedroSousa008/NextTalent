"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

const TEAM_LOGOS: Record<string, { logo: string; display: string }> = {
  'Arouca': { logo: '/arouca.png', display: 'FC Arouca' },
  'AVS': { logo: '/avs.png', display: 'AVS Futebol SAD' },
  'Benfica': { logo: '/benfica.png', display: 'SL Benfica' },
  'Boavista': { logo: '/boavista.png', display: 'Boavista FC' },
  'Braga': { logo: '/braga.png', display: 'SC Braga' },
  'Casa Pia': { logo: '/casapia.png', display: 'Casa Pia AC' },
  'Estoril Praia': { logo: '/estoril.png', display: 'Estoril Praia' },
  'Estrela da Amadora': { logo: '/estrela.png', display: 'Estrela da Amadora' },
  'Famalicão': { logo: '/famalicao.png', display: 'FC Famalicão' },
  'Farense': { logo: '/farense.png', display: 'SC Farense' },
  'Gil Vicente': { logo: '/gilvicente.png', display: 'Gil Vicente FC' },
  'Moreirense': { logo: '/moreirense.png', display: 'Moreirense FC' },
  'Nacional': { logo: '/nacional.png', display: 'CD Nacional' },
  'Porto': { logo: '/porto.png', display: 'FC Porto' },
  'Rio Ave': { logo: '/rioave.png', display: 'Rio Ave FC' },
  'Santa Clara': { logo: '/santaclara.png', display: 'CD Santa Clara' },
  'Sporting CP': { logo: '/sporting.png', display: 'Sporting CP' },
  'Vitória de Guimarães': { logo: '/vitoria.png', display: 'Vitória SC' },
};

export default function TeamPage({ params }: { params: { teamName: string } }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const age = searchParams.get('age') || '';
  const teamKey = decodeURIComponent(params.teamName);
  const team = TEAM_LOGOS[teamKey];

  return (
    <div style={{ minHeight: '100vh', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', paddingBottom: 80 }}>
      {/* Top bar with back and star */}
      <div style={{ width: '100%', maxWidth: 500, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 16px 0 16px' }}>
        <button onClick={() => router.back()} style={{ background: 'none', border: 'none', fontSize: 36, cursor: 'pointer', color: 'black', padding: 0 }}>←</button>
        <span style={{ fontSize: 32, color: '#f5b800', cursor: 'pointer' }}>★</span>
      </div>
      {/* Team logo */}
      {team && (
        <Image src={team.logo} alt={team.display} width={200} height={200} style={{ objectFit: 'contain', margin: '16px 0 0 0' }} />
      )}
      {/* Team name and age */}
      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <div style={{ fontWeight: 600, fontSize: 28, color: 'black' }}>{team ? team.display : params.teamName}</div>
        <div style={{ fontWeight: 400, fontSize: 24, color: 'black', marginTop: 4 }}>{age}</div>
      </div>
      {/* Tabs (placeholders) */}
      <div style={{ width: '100%', maxWidth: 500, display: 'flex', alignItems: 'center', marginTop: 32, borderBottom: '1.5px solid #eee' }}>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 600, color: 'black', borderBottom: '2px solid black', paddingBottom: 4 }}>League Table</div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 500, color: '#bbb', paddingBottom: 4 }}>Staff and Team</div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 500, color: '#bbb', paddingBottom: 4 }}>Contacts</div>
      </div>
      {/* Placeholder for rest of content */}
      <div style={{ width: '100%', maxWidth: 500, marginTop: 24, color: '#bbb', textAlign: 'center' }}>
        Team details and tables will go here.
      </div>
    </div>
  );
} 