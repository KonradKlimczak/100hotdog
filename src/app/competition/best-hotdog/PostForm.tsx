// src/components/PostForm.tsx
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { FormEvent, useState } from 'react';

import { db, storage } from '@/services/firebase';
import ImageInput from './FileInput';

const PostForm: React.FC = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!text || !image) return alert('Please enter text and choose an image.');

    const imageRef = ref(storage, `images/${Date.now()}-${image.name}`);
    await uploadBytes(imageRef, image);
    const imageUrl = await getDownloadURL(imageRef);

    await addDoc(collection(db, 'posts'), {
      text,
      imageUrl,
      createdAt: Timestamp.now(),
    });

    setText('');
    setImage(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-6 p-6 border-4 border-pink-500 bg-yellow-100 font-mono text-black shadow-lg"
    >
      <h2 className="text-2xl mb-4 text-center font-bold text-fuchsia-700">
        🌭 Add a Hotdog Recipe!
      </h2>

      <textarea
        placeholder="Tell the world about your outrageous hotdog creation..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-32 px-3 py-2 border-2 border-fuchsia-500 bg-white mb-4 text-lg placeholder-pink-400 resize-none"
      />

      <ImageInput onImageReady={(file) => setImage(file)} />

      <button
        type="submit"
        className="mt-6 w-full bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 border-2 border-black"
      >
        🚀 Post Recipe
      </button>
    </form>
  );
};

export default PostForm;