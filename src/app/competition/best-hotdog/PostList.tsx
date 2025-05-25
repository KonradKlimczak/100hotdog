// src/components/PostList.tsx
import React, { useEffect, useState } from 'react';
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  DocumentData,
  Timestamp,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import { db } from '@/services/firebase';

interface Post {
  id: string;
  title: string;
  text: string;
  imageUrl: string;
  createdAt: Timestamp;
  userId?: string;
  userName?: string;
}

interface Comment {
  id: string;
  text: string;
  userId: string;
  userName?: string;
  createdAt: Timestamp;
}

const formatDate = (ts: Timestamp) => {
  const date = ts.toDate();
  return date.toLocaleString('pl-PL', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

// CommentsSection component extracted from PostItem for clarity
const CommentsSection: React.FC<{ postId: string }> = ({ postId }) => {
  const auth = getAuth();
  const currentUser = auth.currentUser;

  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const commentsQuery = query(
      collection(db, 'posts', postId, 'comments'),
      orderBy('createdAt', 'asc')
    );
    const unsubscribe = onSnapshot(commentsQuery, (snapshot) => {
      const fetched = snapshot.docs.map((docSnap: DocumentData) => ({
        id: docSnap.id,
        ...(docSnap.data() as Omit<Comment, 'id'>),
      }));
      setComments(fetched);
    });
    return () => unsubscribe();
  }, [postId]);

  const handleAdd = async () => {
    if (!newComment.trim() || !currentUser) return;
    await addDoc(collection(db, 'posts', postId, 'comments'), {
      text: newComment.trim(),
      userId: currentUser.uid,
      userName: currentUser.displayName || undefined,
      createdAt: Timestamp.now(),
    });
    setNewComment('');
  };

  const handleDelete = async (commentId: string) => {
    await deleteDoc(doc(db, 'posts', postId, 'comments', commentId));
  };

  return (
    <div className="mt-6 border-t border-green-400 pt-4">
      <h4 className="text-xl font-bold mb-3">Komentarze</h4>
      <div className="space-y-4">
        {comments.map((c) => (
          <div
            key={c.id}
            className="p-3 border border-green-400 bg-black bg-opacity-50 rounded-lg"
          >
            <p className="mb-1 text-base">{c.text}</p>
            <div className="flex justify-between items-center text-xs opacity-80">
              <span>
                {formatDate(c.createdAt)} • {c.userName || 'Anonim'}
              </span>
              {currentUser?.uid === c.userId && (
                <button
                  onClick={() => handleDelete(c.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  Usuń
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex space-x-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Dodaj komentarz..."
          className="flex-1 px-4 py-2 border-2 border-green-400 bg-black bg-opacity-50 rounded-lg placeholder-green-200 text-green-200 focus:outline-none focus:ring-2 focus:ring-green-200"
        />
        <button
          type="button"
          onClick={handleAdd}
          className="px-4 py-2 border-2 border-green-200 rounded-lg text-green-200 font-bold hover:bg-green-200 hover:text-black transition"
        >
          Wyślij
        </button>
      </div>
    </div>
  );
};

const PostItem: React.FC<{ post: Post }> = ({ post }) => (
  <div className="mb-8 p-6 border-2 border-pink-400 bg-gradient-to-br from-purple-800 via-pink-600 to-blue-500 rounded-2xl shadow-2xl text-green-200 font-mono">
    <h3 className="text-2xl font-extrabold tracking-widest uppercase mb-2">
      {post.title}
    </h3>
    <p className="text-sm mb-4 opacity-80">
      {formatDate(post.createdAt)}
      {post.userName && ` • by ${post.userName}`}
    </p>
    <div className="border-2 border-green-400 bg-black bg-opacity-50 rounded-lg p-2 mb-4">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full rounded-lg"
        style={{ imageRendering: 'pixelated' }}
      />
    </div>
    <p className="mb-4 text-lg whitespace-pre-wrap">{post.text}</p>

    {/* Extracted CommentsSection component */}
    <CommentsSection postId={post.id} />
  </div>
);

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, 'posts'),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, async (snapshot) => {
      const data = await Promise.all(
        snapshot.docs.map(async (docSnap: DocumentData) => {
          const d = docSnap.data();
          let name: string | undefined;

          if (d.userId) {
            const profileRef = doc(db, 'profiles', d.userId);
            const profileSnap = await getDoc(profileRef);
            if (profileSnap.exists()) {
              name = (profileSnap.data() as { name: string }).name;
            }
          }

          return {
            id: docSnap.id,
            title: d.title,
            text: d.text,
            imageUrl: d.imageUrl,
            createdAt: d.createdAt,
            userId: d.userId,
            userName: name,
          } as Post;
        })
      );

      setPosts(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-8 space-y-8">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
