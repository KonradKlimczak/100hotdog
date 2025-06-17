'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { Button } from '@/components/Button';

import PostList from './PostList';

const App: React.FC = () => {
  const pathname = usePathname();
  return (
    <div>
      <Link href={`${pathname}/add`} className="flex">
        <Button variant="primary" className="flex-1">
          Dodaj Przepis
        </Button>
      </Link>
      <PostList />
    </div>
  );
};

export default App;
