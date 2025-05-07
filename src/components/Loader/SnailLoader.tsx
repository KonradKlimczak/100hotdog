export const SnailLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100 animate-pulse">
      <div className="text-6xl animate-spin-slow">🐌</div>
      <p className="mt-4 text-xl font-bold text-pink-700 animate-wiggle">Loading... eventually.</p>
      <p className="text-sm text-gray-600 animate-bounce mt-2">Please wait while the snail finishes its coffee ☕</p>
    </div>
  );
};
