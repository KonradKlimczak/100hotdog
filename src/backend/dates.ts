import { doc, getDoc, setDoc } from 'firebase/firestore';

import { db } from '@/services/firebase';

export const saveDates = async (uid: string, records: Record<string, boolean>) => {
  const userDates = { uid, records };
  await setDoc(doc(db, 'dates', uid), userDates);
};

export const getSavedDates = async (uid: string) => {
  const userDates = await getDoc(doc(db, 'dates', uid));

  return userDates.data()?.records ?? {};
};
