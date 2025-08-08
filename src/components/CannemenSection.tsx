
'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Project } from '@/data/projects';
import MusicProjectCard from './music-project-card';
import { ScrollArea } from './ui/scroll-area';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Youtube } from 'lucide-react';

const youtubeVideos = [
    {
        id: 'jD05zQk3628',
        title: 'What if DOOM... was Lofi?',
    },
    {
        id: 'soEyE3K0Ie4',
        title: 'What if Dark Souls... was Lofi?',
    }
]

export default function CannemenSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const projectsCollection = collection(db, 'portfolioItems');
        const q = query(projectsCollection, where('type', '==', 'solo-music'));
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


  return (
    <div className="relative rounded-lg border-2 border-sky-500 p-8 pt-12">
        <h2 className="absolute -top-5 left-1/2 -translate-x-1/2 bg-background px-4 font-headline text-4xl font-bold tracking-tighter text-sky-400">
            CANNEMEN
        </h2>
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            A showcase of my solo work, featuring a blend of electronic and acoustic elements.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
                <h3 className="font-headline text-2xl font-bold mb-4 text-center text-sky-400">Audio Projects</h3>
                {loading && <div className="text-center">Loading solo projects...</div>}
                {error && <div className="text-center text-destructive">Error: {error}</div>}
                {!loading && !error && (
                    projects.length > 0 ? (
                        <ScrollArea className="h-[40rem] rounded-md border border-sky-500/30 p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {projects.map((project) => (
                                <div key={project.id} className="flex justify-center">
                                    <MusicProjectCard project={project} />
                                </div>
                                ))}
                            </div>
                        </ScrollArea>
                    ) : (
                        <p className="text-center text-muted-foreground mt-16">No solo projects found yet.</p>
                    )
                )}
            </div>
            <div>
                <h3 className="font-headline text-2xl font-bold mb-4 text-center text-sky-400">Video Features</h3>
                <div className="space-y-6">
                   {youtubeVideos.map(video => (
                     <Card key={video.id} className="bg-card/50 border-sky-500/30">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <Youtube className="w-6 h-6 text-red-500"/>
                                {video.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="aspect-video rounded-md overflow-hidden">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </CardContent>
                     </Card>
                   ))}
                </div>
            </div>
        </div>
    </div>
  );
}
