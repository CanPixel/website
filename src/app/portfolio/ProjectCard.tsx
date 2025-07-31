
'use client';

import type { Project } from '@/data/projects';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    if (!cardElement || !project.animation) return;

    let animation: gsap.core.Timeline | gsap.core.Tween | null = null;

    const cleanup = () => {
      animation?.kill();
      gsap.set(cardElement, { clearProps: 'all' });
    };

    if (project.animation === 'flicker') {
      animation = gsap.to(cardElement, {
        opacity: 0.9,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut',
      });
    } else if (project.animation === 'fold') {
      gsap.set(cardElement, { transformStyle: 'preserve-3d', transformPerspective: 1000 });
      animation = gsap.to(cardElement, {
        rotationY: -2,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });
    } else if (project.animation === 'typewriter') {
      animation = gsap.to(cardElement, {
        x: 1,
        y: -1,
        duration: 0.7,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });
    } else if (project.animation === 'sweep' && project.styling?.borderColor) {
       animation = gsap.to(cardElement, {
        boxShadow: `0 0 15px 0px ${project.styling.borderColor}`,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });
    }

    return cleanup;
  }, [project]);

  const isKernelSweep = project.id === 'kernel-sweep';

  const cardClasses = cn(
    "overflow-hidden transition-all duration-300 ease-in-out border-2 h-full flex flex-col project-card",
    project.styling?.animationClass,
    { 'kernel-sweep-card': isKernelSweep }
  );

  return (
    <Card
      ref={cardRef}
      className={cardClasses}
      style={{
        backgroundColor: project.styling?.backgroundColor,
        color: project.styling?.textColor,
        fontFamily: project.styling?.fontFamily,
        borderColor: project.styling?.borderColor,
        backgroundImage: (project.styling?.backgroundImage && !isKernelSweep) ? `url("${project.styling.backgroundImage}")` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{project.name}</CardTitle>
        <Badge variant="secondary" className="w-fit">{project.type}</Badge>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="relative aspect-video mb-4 rounded-md overflow-hidden">
          {project.styling?.backgroundImage && project.styling.backgroundImage.startsWith('https') && (
            <Image
              src={project.styling.backgroundImage}
              alt={project.name}
              fill
              className="object-cover"
              data-ai-hint="gameplay screenshot"
            />
          )}
        </div>
        <CardDescription style={{ color: project.styling?.textColor }}>{project.summary}</CardDescription>
      </CardContent>
      <CardFooter>
        <p className="text-xs font-code" style={{ color: project.styling?.textColor }}>Explore Realm &rarr;</p>
      </CardFooter>
    </Card>
  );
}
