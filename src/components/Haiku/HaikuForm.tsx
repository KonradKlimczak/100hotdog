'use client';
import { FormEvent, useState } from 'react';

import { HaikuPoem } from '@/backend/haiku';

import { Button } from '../Button';

type HaikuFormProps = {
  onSubmit: (poem: HaikuPoem) => void;
};

export const HaikuForm = (props: HaikuFormProps) => {
  const { onSubmit } = props;
  const [lineOne, setLineOne] = useState('');
  const [lineTwo, setLineTwo] = useState('');
  const [lineThree, setLineThree] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit({ lineOne, lineTwo, lineThree });
    // Add logic to send this data to a server or another part of your application
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center p-4 space-y-4">
      <h1 className="text-lg font-bold text-white">Dodaj haiku</h1>
      <input
        type="text"
        value={lineOne}
        onChange={(e) => setLineOne(e.target.value)}
        placeholder="5 sylab"
        className="w-full p-2 text-black border border-purple-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-900"
      />
      <input
        type="text"
        value={lineTwo}
        onChange={(e) => setLineTwo(e.target.value)}
        placeholder="7 sylab"
        className="w-full p-2 text-black border border-purple-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-900"
      />
      <input
        type="text"
        value={lineThree}
        onChange={(e) => setLineThree(e.target.value)}
        placeholder="5 sylab"
        className="w-full p-2 text-black border border-purple-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-900"
      />
      <Button type="submit" variant="primary">
        Wyślij haiku
      </Button>
    </form>
  );
};
