"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function BenficaSeniorPage() {
  const router = useRouter();
  return (
    <div style={{ minHeight: '100vh', background: '#f6f7fa', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 24 }}>
      {/* Top bar with back and status icons */}
      <div style={{ width: '100%', maxWidth: 600, display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontSize: 18, color: '#222' }}>9:15</span>
        <div style={{ display: 'flex', gap: 8 }}>
          <span style={{ fontSize: 18, color: '#222' }}>📶</span>
          <span style={{ fontSize: 18, color: '#222' }}>📡</span>
          <span style={{ fontSize: 18, color: '#222' }}>🔋</span>
        </div>
      </div>
      {/* Back button */}
      <button onClick={() => router.back()} style={{ position: 'absolute', top: 32, left: 32, background: 'black', border: 'none', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, cursor: 'pointer' }}>
        <span style={{ color: 'white', fontSize: 32, fontWeight: 500 }}>&larr;</span>
      </button>
      {/* Team and Coach buttons */}
      <div style={{ width: '100%', maxWidth: 600, display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 24 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <Image src="/telegram.png" alt="Team" width={36} height={36} />
          </button>
          <span style={{ fontSize: 16, color: '#222', fontFamily: 'serif' }}>Team</span>
        </div>
        <div></div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <Image src="/telegram.png" alt="Coach" width={36} height={36} />
          </button>
          <span style={{ fontSize: 16, color: '#222', fontFamily: 'serif' }}>Coach</span>
        </div>
      </div>
      {/* Club logo */}
      <div style={{ margin: '16px 0 8px 0', display: 'flex', justifyContent: 'center' }}>
        <Image src="/benfica.png" alt="Benfica" width={180} height={180} style={{ objectFit: 'contain' }} />
      </div>
      {/* Team name and age group */}
      <div style={{ textAlign: 'center', marginBottom: 8 }}>
        <div style={{ fontWeight: 500, fontSize: 36, color: '#222', fontFamily: 'serif' }}>Benfica</div>
        <div style={{ fontWeight: 400, fontSize: 28, color: '#222', fontFamily: 'serif' }}>Senior</div>
      </div>
      {/* Tabs */}
      <div style={{ width: '100%', maxWidth: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1.5px solid #eee', marginBottom: 0 }}>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 700, color: 'black', borderBottom: '2px solid black', paddingBottom: 4, fontFamily: 'serif', cursor: 'pointer' }}>Calendar</div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 500, color: '#ddd', paddingBottom: 4, fontFamily: 'serif' }}>Documents</div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 500, color: '#ddd', paddingBottom: 4, fontFamily: 'serif' }}>Squad</div>
      </div>
      {/* Calendar Table */}
      <div style={{ width: '100%', maxWidth: 600, background: 'white', borderRadius: 8, marginTop: 0, boxShadow: '0 2px 8px #0001', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'serif' }}>
          <tbody>
            {/* Example rows, you can replace with real data */}
            <tr style={{ background: '#f6f7fa' }}>
              <td style={{ color: '#222', fontSize: 16, padding: '8px 8px' }}>09/10/2021</td>
              <td style={{ color: '#222', fontSize: 16, padding: '8px 8px' }}>Benfica</td>
              <td><span style={{ background: '#e57373', color: 'white', borderRadius: 6, padding: '2px 16px', fontWeight: 500, fontSize: 16 }}>2 - 4</span></td>
              <td style={{ color: '#222', fontSize: 16, padding: '8px 8px' }}>Porto</td>
              <td><Image src="/playericon.png" alt="icon" width={32} height={32} /></td>
            </tr>
            <tr style={{ background: '#ededed' }}>
              <td style={{ color: '#222', fontSize: 16, padding: '8px 8px' }}>16/10/2021</td>
              <td style={{ color: '#222', fontSize: 16, padding: '8px 8px' }}>Sporting</td>
              <td><span style={{ background: '#ffd180', color: '#222', borderRadius: 6, padding: '2px 16px', fontWeight: 500, fontSize: 16 }}>1 - 1</span></td>
              <td style={{ color: '#222', fontSize: 16, padding: '8px 8px' }}>Benfica</td>
              <td><Image src="/playericon.png" alt="icon" width={32} height={32} /></td>
            </tr>
            <tr style={{ background: '#f6f7fa' }}>
              <td style={{ color: '#222', fontSize: 16, padding: '8px 8px' }}>23/10/2021</td>
              <td style={{ color: '#222', fontSize: 16, padding: '8px 8px' }}>Benfica</td>
              <td><span style={{ background: '#81c784', color: 'white', borderRadius: 6, padding: '2px 16px', fontWeight: 500, fontSize: 16 }}>3 - 0</span></td>
              <td style={{ color: '#222', fontSize: 16, padding: '8px 8px' }}>Braga</td>
              <td><Image src="/playericon.png" alt="icon" width={32} height={32} /></td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      {/* Bottom Navigation (optional) */}
      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, background: '#f6f7fa', borderTop: '1.5px solid #eee', display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 64, zIndex: 100 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
          <Image src="/soccericon.png" alt="Home" width={28} height={28} />
          <span style={{ fontSize: 14, color: '#bbb', fontFamily: 'serif' }}>Home</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
          <Image src="/searchicon.png" alt="Search" width={28} height={28} />
          <span style={{ fontSize: 14, color: '#bbb', fontFamily: 'serif' }}>Search</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
          <Image src="/uploadicon.png" alt="Upload" width={28} height={28} />
          <span style={{ fontSize: 14, color: '#bbb', fontFamily: 'serif' }}>Upload</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
          <Image src="/notificationicon.png" alt="Notifications" width={28} height={28} />
          <span style={{ fontSize: 14, color: '#bbb', fontFamily: 'serif' }}>Notifications</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
          <Image src="/profileicon.png" alt="Profile" width={28} height={28} />
          <span style={{ fontSize: 14, color: '#222', fontFamily: 'serif', fontWeight: 600 }}>Profile</span>
        </div>
      </div>
    </div>
  );
} 