import Marquee from 'react-fast-marquee';

import { Card } from '@/components/Card';
import { Haiku } from '@/components/Haiku/Haiku';
import { LoginForm } from '@/components/LoginPanel/LoginForm';

export const GuestLanding = () => {
  return (
    <Card className="flex gap-4 flex-col text-gray-400">
      <div className="flex gap-1 flex-col">
        <Marquee className="text-2xl font-bold text-gray-800 dark:text-white">
          🌭 🌭 🌭 sto jeden marzeń 🌭 🌭 🌭&nbsp;
        </Marquee>

        <p className="text-sm">sto jeden przygód, sto jeden pragnień, sto jeden wspomnień do stworzenia</p>
      </div>
      <LoginForm />

      <Haiku />
    </Card>
  );
};
