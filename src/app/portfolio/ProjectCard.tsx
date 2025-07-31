'use client';

import Image from 'next/image';
import type { Project } from '@/data/projects';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ProjectCard({ project }: { project: Project }) {
  // Provide default styling for projects that may not have it (e.g., from DB)
  const styling = project.styling ?? {
    backgroundColor: 'hsl(var(--card))',
    textColor: 'hsl(var(--card-foreground))',
    fontFamily: 'var(--font-body)',
    borderColor: 'hsl(var(--border))',
    animationClass: '',
  };

  return (
    <Card
      className={cn(
        'overflow-hidden transition-all duration-300 ease-in-out border-2 group flex flex-col h-full',
        styling.animationClass
      )}
      style={{
        backgroundColor: styling.backgroundColor,
        color: styling.textColor,
        fontFamily: styling.fontFamily,
        backgroundImage: styling.backgroundImage,
        backgroundSize: styling.backgroundSize,
        borderColor: styling.borderColor,
      }}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl font-bold" style={{ color: styling.textColor }}>{project.name}</CardTitle>
            <Badge
              variant="outline"
              className="mt-2"
              style={{
                borderColor: styling.borderColor,
                color: styling.textColor,
              }}
            >
              {project.type}
            </Badge>
          </div>
          <div className="w-1/3 h-auto relative aspect-video">
            <Image
              src={project.image || 'https://placehold.co/600x400.png'}
              alt={project.name}
              fill
              className="object-cover rounded-md"
              data-ai-hint={project.dataAiHint}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <CardDescription style={{ color: styling.textColor, opacity: 0.8 }} className="h-24 overflow-hidden">
          {project.description}
        </CardDescription>
        <Button variant="link" className="p-0 h-auto mt-4 text-inherit group-hover:underline self-start">
          Explore Realm
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
