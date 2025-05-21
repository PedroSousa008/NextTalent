'use client';
import Image from 'next/image';
import { useState, useRef } from 'react';

function Heart({ liked, onClick, size = 20 }: { liked: boolean; onClick: () => void; size?: number }) {
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
      style={{ width: size, height: size, cursor: 'pointer', marginRight: 4, verticalAlign: 'middle' }}
    >
      <path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.04 3 12.5 4 13 5.09C13.5 4 14.96 3 16.5 3C19.5 3 22 5.5 22 8.5C22 13.5 12 21 12 21Z" />
    </svg>
  );
}

function timeAgo(date: Date): string {
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
  if (diff < 60) return `${diff}s`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d`;
  if (diff < 31536000) return `${Math.floor(diff / 604800)}w`;
  return `${Math.floor(diff / 31536000)}y`;
}

function CommentsModal({ open, onClose, comments, onAddComment, onReply, onLike, user }: {
  open: boolean;
  onClose: () => void;
  comments: CommentType[];
  onAddComment: (comment: string) => void;
  onReply: (parentId: string, reply: string) => void;
  onLike: (id: string) => void;
  user: { name: string; image: string };
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [replyValue, setReplyValue] = useState('');
  if (!open) return null;
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.3)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: 'white', borderRadius: 16, width: 420, maxHeight: 600, padding: 32, boxShadow: '0 2px 16px rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column' }}>
        <button onClick={onClose} style={{ alignSelf: 'flex-end', background: 'none', border: 'none', fontSize: 26, cursor: 'pointer', marginBottom: 8, color: 'black' }}>✕</button>
        <div style={{ flex: 1, overflowY: 'auto', marginBottom: 20 }}>
          {comments.length === 0 ? (
            <div style={{ color: '#888', textAlign: 'center', fontSize: 18 }}>No comments yet.</div>
          ) : (
            comments.map((c, i) => (
              <CommentItem key={c.id} comment={c} user={user} onReply={onReply} onLike={onLike} setReplyTo={setReplyTo} replyTo={replyTo} replyValue={replyValue} setReplyValue={setReplyValue} />
            ))
          )}
        </div>
        <form onSubmit={e => {
          e.preventDefault();
          const val = inputRef.current?.value.trim();
          if (val) {
            onAddComment(val);
            if (inputRef.current) inputRef.current.value = '';
          }
        }} style={{ display: 'flex', gap: 10, marginTop: 8 }}>
          <img src={user.image} alt="profile" style={{ width: 36, height: 36, borderRadius: '50%' }} />
          <input ref={inputRef} type="text" placeholder="Add a comment..." style={{ flex: 1, padding: 12, borderRadius: 8, border: '1px solid #ccc', fontSize: 16, color: 'black' }} />
          <button type="submit" style={{ padding: '10px 16px', borderRadius: 8, background: '#222', color: 'white', border: 'none', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>Post</button>
        </form>
      </div>
    </div>
  );
}

// Comment type
interface CommentType {
  id: string;
  user: { name: string; image: string };
  text: string;
  createdAt: Date;
  likes: number;
  liked: boolean;
  replies: CommentType[];
}

function CommentItem({ comment, user, onReply, onLike, setReplyTo, replyTo, replyValue, setReplyValue }: {
  comment: CommentType;
  user: { name: string; image: string };
  onReply: (parentId: string, reply: string) => void;
  onLike: (id: string) => void;
  setReplyTo: (id: string | null) => void;
  replyTo: string | null;
  replyValue: string;
  setReplyValue: (v: string) => void;
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 16 }}>
      <img src={comment.user.image} alt="profile" style={{ width: 32, height: 32, borderRadius: '50%', marginRight: 10 }} />
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontWeight: 600, color: 'black', fontSize: 15 }}>{comment.user.name}</span>
          <span style={{ color: '#888', fontSize: 13 }}>{timeAgo(comment.createdAt)}</span>
        </div>
        <div style={{ color: 'black', fontSize: 15, margin: '2px 0 4px 0' }}>{comment.text}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Heart liked={comment.liked} onClick={() => onLike(comment.id)} size={18} />
          <span style={{ fontSize: 13, color: '#888' }}>{comment.likes}</span>
          <button style={{ background: 'none', border: 'none', color: '#888', fontSize: 13, cursor: 'pointer', padding: 0 }} onClick={() => setReplyTo(comment.id)}>Reply</button>
        </div>
        {/* Replies */}
        <div style={{ marginLeft: 24, marginTop: 6 }}>
          {comment.replies.map((reply, idx) => (
            <div key={reply.id} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 8 }}>
              <img src={reply.user.image} alt="profile" style={{ width: 28, height: 28, borderRadius: '50%', marginRight: 8 }} />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontWeight: 600, color: 'black', fontSize: 14 }}>{reply.user.name}</span>
                  <span style={{ color: '#888', fontSize: 12 }}>{timeAgo(reply.createdAt)}</span>
                </div>
                <div style={{ color: 'black', fontSize: 14 }}>{reply.text}</div>
              </div>
            </div>
          ))}
          {replyTo === comment.id && (
            <form style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }} onSubmit={e => {
              e.preventDefault();
              if (replyValue.trim()) {
                onReply(comment.id, replyValue);
                setReplyValue('');
                setReplyTo(null);
              }
            }}>
              <img src={user.image} alt="profile" style={{ width: 24, height: 24, borderRadius: '50%' }} />
              <input
                type="text"
                value={replyValue}
                onChange={e => setReplyValue(e.target.value)}
                placeholder="Reply..."
                style={{ flex: 1, padding: 6, borderRadius: 6, border: '1px solid #ccc', fontSize: 13, color: 'black' }}
              />
              <button type="submit" style={{ padding: '6px 10px', borderRadius: 6, background: '#222', color: 'white', border: 'none', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Post</button>
            </form>
          )}
        </div>
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
  const [comments1, setComments1] = useState<CommentType[]>([]);
  const [comments2, setComments2] = useState<CommentType[]>([]);
  const [showComments1, setShowComments1] = useState(false);
  const [showComments2, setShowComments2] = useState(false);
  const user = { name: 'Pedro Sousa', image: '/pedro.jpg' };

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
  function addComment1(text: string) {
    setComments1(list => [
      ...list,
      { id: Math.random().toString(36).slice(2), user, text, createdAt: new Date(), likes: 0, liked: false, replies: [] },
    ]);
  }
  function addComment2(text: string) {
    setComments2(list => [
      ...list,
      { id: Math.random().toString(36).slice(2), user, text, createdAt: new Date(), likes: 0, liked: false, replies: [] },
    ]);
  }
  function replyToComment1(parentId: string, reply: string) {
    setComments1(list =>
      list.map(c =>
        c.id === parentId
          ? {
              ...c,
              replies: [
                ...c.replies,
                { id: Math.random().toString(36).slice(2), user, text: reply, createdAt: new Date(), likes: 0, liked: false, replies: [] },
              ],
            }
          : c
      )
    );
  }
  function replyToComment2(parentId: string, reply: string) {
    setComments2(list =>
      list.map(c =>
        c.id === parentId
          ? {
              ...c,
              replies: [
                ...c.replies,
                { id: Math.random().toString(36).slice(2), user, text: reply, createdAt: new Date(), likes: 0, liked: false, replies: [] },
              ],
            }
          : c
      )
    );
  }
  function likeComment1(id: string) {
    setComments1(list =>
      list.map(c =>
        c.id === id
          ? { ...c, liked: !c.liked, likes: c.liked ? c.likes - 1 : c.likes + 1 }
          : { ...c, replies: c.replies.map(r => (r.id === id ? { ...r, liked: !r.liked, likes: r.liked ? r.likes - 1 : r.likes + 1 } : r)) }
      )
    );
  }
  function likeComment2(id: string) {
    setComments2(list =>
      list.map(c =>
        c.id === id
          ? { ...c, liked: !c.liked, likes: c.liked ? c.likes - 1 : c.likes + 1 }
          : { ...c, replies: c.replies.map(r => (r.id === id ? { ...r, liked: !r.liked, likes: r.liked ? r.likes - 1 : r.likes + 1 } : r)) }
      )
    );
  }

  return (
    <div style={{ background: 'white', minHeight: '100vh', fontFamily: 'inherit', position: 'relative' }}>
      {/* Absolute top left and right icons, aligned with Following/Discover tabs */}
      <Image src="/configurations.png" alt="Configurations" width={32} height={32} style={{ position: 'absolute', top: iconTop, left: 16, zIndex: 10, cursor: 'pointer' }} />
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
          <span style={{ fontSize: 14, color: '#222', cursor: 'pointer' }} onClick={() => setShowComments1(true)}>
            See all {comments1.length} comment{comments1.length !== 1 ? 's' : ''}
          </span>
        </div>
        <CommentsModal
          open={showComments1}
          onClose={() => setShowComments1(false)}
          comments={comments1}
          onAddComment={addComment1}
          onReply={replyToComment1}
          onLike={likeComment1}
          user={user}
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
          <span style={{ fontSize: 14, color: '#222', cursor: 'pointer' }} onClick={() => setShowComments2(true)}>
            See all {comments2.length} comment{comments2.length !== 1 ? 's' : ''}
          </span>
        </div>
        <CommentsModal
          open={showComments2}
          onClose={() => setShowComments2(false)}
          comments={comments2}
          onAddComment={addComment2}
          onReply={replyToComment2}
          onLike={likeComment2}
          user={user}
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