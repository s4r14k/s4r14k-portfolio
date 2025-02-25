'use client';

import { useState } from 'react';

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

export default function Navigation({ scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white dark:bg-black z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span className="text-xl font-bold">s4r14k</span>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="hover:text-blue-600 dark:hover:text-blue-400">Home</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-600 dark:hover:text-blue-400">Projects</button>
            <button onClick={() => scrollToSection('game-dev')} className="hover:text-blue-600 dark:hover:text-blue-400">Game Development</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-blue-600 dark:hover:text-blue-400">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 dark:hover:text-blue-400">Contact</button>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('hero')} className="hover:text-blue-600 dark:hover:text-blue-400">Home</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-blue-600 dark:hover:text-blue-400">Projects</button>
              <button onClick={() => scrollToSection('game-dev')} className="hover:text-blue-600 dark:hover:text-blue-400">Game Development</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-blue-600 dark:hover:text-blue-400">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 dark:hover:text-blue-400">Contact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}