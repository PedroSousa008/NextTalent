'use client';
import Image from 'next/image';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useFilterContext } from './FilterContext';

function Heart({ liked, onClick }: { liked: boolean; onClick: () => void }) {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={liked ? 'red' : 'none'}
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: 24, height: 24, cursor: 'pointer', marginRight: 4, verticalAlign: 'middle' }}
    >
      <path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.04 3 12.5 4 13 5.09C13.5 4 14.96 3 16.5 3C19.5 3 22 5.5 22 8.5C22 13.5 12 21 12 21Z" />
    </svg>
  );
}

function CommentsModal({ open, onClose, comments, onAddComment }: {
  open: boolean;
  onClose: () => void;
  comments: { user: string; avatar: string; text: string }[];
  onAddComment: (comment: { user: string; avatar: string; text: string }) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  if (!open) return null;
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.3)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: 'white', borderRadius: 18, width: 420, maxWidth: '95vw', maxHeight: 600, padding: 32, boxShadow: '0 2px 24px rgba(0,0,0,0.18)', display: 'flex', flexDirection: 'column' }}>
        <button onClick={onClose} style={{ alignSelf: 'flex-end', background: 'none', border: 'none', fontSize: 26, cursor: 'pointer', marginBottom: 12, color: '#888' }}>✕</button>
        <div style={{ flex: 1, overflowY: 'auto', marginBottom: 20 }}>
          {comments.length === 0 ? (
            <div style={{ color: '#888', textAlign: 'center', fontSize: 18, marginTop: 40 }}>No comments yet.</div>
          ) : (
            comments.map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 18, padding: 12, background: '#f5f5f5', borderRadius: 10 }}>
                <img src={c.avatar} alt={c.user} style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', marginTop: 2 }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontWeight: 700, fontSize: 15, color: 'black' }}>{c.user}</span>
                  <span style={{ color: '#222', fontSize: 17, marginTop: 2 }}>{c.text}</span>
                </div>
              </div>
            ))
          )}
        </div>
        <form onSubmit={e => {
          e.preventDefault();
          const val = inputRef.current?.value.trim();
          if (val) {
            onAddComment({
              user: 'Pedro Sousa',
              avatar: '/pedro.jpg',
              text: val
            });
            if (inputRef.current) inputRef.current.value = '';
          }
        }} style={{ display: 'flex', gap: 10 }}>
          <input ref={inputRef} type="text" placeholder="Add a comment..." style={{ flex: 1, padding: 12, borderRadius: 8, border: '1px solid #ccc', fontSize: 17, color: 'black', background: '#fafafa' }} />
          <button type="submit" style={{ padding: '12px 18px', borderRadius: 8, background: '#222', color: 'white', border: 'none', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>Post</button>
        </form>
      </div>
    </div>
  );
}

const REAL_PLAYERS = [
  { name: 'Lionel Messi', age: 36, positions: ['RW', 'CF'], avatar: '/placeholder-avatar.png' },
  { name: 'Cristiano Ronaldo', age: 39, positions: ['LW', 'ST'], avatar: '/placeholder-avatar.png' },
  { name: 'Kylian Mbappé', age: 25, positions: ['LW', 'ST'], avatar: '/placeholder-avatar.png' },
  { name: 'Erling Haaland', age: 23, positions: ['ST'], avatar: '/placeholder-avatar.png' },
  { name: 'Kevin De Bruyne', age: 32, positions: ['CM', 'CAM'], avatar: '/placeholder-avatar.png' },
  { name: 'Neymar Jr.', age: 32, positions: ['LW', 'CAM'], avatar: '/placeholder-avatar.png' },
  { name: 'Virgil van Dijk', age: 32, positions: ['CB'], avatar: '/placeholder-avatar.png' },
  { name: 'Luka Modrić', age: 38, positions: ['CM'], avatar: '/placeholder-avatar.png' },
  { name: 'Jude Bellingham', age: 20, positions: ['CM', 'CAM'], avatar: '/placeholder-avatar.png' },
  { name: 'Pedri', age: 21, positions: ['CM', 'CAM'], avatar: '/placeholder-avatar.png' },
  { name: 'Vinícius Júnior', age: 23, positions: ['LW'], avatar: '/placeholder-avatar.png' },
  { name: 'Bukayo Saka', age: 22, positions: ['RW'], avatar: '/placeholder-avatar.png' },
  { name: 'Rodri', age: 27, positions: ['CDM', 'CM'], avatar: '/placeholder-avatar.png' },
  { name: 'Joshua Kimmich', age: 29, positions: ['CDM', 'RB'], avatar: '/placeholder-avatar.png' },
  { name: 'Alphonso Davies', age: 23, positions: ['LB'], avatar: '/alphonso.jpg' },
  { name: 'Jamal Musiala', age: 21, positions: ['CAM', 'CM'], avatar: '/placeholder-avatar.png' },
  { name: 'Phil Foden', age: 23, positions: ['LW', 'CAM'], avatar: '/placeholder-avatar.png' },
  { name: 'Trent Alexander-Arnold', age: 25, positions: ['RB', 'CM'], avatar: '/placeholder-avatar.png' },
  { name: 'João Cancelo', age: 29, positions: ['RB', 'LB'], avatar: '/placeholder-avatar.png' },
  { name: 'Gavi', age: 19, positions: ['CM'], avatar: '/placeholder-avatar.png' },
  // Add more as needed
];

