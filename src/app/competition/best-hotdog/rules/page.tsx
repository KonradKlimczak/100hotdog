import { Card } from '@/components/Card';
import { Article } from '@/components/News/Article';
import { articleKonkursHotDog } from '@/components/News/articles';

const CompetitionRules = () => (
  <main className="p-4">
    <Card>
      <div className="py-4">
        <Article article={articleKonkursHotDog} />
      </div>
    </Card>
  </main>
);

export default CompetitionRules;
