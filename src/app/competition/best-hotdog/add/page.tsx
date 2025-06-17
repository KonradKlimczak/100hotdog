'use client';
import { getAuth } from 'firebase/auth';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

import { db, storage } from '@/services/firebase';

import FileInput from './FileInput';

const PostForm: React.FC = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (file: File): Promise<string> => {
    const imageRef = ref(storage, `images/${Date.now()}-${file.name}`);
    await uploadBytes(imageRef, file);
    return getDownloadURL(imageRef);
  };

  const savePost = async (imageUrl: string) => {
    const auth = getAuth();
    const user = auth.currentUser;
    await addDoc(collection(db, 'bestHotdogs'), {
      title,
      text,
      imageUrl,
      createdAt: Timestamp.now(),
      userId: user?.uid,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title || !text || !image) {
      return alert('Please enter title, text and choose an image.');
    }
    setLoading(true);

    try {
      const url = await handleImageUpload(image);
      await savePost(url);
      setTitle('');
      setText('');
      setImage(null);
      router.push('/competition/best-hotdog');
    } catch (err) {
      console.error(err);
      alert('😞 Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 p-8 border-2 border-pink-400 bg-gradient-to-br from-purple-800 via-pink-600 to-blue-500 rounded-2xl shadow-2xl text-green-200 font-semibold"
    >
      <h2 className="text-3xl mb-6 text-center font-extrabold tracking-widest uppercase">
        🌭 Retro-Futurystyczny Przepis na Hot-Doga
      </h2>

      <input
        type="text"
        placeholder="Tytuł Przepisu"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-4 px-4 py-2 border-2 border-green-400 bg-black bg-opacity-50 placeholder-green-300 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
      />

      <FileInput onImageReady={(file) => setImage(file)} />

      <textarea
        placeholder="Opowiedz światu o swoim szalonym hot-dogu..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-32 mt-4 px-4 py-2 border-2 border-green-400 bg-black bg-opacity-50 placeholder-green-300 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 resize-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full py-3 border-2 border-green-200 hover:border-green-400 rounded-xl text-xl font-bold tracking-wide transition-transform transform hover:scale-105"
      >
        {loading ? '🚀 Wysyłanie...' : '🚀 Zamieść przepis!'}
      </button>
    </form>
  );
};

export default PostForm;
