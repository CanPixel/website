
'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Project } from '@/data/projects';
import MusicProjectCard from './music-project-card';
import { ScrollArea } from './ui/scroll-area';

export default function OrchestratedOstSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const projectsCollection = collection(db, 'portfolioItems');
        const q = query(projectsCollection, where('type', '==', 'ost'));
        const projectSnapshot = await getDocs(q);
        const projectsList = projectSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data() as Omit<Project, 'id'>
        }));
        setProjects(projectsList);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) return <div className="text-center">Loading Orchestrated Game OSTs...</div>;
  if (error) return <div className="text-center text-destructive">Error: {error}</div>;

  return (
    <div className="relative rounded-lg border-2 border-primary p-8 pt-12">
        <h2 className="absolute -top-5 left-1/2 -translate-x-1/2 bg-background px-4 font-headline text-4xl font-bold tracking-tighter text-primary">
            Orchestrated Game OST
        </h2>
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Epic, atmospheric, and emotional scores for games.
        </p>
        
        {projects.length > 0 ? (
            <ScrollArea className="h-[40rem] rounded-md border p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                    <div key={project.id} className="flex justify-center">
                        <MusicProjectCard project={project} />
                    </div>
                    ))}
                </div>
            </ScrollArea>
        ) : (
            <p className="text-center text-muted-foreground">No Orchestrated OST projects found.</p>
        )}
    </div>
  );
}
