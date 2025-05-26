"use client";
import { useRouter } from 'next/navigation';

export default function BeepTestInfoPage() {
  const router = useRouter();
  return (
    <div style={{ minHeight: '100vh', background: 'white', fontFamily: 'serif', color: '#222', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Info icon */}
      <div style={{ marginTop: 32, marginBottom: 8 }}>
        <span style={{ color: '#bbb', fontSize: 64, fontWeight: 700 }}>ⓘ</span>
      </div>
      {/* Title */}
      <div style={{ fontWeight: 500, fontSize: 36, marginBottom: 8, textAlign: 'center' }}>Beep Test</div>
      <div style={{ fontSize: 22, marginBottom: 32, textAlign: 'center' }}>The Endurance Benchmark for Footballers</div>
      {/* What Is It */}
      <div style={{ fontSize: 22, margin: '24px 0 8px 0', textAlign: 'center' }}>📌 <b>What Is Is?</b></div>
      <div style={{ fontSize: 18, marginBottom: 24, textAlign: 'center', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
        The Bee Test (a.k.a. Yo-Yo or Multi-Stage Fitness Test) is a 20-meter shuttle run test. Player run back and forth in sync with audio beeps that speed up gradually,<br />pushing their aerobic cardiovascular endurance to the limit.
      </div>
      {/* How to Do It */}
      <div style={{ fontSize: 22, margin: '24px 0 8px 0', textAlign: 'center' }}>⚙️ <b>How to Do It</b></div>
      <ul style={{ fontSize: 18, marginBottom: 24, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
        <li>Place 2 markers 20 meters apart</li>
        <li>Play a beep test audio file</li>
        <li>Run to the other line before the next beep</li>
        <li>Wait, then run back on the next beep</li>
        <li>The test ends when you miss 2 beeps in a row</li>
      </ul>
      {/* What It Trains */}
      <div style={{ fontSize: 22, margin: '24px 0 8px 0', textAlign: 'center' }}>🏋️ <b>What It Trains</b></div>
      <ul style={{ fontSize: 18, marginBottom: 24, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
        <li>Aerobic capacity (VO2 max)</li>
        <li>Cardiovascular stamina</li>
        <li>Mental toughness & pacing</li>
        <li>Lactic acid tolerance</li>
        <li>Match-relevant recovery</li>
      </ul>
      {/* Benefits */}
      <div style={{ fontSize: 22, margin: '24px 0 8px 0', textAlign: 'center' }}>✅ <b>Benefits</b></div>
      <ul style={{ fontSize: 18, marginBottom: 24, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
        <li>Boost real-game endurance</li>
        <li>Builds resilience to fatigue</li>
        <li>Requires minimal equipment</li>
        <li>Easy to track progress</li>
        <li>Mimics stop-start game movement</li>
      </ul>
      {/* Why Pro Player Use It */}
      <div style={{ fontSize: 22, margin: '24px 0 8px 0', textAlign: 'center' }}>⚽ <b>Why Pro Player Use It</b></div>
      <ul style={{ fontSize: 18, marginBottom: 48, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
        <li>Used in pre-season & recovery testing</li>
        <li>Common at elite clubs & national teams</li>
        <li>Evaluates fitness during trials</li>
        <li>Helps coaches measure readiness and commitment</li>
      </ul>
    </div>
  );
} 