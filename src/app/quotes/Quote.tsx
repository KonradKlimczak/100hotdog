'use client';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

import { dislikeQuote, likeQuote, QuoteDocument } from '@/backend/quotes';
import { Button } from '@/components/Button';
import { DislikeButton } from '@/components/Interactions/Dislike';
import { LikeButton } from '@/components/Interactions/Like';

import { ContentWarning } from './Warning';

type QuoteProps = {
  quote: QuoteDocument;
};

export const Quote = (props: QuoteProps) => {
  const { quote } = props;

  const [open, setOpen] = useState(!quote.warning);
  const [warnings, setWarnings] = useState(quote.warning);
  const [likes, setLikes] = useState(quote.likes);
  const [dislikes, setDislikes] = useState(quote.dislikes);

  const handleClose = () => {
    setOpen(false);
  };

  if (warnings) {
    return (
      <ContentWarning
        onCancel={() => {
          setWarnings(false);
        }}
        onProceed={() => {
          setWarnings(false);
          setOpen(true);
        }}
      />
    );
  }

  return (
    <Dialog open={open}>
      <DialogTitle id="alert-dialog-title">Cytat</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <p dangerouslySetInnerHTML={{ __html: quote.content }} className="flex flex-col gap-2"></p>
          <p className="mt-2">- {quote.author}</p>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
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
      </DialogActions>
      <DialogActions>
        <Button onClick={handleClose} variant="primary" autoFocus>
          Zamknij
        </Button>
      </DialogActions>
    </Dialog>
  );
};
