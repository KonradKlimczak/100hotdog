import Marquee from 'react-fast-marquee';
import { Button } from '../Button';
import { Card } from '../Card';

export const LoginPanel = () => {
  return (
    <Card className="flex gap-4 flex-col">
      <div className="flex gap-1 flex-col">
        <Marquee className="text-2xl font-bold text-gray-800 dark:text-white">
          🌭 🌭 🌭 sto jeden marzeń 🌭 🌭 🌭&nbsp;
        </Marquee>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          sto jeden przygód, sto jeden pragnień, sto jeden wspomnień do stworzenia
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Button variant="primary">Zaloguj Gmailem</Button>
        <Button variant="primary">Zaloguj Facebookiem</Button>
        <Button variant="secondary">Wejdz bez logowania</Button>
        <Button variant="ghost">Ten button nic nie robi</Button>
      </div>
      <div className="text-gray-600 text-[10px]">
        <p>Na ulicy dym,</p>
        <p>Kiełbaska w bułce - smak lata.</p>
        <p>Hotdog: szczęyście w rękach.</p>
      </div>
    </Card>
  );
};
