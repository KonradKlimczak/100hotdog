import Link from 'next/link';
import Marquee from 'react-fast-marquee';

import { Card } from '@/components/Card';
import { Haiku } from '@/components/Haiku/Haiku';
import { CreateUserForm } from '@/components/LoginPanel/CreateUserForm';

export default function CreateUser() {
  return (
    <main className="p-4">
      <Card className="flex gap-4 flex-col text-gray-400">
        <div className="flex gap-1 flex-col">
          <Link href="/">
            <Marquee className="text-2xl font-bold text-gray-800 dark:text-white">
              🌭 🌭 🌭 sto jeden marzeń 🌭 🌭 🌭&nbsp;
            </Marquee>
          </Link>

          <p className="text-sm">sto jeden przygód, sto jeden pragnień, sto jeden wspomnień do stworzenia</p>
        </div>
        <CreateUserForm />
        <Haiku />
      </Card>
    </main>
  );
}
