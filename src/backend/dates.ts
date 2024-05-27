import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';

import { db } from '@/services/firebase';
import { getUserProfiles } from './profile';

export const POSSIBLE_DATES = [
  '20.07.2024',
  '27.07.2024',
  '03.08.2024',
  '10.08.2024',
  '17.08.2024',
  '24.08.2024',
  '31.08.2024',
];

export type UserVotes = {
  uid: string;
  records: Record<string, boolean>;
};

export type ProfileVotes = UserVotes & {
  username: string;
};

export const saveDates = async (uid: string, records: Record<string, boolean>) => {
  const userDates: UserVotes = { uid, records };
  await setDoc(doc(db, 'dates', uid), userDates);
};

export const getSavedDates = async (uid: string) => {
  const userDates = await getDoc(doc(db, 'dates', uid));

  return userDates.data()?.records ?? {};
};

export const getVotes = async (): Promise<ProfileVotes[]> => {
  const coll = collection(db, 'dates');

  const haikusSnapshot = await getDocs(coll);

  const votes: UserVotes[] = [];

  haikusSnapshot.forEach((doc) => {
    votes.push(doc.data() as UserVotes);
  });

  const profileUids = votes.map(({ uid }) => uid);
  const profiles = await getUserProfiles(profileUids);

  return votes.map((vote) => {
    const authorProfile = profiles.find((profile) => profile.uid === vote.uid);

    return {
      ...vote,
      username: authorProfile?.name ?? vote.uid,
    };
  });
};
