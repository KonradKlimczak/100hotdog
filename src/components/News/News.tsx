import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ReactNode } from 'react';
import Marquee from 'react-fast-marquee';

import { Article } from './Article';
import { article102HotDogiTeaser, articleNowaDomena } from './articles';

const NewsTitle = (props: { children: string }) => <div className="text-white text-center">{props.children}</div>;
const NewsDate = (props: { children: string }) => <div className="text-[10px] text-right">{props.children}</div>;
const NewsContent = (props: { children: ReactNode }) => (
  <div className="flex flex-col gap-4 pt-1 whitespace-pre-line text-xs">{props.children}</div>
);

export const News = () => (
  <div className="py-4">
    <Article article={articleNowaDomena} />
    <Article
      article={article102HotDogiTeaser}
    />
    <div className="py-2">
      <div>
        <NewsTitle>Progi!</NewsTitle>
        <NewsDate>21.7.2024</NewsDate>
      </div>
      <NewsContent>
        <p>Najdrożsi Parówkożercy - zbiórka się rozpoczęła a wraz z nią zabawa!</p>
        <p>
          W tym roku chcemy, żebyście mogli poczuć prawdziwe hot dogowe emocje już teraz! Dlatego zachęcamy Was do
          wpłacania na zbiórkę i zdobywania nagród - zarówno w kategoriach indywidualnych, jak i grupowych!
        </p>

        <p>
          Link do zbiórki:{' '}
          <a className="underline text-cyan-300" target="_blank" href="https://pomagamy.pah.org.pl/team/101-hot-dogow">
            pomagamy.pah.org.pl/101-hot-dogow
          </a>
        </p>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
            👉 Zasady zabawy
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              <ListItem>
                1. Każdy próg można osiągnąć tylko raz (jak wpłacisz 3 x 100 zł to wciąż masz jednego Pina).
              </ListItem>
              <ListItem>
                2. Jeżeli przekroczysz próg - to go osiągnąłeś, czyli wpłacając 250 zł osiągasz nagrodę za 200 zł
              </ListItem>
              <ListItem>
                3. Progi się sumują! Więc jeżeli wpłacisz 10 zł, potem 30 zł, a na koniec 160 zł to łącznie osiągnąłeś
                próg 200 zł.
              </ListItem>
              <ListItem>4. Osiągając wyższy próg zdobywasz wszystkie nagrody z niższych progów!</ListItem>
              <ListItem>5. Jeżeli się nie podpiszesz to musisz udowodnić, że to Twoja wpłata 🤨</ListItem>
              <ListItem>
                6. Zabawa z progami kończy się przed imprezą, czyli 16.08.2024! (W czasie imprezy będziemy mieli inne
                atrakcje!)
              </ListItem>
              <ListItem>
                7. Nie trzeba być na imprezie, żeby wpłacać i osiągać progi! Wszystkich zapraszamy do zabawy 😊
              </ListItem>
              <ListItem>
                8. Jeżeli jakiś próg osiągniecie w ostatnim momencie, to możliwe, że nagrody dotrą do Ciebie już po
                imprezie ;){' '}
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <p>
          👉 CO MOZESZ WYGRAĆ?
          <List dense>
            <ListItem>🌭 10 zł - naklejka z logo 100 hot dogów (dla pierwszych 50 osób)</ListItem>
            <ListItem>🌭 100 zł - pin ze 101 hot dogów! (dla pierwszych 30 osób)</ListItem>
            <ListItem>🌭 200 zł - wychodząc z imprezy dostaniesz hot doga na wynos (dla pierwszych 10 osób)</ListItem>
            <ListItem>🌭 300 zł - Twój cytat pojawi się na stronie 100 hot dogow (Bez limitu!)</ListItem>
            <ListItem>
              🌭 500 zł - Oficjalny dyplom z podziękowaniami za bycie Bardzo Chojną Parówą (dla pierwszych 5 osób)
            </ListItem>
            <ListItem>
              🌭 1000 zł - możesz wymyślić konkurs na następną edycje imprezy! (dla pierwszych 3 osób)
            </ListItem>
            <ListItem>
              🌭 Najwyższa wpłata - możesz pomalować twarz Konradowi na imprezie i będzie tak ją prowadził (Dla jednego
              darczyńcy)
            </ListItem>
          </List>
        </p>

        <p>
          Wygrywać można wspólnymi siłami! Praca grupowa jest w cenie - jeżeli wszystkie Wasze wpłaty osiagną łącznie
          dany poziom to możecie wygrać wszyscy! Tutaj również czas na wpłaty macie do 16.08.2024 i również wpłacać mogą
          wszyscy - nie tylko osoby, które będą na imprezie 😊
        </p>

        <p>
          👉 PROGI GRUPOWE
          <List dense>
            <ListItem>
              🌭 3000 zł - na imprezę kupujemy maszynę, która obraca automatycznie parówki, co wprowadza prestiż i lans
              na tą, i każda następną, edycje imprezy!
            </ListItem>
            <ListItem>
              🌭 6000 zł - na 102hotdogów powstanie specjalna hotdogowa gierka, w którą będziecie mogli grać na swoich
              telefonach!{' '}
            </ListItem>
            <ListItem>
              🌭 8000 zł - na imprezie gramy w znaną grę dla całej rodziny: &quot;Na ilu nogach stoisz?&quot;
            </ListItem>
            <ListItem>🌭 10 000 zł - Konrad goli się na łyso przed imprezą! </ListItem>
          </List>
        </p>
      </NewsContent>
    </div>
    <div className="py-2">
      <div>
        <NewsTitle>Zbiórka Imprezowa na 101 HOT DOGÓW Oficjalnie Rozpoczęta!</NewsTitle>
        <NewsDate>19.7.2024</NewsDate>
      </div>
      <NewsContent>
        <p>
          Hej, hotdogowi zapaleńcy! Z radością ogłaszamy, że nasza długo oczekiwana zbiórka na PAH właśnie wystartowała!
          W tym roku podczas naszej imprezy 101 HOT DOGÓW zbieramy środki na pomoc natychmiastową dla ofiar wojen i
          katastrof naturalnych. Wyobraźcie sobie – 101 hot dogów i wsparcie dla potrzebujących w jednym!{' '}
          <p className=" inline text-white">To jest coś, co nie tylko syci brzuchy, ale i serca.</p>
        </p>

        <p>
          Nie czekajcie, dołączcie do naszej zbiórki już teraz na{' '}
          <a className="underline text-cyan-300" target="_blank" href="https://pomagamy.pah.org.pl/team/101-hot-dogow">
            pomagamy.pah.org.pl/101-hot-dogow
          </a>
          ! Pamiętajcie, każda złotówka się liczy – a my obiecujemy, że podczas imprezy hot dogi będą tak pyszne, że
          warto będzie czekać. Pomagajmy razem!
        </p>
      </NewsContent>
    </div>
  </div>
);
