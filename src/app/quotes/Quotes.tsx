'use client';
import { useEffect, useState } from 'react';

import { getQoutes, QuoteDocument } from '@/backend/quotes';

import { Quote } from './Quote';

export const QuotesList = () => {
  const [quotes, setQuotes] = useState<QuoteDocument[]>([]);

  useEffect(() => {
    getQoutes().then(setQuotes);
  }, []);

  return (
    <ul className="max-w-3xl mx-auto p-4 space-y-4">
      {quotes.map((quote) => (
        <Quote key={quote.id} quote={quote} />
      ))}
    </ul>
  );
};
