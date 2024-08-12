'use client';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

import { Button } from '@/components/Button';
import { LabeledInput } from '@/components/Input/LabeledInput';

type Step2Props = {
  onNext: () => void;
  onClose: () => void;
};

export const Step2 = (props: Step2Props) => {
  const { onClose, onNext } = props;

  const [validationText, setValidationText] = useState('');

  return (
    <Dialog open>
      <DialogTitle id="alert-dialog-title">Uwaga!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Jeśli jesteś na 100% przekonany że chcesz to zobaczyć przepisz: &quot;Tak, chcę zobaczyć nieodpowiednie treści bez cenzury&quot;
        </DialogContentText>
        <LabeledInput
          label=""
          name="validation-input"
          type="text"
          value={validationText}
          onChange={(e) => setValidationText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button disabled={validationText !== "Tak, chcę zobaczyć nieodpowiednie treści bez cenzury"} onClick={onNext} variant="ghost" className='text-xs'>
          Tak, chcę zobaczyć te treści
        </Button>
        <Button onClick={onClose} variant="primary" autoFocus>
          Nie chcę tego zobaczyć.
        </Button>
      </DialogActions>
    </Dialog>
  );
};
