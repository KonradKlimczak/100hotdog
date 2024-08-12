import { PostItem } from '@/backend/post';

type PostProps = {
  post: PostItem;
};

export const Post = (props: PostProps) => {
  const { post } = props;
  return (
    <div className="bg-purple-600 text-white p-4 shadow-lg mb-4 flex flex-col items-center">
      <img src={post.imageUrl} alt="Post" className="max-w-full rounded-md mb-3" />
      <p>{post.content}</p>
      <p>{post.content}</p>
      <div className="flex mt-3 space-x-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Mniam mniam</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Kaszana</button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Komentuj</button>
      </div>
    </div>
  );
};
