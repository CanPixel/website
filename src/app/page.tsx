
'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { ProjectCard } from './portfolio/ProjectCard';
import { Project } from '@/data/projects';
import ProjectsPreview from "@/components/projects-preview";
import NavMenu from "@/components/navigation";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// import MusicProjectCard from "@/components/music-project-card";
// import { blogData } from "@/lib/blogData";

import { ArrowRight } from "lucide-react";
// import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [tagline, setTagline] = useState('');
  const fullTagline = 'Method Developer weaving soulful, interactive experiences from the threads of code and creativity';

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

  useEffect(() => {
    const hesitationPoint = fullTagline.indexOf('from the') + 'from the'.length;
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      if (currentIndex < fullTagline.length) {
        setTagline(fullTagline.substring(0, currentIndex + 1));
        currentIndex++;

        let delay = 30; // Faster initial speed
        if (currentIndex === hesitationPoint) {
            delay = 700; // The "hesitation"
        } else if (currentIndex > hesitationPoint) {
            delay = 70; // Slower speed after hesitation
        }
        
        timeoutId = setTimeout(type, delay);
      }
    };

    type();

    return () => clearTimeout(timeoutId);
  }, [fullTagline]);
  
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
    <div className="container mx-auto px-4 py-10">
      <section className="text-center pt-24 pb-2">
        <NavMenu/>
        <div className="flex justify-center items-center gap-4">
          <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-br from-primary/80 via-primary to-accent bg-clip-text text-transparent drop-shadow-lg transform scale-y-120 origin-center">
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

        <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 mt-0">
          Engaging Digital Experiences
        </h2>
        <p className="text-md md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 font-mono h-8">
          {tagline}<span className="blinking-cursor">_</span>
        </p>

        <div className="font-mono text-left max-w-md mx-auto text-sm space-y-2 text-muted-foreground mb-8">
            <TooltipProvider>
              <Tooltip delayDuration={100}>
                <p>
                  <span className="text-primary text-md">𒆠 ki [place] : </span>
                  <span className='bg-green-950 p-1'>
                    "place; ground, earth;{" "}
                    <TooltipTrigger asChild>
                      <a href="https://en.wikipedia.org/wiki/Hell" target="_blank" className="hover:bg-green-700 p-1 underline decoration-dotted">
                        underworld;
                      </a>
                    </TooltipTrigger>
                    {" "}land, country; lower"
                  </span>
                </p>
                <TooltipContent className="max-w-xs bg-background border-primary/20 text-foreground">
                  <div className="p-2">
                    <h4 className="font-bold text-lg mb-2 font-headline">Hell in Religion</h4>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Hieronymus_Bosch_-_The_Garden_of_Earthly_Delights_-_Hell.jpg/1280px-Hieronymus_Bosch_-_The_Garden_of_Earthly_Delights_-_Hell.jpg" width={400} height={250} alt="The Garden of Earthly Delights - Hell by Hieronymus Bosch" className="rounded-md mb-2" />
                    <p className="text-sm">
                      In many religious and folkloric traditions, Hell is an afterlife location in which evil souls are subjected to punitive suffering, most often through torture, as eternal punishment after death.
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip delayDuration={100}>
                <p>
                  <span className="text-primary text-lg">𒌨 ur [wolf] : </span>
                  <span className='bg-green-950 p-1'>
                    "beast of prey; (lone) wolf;{" "}
                    <TooltipTrigger asChild>
                      <a href="https://en.wikipedia.org/wiki/Ur" target="_blank" className="hover:bg-green-700 p-1 underline decoration-dotted">
                        oldest_city_in_the_world;
                      </a>
                    </TooltipTrigger>
                    "
                  </span>
                </p>
                <TooltipContent className="max-w-xs bg-background border-primary/20 text-foreground">
                  <div className="p-2">
                    <h4 className="font-bold text-lg mb-2 font-headline">Ur, Cradle of Civilization</h4>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Ziggurat_of_ur.jpg/1280px-Ziggurat_of_ur.jpg" width={400} height={250} alt="Ziggurat of Ur" className="rounded-md mb-2" />
                    <p className="text-sm">
                      An ancient Sumerian city-state in Mesopotamia, Ur was a crucial center of trade and civilization for thousands of years. It is famously known for its impressive ziggurat and is believed to be the birthplace of Abraham.
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
        </div>
      </section>

      <p className="mt-2 text-center font-headline text-[1.1rem] pb-0 text-primary mb-0 font-mono">
        𒆠𒌨 [ki.ur] :
      </p>

      <h1 className="font-headline text-6xl font-bold tracking-tighter mb-2 text-center shiny-text text-[#C494B3]">
        REALMS of UR
      </h1>
      <div className="text-center mb-8 max-w-3xl mx-auto">
        <p className="font-headline text-xl text-primary tracking-wider">
            Each project is a world unto itself
        </p>
        <p className="font-body text-sm text-muted-foreground mt-3 tracking-widest uppercase">
            Design • Code • Story • Philosophy
        </p>
      </div>

      <div className="flex gap-4 justify-center mb-10">
        <Button asChild size="lg" className="group transition-all duration-300 ease-in-out hover:bg-accent/90 hover:-translate-y-1 hover:scale-105">
          <Link href="/projects">
            Explore Realms
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </Link>
        </Button>
      </div>

      <ProjectsPreview projects={featuredProjects}/>

      <div className="flex justify-between items-center mt-12 mb-8">
        <h2 className="font-headline text-4xl font-bold tracking-tighter text-center shiny-text text-[#C494B3]">
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
          <Link key={project.id} href={`/portfolio/${project.id}`} 
          className="block transition-transform hover:scale-[1.02] group">
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </div>
  );
}
