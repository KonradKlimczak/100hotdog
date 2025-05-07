import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

import { createUserProfile, getUserProfile, UserProfile } from '@/backend/profile';
import { auth } from '@/services/firebase';

const google = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, google).then((credential) => {
    createUserProfile(credential.user.uid, credential.user.displayName);
  });
};

export const createInWithEmail = (displayName: string, email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password).then((credential) => {
    signInWithEmailAndPassword(auth, email, password).then(() => {
      createUserProfile(credential.user.uid, displayName);
    });
  });
};

export const signInWithEmail = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  signOut(auth);
};

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        getUserProfile(currentUser.uid).then((currentProfile) => {
          setProfile(currentProfile);
          setLoading(false);
        });
      } else {
        setLoading(false);
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return { profile, user, loading };
};
