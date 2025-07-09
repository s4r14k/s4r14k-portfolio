'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

export default function Navigation({ scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const handleNavigation = (id: string) => {
    if (isHomePage) {
      scrollToSection(id);
    } else {
      // If not on the home page, navigate to the home page with hash
      window.location.href = `/#${id}`;
    }
  };

  return (
    <nav className="fixed w-full bg-white dark:bg-black z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center text-xl font-bold">
            <Image src="/logo.png" alt="Logo" width={30} height={30} className="mr-2" />
            s4r14k
          </Link>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => handleNavigation('hero')} className="hover:text-blue-600 dark:hover:text-blue-400">Home</button>
            <button onClick={() => handleNavigation('game-dev')} className="hover:text-blue-600 dark:hover:text-blue-400">Game Development</button>
            <button onClick={() => handleNavigation('skills')} className="hover:text-blue-600 dark:hover:text-blue-400">Skills</button>
            <button onClick={() => handleNavigation('contact')} className="hover:text-blue-600 dark:hover:text-blue-400">Contact</button>
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
              <button onClick={() => handleNavigation('hero')} className="hover:text-blue-600 dark:hover:text-blue-400">Home</button>
              <button onClick={() => handleNavigation('projects')} className="hover:text-blue-600 dark:hover:text-blue-400">Projects</button>
              <button onClick={() => handleNavigation('game-dev')} className="hover:text-blue-600 dark:hover:text-blue-400">Game Development</button>
              <button onClick={() => handleNavigation('skills')} className="hover:text-blue-600 dark:hover:text-blue-400">Skills</button>
              <button onClick={() => handleNavigation('contact')} className="hover:text-blue-600 dark:hover:text-blue-400">Contact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
