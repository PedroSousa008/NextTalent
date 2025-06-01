"use client";
import Image from 'next/image';
import BottomNav from '../feed/BottomNav';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function JudePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'highlights' | 'details' | 'stats'>('highlights');

  return (
    <div style={{ minHeight: '100vh', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 80, position: 'relative' }}>
      {/* Back button */}
      <div style={{ position: 'absolute', top: 18, left: 18, zIndex: 10, cursor: 'pointer' }} onClick={() => router.back()}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: 'white', fontSize: 28, fontWeight: 700, marginLeft: 2 }}>{'<'}</span>
        </div>
      </div>
      {/* Profile image */}
      <div style={{ marginTop: 18, marginBottom: 8 }}>
        <Image src="/jude.jpg" alt="Jude Bellingham" width={200} height={200} style={{ objectFit: 'cover', borderRadius: '50%', aspectRatio: '1 / 1' }} />
      </div>
      {/* Name */}
      <div style={{ fontWeight: 500, fontSize: 32, color: '#222', fontFamily: 'serif', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 8 }}>
        Jude Bellingham <span role="img" aria-label="soccer">⚽️</span>
      </div>
      {/* Club and position row */}
      <div style={{ fontSize: 18, color: '#222', fontFamily: 'serif', marginBottom: 8, textAlign: 'center' }}>Playing at Real Madrid<br />CAM/CM</div>
      {/* Followers, Following, Posts */}
      <div style={{ display: 'flex', width: '100%', maxWidth: 500, margin: '18px 0 0 0' }}>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ color: '#bbb', fontSize: 18, fontFamily: 'serif' }}>Followers</div>
          <div style={{ fontWeight: 500, fontSize: 28, color: '#222', fontFamily: 'serif' }}>4.2M</div>
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ color: '#bbb', fontSize: 18, fontFamily: 'serif' }}>Following</div>
          <div style={{ fontWeight: 500, fontSize: 28, color: '#222', fontFamily: 'serif' }}>1238</div>
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ color: '#bbb', fontSize: 18, fontFamily: 'serif' }}>Posts</div>
          <div style={{ fontWeight: 500, fontSize: 28, color: '#222', fontFamily: 'serif' }}>5</div>
        </div>
      </div>
      {/* Tabs */}
      <div style={{ width: '100%', maxWidth: 500, marginTop: 32 }}>
        <div style={{ display: 'flex', borderBottom: '1.5px solid #eee' }}>
          <div
            style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: activeTab === 'highlights' ? 700 : 500, color: activeTab === 'highlights' ? 'black' : '#bbb', borderBottom: activeTab === 'highlights' ? '2px solid black' : 'none', paddingBottom: 4, cursor: 'pointer', transition: 'color 0.15s, border-bottom 0.15s' }}
            onClick={() => setActiveTab('highlights')}
          >
            Game Highlights
          </div>
          <div
            style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: activeTab === 'details' ? 700 : 500, color: activeTab === 'details' ? 'black' : '#bbb', borderBottom: activeTab === 'details' ? '2px solid black' : 'none', paddingBottom: 4, cursor: 'pointer', transition: 'color 0.15s, border-bottom 0.15s' }}
            onClick={() => setActiveTab('details')}
          >
            Details
          </div>
          <div
            style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: activeTab === 'stats' ? 700 : 500, color: activeTab === 'stats' ? 'black' : '#bbb', borderBottom: activeTab === 'stats' ? '2px solid black' : 'none', paddingBottom: 4, cursor: 'pointer', transition: 'color 0.15s, border-bottom 0.15s' }}
            onClick={() => setActiveTab('stats')}
          >
            Stats
          </div>
        </div>
      </div>
      {/* Game Highlights Grid */}
      {activeTab === 'highlights' && (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', marginTop: 18, width: '100%', maxWidth: 500, gap: 12 }}>
          <div style={{ width: 160, height: 120, borderRadius: 8, overflow: 'hidden', position: 'relative', background: 'none' }}>
            <Image src="/player1.png" alt="Highlight 1" fill style={{ objectFit: 'cover', borderRadius: 8 }} />
            <span style={{ position: 'absolute', bottom: 6, right: 10, color: 'white', fontWeight: 700, fontSize: 13, textShadow: '0 1px 4px #000', background: 'rgba(0,0,0,0.4)', borderRadius: 4, padding: '1px 6px' }}>1:59</span>
          </div>
          <div style={{ width: 160, height: 120, borderRadius: 8, overflow: 'hidden', position: 'relative', background: 'none' }}>
            <Image src="/player2.png" alt="Highlight 2" fill style={{ objectFit: 'cover', borderRadius: 8 }} />
            <span style={{ position: 'absolute', bottom: 6, right: 10, color: 'white', fontWeight: 700, fontSize: 13, textShadow: '0 1px 4px #000', background: 'rgba(0,0,0,0.4)', borderRadius: 4, padding: '1px 6px' }}>1:45</span>
          </div>
          <div style={{ width: 160, height: 120, borderRadius: 8, overflow: 'hidden', position: 'relative', background: 'none' }}>
            <Image src="/player3.png" alt="Highlight 3" fill style={{ objectFit: 'cover', borderRadius: 8 }} />
            <span style={{ position: 'absolute', bottom: 6, right: 10, color: 'white', fontWeight: 700, fontSize: 13, textShadow: '0 1px 4px #000', background: 'rgba(0,0,0,0.4)', borderRadius: 4, padding: '1px 6px' }}>1:05</span>
          </div>
          <div style={{ width: 160, height: 120, borderRadius: 8, overflow: 'hidden', position: 'relative', background: 'none' }}>
            <Image src="/player4.png" alt="Highlight 4" fill style={{ objectFit: 'cover', borderRadius: 8 }} />
            <span style={{ position: 'absolute', bottom: 6, right: 10, color: 'white', fontWeight: 700, fontSize: 13, textShadow: '0 1px 4px #000', background: 'rgba(0,0,0,0.4)', borderRadius: 4, padding: '1px 6px' }}>1:01</span>
          </div>
          <div style={{ width: 160, height: 120, borderRadius: 8, overflow: 'hidden', position: 'relative', background: 'none' }}>
            <Image src="/player5.png" alt="Highlight 5" fill style={{ objectFit: 'cover', borderRadius: 8 }} />
            <span style={{ position: 'absolute', bottom: 6, right: 10, color: 'white', fontWeight: 700, fontSize: 13, textShadow: '0 1px 4px #000', background: 'rgba(0,0,0,0.4)', borderRadius: 4, padding: '1px 6px' }}>1:09</span>
          </div>
        </div>
      )}
      {/* Details Tab */}
      {activeTab === 'details' && (
        <div style={{ width: '100%', maxWidth: 500, marginTop: 18, padding: '0 16px', overflowY: 'auto', maxHeight: '45vh' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'serif' }}>
            <tbody>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Full Name</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>Jude Victor William Bellingham</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Age</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>20</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Height</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>1.86 m</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Weight</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>75 kg</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Position</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>CAM/CM</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Preferred Foot</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>Right</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Club</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>Real Madrid</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Nationality</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>England</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Shirt Number</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>5</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Strengths</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>Dribbling, Passing, Vision, Stamina</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Weaknesses</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>Aerial Duels</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Injuries</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>None</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Ex-Team</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>Borussia Dortmund</td></tr>
            </tbody>
          </table>
        </div>
      )}
      {/* Stats Tab */}
      {activeTab === 'stats' && (
        <div style={{ width: '100%', maxWidth: 500, marginTop: 18, padding: '0 16px', color: '#222', textAlign: 'center', fontSize: 18, overflowY: 'auto', maxHeight: '45vh' }}>
          <div style={{ marginBottom: 16, color: '#222', fontSize: 16, fontFamily: 'serif' }}>
            All the stats have been confirmed by the corresponding federation and some have videos provided by the player.
          </div>
          {/* 2023/24 */}
          <div style={{ textAlign: 'left', fontWeight: 700, fontSize: 20, margin: '18px 0 8px 0', fontFamily: 'serif' }}>2023/24</div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'serif', marginBottom: 18 }}>
            <tbody>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Games</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>42</td><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Started</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>40</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Goals</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>23</td><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Goals per game</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>0.55</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Assists</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>12</td><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Assists per game</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>0.29</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Yellows</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>5</td><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Reds</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>0</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Free Kicks</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>2</td><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Penalty&apos;s</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>3</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Right Foot Goals</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>15</td><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Left Foot Goals</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>5</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Headed Goals</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>3</td><td></td><td></td></tr>
            </tbody>
          </table>
        </div>
      )}
      {/* Bottom Navigation Bar */}
      <BottomNav active={undefined} />
    </div>
  );
} 