'use client';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Card, CardContent, Collapse, Link, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';

const theme = createTheme({
  typography: {
    fontFamily: 'Press Start 2P, Arial, sans-serif',
  },
});

const CollapsibleSection = ({ title, children, defaultExpanded = false }: any) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div>
      <Typography
        variant="h6"
        onClick={() => setExpanded(!expanded)}
        style={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          color: '#FFFFFF',
          backgroundColor: '#3F51B5',
          padding: '8px',
          borderRadius: '4px',
          margin: '8px 0',
        }}
      >
        {expanded ? <ExpandLess /> : <ExpandMore />} {title}
      </Typography>
      <Collapse in={expanded}>
        <div>{children}</div>
      </Collapse>
    </div>
  );
};

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <Card style={{ margin: '16px', padding: '16px', backgroundColor: '#FFC107', borderRadius: '16px' }}>
        <CardContent>
          <Typography variant="body1" paragraph style={{ color: '#333333' }}>
            Dołącz do nas na wyjątkowej imprezie charytatywnej –{' '}
            <Link href="https://102hotdogi.pl" target="_blank" rel="noopener noreferrer" style={{ color: '#D32F2F' }}>
              102 HOT DOGI
            </Link>
            ! Razem zbierzemy trochę pieniędzy na szczytny cel i zjemy 102 hot dogi! Impreza odbędzie się 23 sierpnia
            (jeśli będzie bardzo zła pogoda to 30 sierpnia – tydzień później) 2025 roku na działce letniskowej w
            Popowie, pod adresem Popów 1K, 99-235 Popów.
          </Typography>

          <CollapsibleSection title="Cel Imprezy">
            <Typography variant="body1" paragraph style={{ color: '#333333' }}>
              Jak co roku, zbieramy środki na szczytny cel. Organizacja, którą wesprzemy w tym roku, zostanie ogłoszona
              wkrótce. Wasza hojność i wsparcie będą miały ogromne znaczenie dla potrzebujących!
            </Typography>
          </CollapsibleSection>

          <CollapsibleSection title="Atrakcje">
            <Typography variant="body1" paragraph style={{ color: '#333333' }}>
              Podczas imprezy czeka na Was mnóstwo atrakcji, w tym konkursy z niespodziankami, w których będzie można
              wygrać wspaniałe trofea – więcej ujawnimy z czasem! Ale uczestnicy poprzedniej edycji wiedzą, że jest na
              co czekać! Przygotowaliśmy również różnorodne gry i zabawy, które umilą Wam czas.
            </Typography>
          </CollapsibleSection>

          <CollapsibleSection title="Jedzenie i napoje">
            <Typography variant="body1" paragraph style={{ color: '#333333' }}>
              Główną atrakcją kulinarną będą oczywiście hotdogi, ale nie zabraknie również innych przekąsek, napojów
              oraz alkoholu dla dorosłych.
            </Typography>
          </CollapsibleSection>

          <CollapsibleSection title="Udział">
            <Typography variant="body1" paragraph style={{ color: '#333333' }}>
              Udział w imprezie jest darmowy, jednak gorąco zachęcamy wszystkich uczestników do wsparcia naszej zbiórki
              charytatywnej. Zapisy odbywają się poprzez naszą stronę internetową{' '}
              <Link
                href="https://102hotdogi.pl"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#D32F2F' }}
              >
                102hotdogi.pl
              </Link>
              .
            </Typography>
          </CollapsibleSection>

          <CollapsibleSection title="Dodatkowe informacje">
            <Typography variant="body1" paragraph style={{ color: '#333333' }}>
              Impreza odbędzie się na świeżym powietrzu, więc prosimy o odpowiednie przygotowanie się do warunków
              pogodowych. Przynieście ze sobą dobry humor i chęć do zabawy!
            </Typography>
          </CollapsibleSection>

          <Typography variant="body1" style={{ marginTop: '16px', color: '#333333' }}>
            Do zobaczenia 23 sierpnia w Popowie! Razem możemy zrobić coś wspaniałego!
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
