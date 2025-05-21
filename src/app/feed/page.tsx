'use client';
import Image from 'next/image';
import { useState, useRef } from 'react';
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

  // The vertical offset for the icons should match the vertical center of the Following/Discover tabs
  const iconTop = 62; // px, adjust as needed for perfect alignment

  function toggleLike1() {
    setLiked1(liked => {
      setLikes1(count => liked ? count - 1 : count + 1);
      return !liked;
    });
  }
  function toggleLike2() {
    setLiked2(liked => {
      setLikes2(count => liked ? count - 1 : count + 1);
      return !liked;
    });
  }

  return (
    <div style={{ background: 'white', minHeight: '100vh', fontFamily: 'inherit', position: 'relative' }}>
      {/* Absolute top left and right icons, aligned with Following/Discover tabs */}
      <div style={{ position: 'absolute', top: iconTop, left: 16, zIndex: 10, display: 'flex', alignItems: 'center' }}>
        <div onClick={() => router.push('/configurations')} style={{ cursor: 'pointer', marginRight: 4 }}>
          <Image src="/configurations.png" alt="Configurations" width={32} height={32} />
        </div>
        <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
          {filters.positions.map(pos => (
            <div key={pos} style={{ display: 'flex', alignItems: 'center', background: '#eee', borderRadius: 6, padding: '0 4px', fontSize: 11, color: '#444', marginRight: 2, height: 18 }}>
              {pos}
              <span style={{ marginLeft: 2, cursor: 'pointer', fontWeight: 700, fontSize: 12 }} onClick={e => { e.stopPropagation(); removeFilter('positions', pos); }}>✕</span>
            </div>
          ))}
          {filters.age && (
            <div style={{ display: 'flex', alignItems: 'center', background: '#eee', borderRadius: 6, padding: '0 4px', fontSize: 11, color: '#444', marginRight: 2, height: 18 }}>
              {filters.age}
              <span style={{ marginLeft: 2, cursor: 'pointer', fontWeight: 700, fontSize: 12 }} onClick={e => { e.stopPropagation(); removeFilter('age'); }}>✕</span>
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
      {/* Feed Card 1 */}
      <div style={{ margin: '32px 0 0 0', padding: '0 0 32px 0', borderBottom: '1px solid #eee' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px' }}>
          <span style={{ fontSize: 16, color: 'black' }}>Position: CM/CAM</span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <Image src="/pedro.jpg" alt="Pedro Sousa" width={56} height={56} style={{ borderRadius: '50%' }} />
            <span style={{ fontWeight: 500, fontSize: 18, marginTop: 4, color: 'black' }}>Pedro Sousa</span>
          </div>
          <span style={{ fontSize: 16, color: 'black' }}>Age: 21 year old</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px 0 0 0' }}>
          <video src="/pedro-clip.mp4" controls loop autoPlay muted style={{ width: '99%', maxWidth: 700, borderRadius: 12, background: '#eee', marginBottom: 0 }} />
          <div style={{ display: 'flex', alignItems: 'center', width: '99%', maxWidth: 700, margin: '0 auto', marginTop: 8, justifyContent: 'flex-start', gap: 18 }}>
            <Heart liked={liked1} onClick={toggleLike1} />
            <span style={{ fontSize: 24, verticalAlign: 'middle', cursor: 'pointer' }} onClick={() => setShowComments1(true)}>💬</span>
            <span style={{ fontSize: 24, verticalAlign: 'middle' }}>🔗</span>
          </div>
        </div>
        <div style={{ padding: '0 16px', marginTop: 8 }}>
          <span style={{ fontSize: 14, color: '#222' }}>{likes1} people liked</span>
          <div style={{ fontWeight: 600, fontSize: 16, color: 'black' }}>Pedro Sousa: <span role="img" aria-label="rocket">🚀</span></div>
          <span style={{ fontSize: 14, color: '#222', cursor: 'pointer' }} onClick={() => router.push('/comments/1')}>
            See all {comments1.length} comment{comments1.length !== 1 ? 's' : ''}
          </span>
        </div>
        <CommentsModal
          open={showComments1}
          onClose={() => setShowComments1(false)}
          comments={comments1}
          onAddComment={c => setComments1(list => [...list, c])}
        />
      </div>
      {/* Feed Card 2 */}
      <div style={{ margin: '32px 0 0 0', padding: '0 0 32px 0', borderBottom: '1px solid #eee' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px' }}>
          <span style={{ fontSize: 16, color: 'black' }}>Position: LB</span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <Image src="/alphonso.jpg" alt="Alphonso Davies" width={56} height={56} style={{ borderRadius: '50%' }} />
            <span style={{ fontWeight: 500, fontSize: 18, marginTop: 4, color: 'black' }}>Alphonso Davies</span>
          </div>
          <span style={{ fontSize: 16, color: 'black' }}>Age: 23 year old</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px 0 0 0' }}>
          <video src="/alphonso-clip.mp4" controls loop autoPlay muted style={{ width: '99%', maxWidth: 700, borderRadius: 12, background: '#eee', marginBottom: 0 }} />
          <div style={{ display: 'flex', alignItems: 'center', width: '99%', maxWidth: 700, margin: '0 auto', marginTop: 8, justifyContent: 'flex-start', gap: 18 }}>
            <Heart liked={liked2} onClick={toggleLike2} />
            <span style={{ fontSize: 24, verticalAlign: 'middle', cursor: 'pointer' }} onClick={() => setShowComments2(true)}>💬</span>
            <span style={{ fontSize: 24, verticalAlign: 'middle' }}>🔗</span>
          </div>
        </div>
        <div style={{ padding: '0 16px', marginTop: 8 }}>
          <span style={{ fontSize: 14, color: '#222' }}>{likes2} people liked</span>
          <div style={{ fontWeight: 600, fontSize: 16, color: 'black' }}>Alphonso Davies</div>
          <span style={{ fontSize: 14, color: '#222', cursor: 'pointer' }} onClick={() => router.push('/comments/2')}>
            See all {comments2.length} comment{comments2.length !== 1 ? 's' : ''}
          </span>
        </div>
        <CommentsModal
          open={showComments2}
          onClose={() => setShowComments2(false)}
          comments={comments2}
          onAddComment={c => setComments2(list => [...list, c])}
        />
      </div>
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