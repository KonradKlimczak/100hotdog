'use client';

import { updateUserProfile } from '@/backend/profile';
import { Card } from '@/components/Card';
import { LabeledInput } from '@/components/Input/LabeledInput';
import { Loader } from '@/components/Loader';
import { useUser } from '@/services/user';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';

export default function Profile() {
  const [username, setUsername] = useState('');

  const router = useRouter();
  const { loading, profile } = useUser();

  useEffect(() => {
    setUsername(profile?.name ?? '');
  }, [profile?.name]);

  const saveProfile = () => {
    if (profile?.uid) {
      updateUserProfile(profile?.uid, username);
      router.push('/');
    }
  };

  if (loading) {
    return <Loader>Ładowanie użytkownia</Loader>;
  }

  if (!profile) {
    return <div>musisz sie zalogowac</div>;
  }

  return (
    <main className="p-4">
      <Card>
        <h1>Edytuj profil</h1>

        <LabeledInput
          label="Nazwa użytklownika"
          name="e-mail"
          type="text"
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Button variant="primary" onClick={saveProfile}>
          Zapisz
        </Button>
      </Card>
    </main>
  );
}
