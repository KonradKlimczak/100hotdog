'use client';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { Button } from '@/components/Button';

type Step1Props = {
  onNext: () => void;
  onClose: () => void;
};

export const Step1 = (props: Step1Props) => {
  const { onClose, onNext } = props;

  return (
    <Dialog open>
      <DialogTitle id="alert-dialog-title">Uwaga!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <div
            style={{
              border: '2px solid red',
              padding: 20,
            }}
          >
            <h1>Ostrzeżenie przed niewłaściwymi treściami</h1>
            <p>
              Przed przystąpieniem do korzystania z tej strony należy pamiętać, że mogą na niej występować treści, które
              mogą być uznane za niewłaściwe, nieodpowiednie lub potencjalnie szkodliwe dla niektórych użytkowników.
              Poniżej znajduje się lista możliwych typów niewłaściwych treści:
            </p>
            <ul>
              <li>
                <strong>Przemoc:</strong> Treści zawierające sceny brutalne, akty przemocy fizycznej, psychicznej lub
                słownej, a także promujące agresywne zachowania.
              </li>
              <li>
                <strong>Treści seksualne:</strong> Materiały o charakterze erotycznym, pornograficznym, zawierające
                sugestywne obrazy, opisy lub insynuacje o charakterze seksualnym.
              </li>
              <li>
                <strong>Wulgarność:</strong> Używanie wulgarnego języka, obraźliwych lub niecenzuralnych wyrażeń.
              </li>
              <li>
                <strong>Dyskryminacja:</strong> Treści promujące nienawiść, uprzedzenia lub dyskryminację na tle
                rasowym, etnicznym, religijnym, płciowym, orientacji seksualnej lub z innych powodów.
              </li>
              <li>
                <strong>Treści obraźliwe:</strong> Komentarze, obrazy lub inne materiały, które mogą być uznane za
                obraźliwe, zniesławiające lub szkodzące dobremu imieniu innych osób.
              </li>
              <li>
                <strong>Narkotyki i substancje psychoaktywne:</strong> Materiały promujące lub przedstawiające używanie
                narkotyków, alkoholu, papierosów lub innych substancji psychoaktywnych.
              </li>
              <li>
                <strong>Treści nieodpowiednie dla dzieci:</strong> Materiały, które mogą być szczególnie nieodpowiednie
                lub szkodliwe dla osób niepełnoletnich.
              </li>
              <li>
                <strong>Dezinformacja:</strong> Fałszywe informacje, teorie spiskowe, treści wprowadzające w błąd lub
                promujące niezweryfikowane teorie.
              </li>
              <li>
                <strong>Samookaleczenie i samobójstwo:</strong> Treści dotyczące lub zachęcające do samookaleczenia,
                samobójstwa, zaburzeń odżywiania lub innych destrukcyjnych zachowań.
              </li>
            </ul>
            <p>
              Prosimy o ostrożność i rozwagę podczas korzystania z treści tej strony. Jeśli jesteś wrażliwy na
              którykolwiek z wymienionych tematów, rozważ rezygnację z dalszego przeglądania tej strony lub skonsultuj
              się z odpowiednią osobą dorosłą.
            </p>
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onNext} variant="ghost" className='text-xs'>
          Tak, chcę zobaczyć te treści
        </Button>
        <Button onClick={onClose} variant="primary" autoFocus>
          Nie chcę tego zobaczyć.
        </Button>
      </DialogActions>
    </Dialog>
  );
};
