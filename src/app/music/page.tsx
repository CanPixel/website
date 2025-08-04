"use client";

import MusicProjectCard from "@/components/music-project-card";
import { useState, useEffect } from "react";
// import { ProjectCard } from '@/app/portfolio/ProjectCard';
import { type Project } from "@/data/projects";
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import MidiSection from "@/components/MidiSection";

export default function MusicPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const projectsCollection = collection(db, 'portfolioItems');
      const q = query(projectsCollection, orderBy('releaseDate', 'desc'));

      const projectSnapshot = await getDocs(q);
      const projectList = projectSnapshot.docs
      .filter(doc => {
        const projectData = doc.data() as Omit<Project, 'id'>;
        return projectData.type === 'midi';
      })
      .map(doc => {
        const projectData = doc.data() as Omit<Project, 'id'>;
        return {
          id: doc.id,
          ...projectData,
        };
      });
      setProjects(projectList);
    };

    fetchProjects();
  }, []);
    // const projectsByCategory = allMusicCategories.map(category => ({
    //     ...category,
    //     projects: musicProjects.filter(p => p.category === category.name)
    // })).filter(category => category.projects.length > 0);

  return (
    <div className="container mx-auto px-4 py-16 bg-background">
      <header className="text-center mb-6">
        <h1 className="font-headline text-5xl font-bold tracking-tighter mb-4">
          Music & Sound
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A collection of my compositions, sound design, and other audio adventures.
        </p>
      </header>

      <MidiSection />

      {/* <div className="space-y-16">
        {projectsByCategory.map(category => (
            <section key={category.name} id={category.slug} className="scroll-mt-24">
                 <h2 className="font-headline text-3xl font-bold mb-8 flex items-center gap-3">
                    <category.icon className="w-7 h-7 text-accent" />
                    {category.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {category.projects.map((project) => (
                      <MusicProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </section>
        ))}
      </div> */}
    </div>
  );
}

  