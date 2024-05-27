'use client';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { useEffect, useMemo, useState } from 'react';
import Chip from '@mui/material/Chip';

import { getVotes, ProfileVotes } from '@/backend/dates';
import { Card } from '@/components/Card';

export default function VotesList() {
  const [votes, setVotes] = useState<ProfileVotes[]>([]);

  useEffect(() => {
    getVotes().then(setVotes);
  }, []);

  const winning = useMemo(
    () =>
      votes.reduce<Record<string, number>>((acc, vote) => {
        const { records } = vote;
        for (let date in records) {
          if (records[date]) {
            if (!acc[date]) {
              acc[date] = 1;
            } else {
              acc[date] += 1;
            }
          }
        }

        return acc;
      }, {}),
    [votes],
  );

  return (
    <main className="p-4 flex flex-col gap-4">
      <Card>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {Object.entries(winning)
            .sort((a, b) => b[1] - a[1])
            .map(([date, votes], index) => (
              <ListItem key={date}>
                <ListItemAvatar>
                  <Avatar>{index + 1}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={date} secondary={`${votes} głosów`} />
              </ListItem>
            ))}
        </List>
      </Card>
      {votes.map((vote) => (
        <Card key={vote.uid}>
          <div>{vote.username}</div>
          <div className="flex flex-wrap gap-2">
            {sortDates(Object.keys(vote.records).filter((date) => vote.records[date])).map((date) => (
              <Chip key={date} label={date} color="success" />
            ))}
          </div>
        </Card>
      ))}
    </main>
  );
}
function sortDates(dates: string[]): string[] {
  return dates.sort((a, b) => {
    const [dayA, monthA, yearA] = a.split('.').map(Number);
    const [dayB, monthB, yearB] = b.split('.').map(Number);

    if (yearA !== yearB) {
      return yearA - yearB;
    } else if (monthA !== monthB) {
      return monthA - monthB;
    } else {
      return dayA - dayB;
    }
  });
}
