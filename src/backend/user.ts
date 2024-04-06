import { doc, getDoc, setDoc } from 'firebase/firestore';

import { db } from '@/services/firebase';

interface UserProfile {
  uid: string;
  name: string;
}

export const updateUserProfile = async (uid: string, displayName: string | null) => {
  const userRef = doc(db, 'users', uid);

  const docSnap = await getDoc(userRef);

  if (!docSnap.exists()) {
    const userProfile: UserProfile = { uid, name: displayName ?? 'Anonymous' };
    await setDoc(doc(db, 'users', uid), userProfile);
  }
};
