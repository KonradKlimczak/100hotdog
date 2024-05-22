'use client';
import LunchDiningTwoToneIcon from '@mui/icons-material/LunchDiningTwoTone';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Drawer from '@mui/material/Drawer';
import Link from 'next/link';
import { useState } from 'react';

import { useUser } from '@/services/user';

import { Button } from '../Button';

export const Navbar = () => {
  const { user } = useUser();

  const [isOpen, setIsOpen] = useState(false);

  if (!user) {
    return null;
  }

  return (
    <>
      <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 opacity-95">
        <div className="flex justify-between items-center">
          <Link href="/">
            <p>{user.displayName}</p>
          </Link>
          <Button variant="ghost" onClick={() => setIsOpen(true)}>
            <LunchDiningTwoToneIcon />
          </Button>
        </div>
      </nav>
      <Drawer open={isOpen} anchor="right" onClose={() => setIsOpen(false)}>
        <div className="p-4 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 h-full flex flex-col gap-8 w-[100vw]">
          <div className="flex justify-between items-center">
            <p>Wyłącz</p>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              <PowerSettingsNewIcon />
            </Button>
          </div>
          <div className="flex flex-col items-stretch gap-4">
            <Link href="/" className="flex">
              <Button variant="primary" onClick={() => setIsOpen(false)} className="flex-1">
                Główna
              </Button>
            </Link>
            <Link href="/add-haiku" className="flex">
              <Button variant="primary" onClick={() => setIsOpen(false)} className="flex-1">
                Dodaj hotdogowe haiku
              </Button>
            </Link>
            <Link href="/haikus" className="flex">
              <Button variant="primary" onClick={() => setIsOpen(false)} className="flex-1">
                Haikus
              </Button>
            </Link>
            <Button variant="ghost">Ten button nic nie robi</Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};
