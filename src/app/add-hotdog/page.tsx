'use client';
import Marquee from 'react-fast-marquee';

import { Card } from '@/components/Card';
import { FileInput } from '@/components/FileInput/FileInput';
import { Haiku } from '@/components/Haiku/Haiku';
import { StyledLink } from '@/components/Link';

export default function AddHotdog() {
  return (
    <main className="p-4">
      <Card>
        <div className="flex gap-1 flex-col">
          <Marquee className="text-gray-800 dark:text-white">Dobra robota!</Marquee>
        </div>
        <FileInput />
        Ćwicz dalej, to już niedługo
        <StyledLink href="/">Wróć</StyledLink>
        <Haiku />
      </Card>
    </main>
  );
}
