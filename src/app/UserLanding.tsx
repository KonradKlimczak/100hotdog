import { User } from 'firebase/auth';
import Link from 'next/link';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Haiku } from '@/components/Haiku/Haiku';
import { HotdogProgress } from '@/components/HotdogProgress';
import { logout } from '@/services/user';

type UserLandingProps = {
  user: User;
};

export const UserLanding = (props: UserLandingProps) => {
  return (
    <Card>
      <div className="flex gap-1 flex-col text-2xl text-center">🌭 🌭 🌭 </div>
      <Link href="add-hotdog">
        <Button variant="primary">Zjadłem hotdoga</Button>
      </Link>

      <HotdogProgress />

      <Button variant="ghost" onClick={logout}>
        Wyloguj
      </Button>

      <Haiku />
    </Card>
  );
};
