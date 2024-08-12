'use client';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { Button } from '@/components/Button';
import { useState } from 'react';
import { Step2 } from './Step2';
import { Step1 } from './Step1';

type ContentWarningProps = {
  onProceed: () => void;
  onCancel: () => void;
};

export const ContentWarning = (props: ContentWarningProps) => {
  const { onCancel, onProceed } = props;

  const [step, setStep] = useState(1);

  if (step === 2) {
    return <Step2 onClose={onCancel} onNext={onProceed} />;
  }

  return <Step1 onClose={onCancel} onNext={() => setStep(2)} />;
};
