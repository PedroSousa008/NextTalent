"use client";
import Image from 'next/image';
import BottomNav from '../feed/BottomNav';
import React, { useState } from 'react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'highlights' | 'details' | 'stats'>('highlights');
  return (
    <div style={{ minHeight: '100vh', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 80, position: 'relative' }}>
      {/* Top left and right icons */}
      <div style={{ position: 'absolute', top: 18, left: 38, zIndex: 10 }}>
        <Image src="/settings.png" alt="Settings" width={48} height={48} />
      </div>
      <div style={{ position: 'absolute', top: 18, right: 38, zIndex: 10 }}>
        <Image src="/challanges.png" alt="Challanges" width={48} height={48} />
      </div>
      {/* Profile image */}
      <div style={{ marginTop: 18, marginBottom: 8 }}>
        <Image src="/pedro.jpg" alt="Pedro Sousa" width={200} height={200} style={{ objectFit: 'cover', borderRadius: '50%', aspectRatio: '1 / 1' }} />
      </div>
      {/* Name */}
      <div style={{ fontWeight: 500, fontSize: 32, color: '#222', fontFamily: 'serif', marginBottom: 4 }}>Pedro Sousa</div>
      {/* Club and position row with logo, text, and DM icon */}
      <div style={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: 500, marginBottom: 8, marginTop: 0, height: 40, position: 'relative' }}>
        {/* Benfica logo aligned with the center of Followers */}
        <div style={{ position: 'absolute', left: '16.67%', top: 0, bottom: 0, display: 'flex', alignItems: 'center', height: '100%' }}>
          <Image src="/benfica.png" alt="Benfica" width={28} height={28} style={{ objectFit: 'contain', borderRadius: 4 }} />
        </div>
        {/* Centered club text */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <span style={{ fontSize: 18, color: '#222', fontFamily: 'serif', textAlign: 'center' }}>Playing for Benfica</span>
        </div>
        {/* DM icon aligned with the center of Posts */}
        <div style={{ position: 'absolute', right: '16.67%', top: 0, bottom: 0, display: 'flex', alignItems: 'center', height: '100%' }}>
          <Image src="/dm.png" alt="DM" width={28} height={28} style={{ objectFit: 'contain', borderRadius: 4 }} />
        </div>
      </div>
      <div style={{ fontSize: 18, color: '#222', fontFamily: 'serif', marginBottom: 8 }}>CAM/CM</div>
      {/* Followers, Following, Posts - now above tabs */}
      <div style={{ display: 'flex', width: '100%', maxWidth: 500, margin: '18px 0 0 0' }}>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ color: '#bbb', fontSize: 18, fontFamily: 'serif' }}>Followers</div>
          <div style={{ fontWeight: 500, fontSize: 28, color: '#222', fontFamily: 'serif' }}>365</div>
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ color: '#bbb', fontSize: 18, fontFamily: 'serif' }}>Following</div>
          <div style={{ fontWeight: 500, fontSize: 28, color: '#222', fontFamily: 'serif' }}>125</div>
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ color: '#bbb', fontSize: 18, fontFamily: 'serif' }}>Posts</div>
          <div style={{ fontWeight: 500, fontSize: 28, color: '#222', fontFamily: 'serif' }}>1</div>
        </div>
      </div>
      {/* Tabs and Stats Row */}
      <div style={{ width: '100%', maxWidth: 500, marginTop: 32 }}>
        <div style={{ display: 'flex', position: 'relative', borderBottom: '1.5px solid #eee', height: 36 }}>
          {/* Black underline absolutely positioned for active tab */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: `${100 / 3}%`, height: 2, background: activeTab === 'highlights' ? 'black' : 'transparent', transition: 'left 0.2s' , transform: activeTab === 'details' ? 'translateX(100%)' : activeTab === 'stats' ? 'translateX(200%)' : 'none', zIndex: 2 }} />
          <div
            style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: activeTab === 'highlights' ? 700 : 500, color: activeTab === 'highlights' ? 'black' : '#bbb', cursor: 'pointer', paddingBottom: 4, transition: 'color 0.15s' }}
            onClick={() => setActiveTab('highlights')}
          >
            Game Highlights
          </div>
          <div
            style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: activeTab === 'details' ? 700 : 500, color: activeTab === 'details' ? 'black' : '#bbb', cursor: 'pointer', paddingBottom: 4, transition: 'color 0.15s' }}
            onClick={() => setActiveTab('details')}
          >
            Details
          </div>
          <div
            style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: activeTab === 'stats' ? 700 : 500, color: activeTab === 'stats' ? 'black' : '#bbb', cursor: 'pointer', paddingBottom: 4, transition: 'color 0.15s' }}
            onClick={() => setActiveTab('stats')}
          >
            Stats
          </div>
        </div>
      </div>
      {/* Game Highlights Grid */}
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 18, width: '100%', maxWidth: 500, overflowX: 'auto', padding: '0 0 0 8px', height: '33vh' }}>
        <div style={{ width: 180, height: 160, borderRadius: 8, overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginRight: 16, background: 'none' }}>
          {/* Static video thumbnail for Pedro Sousa */}
          <Image src="/Thumbnail.png" alt="Pedro Sousa Thumbnail" fill style={{ objectFit: 'cover', borderRadius: 8 }} />
          <span style={{ position: 'absolute', bottom: 6, right: 10, color: 'white', fontWeight: 700, fontSize: 15, textShadow: '0 1px 4px #000', background: 'rgba(0,0,0,0.4)', borderRadius: 4, padding: '1px 6px' }}>1:35</span>
        </div>
      </div>
      {/* Bottom Navigation Bar */}
      <BottomNav active='profile' />
    </div>
  );
} 