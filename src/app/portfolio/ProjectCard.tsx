'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './ProjectCard.css';
import type { Project } from '@/data/projects';

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
        boxShadow: `0 0 15px ${project.styling?.borderColor || '#00FF00'}`,
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
    <div
      className="project-card"
      ref={cardRef}
      style={{
        backgroundImage: `url(${project.styling?.backgroundImage})`,
        color: project.styling?.textColor,
        fontFamily: project.styling?.fontFamily,
      }}
    >
      <h3>{project.name}</h3>
      <p>{project.summary}</p>
    </div>
  );
}
