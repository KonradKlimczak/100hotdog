export function createIndexArray(n: number): number[] {
  if (n < 0) {
    throw new Error('The length of the array cannot be negative.');
  }
  return Array.from({ length: n }, (_, index) => index);
}
