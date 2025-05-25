"use client";
import Image from 'next/image';
import BottomNav from '../feed/BottomNav';

export default function ProfilePage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 80 }}>
      {/* Top bar with time and icons */}
      <div style={{ width: '100%', maxWidth: 500, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 40, padding: '0 12px', fontFamily: 'serif' }}>
        <span style={{ fontSize: 22, fontWeight: 400, color: 'black' }}>9:15</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 22, color: 'black' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M17 10V3.5a2.5 2.5 0 0 0-5 0V10"/><rect width="20" height="14" x="2" y="10" rx="2"/><path d="M7 21h10"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span style={{ fontSize: 22, color: 'black', marginLeft: 8, cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
        </div>
      </div>
      {/* Profile image */}
      <div style={{ marginTop: 18, marginBottom: 8 }}>
        <Image src="/pedro.jpg" alt="Pedro Sousa" width={200} height={200} style={{ objectFit: 'cover', borderRadius: '50%' }} />
      </div>
      {/* Name */}
      <div style={{ fontWeight: 500, fontSize: 32, color: '#222', fontFamily: 'serif', marginBottom: 4 }}>Pedro Sousa</div>
      {/* Club and position */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 18, color: '#222', fontFamily: 'serif', marginBottom: 8 }}>
        <Image src="/dumiense.png" alt="Dumiense" width={28} height={28} style={{ objectFit: 'contain', borderRadius: 4 }} />
        <span>Playing at Dumiense</span>
      </div>
      <div style={{ fontSize: 18, color: '#222', fontFamily: 'serif', marginBottom: 8 }}>CAM/CM</div>
      {/* Followers, Following, Posts */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 48, margin: '18px 0 0 0', width: '100%' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#bbb', fontSize: 18, fontFamily: 'serif' }}>Followers</div>
          <div style={{ fontWeight: 500, fontSize: 28, color: '#222', fontFamily: 'serif' }}>365</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#bbb', fontSize: 18, fontFamily: 'serif' }}>Following</div>
          <div style={{ fontWeight: 500, fontSize: 28, color: '#222', fontFamily: 'serif' }}>125</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#bbb', fontSize: 18, fontFamily: 'serif' }}>Posts</div>
          <div style={{ fontWeight: 500, fontSize: 28, color: '#222', fontFamily: 'serif' }}>3</div>
        </div>
      </div>
      {/* Tabs */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '32px 0 0 0', borderBottom: '1.5px solid #eee', width: '100%', maxWidth: 500 }}>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 700, color: 'black', borderBottom: '2px solid black', paddingBottom: 4, cursor: 'pointer', transition: 'color 0.15s, border-bottom 0.15s' }}>
          Game Highlights
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 500, color: '#bbb', borderBottom: 'none', paddingBottom: 4, cursor: 'pointer', transition: 'color 0.15s, border-bottom 0.15s' }}>
          Details
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 500, color: '#bbb', borderBottom: 'none', paddingBottom: 4, cursor: 'pointer', transition: 'color 0.15s, border-bottom 0.15s' }}>
          Stats
        </div>
      </div>
      {/* Game Highlights Grid */}
      <div style={{ display: 'flex', gap: 16, marginTop: 18, width: '100%', maxWidth: 500, justifyContent: 'center' }}>
        <div style={{ width: 120, height: 160, borderRadius: 8, overflow: 'hidden', background: '#eee', position: 'relative' }}>
          <Image src="/highlight1.jpg" alt="Highlight 1" fill style={{ objectFit: 'cover' }} />
          <span style={{ position: 'absolute', bottom: 6, right: 10, color: 'white', fontWeight: 700, fontSize: 15, textShadow: '0 1px 4px #000' }}>1:35</span>
        </div>
        <div style={{ width: 120, height: 160, borderRadius: 8, overflow: 'hidden', background: '#eee', position: 'relative' }}>
          <Image src="/highlight2.jpg" alt="Highlight 2" fill style={{ objectFit: 'cover' }} />
          <span style={{ position: 'absolute', bottom: 6, right: 10, color: 'white', fontWeight: 700, fontSize: 15, textShadow: '0 1px 4px #000' }}>1:07</span>
        </div>
        <div style={{ width: 120, height: 160, borderRadius: 8, overflow: 'hidden', background: '#eee', position: 'relative' }}>
          <Image src="/highlight3.jpg" alt="Highlight 3" fill style={{ objectFit: 'cover' }} />
          <span style={{ position: 'absolute', bottom: 6, right: 10, color: 'white', fontWeight: 700, fontSize: 15, textShadow: '0 1px 4px #000' }}>1:55</span>
        </div>
      </div>
      {/* Bottom Navigation Bar */}
      <BottomNav active='profile' />
    </div>
  );
} 