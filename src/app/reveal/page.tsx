'use client';
import React, { useState, useEffect } from 'react';

/**
 * RetroAbsurdHotdogCountdown
 * A full-screen absurd hotdog countdown from May 16–18, 2025,
 * using deterministic “random” emojis for eaten buns and a Pac-Man marker!
 */
const START_DATE = new Date("2025-05-16 8:00:00");
const TARGET_DATE = new Date("2025-05-16 18:00:00");
const TOTAL_HOTDOGS = 30000;
// milliseconds between each hotdog
const INTERVAL_MS = (TARGET_DATE.getTime() - START_DATE.getTime()) / TOTAL_HOTDOGS;

console.log(INTERVAL_MS)

// Pool of eaten-bun emojis
const eatenEmojis = ['😋','😁','🫡','😮','😫','😴','🫠','🙃','😖','🤯','🥵','😵','🥴','😇','🤡'];
const Pacman = '🟡'; // Pac-Man marker

// 32-bit integer hash for deterministic "randomness"
function hash32(x: number): number {
  x = ((x >>> 16) ^ x) * 0x45d9f3b;
  x = ((x >>> 16) ^ x) * 0x45d9f3b;
  x = (x >>> 16) ^ x;
  return x >>> 0;
}

const RetroAbsurdHotdogCountdown: React.FC = () => {
  const [hotdogsLeft, setHotdogsLeft] = useState<number>(TOTAL_HOTDOGS);

  useEffect(() => {
    // Initialize based on current time
    const now = Date.now();
    const elapsed = now - START_DATE.getTime();
    let eaten = Math.floor(elapsed / INTERVAL_MS);
    if (eaten < 0) eaten = 0;
    if (eaten > TOTAL_HOTDOGS) eaten = TOTAL_HOTDOGS;
    setHotdogsLeft(TOTAL_HOTDOGS - eaten);

    // Eat one hotdog per interval
    const timer = setInterval(() => {
      setHotdogsLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  const eatenCount = TOTAL_HOTDOGS - hotdogsLeft;

  return (
    <div className="w-screen h-screen bg-black text-yellow-300 p-2 font-mono overflow-auto">
      <div className="flex flex-col items-center justify-start min-h-full">
        <h1 className="text-4xl md:text-5xl text-green-400 uppercase mb-4 drop-shadow-lg">
          🌭🚀 HOTDOG TIMEWARP 🚀🌭
        </h1>

        <div className="w-full flex flex-wrap justify-center leading-none text-xs">
          {Array.from({ length: TOTAL_HOTDOGS }, (_, j) => {
            if (j < eatenCount) {
              // Deterministically pick an emoji based on index
              const idx = hash32(j) % eatenEmojis.length;
              return (
                <span key={j} >
                  {eatenEmojis[idx]}
                </span>
              );
            }
            if (j === eatenCount) {
              return (
                <span key={j} >
                  {Pacman}
                </span>
              );
            }
            return (
              <span key={j} >
                🌭
              </span>
            );
          })}
        </div>

        <p className="mt-6 text-center italic text-sm text-pink-500 animate-bounce px-4">
          From {START_DATE.toLocaleString()} to {TARGET_DATE.toLocaleString()}
        </p>
        <p className="text-center text-xs text-green-300 mt-2">
          Full-screen mobile-ready madness—one hotdog every ~{(INTERVAL_MS / 1000).toFixed(1)}s! 🌐📱
        </p>
      </div>
    </div>
  );
};

export default RetroAbsurdHotdogCountdown;
