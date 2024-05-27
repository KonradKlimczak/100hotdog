'use client';

import FormGroup from '@mui/material/FormGroup';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { POSSIBLE_DATES, getSavedDates, saveDates } from '@/backend/dates';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { useUser } from '@/services/user';

import { CalendarCheckbox } from './CalendarCheckbox';

export default function EventDate() {
  const [checkedDates, setCheckedDates] = useState<Record<string, boolean>>({});

  const { user } = useUser();
  const router = useRouter();
  const handleSave = useCallback(() => {
    if (user?.uid) {
      saveDates(user.uid, checkedDates);
      router.push('/dates-saved');
    }
  }, [checkedDates, router, user?.uid]);

  useEffect(() => {
    if (user?.uid) {
      getSavedDates(user.uid).then(setCheckedDates);
    }
  }, [user?.uid]);

  return (
    <main className="p-4">
      <Card>
        Wybierz wszyszstkie daty które Ci pasują na termin Imprezy!
        <FormGroup className="text-white">
          {POSSIBLE_DATES.map((date) => (
            <CalendarCheckbox
              key={date}
              checked={checkedDates[date] ?? false}
              onChange={(_event, checked) => setCheckedDates((prev) => ({ ...prev, [date]: checked }))}
              label={date}
            />
          ))}
        </FormGroup>
        <FormGroup>
          <Button variant="primary" className="flex-1" onClick={handleSave}>
            Zapisz
          </Button>
        </FormGroup>
      </Card>
    </main>
  );
}
