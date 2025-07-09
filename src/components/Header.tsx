'use client';

import Navigation from './Navigation';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  return (
    <header className="w-full">
      <Navigation scrollToSection={scrollToSection} />
    </header>
  );
}