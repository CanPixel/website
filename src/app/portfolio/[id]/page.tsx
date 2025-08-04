
'use client';

import Image from 'next/image';
import { Project } from '@/data/projects';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import NavMenu from "@/components/navigation";
import { Button } from '@/components/ui/button';
import { Github, Calendar, Globe, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function ProjectDetailPage({ project }: { project: Project | null | undefined }) {
  if (project === undefined || project === null) {
    console.log(project);
    return (<div>Error loading project data.</div>);
  }
  
  return (
    <div className="container mx-auto px-4 py-16">
      <NavMenu/>
      
      <div className="flex items-center justify-between gap-8 mt-8">
        <Button asChild variant="link" className="p-0 h-auto text-accent group-hover:underline flex-shrink-0">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Realms
          </Link>
        </Button>

        <header className="text-center flex-grow">
          <h1 className="font-headline text-5xl font-bold tracking-tighter mb-2 text-primary">{project.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {project.shortDescription}
          </p>
          {project.label && <Badge variant="outline" className="mt-4">{project.label}</Badge>}
        </header>

        <Badge
          variant="outline"
          className={cn("p-2 px-3 whitespace-nowrap flex-shrink-0", project.styling.badgeBackgroundColor)}
          style={{
            borderColor: project.styling.borderColor,
            color: 'bg-white',
          }}
          >
            <Calendar className='me-2'/>
            {project.releaseDate ?? 'Coming Soon'}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
        <div className='md:col-span-2'>
          <Card className='overflow-hidden border-2' style={{borderColor: project.styling.borderColor}}>
            <div className="relative aspect-video w-full"> 
              <Image 
                src={"/images/" + project.thumbnailUrl}
                alt={project.title}
                fill
                className="object-cover"/>
              <div className="absolute inset-0 bg-repeat bg-center opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
            </div>
          </Card>
        </div>

        <div className='md:col-span-1'>
            <Card style={{
                backgroundColor: project.styling.backgroundColor,
                color: project.styling.textColor,
                borderColor: project.styling.borderColor,
                fontFamily: project.styling.fontFamily,
            }} className="border-2">
                <CardHeader>
                    <CardTitle>About this Realm</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription style={{
                        color: project.styling.textColor, opacity: 0.9 }
                        }>
                        {project.description}
                    </CardDescription> 
                </CardContent>
            </Card>
            <div className="p-6 mt-6 rounded-lg bg-card border">
              <h3 className="font-headline text-2xl font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.properties?.skills?.map((tech : string) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
        </div>
    </div>

      <div className="grid md:grid-cols-3 gap-12 mt-8">
        <div className="md:col-span-2 space-y-6 prose prose-lg dark:prose-invert max-w-none text-foreground/90">
            <h3 className="font-headline text-2xl font-bold mb-4">Technical Details</h3>
            <p>
                The game was developed in Unity, leveraging C# for all gameplay logic, AI behavior, and system management. One of the core technical challenges was creating an efficient procedural generation system for the galaxy map. I used a combination of Perlin noise for star distribution and a custom algorithm to ensure playable paths and interesting clusters of systems. This allows for a unique galaxy in every playthrough, greatly enhancing replayability.
            </p>
            <p>
                For the real-time combat, I implemented a component-based ship system, allowing for easy customization of weapons, shields, and engines. The UI was built using Unity's UGUI system, with a focus on creating a clean, readable interface that evokes classic sci-fi tropes while remaining modern and intuitive.
            </p>
        </div>
        <aside className="md:col-span-1 space-y-8">
          {(project.url || project.properties?.repoLink) && (
            <div className="p-6 rounded-lg bg-card border">
              <h3 className="font-headline text-2xl font-bold mb-4">Project Links</h3>
              <div className="space-y-4">
                  {project.url && (
                      <Button asChild className="w-full">
                          <Link href={project.url} target="_blank" rel="noopener noreferrer">
                              <Globe className="mr-2 h-4 w-4" />
                              Live Demo
                          </Link>
                      </Button>
                  )}
                  {project.properties?.repoLink && (
                      <Button asChild variant="outline" className="w-full">
                          <Link href={project.properties.repoLink} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              Source Code
                          </Link>
                      </Button>
                  )}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
