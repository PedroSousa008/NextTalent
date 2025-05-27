"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ChallangesPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('endurance');
  const [beepTestColor, setBeepTestColor] = useState<string>('#c8e6c9');
  const [fiftyMeterSprintColor, setFiftyMeterSprintColor] = useState<string>('#b2ebf2');
  const [fiftyMeterSprintLevel, setFiftyMeterSprintLevel] = useState<string>('Elite');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('beepTestUploads');
      if (saved) {
        const uploads = JSON.parse(saved) as { age?: number, reps: number }[];
        if (uploads.length > 0) {
          const latest = uploads.reduce((a, b) => (a.age ?? 0) > (b.age ?? 0) ? a : b);
          let color = '#c8e6c9';
          if (latest.age !== undefined && latest.reps !== undefined) {
            let ranges = null;
            if (latest.age >= 10 && latest.age <= 12) ranges = [ { min: 0, max: 6, color: 'yellow' }, { min: 6.5, max: 7.5, color: 'green' }, { min: 7.5, max: 9, color: 'green' }, { min: 9.1, max: Infinity, color: 'blue' } ];
            else if (latest.age >= 13 && latest.age <= 14) ranges = [ { min: 0, max: 7.5, color: 'yellow' }, { min: 8, max: 9.5, color: 'green' }, { min: 9.5, max: 11, color: 'green' }, { min: 11.1, max: Infinity, color: 'blue' } ];
            else if (latest.age >= 15 && latest.age <= 17) ranges = [ { min: 0, max: 9.5, color: 'yellow' }, { min: 10, max: 11.5, color: 'green' }, { min: 11.5, max: 13, color: 'green' }, { min: 13.1, max: Infinity, color: 'blue' } ];
            else if (latest.age >= 18 && latest.age <= 20) ranges = [ { min: 0, max: 12, color: 'yellow' }, { min: 12.5, max: 13.5, color: 'green' }, { min: 13.5, max: 15, color: 'green' }, { min: 15.1, max: Infinity, color: 'blue' } ];
            else if (latest.age >= 21 && latest.age <= 25) ranges = [ { min: 0, max: 12.5, color: 'yellow' }, { min: 13, max: 14, color: 'green' }, { min: 14, max: 15.5, color: 'green' }, { min: 15.6, max: Infinity, color: 'blue' } ];
            else if (latest.age >= 26 && latest.age <= 30) ranges = [ { min: 0, max: 12, color: 'yellow' }, { min: 12.5, max: 13, color: 'green' }, { min: 13.5, max: 15, color: 'green' }, { min: 15.1, max: Infinity, color: 'blue' } ];
            else if (latest.age >= 31 && latest.age <= 35) ranges = [ { min: 0, max: 11.5, color: 'yellow' }, { min: 12, max: 13, color: 'green' }, { min: 13, max: 14.5, color: 'green' }, { min: 14.6, max: Infinity, color: 'blue' } ];
            else if (latest.age >= 36) ranges = [ { min: 0, max: 10.5, color: 'yellow' }, { min: 11, max: 12.5, color: 'green' }, { min: 12.5, max: 14, color: 'green' }, { min: 14.1, max: Infinity, color: 'blue' } ];
            if (ranges) {
              for (const r of ranges) {
                if (latest.reps >= r.min && latest.reps <= r.max) {
                  if (r.color === 'yellow') color = '#ffe0b2';
                  else if (r.color === 'green') color = '#c8e6c9';
                  else if (r.color === 'blue') color = '#b2ebf2';
                }
              }
            }
          }
          setBeepTestColor(color);
        }
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('fiftyMeterSprintUploads');
      if (saved) {
        const uploads = JSON.parse(saved) as { age: number, time: number }[];
        if (uploads.length > 0) {
          const latest = uploads.reduce((a, b) => (a.age ?? 0) > (b.age ?? 0) ? a : b);
          let color = '#b2ebf2';
          let level = 'Elite';
          let ranges = null;
          if (latest.age >= 10 && latest.age <= 12) ranges = [ { label: 'Average', threshold: 8, color: 'yellow' }, { label: 'Very Good', min: 7.5, max: 8.0, color: 'green' }, { label: 'Excellent', min: 7.0, max: 7.5, color: 'green' }, { label: 'Elite', threshold: 7, color: 'blue' } ];
          else if (latest.age >= 13 && latest.age <= 14) ranges = [ { label: 'Average', threshold: 7, color: 'yellow' }, { label: 'Very Good', min: 6.5, max: 7.0, color: 'green' }, { label: 'Excellent', min: 6.0, max: 6.5, color: 'green' }, { label: 'Elite', threshold: 6, color: 'blue' } ];
          else if (latest.age >= 15 && latest.age <= 17) ranges = [ { label: 'Average', threshold: 6.5, color: 'yellow' }, { label: 'Very Good', min: 6.0, max: 6.5, color: 'green' }, { label: 'Excellent', min: 5.5, max: 6.0, color: 'green' }, { label: 'Elite', threshold: 5.5, color: 'blue' } ];
          else if (latest.age >= 18 && latest.age <= 20) ranges = [ { label: 'Average', threshold: 6, color: 'yellow' }, { label: 'Very Good', min: 5.5, max: 6.0, color: 'green' }, { label: 'Excellent', min: 5.0, max: 5.5, color: 'green' }, { label: 'Elite', threshold: 5, color: 'blue' } ];
          else if (latest.age >= 21 && latest.age <= 25) ranges = [ { label: 'Average', threshold: 6, color: 'yellow' }, { label: 'Very Good', min: 5.5, max: 6.0, color: 'green' }, { label: 'Excellent', min: 5.0, max: 5.5, color: 'green' }, { label: 'Elite', threshold: 5, color: 'blue' } ];
          else if (latest.age >= 26 && latest.age <= 30) ranges = [ { label: 'Average', threshold: 6.5, color: 'yellow' }, { label: 'Very Good', min: 6.0, max: 6.5, color: 'green' }, { label: 'Excellent', min: 5.5, max: 6.0, color: 'green' }, { label: 'Elite', threshold: 5.5, color: 'blue' } ];
          else if (latest.age >= 31 && latest.age <= 35) ranges = [ { label: 'Average', threshold: 7, color: 'yellow' }, { label: 'Very Good', min: 6.5, max: 7.0, color: 'green' }, { label: 'Excellent', min: 6.0, max: 6.5, color: 'green' }, { label: 'Elite', threshold: 6, color: 'blue' } ];
          else if (latest.age >= 36) ranges = [ { label: 'Average', threshold: 8, color: 'yellow' }, { label: 'Very Good', min: 7.5, max: 8.0, color: 'green' }, { label: 'Excellent', min: 7.0, max: 7.5, color: 'green' }, { label: 'Elite', threshold: 7, color: 'blue' } ];
          if (ranges) {
            for (const r of ranges) {
              if (r.label === 'Average' && typeof r.threshold === 'number' && latest.time > r.threshold) {
                color = '#ffe0b2';
                level = 'Average';
              } else if (r.label === 'Very Good' && typeof r.min === 'number' && typeof r.max === 'number' && latest.time > r.min && latest.time <= r.max) {
                color = '#c8e6c9';
                level = 'Very Good';
              } else if (r.label === 'Excellent' && typeof r.min === 'number' && typeof r.max === 'number' && latest.time > r.min && latest.time <= r.max) {
                color = '#c8e6c9';
                level = 'Excellent';
              } else if (r.label === 'Elite' && typeof r.threshold === 'number' && latest.time <= r.threshold) {
                color = '#b2ebf2';
                level = 'Elite';
              }
            }
          }
          setFiftyMeterSprintColor(color);
          setFiftyMeterSprintLevel(level);
        } else {
          setFiftyMeterSprintColor('#eeeeee');
          setFiftyMeterSprintLevel('');
        }
      } else {
        setFiftyMeterSprintColor('#eeeeee');
        setFiftyMeterSprintLevel('');
      }
    }
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Back button */}
      <button onClick={() => router.back()} style={{ position: 'absolute', top: 24, left: 18, background: 'none', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, cursor: 'pointer' }}>
        <span style={{ color: 'grey', fontSize: 24, fontWeight: 500 }}>&larr;</span>
      </button>
      {/* Top image */}
      <div style={{ marginTop: 32, marginBottom: 8 }}>
        <Image src="/challanges.png" alt="Challanges" width={120} height={120} style={{ objectFit: 'contain', filter: 'grayscale(1)' }} />
      </div>
      {/* Title */}
      <div style={{ fontWeight: 500, fontSize: 36, color: '#222', fontFamily: 'serif', marginBottom: 12, textAlign: 'center' }}>Challenges</div>
      {/* Tabs */}
      <div style={{ width: '100%', maxWidth: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 0, borderBottom: '1.5px solid #eee' }}>
        <div onClick={() => setActiveTab('endurance')} style={{ flex: 1, textAlign: 'center', fontSize: 18, fontWeight: activeTab === 'endurance' ? 600 : 500, color: activeTab === 'endurance' ? 'black' : '#bbb', borderBottom: activeTab === 'endurance' ? '2px solid black' : 'none', paddingBottom: 4, cursor: 'pointer', fontFamily: 'serif' }}>
          Endurance & Agility Assessments
        </div>
        <div onClick={() => setActiveTab('mobility')} style={{ flex: 1, textAlign: 'center', fontSize: 18, fontWeight: activeTab === 'mobility' ? 600 : 500, color: activeTab === 'mobility' ? 'black' : '#bbb', borderBottom: activeTab === 'mobility' ? '2px solid black' : 'none', paddingBottom: 4, cursor: 'pointer', fontFamily: 'serif' }}>
          Mobility & Explosive Power
        </div>
        <div onClick={() => setActiveTab('strength')} style={{ flex: 1, textAlign: 'center', fontSize: 18, fontWeight: activeTab === 'strength' ? 600 : 500, color: activeTab === 'strength' ? 'black' : '#bbb', borderBottom: activeTab === 'strength' ? '2px solid black' : 'none', paddingBottom: 4, cursor: 'pointer', fontFamily: 'serif' }}>
          Strength & Stability
        </div>
        <div onClick={() => setActiveTab('anaerobic')} style={{ flex: 1, textAlign: 'center', fontSize: 18, fontWeight: activeTab === 'anaerobic' ? 600 : 500, color: activeTab === 'anaerobic' ? 'black' : '#bbb', borderBottom: activeTab === 'anaerobic' ? '2px solid black' : 'none', paddingBottom: 4, cursor: 'pointer', fontFamily: 'serif' }}>
          Anaerobic & Injury Prevention
        </div>
      </div>
      {/* Cards */}
      <div style={{ width: '100%', maxWidth: 500, marginTop: 24, display: 'flex', flexDirection: 'column', gap: 24, overflowY: 'auto', maxHeight: '70vh', paddingRight: 4, paddingBottom: 20 }}>
        {/* Endurance & Agility Assessments */}
        {activeTab === 'endurance' && (
          <>
            {/* Beep Test */}
            <div onClick={() => router.push('/challanges/beep-test')} style={{ background: beepTestColor, borderRadius: 24, padding: '24px 0 24px 0', display: 'flex', alignItems: 'center', margin: '0 8px', minHeight: 100, cursor: 'pointer' }}>
              <div style={{ flex: '0 0 80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/player1.png" alt="Beep Test" width={54} height={54} style={{ objectFit: 'contain' }} />
              </div>
              <div style={{ flex: 1, paddingLeft: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: 32, fontWeight: 400, color: 'white', fontFamily: 'serif' }}>Beep Test</div>
                <div style={{ fontSize: 18, color: '#222', fontFamily: 'serif', marginTop: 4 }}>Very Good</div>
              </div>
            </div>
            {/* 50 Meter Sprint */}
            <div onClick={() => router.push('/challanges/50-meter-sprint')} style={{ background: fiftyMeterSprintColor, borderRadius: 24, padding: '24px 0 24px 0', display: 'flex', alignItems: 'center', margin: '0 8px', minHeight: 100, cursor: 'pointer' }}>
              <div style={{ flex: '0 0 80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/player2.png" alt="50 Meter Sprint" width={54} height={54} style={{ objectFit: 'contain' }} />
              </div>
              <div style={{ flex: 1, paddingLeft: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: 32, fontWeight: 400, color: fiftyMeterSprintLevel ? 'white' : '#222', fontFamily: 'serif' }}>50 Meter Sprint</div>
                {fiftyMeterSprintLevel && (
                  <div style={{ fontSize: 18, color: '#222', fontFamily: 'serif', marginTop: 4 }}>{fiftyMeterSprintLevel}</div>
                )}
              </div>
            </div>
            {/* 2km Time Trial */}
            <div onClick={() => router.push('/challanges/2km-time-trial')} style={{ background: '#eeeeee', borderRadius: 24, padding: '24px 0 24px 0', display: 'flex', alignItems: 'center', margin: '0 8px', minHeight: 100, cursor: 'pointer' }}>
              <div style={{ flex: '0 0 80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/player3.png" alt="2km Time Trial" width={54} height={54} style={{ objectFit: 'contain' }} />
              </div>
              <div style={{ flex: 1, paddingLeft: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: 32, fontWeight: 400, color: '#222', fontFamily: 'serif' }}>2km Time Trial</div>
              </div>
            </div>
            {/* T-Drill Test */}
            <div onClick={() => router.push('/challanges/t-drill-test')} style={{ background: '#b2ebf2', borderRadius: 24, padding: '24px 0 24px 0', display: 'flex', alignItems: 'center', margin: '0 8px', minHeight: 100, cursor: 'pointer' }}>
              <div style={{ flex: '0 0 80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/player4.png" alt="T-Drill Test" width={54} height={54} style={{ objectFit: 'contain', width: 54, height: 54 }} />
              </div>
              <div style={{ flex: 1, paddingLeft: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: 32, fontWeight: 400, color: 'white', fontFamily: 'serif' }}>T-Drill Test</div>
                <div style={{ fontSize: 18, color: '#222', fontFamily: 'serif', marginTop: 4 }}>Elite</div>
              </div>
            </div>
          </>
        )}
        {/* Mobility & Explosive Power */}
        {activeTab === 'mobility' && (
          <>
            <div style={{ background: '#aeeaf7', borderRadius: 24, padding: '24px 0 24px 0', display: 'flex', alignItems: 'center', margin: '0 8px', minHeight: 100 }}>
              <div style={{ flex: '0 0 80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/player5.png" alt="Vertical Jump" width={64} height={64} style={{ objectFit: 'contain' }} />
              </div>
              <div style={{ flex: 1, paddingLeft: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: 32, fontWeight: 400, color: 'white', fontFamily: 'serif' }}>Vertical Jump</div>
                <div style={{ fontSize: 18, color: '#222', fontFamily: 'serif', marginTop: 4 }}>Elite</div>
              </div>
            </div>
            <div style={{ background: '#ddd', borderRadius: 24, padding: '24px 0 24px 0', display: 'flex', alignItems: 'center', margin: '0 8px', minHeight: 100 }}>
              <div style={{ flex: '0 0 80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/player6.png" alt="Medicine Ball Throws" width={54} height={54} style={{ objectFit: 'contain' }} />
              </div>
              <div style={{ flex: 1, paddingLeft: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: 32, fontWeight: 400, color: '#444', fontFamily: 'serif' }}>Medicine Ball Throws</div>
              </div>
            </div>
            <div style={{ background: '#ddd', borderRadius: 24, padding: '24px 0 24px 0', display: 'flex', alignItems: 'center', margin: '0 8px', minHeight: 100 }}>
              <div style={{ flex: '0 0 80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/player7.png" alt="Plyometric Box Jumps" width={54} height={54} style={{ objectFit: 'contain' }} />
              </div>
              <div style={{ flex: 1, paddingLeft: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: 32, fontWeight: 400, color: '#444', fontFamily: 'serif' }}>Plyometric Box Jumps</div>
              </div>
            </div>
            <div style={{ background: '#ddd', borderRadius: 24, padding: '24px 0 24px 0', display: 'flex', alignItems: 'center', margin: '0 8px', minHeight: 100 }}>
              <div style={{ flex: '0 0 80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/player8.png" alt="Sit & Reach" width={64} height={64} style={{ objectFit: 'contain' }} />
              </div>
              <div style={{ flex: 1, paddingLeft: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: 32, fontWeight: 400, color: '#444', fontFamily: 'serif' }}>Sit & Reach</div>
              </div>
            </div>
          </>
        )}
        {/* Strength & Stability */}
        {activeTab === 'strength' && (
          <>
            <div style={{ background: '#ddd', borderRadius: 24, padding: '24px 0 24px 0', display: 'flex', alignItems: 'center', margin: '0 8px', minHeight: 100 }}>
              <div style={{ flex: '0 0 80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/player9.png" alt="1 Rep Max Squats" width={44} height={44} style={{ objectFit: 'contain' }} />
              </div>
              <div style={{ flex: 1, paddingLeft: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: 32, fontWeight: 400, color: '#444', fontFamily: 'serif' }}>1 Rep Max Squats</div>
              </div>
            </div>
            <div style={{ background: '#ddd', borderRadius: 24, padding: '24px 0 24px 0', display: 'flex', alignItems: 'center', margin: '0 8px', minHeight: 100 }}>
              <div style={{ flex: '0 0 80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/player10.png" alt="1 Rep Max Deadlifts" width={44} height={44} style={{ objectFit: 'contain' }} />
              </div>
              <div style={{ flex: 1, paddingLeft: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: 32, fontWeight: 400, color: '#444', fontFamily: 'serif' }}>1 Rep Max Deadlifts</div>
              </div>
            </div>
            <div style={{ background: '#ddd', borderRadius: 24, padding: '24px 0 24px 0', display: 'flex', alignItems: 'center', margin: '0 8px', minHeight: 100 }}>
              <div style={{ flex: '0 0 80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/player11.png" alt="1 Rep Max Bench Press" width={64} height={64} style={{ objectFit: 'contain' }} />
              </div>
              <div style={{ flex: 1, paddingLeft: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: 32, fontWeight: 400, color: '#444', fontFamily: 'serif' }}>1 Rep Max Bench Press</div>
              </div>
            </div>
            <div style={{ background: '#ffd89c', borderRadius: 24, padding: '24px 0 24px 0', display: 'flex', alignItems: 'center', margin: '0 8px', minHeight: 100 }}>
              <div style={{ flex: '0 0 80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/player12.png" alt="Plank" width={54} height={54} style={{ objectFit: 'contain' }} />
              </div>
              <div style={{ flex: 1, paddingLeft: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: 32, fontWeight: 400, color: 'white', fontFamily: 'serif' }}>Plank</div>
                <div style={{ fontSize: 18, color: '#222', fontFamily: 'serif', marginTop: 4 }}>Average</div>
              </div>
            </div>
          </>
        )}
        {/* Anaerobic & Injury Prevention */}
        {activeTab === 'anaerobic' && (
          <>
            <div style={{ background: '#ddd', borderRadius: 24, padding: '24px 0 24px 0', display: 'flex', alignItems: 'center', margin: '0 8px', minHeight: 100 }}>
              <div style={{ flex: '0 0 80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/player13.png" alt="Lactate Threshold Runs" width={54} height={54} style={{ objectFit: 'contain' }} />
              </div>
              <div style={{ flex: 1, paddingLeft: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: 32, fontWeight: 400, color: '#444', fontFamily: 'serif' }}>Lactate Threshold Runs</div>
              </div>
            </div>
            <div style={{ background: '#ddd', borderRadius: 24, padding: '24px 0 24px 0', display: 'flex', alignItems: 'center', margin: '0 8px', minHeight: 100 }}>
              <div style={{ flex: '0 0 80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/player14.png" alt="Maximal Sprint Repeats" width={44} height={44} style={{ objectFit: 'contain' }} />
              </div>
              <div style={{ flex: 1, paddingLeft: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: 32, fontWeight: 400, color: '#444', fontFamily: 'serif' }}>Maximal Sprint Repeats</div>
              </div>
            </div>
            <div style={{ background: '#ddd', borderRadius: 24, padding: '24px 0 24px 0', display: 'flex', alignItems: 'center', margin: '0 8px', minHeight: 100 }}>
              <div style={{ flex: '0 0 80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/player15.png" alt="Nordic Hamstring Test" width={54} height={54} style={{ objectFit: 'contain' }} />
              </div>
              <div style={{ flex: 1, paddingLeft: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: 32, fontWeight: 400, color: '#444', fontFamily: 'serif' }}>Nordic Hamstring Test</div>
              </div>
            </div>
            <div style={{ background: '#ddd', borderRadius: 24, padding: '24px 0 24px 0', display: 'flex', alignItems: 'center', margin: '0 8px', minHeight: 100 }}>
              <div style={{ flex: '0 0 80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/player16.png" alt="Jump Landing Assessments" width={44} height={44} style={{ objectFit: 'contain' }} />
              </div>
              <div style={{ flex: 1, paddingLeft: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: 32, fontWeight: 400, color: '#444', fontFamily: 'serif' }}>Jump Landing Assessments</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
} 
 
 