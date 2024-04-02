import { Button } from '@/components/Button';
import { Card } from '@/components/Card';

export default function ButtonDemo() {
  return (
    <main className="p-4">
      <Card>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Vintage Card Title</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          This is a vintage card component created using Tailwind CSS and React.
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </Card>
    </main>
  );
}
