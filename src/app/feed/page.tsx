import { PostEntry } from '@/backend/post';
import { Post } from '@/components/Post';

const posts: PostEntry[] = [
  {
    id: '1',
    content: 'This is my first post.',
    userId: '1',
    imageUrl: 'https://source.unsplash.com/random/800x600',
  },
  {
    id: '2',
    content: 'This is my SECOND post.',
    userId: '1',
    imageUrl: 'https://source.unsplash.com/random/800x600',
  },
];

export default function Feed() {
  return (
    <main className="max-w-md mx-auto">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  );
}
