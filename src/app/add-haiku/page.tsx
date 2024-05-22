'use client';
import Marquee from 'react-fast-marquee';

import { addHaiku, HaikuPoem } from '@/backend/haiku';
import { Card } from '@/components/Card';
import { Haiku } from '@/components/Haiku/Haiku';
import { HaikuForm } from '@/components/Haiku/HaikuForm';
import { StyledLink } from '@/components/Link';
import { useUser } from '@/services/user';

export default function AddHaiku() {
  const { user } = useUser();

  const handleAddHaiku = (poem: HaikuPoem) => {
    addHaiku(user?.uid ?? '', poem);
  };

  return (
    <main className="p-4">
      <Card>
        <div className="flex gap-1 flex-col">
          <Marquee className="text-gray-800 dark:text-white">🌭 Hotdog, jak wiersz -  prosty&nbsp;</Marquee>
        </div>
        <HaikuForm onSubmit={handleAddHaiku} />
        <StyledLink href="/">Wróć</StyledLink>
        <Haiku />
      </Card>
    </main>
  );
}
