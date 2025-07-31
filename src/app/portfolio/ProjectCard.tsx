'use client';

import Image from 'next/image';
import type { Project } from '@/data/projects';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const isDb = (project: Project): boolean => {
  return project.properties ? true : false;
};

export function ProjectCard({ project }: { project: Project }) {
  // Provide default styling for projects that may not have it (e.g., from DB)
  const styling = project.styling ?? {
    backgroundColor: 'hsl(var(--card))',
    textColor: 'hsl(var(--card-foreground))',
    fontFamily: 'var(--font-body)',
    borderColor: 'hsl(var(--border))',
    animationClass: 'group-hover:scale-105',
    className: '',
  };

  return (
    <Card
      className={cn(
        'overflow-hidden transition-all duration-300 ease-in-out border-2 group flex flex-col h-full',
        styling.animationClass,
        styling.className
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
      <CardHeader className="flex flex-row items-start justify-between">
          <div>
            <CardTitle className="text-2xl font-bold" 
            style={{ color: styling.textColor }}>{isDb(project) ? 
            project.title : project.name}
            </CardTitle>

            {isDb(project) && project.properties.genre && Array.isArray(project.properties.genre) ?
              project.properties.genre.map((genre, index) => (
              <Badge
                variant="outline"
                key={index} // Added key prop
                className="mt-2 mr-1" // Added margin right
                style={{
                  borderColor: styling.borderColor,
                  color: styling.textColor,
                }}
              >
                {genre}
              </Badge>
            )) :
              isDb(project) && project.properties.genre ? (
                <Badge
                  variant="outline"
                  className="mt-2"
                  style={{
                    borderColor: styling.borderColor,
                    color: styling.textColor,
                  }}
                >
                  {project.properties.genre}
                </Badge>
              ) : (
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
              )}

          </div>
          {
            <Badge
            variant="outline"
            className="mt-2 p-2 px-3 bg-white/30"
            style={{
              borderColor: styling.borderColor,
              color: styling.textColor,
            }}
            >
              {project.releaseDate ?? 'Coming Soon'}
            </Badge>
          }
          {isDb(project) && project.properties.releaseDate && (
            <Badge
              variant="outline"
              className="mt-2"
              style={{
                borderColor: styling.borderColor,
                color: styling.textColor,
              }}
            >
              {project.properties.releaseDate}
            </Badge>
          )}
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div>
            <div className="w-full h-auto relative aspect-video mb-4">
                <Image
                src={project.thumbnailUrl || 'https://placehold.co/600x400.png'}
                alt={project.name}
                fill
                className="object-cover rounded-md"
                data-ai-hint={project.dataAiHint}
                />
            </div>
            <CardDescription style={{ color: styling.textColor, opacity: 0.8 }} className="h-24 overflow-hidden">
                {isDb(project) ? 
                project.shortDescription : project.description}
            </CardDescription>
        </div>
        <Button variant="link" className="p-0 h-auto mt-4 text-inherit group-hover:underline self-start">
          Explore Realm
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
