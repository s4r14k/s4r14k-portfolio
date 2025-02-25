'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-center text-center px-4 pt-16 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      <div className="space-y-6 relative z-[2] animate-fadeIn">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-white">
          Hi, I'm <span className="text-blue-400">s4r14k</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl">
          A passionate software developer and game developer focused on creating elegant solutions
        </p>
      </div>

      <div className="absolute bottom-8 z-[2] animate-fadeInDelayed">
        <ChevronDownIcon className="h-8 w-8 text-white animate-bounce" />
      </div>
    </section>
  );
}