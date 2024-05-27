import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

import { db } from '@/services/firebase';

export interface UserProfile {
  uid: string;
  name: string;
}

export const getUserProfile = async (uid: string) => {
  const userRef = doc(db, 'profiles', uid);

  const docSnap = await getDoc(userRef);

  return docSnap.data() as UserProfile;
};

export const createUserProfile = async (uid: string, displayName: string | null) => {
  const userRef = doc(db, 'profiles', uid);

  const docSnap = await getDoc(userRef);

  if (!docSnap.exists()) {
    const userProfile: UserProfile = { uid, name: displayName ?? 'Anonymous' };
    await setDoc(doc(db, 'profiles', uid), userProfile);
  }
};

export const updateUserProfile = async (uid: string, displayName: string) => {
  const profileRef = doc(db, 'profiles', uid);

  const userProfile = { uid, name: displayName };
  await updateDoc(profileRef, userProfile);
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
