import { addDoc, collection, doc, getDocs, updateDoc } from 'firebase/firestore';

import { shuffleArray } from '@/helpers/array';
import { db } from '@/services/firebase';

export type QuoteDocument = {
  id: string;
  author: string;
  content: string;
  likes: number;
  dislikes: number;
  warning?: boolean;
};

export const addQuote = async () => {
  const coll = collection(db, 'quotes');
  const result = await addDoc(coll, {
    author: 'MG',
    content: `
Czy 2916 jest ready na qa? jak tak to wrzucimy?
To nie jest moja wiadomość dla świata jakby co 😜
Ah jestes AFK
to luz
    `,
    likes: 0,
    dislikes: 0,
  });

  return result;
};

export const getQoutes = async (): Promise<QuoteDocument[]> => {
  const coll = collection(db, 'quotes');

  const quotesSnapshot = await getDocs(coll);

  const quotes: QuoteDocument[] = [];

  quotesSnapshot.forEach((doc) => {
    quotes.push({ ...doc.data(), id: doc.id } as QuoteDocument);
  });

  return shuffleArray(quotes);
};

export const likeQuote = async (haikuId: string, likes: number): Promise<void> => {
  const docRef = doc(db, 'quotes', haikuId);
  await updateDoc(docRef, {
    likes,
  });
};

export const dislikeQuote = async (haikuId: string, dislikes: number): Promise<void> => {
  const docRef = doc(db, 'quotes', haikuId);
  await updateDoc(docRef, {
    dislikes,
  });
};