// Define Player type
export type Player = {
  name: string;
  positions: string[];
  age: string;
  rawAge?: number;
  video: string;
  avatar: string;
  positionLabel: string;
  ageLabel: string;
  likes: number;
  liked: boolean;
  setLiked: (fn: (liked: boolean) => boolean) => void;
  setLikes: (fn: (likes: number) => number) => void;
  comments: { user: string; avatar: string; text: string }[];
  setComments: (fn: (comments: { user: string; avatar: string; text: string }[]) => { user: string; avatar: string; text: string }[]) => void;
  showComments: boolean;
  setShowComments: (show: boolean) => void;
  displayName: string;
  id: string;
};

function getRealPlayer(idx: number): Player {
  const p = REAL_PLAYERS[idx % REAL_PLAYERS.length];
  return {
    name: p.name,
    positions: p.positions,
    age: p.age < 21 ? 'U18-U21' : p.age < 24 ? 'U22-U24' : p.age < 30 ? 'Senior' : 'Veteran',
    rawAge: p.age,
    video: '', // Placeholder
    avatar: p.avatar,
    positionLabel: p.positions.join('/'),
    ageLabel: `${p.age} year old`,
    likes: 100 + Math.floor(Math.random() * 1000),
    liked: false,
    setLiked: () => {},
    setLikes: () => {},
    comments: [],
    setComments: () => {},
    showComments: false,
    setShowComments: () => {},
    displayName: p.name,
    id: `real-list-${idx}`,
  };
}

