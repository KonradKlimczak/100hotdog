'use client';
import { useCallback, useState } from 'react';

import { createInWithEmail } from '@/services/user';

import { Button } from '../Button';
import { LabeledInput } from '../Input/LabeledInput';
import { LoginWrapper } from './LoginWrapper';

export const CreateUserForm = () => {
  const [usename, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(() => {
    createInWithEmail(usename, email, password);
  }, [usename, email, password]);

  return (
    <LoginWrapper>
      <div className="flex flex-col gap-2">
        <LabeledInput
          label="Nazwa użytkownika"
          name="e-mail"
          type="text"
          autoComplete="username"
          value={usename}
          onChange={(e) => setUsername(e.target.value)}
        />
        <LabeledInput
          label="E-mail"
          name="e-mail"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LabeledInput
          label="Hasło"
          name="password"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LabeledInput
          label="Nie ufamy Ci że umiesz dobrze wpisać hasło dlatego proszę wpisz je jeszcze raz (nie sprawdzamy czy są takie same, po prostu sobie poćwicz)"
          name="password"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button variant="primary" onClick={handleSubmit}>
          Stworz konto
        </Button>
      </div>
    </LoginWrapper>
  );
};
