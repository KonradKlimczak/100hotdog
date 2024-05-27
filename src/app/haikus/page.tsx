'use client';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { getHaikus, HaikuPost } from '@/backend/haiku';
import { Card } from '@/components/Card';

import { amaticSC } from '../ui/fonts';
import { formatDateToHHMMDDMMYYYY } from '@/helpers/date';

export default function HaikuList() {
  const [haikus, setHaikues] = useState<HaikuPost[]>([]);
  console.log('haikus', haikus);

  useEffect(() => {
    getHaikus().then(setHaikues);
  }, []);

  return (
    <main className="p-4 flex flex-col gap-5">
      {haikus.map(({ poem, username, createdAt }, index) => (
        <div
          key={index}
          className={clsx('flex flex-1', {
            'ml-10': index % 2 === 0,
            'mr-10': index % 2 === 1,
          })}
        >
          <Card className="flex-1 items-stretch">
            <div className="flex justify-between flex-col md:flex-row md:items-center">
              <div>{username}</div>
              {createdAt && <div className="text-xs italic text-right">{formatDateToHHMMDDMMYYYY(createdAt)}</div>}
            </div>

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
