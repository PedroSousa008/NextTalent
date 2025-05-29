"use client";
import Image from 'next/image';
import BottomNav from '../feed/BottomNav';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'highlights' | 'details' | 'stats'>('highlights');
  const [editing, setEditing] = useState(false);
  const [details, setDetails] = useState({
    fullName: 'Pedro Sousa',
    age: '22',
    height: '1.81 m',
    weight: '77 kg',
    position: 'CAM/CM',
    foot: 'Right',
    club: 'Benfica',
    nationality: 'Portugal',
    shirtNumber: '10',
    strengths: 'Playmaking, Dribbling, Shooting',
    weaknesses: 'Aerial Balls',
    injuries: 'None',
    exTeam: 'Real Madrid',
    email: 'sousa.2003pedro@gmail.com',
    instagram: '@pedrompcsousa',
    twitter: '@Sousa10Pedro',
    linkedin: 'linkedin.com/in/pedrosousa',
  });
  const [editBuffer, setEditBuffer] = useState(details);

  const handleEditChange = (field: string, value: string) => {
    setEditBuffer(prev => ({ ...prev, [field]: value }));
  };
  const handleSave = () => {
    setDetails(editBuffer);
    setEditing(false);
  };
  const handleCancel = () => {
    setEditBuffer(details);
    setEditing(false);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 80, position: 'relative' }}>
      {/* Top left and right icons */}
      <div style={{ position: 'absolute', top: 18, left: 38, zIndex: 10 }}>
        <Image src="/settings.png" alt="Settings" width={48} height={48} />
      </div>
      <div style={{ position: 'absolute', top: 18, right: 38, zIndex: 10 }}>
        <Image src="/challanges.png" alt="Challanges" width={48} height={48} style={{ cursor: 'pointer' }} onClick={() => router.push('/challanges')} />
      </div>
      {/* Profile image */}
      <div style={{ marginTop: 18, marginBottom: 8 }}>
        <Image src="/pedro.jpg" alt="Pedro Sousa" width={200} height={200} style={{ objectFit: 'cover', borderRadius: '50%', aspectRatio: '1 / 1' }} />
      </div>
      {/* Name */}
      <div style={{ fontWeight: 500, fontSize: 32, color: '#222', fontFamily: 'serif', marginBottom: 4 }}>Pedro Sousa</div>
      {/* Club and position row with logo, text, and DM icon */}
      <div style={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: 500, marginBottom: 8, marginTop: 0, height: 40, position: 'relative' }}>
        {/* Benfica logo aligned with the center of Followers */}
        <div style={{ position: 'absolute', left: '16.67%', top: 0, bottom: 0, display: 'flex', alignItems: 'center', height: '100%' }}>
          <Image src="/benfica.png" alt="Benfica" width={48} height={48} style={{ objectFit: 'contain', borderRadius: 4, cursor: 'pointer' }} onClick={() => router.push('/profile/benfica')} />
        </div>
        {/* Centered club text */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <span style={{ fontSize: 18, color: '#222', fontFamily: 'serif', textAlign: 'center' }}>Playing for Benfica</span>
        </div>
        {/* DM icon aligned with the center of Posts */}
        <div style={{ position: 'absolute', right: '16.67%', top: 0, bottom: 0, display: 'flex', alignItems: 'center', height: '100%' }}>
          <Image src="/dm.png" alt="DM" width={48} height={48} style={{ objectFit: 'contain', borderRadius: 4 }} />
        </div>
      </div>
      <div style={{ fontSize: 18, color: '#222', fontFamily: 'serif', marginBottom: 8 }}>CAM/CM</div>
      {/* Followers, Following, Posts - now above tabs */}
      <div style={{ display: 'flex', width: '100%', maxWidth: 500, margin: '18px 0 0 0' }}>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ color: '#bbb', fontSize: 18, fontFamily: 'serif' }}>Followers</div>
          <div style={{ fontWeight: 500, fontSize: 28, color: '#222', fontFamily: 'serif' }}>365</div>
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ color: '#bbb', fontSize: 18, fontFamily: 'serif' }}>Following</div>
          <div style={{ fontWeight: 500, fontSize: 28, color: '#222', fontFamily: 'serif' }}>125</div>
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ color: '#bbb', fontSize: 18, fontFamily: 'serif' }}>Posts</div>
          <div style={{ fontWeight: 500, fontSize: 28, color: '#222', fontFamily: 'serif' }}>1</div>
        </div>
      </div>
      {/* Tabs and Stats Row */}
      <div style={{ width: '100%', maxWidth: 500, marginTop: 32 }}>
        <div style={{ display: 'flex', borderBottom: '1.5px solid #eee' }}>
          <div
            style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: activeTab === 'highlights' ? 700 : 500, color: activeTab === 'highlights' ? 'black' : '#bbb', borderBottom: activeTab === 'highlights' ? '2px solid black' : 'none', paddingBottom: 4, cursor: 'pointer', transition: 'color 0.15s, border-bottom 0.15s' }}
            onClick={() => setActiveTab('highlights')}
          >
            Game Highlights
          </div>
          <div
            style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: activeTab === 'details' ? 700 : 500, color: activeTab === 'details' ? 'black' : '#bbb', borderBottom: activeTab === 'details' ? '2px solid black' : 'none', paddingBottom: 4, cursor: 'pointer', transition: 'color 0.15s, border-bottom 0.15s' }}
            onClick={() => setActiveTab('details')}
          >
            Details
          </div>
          <div
            style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: activeTab === 'stats' ? 700 : 500, color: activeTab === 'stats' ? 'black' : '#bbb', borderBottom: activeTab === 'stats' ? '2px solid black' : 'none', paddingBottom: 4, cursor: 'pointer', transition: 'color 0.15s, border-bottom 0.15s' }}
            onClick={() => setActiveTab('stats')}
          >
            Stats
          </div>
        </div>
      </div>
      {/* Game Highlights Grid or Details Table */}
      {activeTab === 'highlights' && (
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 18, width: '100%', maxWidth: 500, overflowX: 'auto', padding: '0 0 0 8px', height: '33vh' }}>
          <div style={{ width: 180, height: 160, borderRadius: 8, overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginRight: 16, background: 'none' }}>
            {/* Static video thumbnail for Pedro Sousa */}
            <Image src="/Thumbnail.png" alt="Pedro Sousa Thumbnail" fill style={{ objectFit: 'cover', borderRadius: 8 }} />
            <span style={{ position: 'absolute', bottom: 6, right: 10, color: 'white', fontWeight: 700, fontSize: 15, textShadow: '0 1px 4px #000', background: 'rgba(0,0,0,0.4)', borderRadius: 4, padding: '1px 6px' }}>1:35</span>
          </div>
        </div>
      )}
      {activeTab === 'details' && (
        <div style={{ width: '100%', maxWidth: 500, marginTop: 18, padding: '0 16px', overflowY: 'auto', maxHeight: '45vh' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'serif' }}>
            <tbody>
              {editing ? (
                <>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Full Name</td><td><input value={editBuffer.fullName} onChange={e => handleEditChange('fullName', e.target.value)} style={{ fontSize: 18, fontFamily: 'serif', width: '100%' }} /></td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Age</td><td><input value={editBuffer.age} onChange={e => handleEditChange('age', e.target.value)} style={{ fontSize: 18, fontFamily: 'serif', width: '100%' }} /></td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Height</td><td><input value={editBuffer.height} onChange={e => handleEditChange('height', e.target.value)} style={{ fontSize: 18, fontFamily: 'serif', width: '100%' }} /></td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Weight</td><td><input value={editBuffer.weight} onChange={e => handleEditChange('weight', e.target.value)} style={{ fontSize: 18, fontFamily: 'serif', width: '100%' }} /></td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Position</td><td><input value={editBuffer.position} onChange={e => handleEditChange('position', e.target.value)} style={{ fontSize: 18, fontFamily: 'serif', width: '100%' }} /></td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Preferred Foot</td><td><input value={editBuffer.foot} onChange={e => handleEditChange('foot', e.target.value)} style={{ fontSize: 18, fontFamily: 'serif', width: '100%' }} /></td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Club</td><td><input value={editBuffer.club} onChange={e => handleEditChange('club', e.target.value)} style={{ fontSize: 18, fontFamily: 'serif', width: '100%' }} /></td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Nationality</td><td><input value={editBuffer.nationality} onChange={e => handleEditChange('nationality', e.target.value)} style={{ fontSize: 18, fontFamily: 'serif', width: '100%' }} /></td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Shirt Number</td><td><input value={editBuffer.shirtNumber} onChange={e => handleEditChange('shirtNumber', e.target.value)} style={{ fontSize: 18, fontFamily: 'serif', width: '100%' }} /></td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Strengths</td><td><input value={editBuffer.strengths} onChange={e => handleEditChange('strengths', e.target.value)} style={{ fontSize: 18, fontFamily: 'serif', width: '100%' }} /></td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Weaknesses</td><td><input value={editBuffer.weaknesses} onChange={e => handleEditChange('weaknesses', e.target.value)} style={{ fontSize: 18, fontFamily: 'serif', width: '100%' }} /></td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Injuries</td><td><input value={editBuffer.injuries} onChange={e => handleEditChange('injuries', e.target.value)} style={{ fontSize: 18, fontFamily: 'serif', width: '100%' }} /></td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Ex-Team</td><td><input value={editBuffer.exTeam} onChange={e => handleEditChange('exTeam', e.target.value)} style={{ fontSize: 18, fontFamily: 'serif', width: '100%' }} /></td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Email</td><td><input value={editBuffer.email} onChange={e => handleEditChange('email', e.target.value)} style={{ fontSize: 18, fontFamily: 'serif', width: '100%' }} /></td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Instagram</td><td><input value={editBuffer.instagram} onChange={e => handleEditChange('instagram', e.target.value)} style={{ fontSize: 18, fontFamily: 'serif', width: '100%' }} /></td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Twitter</td><td><input value={editBuffer.twitter} onChange={e => handleEditChange('twitter', e.target.value)} style={{ fontSize: 18, fontFamily: 'serif', width: '100%' }} /></td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>LinkedIn</td><td><input value={editBuffer.linkedin} onChange={e => handleEditChange('linkedin', e.target.value)} style={{ fontSize: 18, fontFamily: 'serif', width: '100%' }} /></td></tr>
                </>
              ) : (
                <>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Full Name</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>{details.fullName}</td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Age</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>{details.age}</td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Height</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>{details.height}</td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Weight</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>{details.weight}</td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Position</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>{details.position}</td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Preferred Foot</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>{details.foot}</td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Club</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>{details.club}</td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Nationality</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>{details.nationality}</td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Shirt Number</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>{details.shirtNumber}</td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Strengths</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>{details.strengths}</td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Weaknesses</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>{details.weaknesses}</td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Injuries</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>{details.injuries}</td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Ex-Team</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>{details.exTeam}</td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Email</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>{details.email}</td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Instagram</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>{details.instagram}</td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Twitter</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>{details.twitter}</td></tr>
                  <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>LinkedIn</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>{details.linkedin}</td></tr>
                </>
              )}
            </tbody>
          </table>
          <div style={{ marginTop: 24, textAlign: 'center' }}>
            {editing ? (
              <>
                <button onClick={handleSave} style={{ background: '#222', border: 'none', color: 'white', fontSize: 18, borderRadius: 8, padding: '8px 24px', cursor: 'pointer', fontFamily: 'serif', fontWeight: 500, marginRight: 12 }}>Save</button>
                <button onClick={handleCancel} style={{ background: 'none', border: '1.5px solid #bbb', color: '#222', fontSize: 18, borderRadius: 8, padding: '8px 24px', cursor: 'pointer', fontFamily: 'serif', fontWeight: 500 }}>Cancel</button>
              </>
            ) : (
              <button onClick={() => setEditing(true)} style={{ background: 'none', border: '1.5px solid #bbb', color: '#222', fontSize: 18, borderRadius: 8, padding: '8px 24px', cursor: 'pointer', fontFamily: 'serif', fontWeight: 500, transition: 'border 0.2s, color 0.2s' }}>
                Edit Information
              </button>
            )}
          </div>
        </div>
      )}
      {activeTab === 'stats' && (
        <div style={{ width: '100%', maxWidth: 500, marginTop: 18, padding: '0 16px', color: '#222', textAlign: 'center', fontSize: 18, overflowY: 'auto', maxHeight: '45vh' }}>
          <div style={{ marginBottom: 16, color: '#222', fontSize: 16, fontFamily: 'serif' }}>
            All the stats have been confirmed by the corresponding federation and some have videos provided by the player.
          </div>
          {/* 2024/25 */}
          <div style={{ textAlign: 'left', fontWeight: 700, fontSize: 20, margin: '18px 0 8px 0', fontFamily: 'serif' }}>2024/25</div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'serif', marginBottom: 18 }}>
            <tbody>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Games</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>29</td><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Started</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>27</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Goals</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>17</td><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Goals per game</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>0.59</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Assists</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>11</td><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Assists per game</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>0.38</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Yellows</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>2</td><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Reds</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>1</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Free Kicks</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>3</td><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Penalty&apos;s</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>2</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Right Foot Goals</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>10</td><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Left Foot Goals</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>5</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Headed Goals</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>2</td><td></td><td></td></tr>
            </tbody>
          </table>
          {/* 2023/24 */}
          <div style={{ textAlign: 'left', fontWeight: 700, fontSize: 20, margin: '18px 0 8px 0', fontFamily: 'serif' }}>2023/24</div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'serif', marginBottom: 18 }}>
            <tbody>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Games</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>34</td><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Started</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>32</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Goals</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>19</td><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Goals per game</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>0.56</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Assists</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>15</td><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Assists per game</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>0.44</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Yellows</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>3</td><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Reds</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>0</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Free Kicks</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>2</td><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Penalty&apos;s</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>1</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Right Foot Goals</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>12</td><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Left Foot Goals</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>4</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Headed Goals</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>3</td><td></td><td></td></tr>
            </tbody>
          </table>
          {/* 2022/23 */}
          <div style={{ textAlign: 'left', fontWeight: 700, fontSize: 20, margin: '18px 0 8px 0', fontFamily: 'serif' }}>2022/23</div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'serif', marginBottom: 18 }}>
            <tbody>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Games</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>30</td><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Started</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>28</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Goals</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>14</td><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Goals per game</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>0.47</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Assists</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>10</td><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Assists per game</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>0.33</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Yellows</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>2</td><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Reds</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>1</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Free Kicks</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>2</td><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Penalty&apos;s</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>1</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Right Foot Goals</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>8</td><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Left Foot Goals</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>4</td></tr>
              <tr><td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Headed Goals</td><td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>2</td><td></td><td></td></tr>
            </tbody>
          </table>
          {/* 2021/22 */}
          <div style={{ textAlign: 'left', fontWeight: 700, fontSize: 20, margin: '18px 0 8px 0', fontFamily: 'serif' }}>2021/22</div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'serif', marginBottom: 18 }}>
            <tbody>
              <tr>
                <td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Games</td>
                <td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>32</td>
                <td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Started</td>
                <td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>30</td>
              </tr>
              <tr>
                <td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Goals</td>
                <td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>21</td>
                <td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Goals per game</td>
                <td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>0.66</td>
              </tr>
              <tr>
                <td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Assists</td>
                <td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>13</td>
                <td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Assists per game</td>
                <td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>0.41</td>
              </tr>
              <tr>
                <td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Yellows</td>
                <td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>1</td>
                <td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Reds</td>
                <td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>0</td>
              </tr>
              <tr>
                <td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Free Kicks</td>
                <td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>2</td>
                <td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Penalty&apos;s</td>
                <td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>0</td>
              </tr>
              <tr>
                <td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Right Foot Goals</td>
                <td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>16</td>
                <td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Left Foot Goals</td>
                <td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>3</td>
              </tr>
              <tr>
                <td style={{ color: '#ccc', fontSize: 18, padding: '4px 0' }}>Headed Goals</td>
                <td style={{ color: '#222', fontSize: 18, fontWeight: 500, padding: '4px 0' }}>2</td>
                <td></td><td></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {/* Bottom Navigation Bar */}
      <BottomNav active='profile' />
    </div>
  );
} 
 