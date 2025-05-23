"use client";
import Image from 'next/image';
import BottomNav from '../feed/BottomNav';
import { useRouter, useSearchParams } from 'next/navigation';

export default function TeamPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const age = searchParams.get('age') || 'U23';
  return (
    <div style={{ minHeight: '100vh', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 80 }}>
      {/* Top bar with back and star */}
      <div style={{ width: '100%', maxWidth: 500, display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '24px auto 0 auto', position: 'relative' }}>
        <button onClick={() => router.back()} style={{ background: 'none', border: 'none', fontSize: 36, cursor: 'pointer', color: 'black', padding: 0, marginLeft: 4 }}>←</button>
        <span style={{ fontSize: 32, color: '#f5b800', cursor: 'pointer', marginRight: 4 }}>★</span>
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
        <div style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 700, color: 'black', borderBottom: '2px solid black', paddingBottom: 4, cursor: 'pointer' }}>League Table</div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 500, color: '#bbb', cursor: 'not-allowed' }}>Staff and Team</div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 500, color: '#bbb', cursor: 'not-allowed' }}>Contacts</div>
      </div>
      {/* League Table */}
      <div style={{ width: '100%', maxWidth: 500, marginTop: 18 }}>
        <div style={{ background: '#222', color: 'white', fontWeight: 700, fontSize: 22, padding: '8px 0 8px 16px', borderTopLeftRadius: 4, borderTopRightRadius: 4 }}>GROUP A</div>
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
            <tr><td>1.</td><td>Southampton FC</td><td>3</td><td>3</td><td>0</td><td>0</td><td>+11</td><td>9</td></tr>
            <tr><td>2.</td><td>Reading FC</td><td>3</td><td>1</td><td>1</td><td>1</td><td>-6</td><td>4</td></tr>
            <tr><td>3.</td><td>Brighton & Hove Albion FC</td><td>3</td><td>1</td><td>0</td><td>2</td><td>-2</td><td>3</td></tr>
            <tr><td>4.</td><td>Benfica</td><td>3</td><td>0</td><td>1</td><td>2</td><td>-3</td><td>1</td></tr>
          </tbody>
        </table>
      </div>
      {/* Games List */}
      <div style={{ width: '100%', maxWidth: 500, marginTop: 18 }}>
        <div style={{ background: '#222', color: 'white', fontWeight: 700, fontSize: 22, padding: '8px 0 8px 16px', borderTopLeftRadius: 4, borderTopRightRadius: 4 }}>Benfica U17 Games</div>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#f5f5f5' }}>
          <tbody style={{ textAlign: 'center', fontSize: 15, color: '#222' }}>
            <tr><td>28/09/2021</td><td>Benfica</td><td style={{ background: '#f88', color: 'white', borderRadius: 4, padding: 4 }}>2 - 4</td><td>Brighton & Hove Albion FC</td></tr>
            <tr><td>27/10/2021</td><td>Reading FC</td><td style={{ background: '#fc6', color: 'white', borderRadius: 4, padding: 4 }}>3 - 3</td><td>Benfica</td></tr>
            <tr><td>24/11/2021</td><td>Benfica</td><td style={{ background: '#f88', color: 'white', borderRadius: 4, padding: 4 }}>4 - 5</td><td>Southampton FC</td></tr>
            <tr><td>25/01/2022</td><td>Southampton FC</td><td>-</td><td>Benfica</td></tr>
            <tr><td>29/02/2022</td><td>Benfica</td><td>-</td><td>Reading FC</td></tr>
          </tbody>
        </table>
      </div>
      {/* Bottom Navigation Bar */}
      <BottomNav active='search' />
    </div>
  );
} 