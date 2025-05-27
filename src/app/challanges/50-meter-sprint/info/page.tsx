"use client";
import { useRouter } from 'next/navigation';

export default function FiftyMeterSprintInfoPage() {
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
      <div style={{ fontWeight: 500, fontSize: 36, marginBottom: 8, textAlign: 'center', fontFamily: 'serif' }}>50 Meter Sprint</div>
      <div style={{ fontSize: 22, textAlign: 'center', marginBottom: 32, fontFamily: 'serif' }}>Explosive Speed Test for Football Performance</div>
      <div style={{ maxWidth: 520, margin: '0 auto', padding: '0 16px' }}>
        <div style={{ fontSize: 24, margin: '32px 0 8px 0', fontWeight: 600 }}><span role="img" aria-label="pin">📌</span> What Is Is?</div>
        <div style={{ fontSize: 18, marginBottom: 24, lineHeight: 1.6 }}>
          The 50 Meter Sprint is a short-distance speed test that measures a player&apos;s acceleration, explosive power, and top speed. It&apos;s widely used in football to evaluate how fast a player can reach full pace — crucial for breakaways, defensive recovery, and short bursts of play.
        </div>
        <div style={{ fontSize: 24, margin: '32px 0 8px 0', fontWeight: 600 }}><span role="img" aria-label="gear">⚙️</span> How to Do It</div>
        <ul style={{ fontSize: 18, marginBottom: 24, lineHeight: 1.6, paddingLeft: 24 }}>
          <li>Mark out a 50 meter straight line</li>
          <li>Start from a standing position</li>
          <li>Sprint at maximum effort to the finish</li>
          <li>Use a stopwatch or electronic timing gates</li>
          <li>Best of 1-3 trials is recorded</li>
        </ul>
        <div style={{ fontSize: 24, margin: '32px 0 8px 0', fontWeight: 600 }}><span role="img" aria-label="trophy">🏋️‍♂️</span> What It Trains</div>
        <ul style={{ fontSize: 18, marginBottom: 24, lineHeight: 1.6, paddingLeft: 24 }}>
          <li>Acceleration (first 10-20m)</li>
          <li>Sprint mechanics</li>
          <li>Reaction time (if started on a signal)</li>
          <li>Anaerobic power</li>
          <li>Neuromuscular coordination</li>
        </ul>
        <div style={{ fontSize: 24, margin: '32px 0 8px 0', fontWeight: 600 }}><span role="img" aria-label="check">✅</span> Benefits</div>
        <ul style={{ fontSize: 18, marginBottom: 24, lineHeight: 1.6, paddingLeft: 24 }}>
          <li>Develops explosive speed</li>
          <li>Sharpens quick starts and chases</li>
          <li>Tracks raw sprinting ability</li>
          <li>Requires minimal setup</li>
          <li>Helps assess recovery from injury</li>
        </ul>
        <div style={{ fontSize: 24, margin: '32px 0 8px 0', fontWeight: 600 }}><span role="img" aria-label="soccer">⚽</span> Why Pro Player Use It</div>
        <ul style={{ fontSize: 18, marginBottom: 24, lineHeight: 1.6, paddingLeft: 24 }}>
          <li>Identifies fast players for key positions (wingers, fullbacks, strikers)</li>
          <li>Tracks development in youth academies</li>
          <li>Measures improvement in sprint drills</li>
          <li>Used in scouting, fitness assessments, and pre-season testing</li>
        </ul>
      </div>
    </div>
  );
} 
 
 