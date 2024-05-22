import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

import { updateUserProfile } from '@/backend/profile';
import { auth } from '@/services/firebase';

const google = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, google).then((credential) => {
    updateUserProfile(credential.user.uid, credential.user.displayName);
  });
};

export const createInWithEmail = (displayName: string, email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password).then((credential) => {
    signInWithEmailAndPassword(auth, email, password).then(() => {
      updateUserProfile(credential.user.uid, displayName);
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
};
