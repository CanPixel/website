'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import type { Project } from '@/data/projects';
import './ProjectCard.css';

export default function PortfolioPage() {
  const [dbProjects, setDbProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsCollection = collection(db, 'portfolioItems');
      const projectSnapshot = await getDocs(projectsCollection);
      const projectList = projectSnapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<Project, 'id'>),
      }));
      setDbProjects(projectList);
    };

    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-headline text-5xl font-bold tracking-tighter mb-2 text-center">My Realms</h1>
      <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
        Each project is a distinct world, crafted with a unique soul and purpose.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {dbProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
