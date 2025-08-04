import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { skillColors } from "@/data/projects";

const genreColors: { [key: string]: string } = {
  "Action": "bg-red-500",
  "Adventure": "bg-blue-500",
  "Exploration": "bg-gray-700",
  "Puzzle": "bg-green-500",
  "Battle Royale": "bg-purple-600",
  "Bullet Hell": "bg-pink-500",
  "FPS": "bg-orange-500",
  "Horror": "bg-red-600",
  "Cooking": "text-black bg-yellow-200",
  "Racing": "bg-teal-500",
  "Endless Runner": "bg-cyan-500",
  "Platformer": "bg-lime-500",
  "Roguelike": "bg-indigo-500",
  "Stealth": "bg-gray-700",
  "Survival": "bg-brown-500",
  "Collect-A-Thon": "bg-emerald-600",
  "Strategy": "bg-rose-700",
  "Audio": "bg-violet-500",
  "Handheld": "bg-fuchsia-500",
  "Interactive Installation": "bg-sky-500",
  "Unity Tool": "bg-red-700",
  "Misc": "bg-neutral-500"
};


export default function ProjectsPreview({projects} : any) {
  if (!projects || projects.length === 0) {
    return null;
  }

  const duplicatedProjects = [...projects, ...projects, ...projects, ...projects];

  return (
    <section id="projects" className="w-full overflow-hidden relative group">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
      <div className="flex">
        <div className="flex w-max animate-scroll-x">
          {duplicatedProjects.map((project: any, index: number) => (
            <div key={`${project.id}-${index}`} 
            className="w-[450px] p-4 flex-shrink-0">
              <Link href={`/portfolio/${project.id}`} className="block h-full">
                <Card
                  className="h-full flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20"
                >
                  <CardHeader className="flex-grow flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.properties?.genre?.map((tag : string) => (
                        <Badge key={tag} variant="secondary"
                        className={cn(genreColors[tag] || "bg-gray-500", "text-white")}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="relative h-60 w-full mt-4">
                      <Image
                        src={"/images/" + project.thumbnailUrl}
                        alt={`Showcase image for ${project.title}`}
                        fill
                        className="object-cover rounded-md"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    </div>
                    <div className="flex justify-end items-center gap-2 text-sm text-muted-foreground mt-4 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{project.releaseDate}</span>
                    </div>
                      <CardTitle className="font-headline mt-4">{project.title}</CardTitle>
                    <CardDescription className="mt-2 flex-grow">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-wrap gap-2">
                        {project.properties?.skills?.map((tag : string) => (
                          <Badge key={tag} variant="secondary"
                          className={cn(skillColors[tag] || "bg-gray-500", "text-white")}>
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {(project.releaseType === 'steam' || project.releaseType === 'web') && (
                        <div className="flex gap-2">
                            {project.releaseType === 'steam' && (
                                <div className="bg-blue-800 p-2 rounded-full shadow-lg" title="Released on Steam">
                                    <Image 
                                      width={20}
                                      height={20}
                                      src="/steam-logo.svg" 
                                      alt="steam icon" />
                                </div>
                            )}
                            {project.releaseType === 'web' && (
                                <div className="bg-blue-600 text-white p-2 rounded-full shadow-lg" title="Playable on Web">
                                    <Globe className="w-5 h-5" />
                                </div>
                            )}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
