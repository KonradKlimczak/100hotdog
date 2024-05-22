import Link from 'next/link';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';

export default function DatesSaved() {
  return (
    <main className="p-4">
      <Card>
        Daty zapisane, dzięki!
        <Link href="/" className="flex">
          <Button variant="primary" className="flex-1">
            Wróć
          </Button>
        </Link>
      </Card>
    </main>
  );
}
