
"use client";

import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Music, Headphones, User, Users, Pyramid } from 'lucide-react';
import NavMenu from '@/components/navigation';
import NemsisSection from '@/components/NemsisSection'; 
import ZiggurathSection from '@/components/ZiggurathSection'; 
import CannemenSection from '@/components/CannemenSection'; 
import OrchestratedOstSection from '@/components/OrchestratedOstSection'; 

const MidiSection = dynamic(() => import('@/components/MidiSection'), {
  loading: () => <div className="mt-6 text-center">Loading MIDI projects...</div>,
  ssr: false
});

const sections = [
  { id: 'ziggurath', name: 'ZIGGURATH (Band)', icon: Music },
  { id: 'midi', name: 'MIDI Sorcery', icon: Pyramid },
  { id: 'orchestrated-ost', name: 'Orchestrated Game OST', icon: Headphones },
  { id: 'cannemen', name: 'CANNEMEN (Solo)', icon: User },
  { id: 'nemsis', name: 'NEMSIS (Band)', icon: Users },
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

      <div className="py-4 mb-8 flex flex-wrap justify-center gap-4 rounded-lg border">
          {sections.map(section => (
            <Button 
              key={section.id} 
              onClick={() => scrollToSection(section.id)} 
              variant="outline" 
              className="group text-gold-500 border-gold-700/50 hover:bg-gold-500/10 hover:border-gold-600 hover:text-gold-400"
            >
                <section.icon className="mr-2 h-5 w-5 text-gold-400 transition-colors group-hover:text-gold-300" />
                {section.name}
            </Button>
          ))}
      </div>

      <div className="space-y-16">
        <section id="ziggurath">
            <ZiggurathSection />
        </section>
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
      </div>
    </div>
  );
}
