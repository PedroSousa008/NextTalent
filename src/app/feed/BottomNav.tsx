"use client";
import { useRouter } from 'next/navigation';

export default function BottomNav({ active }: { active: 'feed' | 'search' }) {
  const router = useRouter();

  return (
    <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, background: '#f5f6fa', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 64, zIndex: 100 }}>
      {/* Feed */}
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: active === 'feed' ? 'black' : '#bbb', opacity: active === 'feed' ? 1 : 0.6, cursor: 'pointer' }}
        onClick={() => {
          if (active === 'feed') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            router.push('/feed');
          }
        }}
      >
        <span role="img" aria-label="feed" style={{ fontSize: 28, opacity: active === 'feed' ? 1 : 0.6 }}>⚽️</span>
        <span style={{ fontSize: 14, opacity: active === 'feed' ? 1 : 0.6 }}>Feed</span>
      </div>
      {/* Search */}
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: active === 'search' ? 'black' : '#bbb', opacity: active === 'search' ? 1 : 0.6, cursor: 'pointer' }}
        onClick={() => { router.push('/search'); }}
      >
        <span role="img" aria-label="search" style={{ fontSize: 28, opacity: active === 'search' ? 1 : 0.6 }}>🔍</span>
        <span style={{ fontSize: 14, opacity: active === 'search' ? 1 : 0.6 }}>Search</span>
      </div>
      {/* Upload */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#bbb', opacity: 0.6 }}>
        <span role="img" aria-label="upload" style={{ fontSize: 28, opacity: 0.6 }}>📷</span>
        <span style={{ fontSize: 14, opacity: 0.6 }}>Upload</span>
      </div>
      {/* Notifications */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#bbb', opacity: 0.6 }}>
        <span role="img" aria-label="notifications" style={{ fontSize: 28, opacity: 0.6 }}>🔔</span>
        <span style={{ fontSize: 14, opacity: 0.6 }}>Notifications</span>
      </div>
      {/* Profile */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#bbb', opacity: 0.6 }}>
        <span role="img" aria-label="profile" style={{ fontSize: 28, opacity: 0.6 }}>👤</span>
        <span style={{ fontSize: 14, opacity: 0.6 }}>Profile</span>
      </div>
    </div>
  );
} 