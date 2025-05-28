"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function BenficaProfileTeamPage() {
  const router = useRouter();
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
        <div style={{ flex: 1, textAlign: 'center', fontSize: 22, fontWeight: 600, color: 'black', borderBottom: '2px solid black', paddingBottom: 4, cursor: 'pointer', fontFamily: 'serif' }}>
          Calendar
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 22, fontWeight: 500, color: '#bbb', borderBottom: 'none', paddingBottom: 4, cursor: 'not-allowed', fontFamily: 'serif' }}>
          Documents
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 22, fontWeight: 500, color: '#bbb', borderBottom: 'none', paddingBottom: 4, cursor: 'not-allowed', fontFamily: 'serif' }}>
          Squad
        </div>
      </div>
      {/* Calendar Table */}
      <div style={{ width: '100%', maxWidth: 700, background: '#eee', margin: '0 auto', fontFamily: 'serif', fontSize: 18, borderRadius: 0, marginTop: 0 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'serif' }}>
          <tbody>
            <tr style={{ background: '#ddd', color: '#222', fontWeight: 500, fontSize: 18 }}>
              <td style={{ padding: '8px 8px' }}>09/10/2021</td>
              <td>Benfica</td>
              <td><span style={{ background: '#e57373', color: 'white', borderRadius: 6, padding: '4px 18px', fontWeight: 600, fontSize: 18 }}>2 - 4</span></td>
              <td>Porto</td>
              <td><Image src="/porto.png" alt="Porto" width={32} height={32} style={{ objectFit: 'contain' }} /></td>
            </tr>
            <tr style={{ background: '#eee', color: '#222', fontWeight: 500, fontSize: 18 }}>
              <td style={{ padding: '8px 8px' }}>16/10/2021</td>
              <td>Sporting</td>
              <td><span style={{ background: '#ffd54f', color: '#222', borderRadius: 6, padding: '4px 18px', fontWeight: 600, fontSize: 18 }}>1 - 1</span></td>
              <td>Benfica</td>
              <td><Image src="/sporting.png" alt="Sporting" width={32} height={32} style={{ objectFit: 'contain' }} /></td>
            </tr>
            <tr style={{ background: '#ddd', color: '#222', fontWeight: 500, fontSize: 18 }}>
              <td style={{ padding: '8px 8px' }}>23/10/2021</td>
              <td>Benfica</td>
              <td><span style={{ background: '#a5d6a7', color: '#222', borderRadius: 6, padding: '4px 18px', fontWeight: 600, fontSize: 18 }}>3 - 0</span></td>
              <td>Braga</td>
              <td><Image src="/braga.png" alt="Braga" width={32} height={32} style={{ objectFit: 'contain' }} /></td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
} 