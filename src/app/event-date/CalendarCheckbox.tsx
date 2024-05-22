'use client';

import EventAvailableTwoToneIcon from '@mui/icons-material/EventAvailableTwoTone';
import Checkbox from '@mui/material/Checkbox';
import { grey, pink } from '@mui/material/colors';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ChangeEvent } from 'react';

type CalendarCheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
};

export const CalendarCheckbox = (props: CalendarCheckboxProps) => {
  const { checked, label, onChange } = props;

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          checkedIcon={<EventAvailableTwoToneIcon />}
          sx={{
            color: grey[400],
            '&.Mui-checked': {
              color: pink[300],
            },
          }}
        />
      }
      sx={{
        color: checked ? pink[400] : grey[400],
        ':hover': {
          textDecoration: 'underline',
        },
      }}
      label={label}
    />
  );
};
