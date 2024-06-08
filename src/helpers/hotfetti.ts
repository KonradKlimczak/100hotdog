import confetti from 'canvas-confetti';

export const throwHogfetti = async () => {
  try {
    const shape = confetti.shapeFromText({ text: '🌭' });

    confetti({
      spread: 360,
      gravity: 1,
      decay: 0.96,
      origin: { y: 0.2 },
      startVelocity: 18,
      scalar: 2,
      zIndex: 9000,
      shapes: [shape],
      ticks: 400,
      flat: true,
    } as any);
  } catch (error) {
    console.error('Failed to load image', error);
  }
};
