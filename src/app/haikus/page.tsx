'use client';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { getHaikus, HaikuPost, likeHaiku } from '@/backend/haiku';
import { Card } from '@/components/Card';

import { amaticSC } from '../ui/fonts';
import { formatDateToHHMMDDMMYYYY } from '@/helpers/date';
import { LikeButton } from '@/components/Interactions/Like';
import { DislikeButton } from '@/components/Interactions/Dislike';

export default function HaikuList() {
  const [haikus, setHaikues] = useState<HaikuPost[]>([]);
  console.log('haikus', haikus);

  useEffect(() => {
    getHaikus().then(setHaikues);
  }, []);

  return (
    <main className="p-4 flex flex-col gap-5">
      {haikus.map(({ poem, username, createdAt, id, likes, dislikes }, index) => (
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
            <div className="flex justify-between gap-2">
              <LikeButton
                likes={likes ?? 0}
                onClick={() => {
                  likeHaiku(id, (likes ?? 0) + 1);
                  setHaikues((prev) =>
                    prev.map((h) => {
                      if (h.id === id) {
                        return { ...h, likes: (h.likes ?? 0) + 1 };
                      }
                      return h;
                    }),
                  );
                }}
              />
              <DislikeButton
                dislikes={dislikes ?? 0}
                onClick={() => {
                  likeHaiku(id, (dislikes ?? 0) + 1);
                  setHaikues((prev) =>
                    prev.map((h) => {
                      if (h.id === id) {
                        return { ...h, dislikes: (h.dislikes ?? 0) + 1 };
                      }
                      return h;
                    }),
                  );
                }}
              />
            </div>
          </Card>
        </div>
      ))}
    </main>
  );
}
