import Image from "next/image";
import { projects } from "@/lib/museData";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Github } from "lucide-react";
import Link from "next/link";

export default function ProjectDetailPage() {
  const project = projects.find(p => p.slug === "cosmic-odyssey");

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <header className="text-center mb-12">
        <h1 className="font-headline text-5xl font-bold tracking-tighter mb-4">{project.title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {project.description}
        </p>
      </header>

      <div className="relative w-full h-72 md:h-[500px] rounded-lg overflow-hidden mb-12 shadow-2xl shadow-primary/20">
        <Image
          src={project.image}
          alt={project.title}
          fill
          data-ai-hint={project.aiHint}
          className="object-cover"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-6 prose prose-lg dark:prose-invert max-w-none text-foreground/90">
            <h3>About The Project</h3>
            <p>
              {project.longDescription}
            </p>
            <h3>Technical Details</h3>
            <p>
                The game was developed in Unity, leveraging C# for all gameplay logic, AI behavior, and system management. One of the core technical challenges was creating an efficient procedural generation system for the galaxy map. I used a combination of Perlin noise for star distribution and a custom algorithm to ensure playable paths and interesting clusters of systems. This allows for a unique galaxy in every playthrough, greatly enhancing replayability.
            </p>
            <p>
                For the real-time combat, I implemented a component-based ship system, allowing for easy customization of weapons, shields, and engines. The UI was built using Unity's UGUI system, with a focus on creating a clean, readable interface that evokes classic sci-fi tropes while remaining modern and intuitive.
            </p>
        </div>
        <aside className="md:col-span-1 space-y-8">
          <div className="p-6 rounded-lg bg-card border">
            <h3 className="font-headline text-2xl font-bold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-lg bg-card border">
             <h3 className="font-headline text-2xl font-bold mb-4">Project Links</h3>
             <div className="space-y-4">
                 {project.liveUrl && (
                     <Button asChild className="w-full">
                         <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                             <Globe className="mr-2 h-4 w-4" />
                             Live Demo
                         </Link>
                     </Button>
                 )}
                 {project.repoUrl && (
                     <Button asChild variant="outline" className="w-full">
                         <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                             <Github className="mr-2 h-4 w-4" />
                             Source Code
                         </Link>
                     </Button>
                 )}
             </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
