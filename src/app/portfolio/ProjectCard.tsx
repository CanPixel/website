
'use client';

import type { Project } from '@/data/projects';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function ProjectCard({ project }: { project: Project }) {
  const animationClass = project.styling?.animationClass || '';
  return (
    <Card className={cn("overflow-hidden transition-all duration-300 ease-in-out border-2 h-full flex flex-col", animationClass)}>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{project.name}</CardTitle>
        <Badge variant="secondary" className="w-fit">{project.type}</Badge>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="relative aspect-video mb-4 rounded-md overflow-hidden">
          {project.styling?.backgroundImage && (
            <Image 
              src={project.styling.backgroundImage} 
              alt={project.name}
              fill
              className="object-cover"
              data-ai-hint="gameplay screenshot"
            />
          )}
        </div>
        <CardDescription>{project.summary}</CardDescription>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground font-code">Explore Realm &rarr;</p>
      </CardFooter>
    </Card>
  );
}
