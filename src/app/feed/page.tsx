import Image from 'next/image';

export default function FeedPage() {
  return (
    <div style={{ background: 'white', minHeight: '100vh', fontFamily: 'inherit' }}>
      {/* Top Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px 0 16px' }}>
        <span style={{ fontWeight: 400, fontSize: 18 }}>9:15</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Image src="/wifi.svg" alt="wifi" width={24} height={24} style={{ opacity: 0.8 }} />
          <Image src="/cell.svg" alt="cell" width={24} height={24} style={{ opacity: 0.8 }} />
          <Image src="/battery.svg" alt="battery" width={24} height={24} style={{ opacity: 0.8 }} />
        </div>
      </div>
      {/* Tabs and filter/send icons */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px 0 16px' }}>
        <Image src="/filter.svg" alt="filter" width={28} height={28} />
        <div style={{ display: 'flex', gap: 12, fontSize: 20 }}>
          <span style={{ fontWeight: 600, borderBottom: '2px solid black' }}>Following</span>
          <span style={{ color: '#888', fontWeight: 400 }}>Discover</span>
        </div>
        <Image src="/send.svg" alt="send" width={28} height={28} />
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'black' }}>
          <span role="img" aria-label="feed" style={{ fontSize: 28 }}>⚽️</span>
          <span style={{ fontSize: 14 }}>Feed</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#bbb' }}>
          <span role="img" aria-label="search" style={{ fontSize: 28 }}>🔍</span>
          <span style={{ fontSize: 14 }}>Search</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#bbb' }}>
          <span role="img" aria-label="upload" style={{ fontSize: 28 }}>📷</span>
          <span style={{ fontSize: 14 }}>Upload</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#bbb' }}>
          <span role="img" aria-label="notifications" style={{ fontSize: 28 }}>🔔</span>
          <span style={{ fontSize: 14 }}>Notifications</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#bbb' }}>
          <span role="img" aria-label="profile" style={{ fontSize: 28 }}>👤</span>
          <span style={{ fontSize: 14 }}>Profile</span>
        </div>
      </div>
    </div>
  );
} 