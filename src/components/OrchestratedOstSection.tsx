
'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Project } from '@/data/projects';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';

export default function OrchestratedOstSection() {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const projectsCollection = collection(db, 'portfolioItems');
        const q = query(projectsCollection, where('id', '==', 'epicinium-ost'));
        const projectSnapshot = await getDocs(q);
        
        if (!projectSnapshot.empty) {
          const projectData = projectSnapshot.docs[0].data() as Omit<Project, 'id'>;
          setProject({ id: projectSnapshot.docs[0].id, ...projectData, styling: {} as any });
        } else {
          setError("Epicinium OST project not found.");
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, []);

  const spotifyUrl = "https://open.spotify.com/embed/album/0p6mrosDOt4F3gCoa4F4Xh?utm_source=generator";

  return (
    <div className="relative rounded-lg border-2 border-emerald-600 p-8 pt-12 bg-background/80">
      <h2 className="absolute -top-5 left-1/2 -translate-x-1/2 bg-background px-4 font-headline text-3xl font-bold tracking-tighter text-emerald-500">
          Orchestrated OST
      </h2>
      <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
          Epicinium - A Strategy Game About The Environment
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-emerald-600/30">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl text-emerald-400">Listen on Spotify</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                        <iframe data-testid="embed-iframe" src={spotifyUrl} width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                </CardContent>
            </Card>
          <Card className="mt-8 bg-card/50 backdrop-blur-sm border-emerald-600/30">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-emerald-400">About the Soundtrack</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                The orchestral soundtrack for the nature-based strategy game Epicinium. The music chronologically features the four in-game seasons—Spring, Summer, Autumn, and Winter—composed into a single, evolving musical movement. The compositions reflect the game's core themes of environmental impact and the cyclical nature of life and decay.
                <br/><br/>
                Arranged by Can Ur & Daan Mulder. Composed, Mixed & Mastered by Can Ur.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="bg-card/50 backdrop-blur-sm border-emerald-600/30">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-emerald-400">Game Visuals</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              {['epicinium1.jpg', 'epicinium2.jpg', 'epicinium3.jpg', 'epicinium4.jpg'].map((img, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden group">
                  <Image
                    src={`/images/epicinium/${img}`}
                    alt={`Epicinium game visual ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
