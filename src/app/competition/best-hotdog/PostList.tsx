import { collection, DocumentData, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

import { db } from '@/services/firebase';

interface Post {
  id: string;
  text: string;
  imageUrl: string;
  createdAt: any;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData: Post[] = snapshot.docs.map((doc: DocumentData) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="mb-6 p-4 border-4 border-green-500 bg-yellow-50 shadow-lg font-mono text-black"
        >
          <p className="mb-2 text-lg whitespace-pre-wrap">{post.text}</p>
          <img
            src={post.imageUrl}
            alt="Post"
            className="w-full border-2 border-fuchsia-500 bg-white"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
      ))}
    </div>
  );
};

export default PostList;