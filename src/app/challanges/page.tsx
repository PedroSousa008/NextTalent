"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ChallangesPage() {
  const router = useRouter();
  return (
    <div style={{ minHeight: '100vh', background: '#f5f6fa', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Back button */}
      <button onClick={() => router.back()} style={{ position: 'absolute', top: 24, left: 18, background: 'grey', border: 'none', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, cursor: 'pointer' }}>
        <span style={{ color: 'white', fontSize: 20, fontWeight: 500 }}>&larr;</span>
      </button>
      {/* Top image */}
      <div style={{ marginTop: 32, marginBottom: 8 }}>
        <Image src="/challanges.png" alt="Challanges" width={120} height={120} style={{ objectFit: 'contain', filter: 'grayscale(1)' }} />
      </div>
      {/* Title */}
      <div style={{ fontWeight: 500, fontSize: 36, color: '#222', fontFamily: 'serif', marginBottom: 12, textAlign: 'center' }}>Challanges</div>
      {/* Tabs */}
      <div style={{ width: '100%', maxWidth: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 0, borderBottom: '1.5px solid #eee' }}>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 18, fontWeight: 600, color: 'black', borderBottom: '2px solid black', paddingBottom: 4, cursor: 'pointer', fontFamily: 'serif' }}>
          Endurance & Agility Assessments
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 18, fontWeight: 500, color: '#bbb', paddingBottom: 4, cursor: 'not-allowed', fontFamily: 'serif' }}>
          Mobility & Explosive Power
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 18, fontWeight: 500, color: '#bbb', paddingBottom: 4, cursor: 'not-allowed', fontFamily: 'serif' }}>
          Strength & Stability
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 18, fontWeight: 500, color: '#bbb', paddingBottom: 4, cursor: 'not-allowed', fontFamily: 'serif' }}>
          Anaerobic & Injury Prevention
        </div>
      </div>
      {/* Cards */}
      <div style={{ width: '100%', maxWidth: 500, marginTop: 24, display: 'flex', flexDirection: 'column', gap: 24, overflowY: 'auto', maxHeight: '70vh', paddingRight: 4, paddingBottom: 20 }}>
        {/* Beep Test */}
        <div style={{ background: '#c8e6c9', borderRadius: 24, padding: '24px 0 24px 0', display: 'flex', alignItems: 'center', margin: '0 8px', minHeight: 100 }}>
          <div style={{ flex: '0 0 80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image src="/player1.png" alt="Beep Test" width={54} height={54} style={{ objectFit: 'contain', filter: 'grayscale(1)' }} />
          </div>
          <div style={{ flex: 1, paddingLeft: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: 32, fontWeight: 400, color: 'white', fontFamily: 'serif' }}>Beep Test</div>
            <div style={{ fontSize: 18, color: '#222', fontFamily: 'serif', marginTop: 4 }}>Very Good</div>
          </div>
        </div>
        {/* 50 Meter Sprint */}
        <div style={{ background: '#b2ebf2', borderRadius: 24, padding: '24px 0 24px 0', display: 'flex', alignItems: 'center', margin: '0 8px', minHeight: 100 }}>
          <div style={{ flex: '0 0 80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image src="/player2.png" alt="50 Meter Sprint" width={54} height={54} style={{ objectFit: 'contain', filter: 'grayscale(1)' }} />
          </div>
          <div style={{ flex: 1, paddingLeft: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: 32, fontWeight: 400, color: 'white', fontFamily: 'serif' }}>50 Meter Sprint</div>
            <div style={{ fontSize: 18, color: '#222', fontFamily: 'serif', marginTop: 4 }}>Elite</div>
          </div>
        </div>
        {/* 2km Time Trial */}
        <div style={{ background: '#eeeeee', borderRadius: 24, padding: '24px 0 24px 0', display: 'flex', alignItems: 'center', margin: '0 8px', minHeight: 100 }}>
          <div style={{ flex: '0 0 80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image src="/player3.png" alt="2km Time Trial" width={54} height={54} style={{ objectFit: 'contain', filter: 'grayscale(1)' }} />
          </div>
          <div style={{ flex: 1, paddingLeft: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: 32, fontWeight: 400, color: '#222', fontFamily: 'serif' }}>2km Time Trial</div>
          </div>
        </div>
        {/* T-Drill Test */}
        <div style={{ background: '#b2ebf2', borderRadius: 24, padding: '24px 0 24px 0', display: 'flex', alignItems: 'center', margin: '0 8px', minHeight: 100 }}>
          <div style={{ flex: '0 0 80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image src="/player4.png" alt="T-Drill Test" width={54} height={54} style={{ objectFit: 'contain', filter: 'grayscale(1)' }} />
          </div>
          <div style={{ flex: 1, paddingLeft: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: 32, fontWeight: 400, color: 'white', fontFamily: 'serif' }}>T-Drill Test</div>
            <div style={{ fontSize: 18, color: '#222', fontFamily: 'serif', marginTop: 4 }}>Elite</div>
          </div>
        </div>
      </div>
    </div>
  );
} 