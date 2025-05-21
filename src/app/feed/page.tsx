'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function FeedPage() {
  const [activeTab, setActiveTab] = useState<'following' | 'discover'>('following');

  return (
    <div style={{ background: 'white', minHeight: '100vh', fontFamily: 'inherit' }}>
      {/* Tabs (Following | Discover) */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px 0 0 0' }}>
        <div style={{ display: 'flex', gap: 24, fontSize: 20 }}>
          <button
            style={{
              background: 'none',
              border: 'none',
              color: activeTab === 'following' ? 'black' : '#888',
              fontWeight: activeTab === 'following' ? 600 : 400,
              borderBottom: activeTab === 'following' ? '2px solid black' : '2px solid transparent',
              padding: '0 8px 4px 8px',
              cursor: 'pointer',
              outline: 'none',
            }}
            onClick={() => setActiveTab('following')}
          >
            Following
          </button>
          <button
            style={{
              background: 'none',
              border: 'none',
              color: activeTab === 'discover' ? 'black' : '#888',
              fontWeight: activeTab === 'discover' ? 600 : 400,
              borderBottom: activeTab === 'discover' ? '2px solid black' : '2px solid transparent',
              padding: '0 8px 4px 8px',
              cursor: 'pointer',
              outline: 'none',
            }}
            onClick={() => setActiveTab('discover')}
          >
            Discover
          </button>
        </div>
      </div>
      {/* Tabs and filter/send icons (removed top bar) */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px 0 16px' }}>
        <Image src="/filter.svg" alt="filter" width={28} height={28} />
        <div style={{ width: 28 }} /> {/* Placeholder for spacing */}
      </div>
      {/* Feed Card 1 */}
      <div style={{ margin: '32px 0 0 0', padding: '0 0 32px 0', borderBottom: '1px solid #eee' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px' }}>
          <span style={{ fontSize: 16 }}>Position: CM/CAM</span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Image src="/pedro.jpg" alt="Pedro Sousa" width={56} height={56} style={{ borderRadius: '50%' }} />
            <span style={{ fontWeight: 500, fontSize: 18, marginTop: 4 }}>Pedro Sousa</span>
          </div>
          <span style={{ fontSize: 16 }}>Age: 21 year old</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '16px 0' }}>
          <video src="/pedro-clip.mp4" controls style={{ width: '90%', borderRadius: 12, background: '#eee' }} poster="/pedro-thumb.jpg" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '0 16px' }}>
          <span>♡</span>
          <span>💬</span>
          <span>✈️</span>
        </div>
        <div style={{ padding: '0 16px', marginTop: 8 }}>
          <span style={{ fontSize: 14, color: '#222' }}>1245 people liked</span>
          <div style={{ fontWeight: 600, fontSize: 16 }}>Pedro Sousa: <span role="img" aria-label="rocket">🚀</span></div>
          <span style={{ fontSize: 14, color: '#222' }}>See all 75 comments</span>
        </div>
      </div>
      {/* Feed Card 2 */}
      <div style={{ margin: '32px 0 0 0', padding: '0 0 32px 0', borderBottom: '1px solid #eee' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px' }}>
          <span style={{ fontSize: 16 }}>Position: LB</span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Image src="/alphonso.jpg" alt="Alphonso Davies" width={56} height={56} style={{ borderRadius: '50%' }} />
            <span style={{ fontWeight: 500, fontSize: 18, marginTop: 4 }}>Alphonso Davies</span>
          </div>
          <span style={{ fontSize: 16 }}>Age: 23 year old</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '16px 0' }}>
          <video src="/alphonso-clip.mp4" controls style={{ width: '90%', borderRadius: 12, background: '#eee' }} poster="/alphonso-thumb.jpg" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '0 16px' }}>
          <span>♡</span>
          <span>💬</span>
          <span>✈️</span>
        </div>
        <div style={{ padding: '0 16px', marginTop: 8 }}>
          <span style={{ fontSize: 14, color: '#222' }}>1245 people liked</span>
          <div style={{ fontWeight: 600, fontSize: 16 }}>Alphonso Davies</div>
          <span style={{ fontSize: 14, color: '#222' }}>See all 75 comments</span>
        </div>
      </div>
      {/* Bottom Navigation Bar */}
      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, background: 'white', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 64 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'black', opacity: 1 }}>
          <span role="img" aria-label="feed" style={{ fontSize: 28, opacity: 1 }}>⚽️</span>
          <span style={{ fontSize: 14, opacity: 1 }}>Feed</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#bbb', opacity: 0.3 }}>
          <span role="img" aria-label="search" style={{ fontSize: 28, opacity: 0.3 }}>🔍</span>
          <span style={{ fontSize: 14, opacity: 0.3 }}>Search</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#bbb', opacity: 0.3 }}>
          <span role="img" aria-label="upload" style={{ fontSize: 28, opacity: 0.3 }}>📷</span>
          <span style={{ fontSize: 14, opacity: 0.3 }}>Upload</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#bbb', opacity: 0.3 }}>
          <span role="img" aria-label="notifications" style={{ fontSize: 28, opacity: 0.3 }}>🔔</span>
          <span style={{ fontSize: 14, opacity: 0.3 }}>Notifications</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#bbb', opacity: 0.3 }}>
          <span role="img" aria-label="profile" style={{ fontSize: 28, opacity: 0.3 }}>👤</span>
          <span style={{ fontSize: 14, opacity: 0.3 }}>Profile</span>
        </div>
      </div>
    </div>
  );
} 