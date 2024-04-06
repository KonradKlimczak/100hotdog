'use client';

import { signInWithGoogle } from '@/services/user';

import { Button } from '../Button';
import { LabeledInput } from '../Input/LabeledInput';
import { StyledLink } from '../Link';
import { LoginWrapper } from './LoginWrapper';

export const LoginForm = () => {
  return (
    <LoginWrapper>
      <LabeledInput label="E-mail" name="e-mail" type="email" />
      <LabeledInput label="Password" name="password" type="password" />
      <div className="flex flex-col gap-4">
        <Button variant="secondary" onClick={signInWithGoogle}>
          Zaloguj
        </Button>

        <p className="text-xs">
          <StyledLink href="create-user">
            Stworz konto
          </StyledLink>{' '}
          za pomocą e-maila i hasła
        </p>
      </div>
    </LoginWrapper>
  );
};
