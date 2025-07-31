'use client';

import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { db } from '@/lib/firebase';
import { projects } from '@/data/projects';
import type { Project } from '@/data/projects';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<Project | null | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      // First, check the static projects
      const staticProject = projects.find((p) => p.id === params.id);
      if (staticProject) {
        setProject(staticProject);
        setLoading(false);
        return;
      }

      // If not found, check Firestore
      try {
        const projectDoc = await getDoc(doc(db, 'portfolioItems', params.id));
        if (projectDoc.exists()) {
          setProject({ id: projectDoc.id, ...projectDoc.data() } as Project);
        } else {
          setProject(null); // Not found
        }
      } catch (error) {
        console.error("Error fetching project:", error);
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [params.id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Skeleton className="h-12 w-1/2 mb-4" />
        <Skeleton className="h-8 w-1/4 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Skeleton className="h-64 w-full" />
          </div>
          <div>
            <Skeleton className="h-8 w-full mb-4" />
            <Skeleton className="h-20 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    notFound();
  }

  const styling = project.styling ?? {
    backgroundColor: 'hsl(var(--card))',
    textColor: 'hsl(var(--card-foreground))',
    fontFamily: 'var(--font-body)',
    borderColor: 'hsl(var(--border))',
  };


  return (
    <div className="container mx-auto px-4 py-16">
       <h1 className="font-headline text-5xl font-bold tracking-tighter mb-2 text-primary">{project.name}</h1>
       <Badge variant="outline" className="mb-8">{project.type}</Badge>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className='md:col-span-2'>
                 <Card className='overflow-hidden border-2' style={{borderColor: styling.borderColor}}>
                    <div className="relative aspect-video w-full">
                        <Image 
                            src={project.image || 'https://placehold.co/1280x720.png'}
                            alt={project.name}
                            fill
                            className="object-cover"
                            data-ai-hint={project.dataAiHint || 'abstract'}
                        />
                         <div className="absolute inset-0 bg-repeat bg-center opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
                    </div>
                 </Card>
            </div>
            <div className='md:col-span-1'>
                <Card style={{
                    backgroundColor: styling.backgroundColor,
                    color: styling.textColor,
                    borderColor: styling.borderColor,
                    fontFamily: styling.fontFamily,
                }} className="border-2">
                    <CardHeader>
                        <CardTitle>About this Realm</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription style={{ color: styling.textColor, opacity: 0.9 }}>
                            {project.description}
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>
       </div>
    </div>
  );
}
