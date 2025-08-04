'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getProjectStyling } from '@/data/projects';
import { Key } from 'react';

export function ProjectCard({ project }: { project : any }) {
  const styling = getProjectStyling(project.id);

 return (
    <div className="group">
    <Card
      className={cn(
 'overflow-hidden transition-all duration-300 ease-in-out border-2 flex flex-col h-[580px]',
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
      <CardHeader>
          <div className="flex justify-between items-start">
              <CardTitle className="text-2xl font-bold" 
              style={{ color: styling.textColor }}>{project.title}
              </CardTitle>
              <Badge
                variant="outline"
                className={cn("p-2 px-3 whitespace-nowrap", styling.badgeBackgroundColor)}
                style={{
                  borderColor: styling.borderColor,
                  color: styling.textColor,
                }}
                >
                  {project.releaseDate ?? 'Coming Soon'}
              </Badge>
          </div>
          <div>
            {project.properties?.genre && Array.isArray(project.properties?.genre) ?
              project.properties?.genre.map((genre : string, index: Key) => (
              <Badge
                variant="outline"
                key={index}
                className={cn("mt-2 mr-1", styling.badgeBackgroundColor)}
                style={{
                  borderColor: styling.borderColor,
                  color: styling.textColor,
                }}
              >
                {genre}
              </Badge>
            )) :
              project.properties?.genre ? (
                <Badge
                  variant="outline"
                  className={cn("mt-2", styling.badgeBackgroundColor)}
                  style={{
                    borderColor: styling.borderColor,
                    color: styling.textColor,
                  }}
                >
                  {project.properties?.genre}
                </Badge>
              ) : (
                <Badge
                  variant="outline"
                  className={cn("mt-2", styling.badgeBackgroundColor)}
                  style={{
                    borderColor: styling.borderColor,
                    color: styling.textColor,
                  }}
                >
                  {project.type}
                </Badge>
              )}
          </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div>
            <div className="w-full h-auto relative aspect-video mb-4">
                <Image
                src={"images/" + project.thumbnailUrl}
                alt={`Showcase image for ${project.title}`}
                fill
                className="object-cover rounded-md"
                />
            </div>
            <CardDescription style={{ color: styling.textColor, opacity: 0.8 }} className="h-24 overflow-hidden text-ellipsis">
                <b>{project.shortDescription}</b>
                <br></br><br></br>
                {project.description}
            </CardDescription>
        </div>
        <Button variant="link" className="p-0 h-auto mt-4 text-inherit group-hover:underline self-start">
          Explore Realm
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
 </div>
 );
}
