'use client';

import Header from '@/components/Header';
import Content from '@/components/Content';
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
    <>
      <Header scrollToSection={scrollToSection} />
      <Content>
        <Hero />
        <GameDevelopment />
        <Skills />
        <Contact />
      </Content>
    </>
  );
}
