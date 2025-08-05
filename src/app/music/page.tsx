
"use client";

import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Music, Headphones, User, Users, Pyramid } from 'lucide-react';
import NavMenu from '@/components/navigation';

const MidiSection = dynamic(() => import('@/components/MidiSection'), {
  loading: () => <div className="mt-6 text-center">Loading MIDI projects...</div>,
  ssr: false
});

const NemsisSection = dynamic(() => import('@/components/NemsisSection'), {
  loading: () => <div className="mt-6 text-center">Loading NEMSIS projects...</div>,
  ssr: false
});

const ZiggurathSection = dynamic(() => import('@/components/ZiggurathSection'), {
  loading: () => <div className="mt-6 text-center">Loading ZIGGURATH projects...</div>,
  ssr: false
});

const CannemenSection = dynamic(() => import('@/components/CannemenSection'), {
  loading: () => <div className="mt-6 text-center">Loading CANNEMEN projects...</div>,
  ssr: false
});

const OrchestratedOstSection = dynamic(() => import('@/components/OrchestratedOstSection'), {
  loading: () => <div className="mt-6 text-center">Loading Orchestrated OSTs...</div>,
  ssr: false
});

const sections = [
  { id: 'midi', name: 'MIDI Sorcery', icon: Pyramid },
  { id: 'orchestrated-ost', name: 'Orchestrated Game OST', icon: Headphones },
  { id: 'cannemen', name: 'CANNEMEN (Solo)', icon: User },
  { id: 'nemsis', name: 'NEMSIS (Band)', icon: Users },
  { id: 'ziggurath', name: 'ZIGGURATH (Band)', icon: Music },
];

export default function MusicPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-background">
      <NavMenu />
      <header className="text-center my-12">
        <h1 className="font-headline text-5xl font-bold tracking-tighter mb-4">
          Music & Sound
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A collection of my compositions, sound design, and other audio adventures.
        </p>
      </header>

      <div className="sticky top-20 z-40 bg-background/80 backdrop-blur-md py-4 mb-8 flex flex-wrap justify-center gap-4 rounded-lg border">
          {sections.map(section => (
            <Button key={section.id} onClick={() => scrollToSection(section.id)} variant="ghost" className="group">
                <section.icon className="mr-2 h-5 w-5 text-primary transition-colors group-hover:text-accent" />
                {section.name}
            </Button>
          ))}
      </div>

      <div className="space-y-16">
        <section id="midi">
            <MidiSection />
        </section>
        <section id="orchestrated-ost">
            <OrchestratedOstSection />
        </section>
        <section id="cannemen">
            <CannemenSection />
        </section>
        <section id="nemsis">
            <NemsisSection />
        </section>
        <section id="ziggurath">
            <ZiggurathSection />
        </section>
      </div>
    </div>
  );
}
