import { User } from 'firebase/auth';
import Link from 'next/link';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { FileInput } from '@/components/FileInput/FileInput';
import { Haiku } from '@/components/Haiku/Haiku';
import { HotdogProgress } from '@/components/HotdogProgress';
import { logout } from '@/services/user';
import { News } from '@/components/News/News';

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
          🌭101 hot dogów! - 17.08.2024🌭
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
