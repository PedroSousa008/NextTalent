"use client";
import { useRouter } from 'next/navigation';

export default function TwoKmTimeTrialInfoPage() {
  const router = useRouter();
  return (
    <div style={{ minHeight: '100vh', background: 'white', fontFamily: 'serif', color: '#222', padding: '0 0 32px 0', position: 'relative', overflowY: 'auto' }}>
      {/* Back button (Information button) */}
      <button onClick={() => router.back()} style={{ position: 'absolute', top: 24, left: 18, background: 'none', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, cursor: 'pointer' }}>
        <span style={{ color: 'grey', fontSize: 24, fontWeight: 500 }}>&larr;</span>
      </button>
      <div style={{ textAlign: 'center', marginTop: 32, marginBottom: 16 }}>
        <span style={{ fontSize: 64, color: '#bbb' }}>ⓘ</span>
      </div>
      <div style={{ fontWeight: 500, fontSize: 36, marginBottom: 8, textAlign: 'center', fontFamily: 'serif' }}>2km Time Trial</div>
      <div style={{ fontSize: 22, textAlign: 'center', marginBottom: 32, fontFamily: 'serif' }}>A True Test of Aerobic Endurance in Football</div>
      <div style={{ maxWidth: 520, margin: '0 auto', padding: '0 16px' }}>
        <div style={{ fontSize: 24, margin: '32px 0 8px 0', fontWeight: 600 }}><span role="img" aria-label="pin">📌</span> What Is Is?</div>
        <div style={{ fontSize: 18, marginBottom: 24, lineHeight: 1.6 }}>
          The 2km Time Trial is a continuous running test used to assess a player&apos;s aerobic capacity, mental resilience, and pace control over a mid-distance run. Unlike shuttle-based tests, it mimics real match running patterns more fluidly and provides a clear benchmark of endurance.
        </div>
        <div style={{ fontSize: 24, margin: '32px 0 8px 0', fontWeight: 600 }}><span role="img" aria-label="gear">⚙️</span> How to Do It</div>
        <ul style={{ fontSize: 18, marginBottom: 24, lineHeight: 1.6, paddingLeft: 24 }}>
          <li>Mark out a measured 2,000-meter course (track or GPS-verified path)</li>
          <li>Start from a stationary position</li>
          <li>Run the full distance at maximum sustainable pace</li>
          <li>Record the total time to complete the run</li>
          <li>Use a stopwatch, GPS watch, or app (e.g. Strava)</li>
        </ul>
        <div style={{ fontSize: 24, margin: '32px 0 8px 0', fontWeight: 600 }}><span role="img" aria-label="trophy">🏋️‍♂️</span> What It Trains</div>
        <ul style={{ fontSize: 18, marginBottom: 24, lineHeight: 1.6, paddingLeft: 24 }}>
          <li>Aerobic endurance</li>
          <li>Pacing strategy</li>
          <li>Lactic threshold capacity</li>
          <li>Running efficiency</li>
          <li>Mental stamina</li>
        </ul>
        <div style={{ fontSize: 24, margin: '32px 0 8px 0', fontWeight: 600 }}><span role="img" aria-label="check">✅</span> Benefits</div>
        <ul style={{ fontSize: 18, marginBottom: 24, lineHeight: 1.6, paddingLeft: 24 }}>
          <li>Reflects real-game aerobic fitness</li>
          <li>Easier to compare across players</li>
          <li>Minimal equipment needed</li>
          <li>Supports recovery tracking post-injury</li>
          <li>Great for off-season or baseline testing</li>
        </ul>
        <div style={{ fontSize: 24, margin: '32px 0 8px 0', fontWeight: 600 }}><span role="img" aria-label="soccer">⚽</span> Why Pro Player Use It</div>
        <ul style={{ fontSize: 18, marginBottom: 24, lineHeight: 1.6, paddingLeft: 24 }}>
          <li>Popular in European and Australian pre-season testing</li>
          <li>Used by clubs to monitor cardiovascular fitness</li>
          <li>Helps differentiate between match-fit and unfit players</li>
          <li>Can inform coaching decisions on substitution and workload</li>
        </ul>
      </div>
    </div>
  );
} 
 
 