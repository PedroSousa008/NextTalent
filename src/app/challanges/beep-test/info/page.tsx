"use client";
import { useRouter } from 'next/navigation';

export default function BeepTestInfoPage() {
  const router = useRouter();
  return (
    <div style={{ minHeight: '100vh', background: 'white', fontFamily: 'serif', color: '#222', padding: '0 0 32px 0', position: 'relative' }}>
      {/* Back button (Information button) */}
      <button onClick={() => router.back()} style={{ position: 'absolute', top: 24, left: 18, background: 'none', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, cursor: 'pointer' }}>
        <span style={{ color: 'grey', fontSize: 24, fontWeight: 500 }}>&larr;</span>
      </button>
      <div style={{ textAlign: 'center', marginTop: 32, marginBottom: 16 }}>
        <span style={{ fontSize: 64, color: '#bbb' }}>ⓘ</span>
      </div>
      <div style={{ fontWeight: 500, fontSize: 36, marginBottom: 8, textAlign: 'center', fontFamily: 'serif' }}>Beep Test</div>
      <div style={{ fontSize: 22, textAlign: 'center', marginBottom: 32, fontFamily: 'serif' }}>The Endurance Benchmark for Footballers</div>
      <div style={{ maxWidth: 520, margin: '0 auto', padding: '0 16px' }}>
        <div style={{ fontSize: 24, margin: '32px 0 8px 0', fontWeight: 600 }}><span role="img" aria-label="pin">📌</span> What Is Is?</div>
        <div style={{ fontSize: 18, marginBottom: 24, lineHeight: 1.6 }}>
          The Bee Test (a.k.a. Yo-Yo or Multi-Stage Fitness Test) is a 20-meter shuttle run test. Player run back and forth in sync with audio beeps that speed up gradually, pushing their aerobic cardiovascular endurance to the limit.
        </div>
        <div style={{ fontSize: 24, margin: '32px 0 8px 0', fontWeight: 600 }}><span role="img" aria-label="gear">⚙️</span> How to Do It</div>
        <ul style={{ fontSize: 18, marginBottom: 24, lineHeight: 1.6, paddingLeft: 24 }}>
          <li>Place 2 markers 20 meters apart</li>
          <li>Play a beep test audio file</li>
          <li>Run to the other line before the next beep</li>
          <li>Wait, then run back on the next beep</li>
          <li>The test ends when you miss 2 beeps in a row</li>
        </ul>
        <div style={{ fontSize: 24, margin: '32px 0 8px 0', fontWeight: 600 }}><span role="img" aria-label="trophy">🏋️‍♂️</span> What It Trains</div>
        <ul style={{ fontSize: 18, marginBottom: 24, lineHeight: 1.6, paddingLeft: 24 }}>
          <li>Aerobic capacity (VO2 max)</li>
          <li>Cardiovascular stamina</li>
          <li>Mental toughness & pacing</li>
          <li>Lactic acid tolerance</li>
          <li>Match-relevant recovery</li>
        </ul>
        <div style={{ fontSize: 24, margin: '32px 0 8px 0', fontWeight: 600 }}><span role="img" aria-label="check">✅</span> Benefits</div>
        <ul style={{ fontSize: 18, marginBottom: 24, lineHeight: 1.6, paddingLeft: 24 }}>
          <li>Boost real-game endurance</li>
          <li>Builds resilience to fatigue</li>
          <li>Requires minimal equipment</li>
          <li>Easy to track progress</li>
          <li>Mimics stop-start game movement</li>
        </ul>
        <div style={{ fontSize: 24, margin: '32px 0 8px 0', fontWeight: 600 }}><span role="img" aria-label="soccer">⚽</span> Why Pro Player Use It</div>
        <ul style={{ fontSize: 18, marginBottom: 24, lineHeight: 1.6, paddingLeft: 24 }}>
          <li>Used in pre-season & recovery testing</li>
          <li>Common at elite clubs & national teams</li>
          <li>Evaluates fitness during trials</li>
          <li>Helps coaches measure readiness and commitment</li>
        </ul>
      </div>
    </div>
  );
} 