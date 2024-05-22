import { doc, getDoc, setDoc } from 'firebase/firestore';

import { db } from '@/services/firebase';

interface UserProfile {
  uid: string;
  name: string;
}

export const updateUserProfile = async (uid: string, displayName: string | null) => {
  const userRef = doc(db, 'profiles', uid);

  const docSnap = await getDoc(userRef);

  if (!docSnap.exists()) {
    const userProfile: UserProfile = { uid, name: displayName ?? 'Anonymous' };
    await setDoc(doc(db, 'profiles', uid), userProfile);
  }
};

export const getUserProfiles = async (uids: string[]) => {
  const profilePromises = uids.map((uid) => getDoc(doc(db, 'profiles', uid)));
  const snapshots = await Promise.all(profilePromises);

  const profiles: UserProfile[] = [];

  snapshots.forEach((snapshot) => {
    const userData = snapshot.data();
    if (userData) {
      profiles.push(userData as UserProfile);
    }
  });

  return profiles;
};
