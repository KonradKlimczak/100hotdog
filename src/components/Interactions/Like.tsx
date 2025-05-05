import { throwHogfetti } from '@/helpers/hotfetti';

import { Button } from '../Button';
import HotDogImage from './hot-dog.png';
import { IconsDuplicator } from './IconsDuplicator';

type LikeButtonProps = {
  likes: number;
  onClick: () => void;
};

export const LikeButton = (props: LikeButtonProps) => {
  const { likes, onClick } = props;

  const handleClick = () => {
    if (likes === 101) {
      throwHogfetti();
    }
    onClick();
  };
  const size = 32;

  return (
    <Button variant="secondary" className="flex gap-2 items-stretch flex-1" onClick={handleClick}>
      <div className="flex items-center text-[8px] font-extralight">{likes} Mniam</div>
      <IconsDuplicator times={likes} size={size} src="/hot-dog.png" />
    </Button>
  );
};
