'use client';
import Image from 'next/image';
import { useState } from 'react';

function Heart({ liked, onClick }: { liked: boolean; onClick: () => void }) {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={liked ? 'red' : 'none'}
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: 24, height: 24, cursor: 'pointer', marginRight: 4, verticalAlign: 'middle' }}
    >
      <path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.04 3 12.5 4 13 5.09C13.5 4 14.96 3 16.5 3C19.5 3 22 5.5 22 8.5C22 13.5 12 21 12 21Z" />
    </svg>
  );
}

export default function FeedPage() {
  const [activeTab, setActiveTab] = useState<'following' | 'discover'>('following');
  const [liked1, setLiked1] = useState(false);
  const [liked2, setLiked2] = useState(false);

  return (
    <div style={{ background: 'white', minHeight: '100vh', fontFamily: 'inherit' }}>
      {/* Tabs (Following | Discover) */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '18px 0 0 0' }}>
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
          <span style={{ fontSize: 16, color: 'black' }}>Position: CM/CAM</span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <Image src="/configurations.png" alt="Configurations" width={32} height={32} style={{ cursor: 'pointer', marginRight: 16 }} />
              <Image src="/pedro.jpg" alt="Pedro Sousa" width={56} height={56} style={{ borderRadius: '50%' }} />
              <Image src="/dm.png" alt="DM" width={32} height={32} style={{ cursor: 'pointer', marginLeft: 16 }} />
            </div>
            <span style={{ fontWeight: 500, fontSize: 18, marginTop: 4, color: 'black' }}>Pedro Sousa</span>
          </div>
          <span style={{ fontSize: 16, color: 'black' }}>Age: 21 year old</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px 0 0 0' }}>
          <video src="/pedro-clip.mp4" controls style={{ width: '99%', maxWidth: 700, borderRadius: 12, background: '#eee', marginBottom: 0 }} poster="/pedro-thumb.jpg" />
          <div style={{ display: 'flex', alignItems: 'center', width: '99%', maxWidth: 700, margin: '0 auto', marginTop: 8, justifyContent: 'flex-start', gap: 18 }}>
            <Heart liked={liked1} onClick={() => setLiked1(l => !l)} />
            <span style={{ fontSize: 24, verticalAlign: 'middle' }}>💬</span>
            <span style={{ fontSize: 24, verticalAlign: 'middle' }}>🔗</span>
          </div>
        </div>
        <div style={{ padding: '0 16px', marginTop: 8 }}>
          <span style={{ fontSize: 14, color: '#222' }}>1245 people liked</span>
          <div style={{ fontWeight: 600, fontSize: 16, color: 'black' }}>Pedro Sousa: <span role="img" aria-label="rocket">🚀</span></div>
          <span style={{ fontSize: 14, color: '#222' }}>See all 75 comments</span>
        </div>
      </div>
      {/* Feed Card 2 */}
      <div style={{ margin: '32px 0 0 0', padding: '0 0 32px 0', borderBottom: '1px solid #eee' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px' }}>
          <span style={{ fontSize: 16, color: 'black' }}>Position: LB</span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <Image src="/configurations.png" alt="Configurations" width={32} height={32} style={{ cursor: 'pointer', marginRight: 16 }} />
              <Image src="/alphonso.jpg" alt="Alphonso Davies" width={56} height={56} style={{ borderRadius: '50%' }} />
              <Image src="/dm.png" alt="DM" width={32} height={32} style={{ cursor: 'pointer', marginLeft: 16 }} />
            </div>
            <span style={{ fontWeight: 500, fontSize: 18, marginTop: 4, color: 'black' }}>Alphonso Davies</span>
          </div>
          <span style={{ fontSize: 16, color: 'black' }}>Age: 23 year old</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px 0 0 0' }}>
          <video src="/alphonso-clip.mp4" controls style={{ width: '99%', maxWidth: 700, borderRadius: 12, background: '#eee', marginBottom: 0 }} poster="/alphonso-thumb.jpg" />
          <div style={{ display: 'flex', alignItems: 'center', width: '99%', maxWidth: 700, margin: '0 auto', marginTop: 8, justifyContent: 'flex-start', gap: 18 }}>
            <Heart liked={liked2} onClick={() => setLiked2(l => !l)} />
            <span style={{ fontSize: 24, verticalAlign: 'middle' }}>💬</span>
            <span style={{ fontSize: 24, verticalAlign: 'middle' }}>🔗</span>
          </div>
        </div>
        <div style={{ padding: '0 16px', marginTop: 8 }}>
          <span style={{ fontSize: 14, color: '#222' }}>1245 people liked</span>
          <div style={{ fontWeight: 600, fontSize: 16, color: 'black' }}>Alphonso Davies</div>
          <span style={{ fontSize: 14, color: '#222' }}>See all 75 comments</span>
        </div>
      </div>
      {/* Bottom Navigation Bar */}
      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, background: 'white', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 64 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'black', opacity: 1 }}>
          <span role="img" aria-label="feed" style={{ fontSize: 28, opacity: 1 }}>⚽️</span>
          <span style={{ fontSize: 14, opacity: 1 }}>Feed</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#bbb', opacity: 0.6 }}>
          <span role="img" aria-label="search" style={{ fontSize: 28, opacity: 0.6 }}>🔍</span>
          <span style={{ fontSize: 14, opacity: 0.6 }}>Search</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#bbb', opacity: 0.6 }}>
          <span role="img" aria-label="upload" style={{ fontSize: 28, opacity: 0.6 }}>📷</span>
          <span style={{ fontSize: 14, opacity: 0.6 }}>Upload</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#bbb', opacity: 0.6 }}>
          <span role="img" aria-label="notifications" style={{ fontSize: 28, opacity: 0.6 }}>🔔</span>
          <span style={{ fontSize: 14, opacity: 0.6 }}>Notifications</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#bbb', opacity: 0.6 }}>
          <span role="img" aria-label="profile" style={{ fontSize: 28, opacity: 0.6 }}>👤</span>
          <span style={{ fontSize: 14, opacity: 0.6 }}>Profile</span>
        </div>
      </div>
    </div>
  );
} 