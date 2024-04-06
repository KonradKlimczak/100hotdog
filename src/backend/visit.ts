import { addDoc, collection, getCountFromServer } from 'firebase/firestore';

import { db } from '@/services/firebase';

export const addVisit = async (userId: string | null = null) => {
  const coll = collection(db, 'visits');

  try {
    const result = await addDoc(coll, { userId });

    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getVisitsCount = async () => {
  const coll = collection(db, 'visits');

  const snapshot = await getCountFromServer(coll);

  return snapshot.data().count;
};
