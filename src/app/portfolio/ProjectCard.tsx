'use client';

import Image from 'next/image';
import type { Project } from '@/data/projects';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      className={cn("overflow-hidden transition-all duration-300 ease-in-out border-2", project.styling.animationClass)}
      style={{
        backgroundColor: project.styling.backgroundColor,
        color: project.styling.textColor,
        fontFamily: project.styling.fontFamily,
        backgroundImage: project.styling.backgroundImage,
        backgroundSize: project.styling.backgroundSize,
        borderColor: project.styling.borderColor,
      }}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl font-bold" style={{ color: project.styling.textColor }}>{project.name}</CardTitle>
            <Badge
              variant="outline"
              className="mt-2"
              style={{
                borderColor: project.styling.borderColor,
                color: project.styling.textColor,
              }}
            >
              {project.type}
            </Badge>
          </div>
          <div className="w-1/3 h-auto relative aspect-video">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover rounded-md"
              data-ai-hint={project.dataAiHint}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription style={{ color: project.styling.textColor, opacity: 0.8 }}>
          {project.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
