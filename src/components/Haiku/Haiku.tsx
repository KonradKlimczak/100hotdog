import { getRandomHaiku } from './getRandomHaiku';

export const Haiku = () => {
  const haiku = getRandomHaiku();

  return (
    <div className="text-gray-600 text-[10px] text-center">
      <p>{haiku.firstLine}</p>
      <p>{haiku.secondLine}</p>
      <p>{haiku.thirdLine}</p>
    </div>
  );
};
