'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { projects } from '@/data/projects';
import { ProjectCard } from './portfolio/ProjectCard';
import type { Project } from '@/data/projects';
import './portfolio/ProjectCard.css';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  const [dbProjects, setDbProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsCollection = collection(db, 'portfolioItems');
      const projectSnapshot = await getDocs(projectsCollection);
      const projectList = projectSnapshot.docs
      .filter(doc => {
        const projectData = doc.data() as Omit<Project, 'id'>;
        return projectData.type === 'game';
      })
      .map(doc => {
        const projectData = doc.data() as Omit<Project, 'id'>;
        return {
          id: doc.id,
          ...projectData,
        };
      });
      setDbProjects(projectList);
    };
    fetchProjects();
  }, []);

  const allProjects = [...projects, ...dbProjects];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-headline text-5xl font-bold tracking-tighter mb-4 text-center shiny-text">CANPIXEL REALMS</h1>
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <p className="font-headline text-base text-muted-foreground tracking-wider">
          Each project is a world unto itself, a unique blend of design, code, story, and philosophy.
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map((project) => (
          <Link key={project.id} href={`/portfolio/${project.id}`} className="block transition-transform hover:scale-[1.02] group">
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </div>
  );
}
