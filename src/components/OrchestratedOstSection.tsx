
'use client';

import { useState, useEffect } from 'react';
import { Project } from '@/data/projects';
import MidiWidget from "./midi-widget";
// import MusicProjectCard from './music-project-card';

export default function OrchestratedOstSection() {
  return (
    <div className="relative rounded-lg border-2 border-primary p-8 pt-12">
        <h2 className="absolute -top-5 left-1/2 -translate-x-1/2 bg-background px-4 font-headline text-2xl font-bold tracking-tighter text-primary">
          Orchestrated OST [Epicinium]
        </h2>
        <p className="text-center text-sm text-muted-foreground max-w-3xl mx-auto mb-6 mt-4">
      Orchestral OST for the game Epicinium. <br></br>Chronologically features the four in-game seasons, composed into one musical movement.
        </p>
        <p className="text-center mb-4 text-sm text-muted-foreground">
        Arranged by Can Ur & Daan Mulder<br></br>
Composed, Mixed & Mastered by Can Ur<br></br>
Copyright 2025
        </p>
        
        <div className="h-[40rem] rounded-md border p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex justify-center">
                {/* <MidiWidget project={project}/> */}
              </div>
            </div>
        </div>
    </div>
  );
}
