import { User } from 'firebase/auth';
import Link from 'next/link';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Haiku } from '@/components/Haiku/Haiku';
import { News } from '@/components/News/News';
import { logout } from '@/services/user';

type UserLandingProps = {
  user: User;
};

export const UserLanding = (props: UserLandingProps) => {
  return (
    <Card>
      {/* <Link href="add-hotdog" className="flex">
        <Button variant="primary" className="flex-1">
          Zjadłem hotdoga
        </Button>
      </Link> */}

      <Link href="about" className="flex">
        <Button variant="primary" className="flex-1">
          🌭102 hot dogi! - ??.08.2025🌭
        </Button>
      </Link>

      <News />

      {/* <HotdogProgress /> */}

      <Button variant="ghost" onClick={logout}>
        Wyloguj
      </Button>

      <Haiku />
    </Card>
  );
};
