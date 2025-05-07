'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CookiesDialog from '@/components/CookiesDialog/CookiesDialog';
import { SnailLoader } from '@/components/Loader/SnailLoader';
import { useUser } from '@/services/user';

import { GuestLanding } from './GuestLanding';
import { UserLanding } from './UserLanding';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Home() {
  const { loading, user } = useUser();
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main className="p-4">
        <CookiesDialog />
        {loading && <SnailLoader />}
        {!loading && !user && <GuestLanding />}
        {!loading && user && <UserLanding user={user} />}
      </main>
    </ThemeProvider>
  );
}
