import { Card } from '@/components/Card';
import { News } from '@/components/News/News';

export default function Home() {
  return (
    <main className="p-4">
      <Card>
        <News />
      </Card>
    </main>
  );
}
