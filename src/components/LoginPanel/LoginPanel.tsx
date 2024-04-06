import Marquee from 'react-fast-marquee';

import { Card } from '../Card';
import { LoginForm } from './LoginForm';

export const LoginPanel = () => {
  return (
    <Card className="flex gap-4 flex-col text-gray-400">
      <div className="flex gap-1 flex-col">
        <Marquee className="text-2xl font-bold text-gray-800 dark:text-white">
          🌭 🌭 🌭 sto jeden marzeń 🌭 🌭 🌭&nbsp;
        </Marquee>

        <p className="text-sm">
          sto jeden przygód, sto jeden pragnień, sto jeden wspomnień do stworzenia
        </p>
      </div>
      <LoginForm />
      <div className="text-gray-600 text-[10px]">
        <p>Na ulicy dym,</p>
        <p>Kiełbaska w bułce - smak lata.</p>
        <p>Hotdog: szczęyście w rękach.</p>
      </div>
    </Card>
  );
};
