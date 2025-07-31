'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './ProjectCard.css';
import type { Project } from '@/data/projects';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // Kill previous animation if it exists
    if (animationRef.current) {
      animationRef.current.kill();
    }
    // Clear any GSAP-set properties
    gsap.set(cardRef.current, { clearProps: 'all' });

    // Apply realm-specific animation based on project data
    if (project.animation === 'flicker') {
      animationRef.current = gsap.to(cardRef.current, {
        opacity: 0.9,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
      });
    } else if (project.animation === 'fold') {
      animationRef.current = gsap.to(cardRef.current, {
        scaleY: 0.95,
        duration: 2,
        yoyo: true,
        repeat: -1,
      });
    } else if (project.animation === 'typewriter') {
      animationRef.current = gsap.to(cardRef.current, {
        x: 3,
        duration: 0.5,
        yoyo: true,
        repeat: -1,
      });
    } else if (project.animation === 'sweep') {
      animationRef.current = gsap.to(cardRef.current, {
        boxShadow: '0 0 15px #00FF00',
        duration: 1,
        yoyo: true,
        repeat: -1,
      });
    }

    return () => {
      // Cleanup on unmount
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [project]);

  return (
    <Card
      ref={cardRef}
      className={cn("overflow-hidden transition-all duration-300 ease-in-out border-2 project-card", project.styling.animationClass)}
      style={{
        backgroundColor: project.styling.backgroundColor,
        color: project.styling.textColor,
        fontFamily: project.styling.fontFamily,
        backgroundImage: `url(${project.styling.backgroundImage})`,
        backgroundSize: 'cover',
        borderColor: project.styling.borderColor,
      }}
    >
      <CardHeader>
          <CardTitle className="text-2xl font-bold" style={{ color: project.styling.textColor }}>{project.name}</CardTitle>
          <Badge
            variant="outline"
            className="mt-2 w-fit"
            style={{
              borderColor: project.styling.borderColor,
              color: project.styling.textColor,
            }}
          >
            {project.type}
          </Badge>
      </CardHeader>
      <CardContent>
        <CardDescription style={{ color: project.styling.textColor, opacity: 0.8 }}>
          {project.summary}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