export default function FeedPage() {
  const [activeTab, setActiveTab] = useState<'following' | 'discover'>('following');
  const [liked1, setLiked1] = useState(false);
  const [liked2, setLiked2] = useState(false);
  const [likes1, setLikes1] = useState(1245);
  const [likes2, setLikes2] = useState(1245);
  const [comments1, setComments1] = useState<{ user: string; avatar: string; text: string }[]>([]);
  const [comments2, setComments2] = useState<{ user: string; avatar: string; text: string }[]>([]);
  const [showComments1, setShowComments1] = useState(false);
  const [showComments2, setShowComments2] = useState(false);
  const router = useRouter();
  const { filters, removeFilter } = useFilterContext();
  const iconTop = 62; // px, adjust as needed for perfect alignment

  // Infinite real player list state and logic
  const [realListPlayers, setRealListPlayers] = useState<Player[]>(() => {
    const arr: Player[] = [];
    for (let i = 0; i < 40; ++i) arr.push(getRealPlayer(i));
    return arr;
  });
  const [loadingMore, setLoadingMore] = useState(false);

  const loadMorePlayers = useCallback(() => {
    setLoadingMore(true);
    setTimeout(() => {
      setRealListPlayers(prev => {
        const next = [...prev];
        for (let i = 0; i < 20; ++i) next.push(getRealPlayer(prev.length + i));
        return next;
      });
      setLoadingMore(false);
    }, 500);
  }, []);

  useEffect(() => {
    function onScroll() {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 &&
        !loadingMore
      ) {
        loadMorePlayers();
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [loadingMore, loadMorePlayers]);

  // Merge real and infinite real-list players
  const allPlayers: Player[] = [
    {
      name: 'Pedro Sousa',
      positions: ['CM', 'CAM', 'CF', 'CDM', 'Senior'],
      age: 'Senior',
      video: '/pedro-clip.mp4',
      avatar: '/pedro.jpg',
      positionLabel: 'CM/CAM',
      ageLabel: '21 year old',
      likes: likes1,
      liked: liked1,
      setLiked: setLiked1,
      setLikes: setLikes1,
      comments: comments1,
      setComments: setComments1,
      showComments: showComments1,
      setShowComments: setShowComments1,
      displayName: 'Pedro Sousa',
      id: 'real-pedro',
    },
    {
      name: 'Alphonso Davies',
      positions: ['LB', 'Senior'],
      age: 'Senior',
      video: '/alphonso-clip.mp4',
      avatar: '/alphonso.jpg',
      positionLabel: 'LB',
      ageLabel: '23 year old',
      likes: likes2,
      liked: liked2,
      setLiked: setLiked2,
      setLikes: setLikes2,
      comments: comments2,
      setComments: setComments2,
      showComments: showComments2,
      setShowComments: setShowComments2,
      displayName: 'Alphonso Davies',
      id: 'real-alphonso',
    },
    ...realListPlayers,
  ];

  // Filtering logic (same as before, but use allPlayers)
  const filteredPlayers = allPlayers.filter(player => {
    if (filters.positions.length === 0 && !filters.age) return true;
    const matchesPositions = filters.positions.length === 0 || filters.positions.some(pos => player.positions.includes(pos));
    const matchesAge = !filters.age || player.age === filters.age;
    return matchesPositions && matchesAge;
  });

  return (
    <div style={{ background: 'white', minHeight: '100vh', fontFamily: 'inherit', position: 'relative' }}>
      {/* Absolute top left and right icons, aligned with Following/Discover tabs */}
      <div style={{ position: 'absolute', top: iconTop, left: 16, zIndex: 10, display: 'flex', alignItems: 'flex-end', height: 32 }}>
        <div onClick={() => router.push('/configurations')} style={{ cursor: 'pointer', marginRight: 2 }}>
          <Image src="/configurations.png" alt="Configurations" width={32} height={32} />
        </div>
        <div style={{ display: 'flex', gap: 2, alignItems: 'flex-end', marginBottom: 0 }}>
          {filters.positions.map(pos => (
            <div key={pos} style={{ display: 'flex', alignItems: 'center', background: '#eee', borderRadius: 4, padding: '0 3px', fontSize: 9, color: '#444', marginRight: 1, height: 13 }}>
              {pos}
              <span style={{ marginLeft: 1, cursor: 'pointer', fontWeight: 700, fontSize: 10 }} onClick={e => { e.stopPropagation(); removeFilter('positions', pos); }}>✕</span>
            </div>
          ))}
          {filters.age && (
            <div style={{ display: 'flex', alignItems: 'center', background: '#eee', borderRadius: 4, padding: '0 3px', fontSize: 9, color: '#444', marginRight: 1, height: 13 }}>
              {filters.age}
              <span style={{ marginLeft: 1, cursor: 'pointer', fontWeight: 700, fontSize: 10 }} onClick={e => { e.stopPropagation(); removeFilter('age'); }}>✕</span>
            </div>
          )}
        </div>
      </div>
      <Image src="/dm.png" alt="DM" width={32} height={32} style={{ position: 'absolute', top: iconTop, right: 16, zIndex: 10, cursor: 'pointer' }} />
      {/* Tabs (Following | Discover) */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '18px 0 0 0' }}>
        <div style={{ display: 'flex', gap: 24, fontSize: 20 }}>
          <button
            style={{
              background: 'none',
              border: 'none',
              color: activeTab === 'following' ? 'black' : '#888',
              fontWeight: activeTab === 'following' ? 600 : 400,
              borderBottom: activeTab === 'following' ? '2px solid black' : '2px solid transparent',
              padding: '0 8px 4px 8px',
              cursor: 'pointer',
              outline: 'none',
            }}
            onClick={() => setActiveTab('following')}
          >
            Following
          </button>
          <button
            style={{
              background: 'none',
              border: 'none',
              color: activeTab === 'discover' ? 'black' : '#888',
              fontWeight: activeTab === 'discover' ? 600 : 400,
              borderBottom: activeTab === 'discover' ? '2px solid black' : '2px solid transparent',
              padding: '0 8px 4px 8px',
              cursor: 'pointer',
              outline: 'none',
            }}
            onClick={() => setActiveTab('discover')}
          >
            Discover
          </button>
        </div>
      </div>
      {/* Feed Cards - filtered */}
      {filteredPlayers.length === 0 ? (
        <div style={{ textAlign: 'center', color: '#888', marginTop: 60, fontSize: 16 }}>No players match your filters.</div>
      ) : (
        filteredPlayers.map((player: Player, idx: number) => (
          <div key={player.id || player.name} style={{ margin: '32px 0 0 0', padding: '0 0 32px 0', borderBottom: '1px solid #eee' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px' }}>
              <span style={{ fontSize: 16, color: 'black' }}>Position: {player.positionLabel}</span>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                <Image src={player.avatar} alt={player.displayName} width={56} height={56} style={{ borderRadius: '50%' }} />
                <span style={{ fontWeight: 500, fontSize: 18, marginTop: 4, color: 'black' }}>{player.displayName}</span>
              </div>
              <span style={{ fontSize: 16, color: 'black' }}>Age: {player.ageLabel}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px 0 0 0' }}>
              {player.video ? (
                <video src={player.video} controls loop autoPlay muted style={{ width: '99%', maxWidth: 700, borderRadius: 12, background: '#eee', marginBottom: 0 }} />
              ) : (
                <div style={{ width: '99%', maxWidth: 700, height: 400, borderRadius: 12, background: '#eee', marginBottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa', fontSize: 28, fontWeight: 600 }}>
                  Video coming soon
                </div>
              )}
              <div style={{ display: 'flex', alignItems: 'center', width: '99%', maxWidth: 700, margin: '0 auto', marginTop: 8, justifyContent: 'flex-start', gap: 18 }}>
                <Heart liked={player.liked} onClick={() => player.setLiked(liked => { player.setLikes(count => liked ? count - 1 : count + 1); return !liked; })} />
                <span style={{ fontSize: 24, verticalAlign: 'middle', cursor: 'pointer' }} onClick={() => player.setShowComments && player.setShowComments(true)}>💬</span>
                <span style={{ fontSize: 24, verticalAlign: 'middle' }}>🔗</span>
              </div>
            </div>
            <div style={{ padding: '0 16px', marginTop: 8 }}>
              <span style={{ fontSize: 14, color: '#222' }}>{player.likes} people liked</span>
              <div style={{ fontWeight: 600, fontSize: 16, color: 'black' }}>{player.displayName}{player.name === 'Pedro Sousa' ? ': ' : ''}<span role="img" aria-label="rocket">{player.name === 'Pedro Sousa' ? '🚀' : ''}</span></div>
              <span style={{ fontSize: 14, color: '#222', cursor: 'pointer' }} onClick={() => router.push(`/comments/${idx + 1}`)}>
                See all {player.comments?.length || 0} comment{(player.comments?.length || 0) !== 1 ? 's' : ''}
              </span>
            </div>
            {/* Only render CommentsModal for real players */}
            {player.id === 'real-pedro' || player.id === 'real-alphonso' ? (
              <CommentsModal
                open={player.showComments}
                onClose={() => player.setShowComments(false)}
                comments={player.comments}
                onAddComment={c => player.setComments(list => [...list, c])}
              />
            ) : null}
          </div>
        ))
      )}
      {/* Bottom Navigation Bar */}
      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, background: 'white', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 64 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'black', opacity: 1 }}>
          <span role="img" aria-label="feed" style={{ fontSize: 28, opacity: 1 }}>⚽️</span>
          <span style={{ fontSize: 14, opacity: 1 }}>Feed</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#bbb', opacity: 0.6 }}>
          <span role="img" aria-label="search" style={{ fontSize: 28, opacity: 0.6 }}>🔍</span>
          <span style={{ fontSize: 14, opacity: 0.6 }}>Search</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#bbb', opacity: 0.6 }}>
          <span role="img" aria-label="upload" style={{ fontSize: 28, opacity: 0.6 }}>📷</span>
          <span style={{ fontSize: 14, opacity: 0.6 }}>Upload</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#bbb', opacity: 0.6 }}>
          <span role="img" aria-label="notifications" style={{ fontSize: 28, opacity: 0.6 }}>🔔</span>
          <span style={{ fontSize: 14, opacity: 0.6 }}>Notifications</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#bbb', opacity: 0.6 }}>
          <span role="img" aria-label="profile" style={{ fontSize: 28, opacity: 0.6 }}>👤</span>
          <span style={{ fontSize: 14, opacity: 0.6 }}>Profile</span>
        </div>
      </div>
    </div>
  );
} 