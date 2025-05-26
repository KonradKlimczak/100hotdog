import { Article } from './Article';
import { article102HotDogiTeaser, articleDataUjawniona, articleNowaDomena } from './articles';

export const News = () => (
  <div className="py-4">
    <Article article={articleDataUjawniona} />
    <Article article={articleNowaDomena} />
    <Article article={article102HotDogiTeaser} />
  </div>
);
