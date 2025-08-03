'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { ProjectCard } from './portfolio/ProjectCard';
import { Project } from '@/data/projects';
import ProjectsPreview from "@/components/projects-preview";
import { Button } from "@/components/ui/button";
import MusicProjectCard from "@/components/music-project-card";
// import { blogData } from "@/lib/blogData";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from 'next/link';

const navLinks = [
  { href: "/projects", label: "Realms" },
  { href: "/music", label: "Muse" },
  { href: "/about", label: "Lore" },
  { href: "/contact", label: "Reach" },
];

export default function Home() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [projects, setProjects] = useState<Project[]>([]);
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
          ...projectData
        };
      });
      setProjects(projectList);
    };
    fetchProjects();
  }, []);
  
  const featuredProjects = projects.filter(project => 
    [
      "avoid", "orbital-resonance", "bad-optics", 'epicinium'
    ].includes(project.id)
  );
  const featuredRealms = projects.filter(project => 
    [
      "kernel-sweep", "chivalry-chef", "bad-optics"
    ].includes(project.id)
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center pt-24 pb-16">
        <nav className={cn(
          "fixed top-8 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-in-out",
          isAtTop ? "opacity-100" : "opacity-0 pointer-events-none"
        )}>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="relative transition-colors hover:text-accent group">
                    <span>{link.label}</span>
                    <span className="absolute bottom-[-4px] left-0 h-0.5 w-full bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </Link>
            ))}
          </div>
        </nav>
        <div className="flex justify-center items-center gap-4">
          <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-br from-primary/80 via-primary to-accent bg-clip-text text-transparent drop-shadow-lg">
            CanPixel
          </h1>
          <Image 
              src="/images/PixelCan.png"
              alt="CanPixel Logo"
              width={125}
              height={125}
              className="h-25 w-25 md:h-30 md:w-30"
            />
        </div>

        <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 mt-4">
          Engaging Digital Experiences
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Method Developer weaving soulful, interactive experiences from the threads of code and creativity
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/projects">Explore Realms</Link>
          </Button>
        </div>
      </section>

      <h1 className="font-headline text-5xl font-bold tracking-tighter mb-4 text-center shiny-text text-[#C494B3]">REALMS</h1>
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <p className="font-headline text-xl text-primary tracking-wider">
            Each project is a world unto itself
        </p>
        <p className="font-body text-sm text-muted-foreground mt-3 tracking-widest uppercase">
            Design • Code • Story • Philosophy
        </p>
      </div>

      <ProjectsPreview projects={featuredProjects}/>

      <div className="flex justify-between items-center mt-12 mb-8">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
          REALMS
        </h2>
        <Button asChild variant="link" className="text-accent">
          <Link href="/projects">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredRealms.map((project) => (
          <Link key={project.id} href={`/portfolio/${project.id}`} className="block transition-transform hover:scale-[1.02] group">
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </div>
  );
}