import { User } from 'firebase/auth';
import Link from 'next/link';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { FileInput } from '@/components/FileInput/FileInput';
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
      {/* <Link href="add-hotdog" className="flex">
        <Button variant="primary" className="flex-1">
          Zjadłem hotdoga
        </Button>
      </Link> */}

      <HotdogProgress />

      <Link href="event-date" className="flex">
        <Button variant="primary" className="flex-1">
          Daj znać jakie daty Ci pasują na 101 hotdogów!
        </Button>
      </Link>

      <Button variant="ghost" onClick={logout}>
        Wyloguj
      </Button>

      <Haiku />
    </Card>
  );
};
