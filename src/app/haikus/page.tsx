'use client';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { getHaikus, HaikuPost } from '@/backend/haiku';
import { Card } from '@/components/Card';

import { amaticSC } from '../ui/fonts';

export default function HaikuList() {
  const [haikus, setHaikues] = useState<HaikuPost[]>([]);

  useEffect(() => {
    getHaikus().then(setHaikues);
  }, []);

  return (
    <main className="p-4 flex flex-col gap-5">
      {haikus.map(({ poem, username }, index) => (
        <div
          key={index}
          className={clsx('flex flex-1', {
            'ml-10': index % 2 === 0,
            'mr-10': index % 2 === 1,
          })}
        >
          <Card className="flex-1 items-start">
            <div>{username}</div>
            <div className={`${amaticSC.className} text-xl text-white`}>
              <p>{poem.lineOne}</p>
              <p>{poem.lineTwo}</p>
              <p>{poem.lineThree}</p>
            </div>
          </Card>
        </div>
      ))}
    </main>
  );
}
