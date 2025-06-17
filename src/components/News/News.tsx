import { Article } from './Article';
import { article102HotDogiTeaser, articleDataUjawniona, articleKonkursHotDog, articleNowaDomena, articleProgiNagrod102HotDogi, articleZbiorkaStart } from './articles';

export const News = () => (
  <div className="py-4">
    <Article article={articleProgiNagrod102HotDogi} />
    <Article article={articleKonkursHotDog} />
    <Article article={articleZbiorkaStart} />
    <Article article={articleDataUjawniona} />
    <Article article={articleNowaDomena} />
    <Article article={article102HotDogiTeaser} />
  </div>
);
