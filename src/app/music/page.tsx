
"use client";

import dynamic from 'next/dynamic';
import { Music, Headphones, User, Users, Pyramid } from 'lucide-react';
import NavMenu from '@/components/navigation';
import ZiggurathSection from '@/components/ZiggurathSection';
import CannemenSection from '@/components/CannemenSection';
import OrchestratedOstSection from '@/components/OrchestratedOstSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from 'react';
import { motion } from 'framer-motion';
import NemsisSection from '@/components/NemsisSection';

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
  const [activeTab, setActiveTab] = useState(sections[0].id);

  return (
    <div className="container mx-auto px-4 py-16 bg-background">
      <NavMenu />
      <header className="text-center my-12">
        <h1 className="font-headline text-5xl font-bold tracking-tighter mb-4 bg-gradient-to-br from-primary via-[#C494B3] to-primary bg-clip-text text-transparent">
          Muse
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A collection of my compositions, sound design, and other audio adventures.
        </p>
      </header>

      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-8">
             <TabsList className="relative p-2 h-auto flex-wrap rounded-xl bg-black/50 backdrop-blur-sm border border-gold-500/30">
                {sections.map(section => (
                <TabsTrigger
                    key={section.id}
                    value={section.id}
                    className="relative z-10 group text-gold-500 border-transparent hover:text-gold-300 data-[state=active]:text-gold-200 transition-colors duration-300 px-4 py-2"
                    style={{ WebkitTapHighlightColor: "transparent" }}
                >
                    {activeTab === section.id && (
                        <motion.div
                            layoutId="active-pill"
                            className="absolute inset-0 z-0 bg-gold-500/10 rounded-lg"
                            transition={{ type: "spring", duration: 0.6 }}
                        />
                    )}
                    <section.icon className="mr-2 h-5 w-5 text-gold-400 transition-colors group-hover:text-gold-300" />
                    <span className="relative">{section.name}</span>
                </TabsTrigger>
                ))}
            </TabsList>
        </div>


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
