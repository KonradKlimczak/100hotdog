'use client';
import './VisitCounter.css';

import { useEffect, useState } from 'react';

import { addVisit } from '@/backend/visit';

import { ErrorMessage } from '../ErrorMessage';
import { Loader } from '../Loader';
import { useVisitCounter } from './useVisitCounter';

export const VisitCounter = () => {
  const { count, loading, error } = useVisitCounter();
  const [displayCount, setDisplayCount] = useState(0);
  const [flipKey, setFlipKey] = useState(0);

  useEffect(() => {
    addVisit();
  }, []);

  useEffect(() => {
    setFlipKey((prevKey) => prevKey + 1);

    const timeout = setTimeout(() => {
      setDisplayCount(count);
    }, 300);

    return () => clearTimeout(timeout);
  }, [count]);

  return (
    <div className="bg-gray-200 p-4 border-4 border-dashed border-black mt-5 mx-auto w-max opacity-90">
      <div className="text-center">
        <h2 className="text-lg font-bold text-blue-600">Licznik Odwiedzin</h2>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {loading && <Loader>Pobieranie</Loader>}
        {!loading && !error && (
          <p key={flipKey} className="flip text-red-600 bg-yellow-300 p-2 mt-2 inline-block">
            {displayCount}
          </p>
        )}
      </div>
    </div>
  );
};
