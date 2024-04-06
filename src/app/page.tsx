'use client';

import { Loader } from '@/components/Loader';
import { useUser } from '@/services/user';

import { GuestLanding } from './GuestLanding';
import { UserLanding } from './UserLanding';

export default function Home() {
  const { loading, user } = useUser();
  return (
    <main className="p-4">
      {loading && <Loader>Sprawdzamy czy jestes zalogowany</Loader>}
      {!loading && !user && <GuestLanding />}
      {!loading && user && <UserLanding user={user} />}
    </main>
  );
}
