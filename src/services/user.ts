import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

import { updateUserProfile } from '@/backend/user';
import { auth } from '@/services/firebase';

const google = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, google).then((credential) => {
    updateUserProfile(credential.user.uid, credential.user.displayName);
  });
};

export const createInWithEmail = (displayName: string, email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password).then((credential) => {
    updateUserProfile(credential.user.uid, displayName);
  });
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
