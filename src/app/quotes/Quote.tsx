'use client';
import { useState } from 'react';

import { dislikeQuote, likeQuote, QuoteDocument } from '@/backend/quotes';
import { DislikeButton } from '@/components/Interactions/Dislike';
import { LikeButton } from '@/components/Interactions/Like';

import { ContentWarning } from './Warning';

type QuoteProps = {
  quote: QuoteDocument;
};

export const Quote = ({ quote }: QuoteProps) => {
  const [likes, setLikes] = useState(quote.likes);
  const [dislikes, setDislikes] = useState(quote.dislikes);

  return (
    <li className="bg-yellow-100 border-4 border-black rounded-lg p-4 shadow-md m-4 font-mono text-sm">
      <div className="mb-2">
        <div className="whitespace-pre-line text-black" dangerouslySetInnerHTML={{ __html: quote.content }} />
        <p className="mt-2 text-right text-gray-700">- {quote.author}</p>
      </div>
      <div className="flex justify-between gap-2">
        <LikeButton
          likes={likes}
          onClick={() => {
            likeQuote(quote.id, likes + 1);
            setLikes(likes + 1);
          }}
        />
        <DislikeButton
          dislikes={dislikes}
          onClick={() => {
            dislikeQuote(quote.id, dislikes + 1);
            setDislikes(dislikes + 1);
          }}
        />
      </div>
    </li>
  );
};
