import { addDoc, collection, doc, getDoc, getDocs, setDoc, Timestamp, updateDoc } from 'firebase/firestore';

import { db } from '@/services/firebase';
import { getUserProfiles } from './profile';
import { sortByCreatedAt } from '@/helpers/date';

export type HaikuPoem = {
  lineOne: string;
  lineTwo: string;
  lineThree: string;
};

export type HaikuDoc = {
  id: string;
  authorUid: string;
  poem: HaikuPoem;
  createdAt?: Timestamp;
  likes?: number;
  dislikes?: number;
};

export type HaikuPost = Omit<HaikuDoc, 'createdAt'> & {
  createdAt?: Date;
  username: string;
};

export const addHaiku = async (authorUid: string, poem: HaikuPoem) => {
  const haiku: Omit<HaikuDoc, 'id'> = { authorUid, poem, createdAt: Timestamp.now() };

  const coll = collection(db, 'haikus');
  const result = await addDoc(coll, haiku);

  return result;
};

export const getHaikus = async (): Promise<HaikuPost[]> => {
  const coll = collection(db, 'haikus');

  const haikusSnapshot = await getDocs(coll);

  const haikus: HaikuDoc[] = [];

  haikusSnapshot.forEach((doc) => {
    haikus.push({ ...doc.data(), id: doc.id } as HaikuDoc);
  });

  const profileUids = haikus.map(({ authorUid }) => authorUid);
  const profiles = await getUserProfiles(profileUids);

  return sortByCreatedAt(
    haikus.map((haiku) => {
      const authorProfile = profiles.find((profile) => profile.uid === haiku.authorUid);

      return {
        ...haiku,
        createdAt: haiku.createdAt?.toDate(),
        username: authorProfile?.name ?? 'Tajemnicza parówa',
      };
    }),
  );
};

export const likeHaiku = async (haikuId: string, likes: number): Promise<void> => {
  const docRef = doc(db, 'haikus', haikuId);
  await updateDoc(docRef, {
    likes,
  });
};

export const dislikeHaiku = async (haikuId: string, dislikes: number): Promise<void> => {
  const docRef = doc(db, 'haikus', haikuId);
  await updateDoc(docRef, {
    dislikes,
  });
};
