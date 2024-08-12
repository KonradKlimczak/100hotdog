import { PostItem } from '@/backend/post';
import { Post } from '@/components/Post';

const posts: PostItem[] = [
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
