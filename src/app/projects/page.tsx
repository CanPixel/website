
"use client";

import NavMenu from "@/components/navigation";
import { useState, useEffect } from "react";
import { ProjectCard } from '@/app/portfolio/ProjectCard';
import { Project } from '@/data/projects';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
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
    { type: 'image', src: 'https://canpixel.com/slideshowcase/BO1.png' },
    { type: 'video', src: 'https://canpixel.com/slideshowcase/BO2.mp4' },
    { type: 'video', src: 'https://canpixel.com/slideshowcase/BO3.mp4' },
    { type: 'video', src: 'https://canpixel.com/slideshowcase/BO4.mp4' },
    { type: 'video', src: 'https://canpixel.com/slideshowcase/BO5.mp4' },
    { type: 'video', src: 'https://canpixel.com/slideshowcase/BO6.mp4' },
    { type: 'video', src: 'https://canpixel.com/slideshowcase/BO7.mp4' },
    { type: 'video', src: 'https://canpixel.com/slideshowcase/BO8.mp4' },
    { type: 'video', src: 'https://canpixel.com/slideshowcase/BO9.mp4' },
    { type: 'video', src: 'https://canpixel.com/slideshowcase/BO10.mp4' },
]

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
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
    };
    fetchProjects();
  }, []);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const filteredProjects = selectedCategory
    ? projects.filter((project) =>
        project.properties?.genre?.includes(selectedCategory)
      )
    : projects;

  return (
    <div className="container mx-auto px-4 py-16">
      <NavMenu/>
      <header className="text-center mb-12 mt-12">
        <h1 className="font-headline text-5xl font-bold tracking-tighter mb-4">
          CanPixel's Portfolio Realms
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A collection of projects I've built, from game prototypes to
          full-stack web applications.
        </p>
      </header>

      <div className="mb-12 flex justify-center">
          <Carousel className="w-full max-w-sm"
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

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          onClick={() => setSelectedCategory(null)}
          className="rounded-full flex items-center gap-2 transition-all duration-200 hover:shadow-lg"
        >
            <LayoutGrid className="w-4 h-4" />
          Show All
        </Button>
        {allCategories.map((category) => (
          <Button
            key={category.name}
            variant={selectedCategory === category.name ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.name)}
            className="rounded-full flex items-center gap-2 transition-all duration-200 hover:shadow-lg group"
          >
            <category.icon className={cn("w-4 h-4", category.animation)} />
            {category.name}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Link key={project.id} href={`/portfolio/${project.id}`} 
          className="block transition-transform hover:scale-[1.01] group">
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </div>    
  );
}
