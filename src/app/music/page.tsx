
"use client";

import { useState, useEffect } from "react";
import { type Project } from "@/data/projects";
import dynamic from 'next/dynamic';

const MidiSection = dynamic(() => import('@/components/MidiSection'), {
  loading: () => <p>Loading MIDI projects...</p>,
  ssr: false
});


export default function MusicPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  return (
    <div className="container mx-auto px-4 py-16 bg-background">
      <header className="text-center mb-6">
        <h1 className="font-headline text-5xl font-bold tracking-tighter mb-4">
          Music & Sound
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A collection of my compositions, sound design, and other audio adventures.
        </p>
      </header>

      <MidiSection />
    </div>
  );
}
