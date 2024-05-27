import { addDoc, collection, doc, getDoc, getDocs, setDoc, Timestamp } from 'firebase/firestore';

import { db } from '@/services/firebase';
import { getUserProfiles } from './profile';
import { sortByCreatedAt } from '@/helpers/date';

export type HaikuPoem = {
  lineOne: string;
  lineTwo: string;
  lineThree: string;
};

export type HaikuDoc = {
  authorUid: string;
  poem: HaikuPoem;
  createdAt?: Timestamp;
};

export type HaikuPost = Omit<HaikuDoc, 'createdAt'> & {
  createdAt?: Date;
  username: string;
};

export const addHaiku = async (authorUid: string, poem: HaikuPoem) => {
  const haiku: HaikuDoc = { authorUid, poem, createdAt: Timestamp.now() };

  const coll = collection(db, 'haikus');
  const result = await addDoc(coll, haiku);

  return result;
};

export const getHaikus = async (): Promise<HaikuPost[]> => {
  const coll = collection(db, 'haikus');

  const haikusSnapshot = await getDocs(coll);

  const haikus: HaikuDoc[] = [];

  haikusSnapshot.forEach((doc) => {
    haikus.push(doc.data() as HaikuDoc);
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
