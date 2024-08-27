'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CookiesDialog from '@/components/CookiesDialog/CookiesDialog';
import { Loader } from '@/components/Loader';
import { useUser } from '@/services/user';

import { GuestLanding } from './GuestLanding';
import { UserLanding } from './UserLanding';
import Quotes from './quotes/Quotes';

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
      <Quotes />
      <main className="p-4">
        <CookiesDialog />
        {loading && <Loader>Sprawdzamy czy jestes zalogowany</Loader>}
        {!loading && !user && <GuestLanding />}
        {!loading && user && <UserLanding user={user} />}
      </main>
    </ThemeProvider>
  );
}
