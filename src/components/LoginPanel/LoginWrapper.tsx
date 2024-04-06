'use client';
import { ReactNode } from 'react';

import { signInWithGoogle } from '@/services/user';

import { Button } from '../Button';

type LoginWrapperProps = {
  children: ReactNode;
};

export const LoginWrapper = (props: LoginWrapperProps) => {
  const { children } = props;

  return (
    <div className="flex flex-col gap-2">
      {children}
      <hr />
      <Button variant="primary" onClick={signInWithGoogle}>
        Zaloguj Gmailem
      </Button>
      <Button variant="ghost">Ten button nic nie robi</Button>
    </div>
  );
};
