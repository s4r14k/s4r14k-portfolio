'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import GameDevelopment from '@/components/GameDevelopment';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation scrollToSection={scrollToSection} />
      <Hero />
      <GameDevelopment />
      <Skills />
      <Contact />
    </div>
  );
}
