
'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Project } from '@/data/projects';
import { projects as hardcodedProjects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import Link from 'next/link';
import './ProjectCard.css';
import { Separator } from '@/components/ui/separator';

export default function PortfolioPage() {
  const [dbProjects, setDbProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'portfolioItems'));
        const projectData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...(doc.data() as Omit<Project, 'id'>),
        }));
        setDbProjects(projectData);
      } catch (err) {
        console.error(err);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-headline text-5xl font-bold tracking-tighter mb-2 text-center text-primary">Realms of Creation</h1>
      <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
        Explore the diverse worlds crafted by Can Ur, each a unique blend of code, story, and philosophy.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {hardcodedProjects.map((project) => (
          <Link href={`/portfolio/${project.id}`} key={project.id}>
              <ProjectCard project={project} />
          </Link>
        ))}
      </div>

      {(loading || error || dbProjects.length > 0) && (
        <Separator className="my-16 bg-border/40" />
      )}

      {loading && <p className="text-center">Loading more realms...</p>}
      {error && <p className="text-center text-destructive">{error}</p>}
      
      {!loading && !error && dbProjects.length > 0 && (
        <>
          <h2 className="font-headline text-3xl font-bold tracking-tighter mb-8 text-center">More From The Archives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dbProjects.map((project) => (
              <Link href={`/portfolio/${project.id}`} key={project.id}>
                  <ProjectCard project={project} />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
