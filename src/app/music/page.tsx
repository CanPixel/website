"use client";

import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Music, Headphones, User, Users, Pyramid } from 'lucide-react';
import NavMenu from '@/components/navigation';
import NemsisSection from '@/components/NemsisSection';
import ZiggurathSection from '@/components/ZiggurathSection';
import CannemenSection from '@/components/CannemenSection';
import OrchestratedOstSection from '@/components/OrchestratedOstSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

      <Tabs defaultValue="ziggurath" className="w-full">
        <TabsList className="py-4 mb-8 flex flex-wrap justify-center gap-4 rounded-lg border h-auto">
            {sections.map(section => (
              <TabsTrigger
                key={section.id}
                value={section.id}
                className="group text-gold-500 border-gold-700/50 hover:bg-gold-500/10 hover:border-gold-600 hover:text-gold-400 data-[state=active]:bg-gold-500/10 data-[state=active]:text-gold-300"
              >
                  <section.icon className="mr-2 h-5 w-5 text-gold-400 transition-colors group-hover:text-gold-300" />
                  {section.name}
              </TabsTrigger>
            ))}
        </TabsList>

        <TabsContent value="ziggurath">
          <ZiggurathSection />
        </TabsContent>
        <TabsContent value="midi">
          <MidiSection />
        </TabsContent>
        <TabsContent value="orchestrated-ost">
          <OrchestratedOstSection />
        </TabsContent>
        <TabsContent value="cannemen">
          <CannemenSection />
        </TabsContent>
        <TabsContent value="nemsis">
          <NemsisSection />
        </TabsContent>
      </Tabs>
    </div>
  );
}
