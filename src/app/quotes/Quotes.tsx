'use client';
import { useEffect, useState } from 'react';

import { getQoutes, QuoteDocument } from '@/backend/quotes';

import { Quote } from './Quote';

export default function Quotes() {
  const [quotes, setQuotes] = useState<QuoteDocument[]>([]);

  useEffect(() => {
    getQoutes().then(setQuotes);
  }, []);

  return quotes.map((quote) => <Quote key={quote.id} quote={quote} />);
}
