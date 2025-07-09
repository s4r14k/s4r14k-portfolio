'use client';

interface ContentProps {
  children: React.ReactNode;
}

export default function Content({ children }: ContentProps) {
  return (
    <main className="min-h-screen pt-16">
      {children}
    </main>
  );
}