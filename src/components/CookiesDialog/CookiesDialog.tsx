'use client';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

import { Button } from '../Button';

export default function CookiesDialog() {
  const [open, setOpen] = useState(window.localStorage.getItem('cookies') ? false : true);

  const handleClose = () => {
    window.localStorage.setItem('cookies', 'seen');
    setOpen(false);
  };

  return (
    <Dialog open={open} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">Hotdogowe ciasteczka</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Nasza strona internetowa używa plików cookies w celu zapewnienia jak najlepszej jakości usług. Pliki cookies
          pozwalają nam na lepsze dostosowanie treści do Twoich potrzeb oraz na analizę ruchu na stronie. Korzystając z
          naszej witryny, wyrażasz zgodę na używanie plików cookies zgodnie z Polityką Prywatności. Możesz zmienić
          ustawienia dotyczące cookies w swojej przeglądarce internetowej w dowolnym momencie.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="primary" autoFocus>
          Zamknij
        </Button>
      </DialogActions>
    </Dialog>
  );
}
