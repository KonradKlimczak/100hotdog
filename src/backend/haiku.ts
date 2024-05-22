import { addDoc, collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';

import { db } from '@/services/firebase';
import { getUserProfiles } from './profile';

export type HaikuPoem = {
  lineOne: string;
  lineTwo: string;
  lineThree: string;
};

export type HaikuEntry = {
  authorUid: string;
  poem: HaikuPoem;
};

export type HaikuPost = HaikuEntry & {
  username: string;
};

export const addHaiku = async (authorUid: string, poem: HaikuPoem) => {
  const haiku: HaikuEntry = { authorUid, poem };

  const coll = collection(db, 'haikus');
  const result = await addDoc(coll, haiku);

  return result;
};

export const getHaikus = async (): Promise<HaikuPost[]> => {
  const coll = collection(db, 'haikus');

  const haikusSnapshot = await getDocs(coll);

  const haikus: HaikuEntry[] = [];

  haikusSnapshot.forEach((doc) => {
    haikus.push(doc.data() as HaikuEntry);
  });

  const profileUids = haikus.map(({ authorUid }) => authorUid);
  const profiles = await getUserProfiles(profileUids);

  return haikus.map((haiku) => {
    const authorProfile = profiles.find((profile) => profile.uid === haiku.authorUid);

    return {
      ...haiku,
      username: authorProfile?.name ?? 'Tajemnicza parówa',
    };
  });
};
