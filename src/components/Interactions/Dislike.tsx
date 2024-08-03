import { throwHogfetti } from '@/helpers/hotfetti';

import { Button } from '../Button';
import { IconsDuplicator } from './IconsDuplicator';

type LikeButtonProps = {
  dislikes: number;
  onClick: () => void;
};

export const DislikeButton = (props: LikeButtonProps) => {
  const { dislikes: likes, onClick } = props;

  const handleClick = () => {
    if (likes === 100) {
      throwHogfetti();
    }
    onClick();
  };
  const size = 32;

  return (
    <Button variant="primary" className="flex gap-2 items-stretch flex-1" onClick={handleClick}>
      <IconsDuplicator times={likes} size={size} src="/blood-sausage.png" />
      <div className="flex items-center text-[8px] font-extralight">{likes} Kaszana</div>
    </Button>
  );
};
