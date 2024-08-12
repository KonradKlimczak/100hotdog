export function createIndexArray(n: number): number[] {
  if (n < 0) {
    throw new Error('The length of the array cannot be negative.');
  }
  return Array.from({ length: n }, (_, index) => index);
}

export function shuffleArray<T>(array: T[]): T[] {
  // Create a copy of the array to avoid mutating the original one
  const shuffledArray = array.slice();

  // Fisher-Yates Shuffle algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
  }

  return shuffledArray;
}
