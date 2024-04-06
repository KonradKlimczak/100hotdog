import { HAIKUS } from './haikus';

export const getRandomHaiku = () => {
  return HAIKUS[Math.floor(Math.random() * HAIKUS.length)];
};
