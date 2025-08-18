"use client";

import NavMenu from "@/components/navigation";
import { useState, useEffect } from "react";
import { ProjectCard } from '@/app/portfolio/ProjectCard';
import { Project } from '@/data/projects';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { InView } from 'react-intersection-observer';
import {
 Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Map,
  Shield,
  Waves,
  Crosshair,
  CookingPot,
  Rocket,
  TrendingUp,
  PanelTopOpen,
  Dices,
  EyeOff,
  HeartPulse,
  Gem,
  BrainCircuit,
  Music,
  Gamepad2,
  ToyBrick,
  Wrench,
  Package,
  LayoutGrid,
} from "lucide-react";
import * as React from "react";
import Image from "next/image";
import Link from 'next/link';

const allCategories = [
  { name: "Adventure", icon: Map, animation: "group-hover:animate-float" },
  { name: "Battle Royale", icon: Shield, animation: "group-hover:animate-flash" },
  { name: "Bullet Hell", icon: Waves, animation: "group-hover:animate-ping-pong" },
  { name: "Shooter (FPS)", icon: Crosshair, animation: "group-hover:animate-recoil" },
  { name: "Cooking", icon: CookingPot, animation: "group-hover:animate-wiggle" },
  { name: "Racing", icon: Rocket, animation: "group-hover:animate-shake" },
  { name: "Endless Runner", icon: TrendingUp, animation: "group-hover:animate-slide-out-in" },
  { name: "Platformer", icon: PanelTopOpen, animation: "group-hover:animate-hop" },
  { name: "Roguelike", icon: Dices, animation: "group-hover:animate-spin-fast" },
  { name: "Stealth", icon: EyeOff, animation: "group-hover:animate-fade-in-out" },
  { name: "Survival", icon: HeartPulse, animation: "group-hover:animate-pulse-strong" },
  { name: "Collect-A-Thon", icon: Gem, animation: "group-hover:animate-tada" },
  { name: "Strategy", icon: BrainCircuit, animation: "group-hover:animate-glow" },
  { name: "Audio", icon: Music, animation: "group-hover:animate-vibrate" },
  { name: "Handheld", icon: Gamepad2, animation: "group-hover:animate-rotate-y" },
  { name: "Interactive Installation", icon: ToyBrick, animation: "group-hover:animate-bounce-more" },
  { name: "Unity Tool", icon: Wrench, animation: "group-hover:animate-spin group-hover:scale-125" },
  { name: "Misc", icon: Package, animation: "group-hover:animate-wobble" },
];
const carouselItems = [
    { type: 'image', src: 'images/slideshowcase/BO1.png' },
    { type: 'video', src: 'images/slideshowcase/BO2.mp4' },
    { type: 'video', src: 'images/slideshowcase/BO3.mp4' },
    { type: 'video', src: 'images/slideshowcase/BO4.mp4' },
    { type: 'video', src: 'images/slideshowcase/BO5.mp4' },
    { type: 'video', src: 'images/slideshowcase/BO6.mp4' },
    { type: 'video', src: 'images/slideshowcase/BO7.mp4' },
    { type: 'video', src: 'images/slideshowcase/BO8.mp4' },
    { type: 'video', src: 'images/slideshowcase/BO9.mp4' },
    { type: 'video', src: 'images/slideshowcase/BO10.mp4' },
]

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProjects = async () => {
      const projectsCollection = collection(db, 'portfolioItems');
      const q = query(projectsCollection, orderBy('releaseDate', 'desc'));

      const projectSnapshot = await getDocs(q);
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
      setProjects(projectList);
      setLoading(false);
    };
    fetchProjects();
  }, []);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const filteredProjects = selectedCategory
    ? projects.filter((project) =>
        project.properties?.genre?.includes(selectedCategory)
      )
    : projects;

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen text-2xl font-headline">UNRAVELING REALMS...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <NavMenu/>
      <header className="text-center mb-6 mt-12">
        <h1 className="font-headline text-6xl font-bold tracking-tighter mb-4 shiny-text">
          REALMS
        </h1>
        <p className="text-md text-muted-foreground/60 max-w-3xl mx-auto font-headline">
          Discover realms, a curated collection of worlds, each a distinct digital experience.
        </p>
      </header>

      <div className="mb-12 flex justify-center">
          <Carousel className="w-1/2 max-w-sm"
            opts={{
                loop: true,
            }}
          >
            <CarouselContent>
                {carouselItems.map((item, index) => (
                    <CarouselItem key={index}>
                         <div className="aspect-square w-full bg-gray-900/10 flex items-center justify-center rounded-lg border-4 border-teal-500 overflow-hidden">
                            {item.type === 'image' ? (
                                <Image src={item.src} alt={`Showcase ${index + 1}`} width={500} height={500} className="object-contain" />
                            ) : (
                                <video src={item.src} loop autoPlay muted playsInline className="object-contain w-full h-full" />
                            )}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="text-white hover:text-teal-400 -left-4" />
            <CarouselNext className="text-white hover:text-teal-400 -right-4" />
          </Carousel>
      </div>

      <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 mb-6">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          onClick={() => setSelectedCategory(null)}
          className="rounded-full flex items-center gap-2 transition-all duration-200 hover:shadow-lg hover:bg-blue-400"
        >
            <LayoutGrid className="w-4 h-4" />
          Show All
        </Button>
        {allCategories.map((category) => (
          <Button
            key={category.name}
            variant={selectedCategory === category.name ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.name)}
            className="text-[12px] rounded-full flex items-center gap-2 transition-all duration-200 hover:shadow-lg group hover:bg-purple-400"
          >
            <category.icon className={cn("w-4 h-4", category.animation)} />
            {category.name}
          </Button>
        ))}
      </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
 <InView key={project.id} triggerOnce={true}>
 {({ inView, ref }) => (
 <div ref={ref} className={`transition-all duration-500 ease-in-out ${
                  inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
 }`}>
 {inView && (
 <Link
 href={`/portfolio/${project.id}`}
 className="block group hover:scale-[0.98] transition-transform duration-300 ease-in-out"
 >
 <ProjectCard project={project} />
 </Link>
 )}
 {!inView && (
 <Link href={`/portfolio/${project.id}`} className="block invisible">
 <ProjectCard project={project} /> {/* Render an invisible card to maintain layout */}
                  </Link>
                )}
              </div>
            )}
          </InView>
        ))}
      </div>
    </div>    
  );
}
