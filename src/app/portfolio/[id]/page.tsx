
'use client';

import Image from 'next/image';
import { Project, skillColors, platformColors, genreColors } from '@/data/projects';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import NavMenu from "@/components/navigation";
import { Button } from '@/components/ui/button';
import { Github, Calendar, Globe, ArrowLeft, Youtube } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ImageSlideshow } from '@/components/ImageSlideshow';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const SteamIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path fill="currentColor" d="M372.4 345.2c-7.4 0-14.8-1.5-21.1-4.5 -6.4-3-12.8-7.5-18.1-12.8 -5.4-5.4-9.8-11.7-12.8-18.1 -3-6.4-4.5-13.7-4.5-21.1 0-7.4 1.5-14.8 4.5-21.1 3-6.4 7.5-12.8 12.8-18.1 5.4-5.4 11.7-9.8 18.1-12.8 6.4-3 13.7-4.5 21.1-4.5 16.7 0 32.5 6.4 44.2 18.2 11.8 11.8 18.2 27.5 18.2 44.2 0 16.7-6.4 32.5-18.2 44.2 -11.8 11.8-27.5 18.2-44.2 18.2zm-12.4-118.9l-58.4 29.2c-15.3 7.6-26.6 22.1-31.5 39.1l-3.3 11.3c-2.4-12.9-7.2-24.8-14.3-35.1 -11.3-16.5-27.6-29-46.7-35.9l-12-4.4c16.5-12.1 36.4-18.9 57.2-18.9 20.3 0 39.7 6.6 55.4 18.3 1.9-1.3 3.8-2.5 5.7-3.6 15.6-9.1 32.8-13.8 50.4-13.8 2.3 0 4.6.1 6.9.3 -20.6-24.9-49.9-41.9-82.5-41.9 -34.5 0-66 18.1-84.1 45.4 -36.6 55.2-27.3 129.2 21.6 172.5l29.4 26.2c61.9-21.7 101.9-80.4 101.9-145.2 0-21.6-4.2-42.3-12.3-61.5zM211.2 419.5c-41.4 0-77-22.1-96.8-54.7l-29.2-25.9c-49.9-44.3-59.4-119.9-22-176.3 37.8-57 110.4-80.4 175.7-60.9 29.5 9 55.4 26.1 76.2 49.3 6.1 6.8 11.5 14.2 16.1 22.2 -23.1-9.9-48.5-15.3-75-15.3 -51.3 0-96.3 22-127.3 57.5 -27.6 31.6-44.1 72.4-44.1 116.7 0 24.5 6.3 47.7 17.5 68.1l20.4 36.3c10.3 18.2 28.6 30.9 49.9 33.6 2.5.3 5 .5 7.5.5z"/>
    </svg>
);

export default function ProjectDetailPage({ project }: { project: Project | null | undefined }) {
  if (project === undefined || project === null) {
    return null;
  }
  
  return (
    <div className="container mx-auto px-4 py-16">
      <NavMenu/>
      
      <div className="flex items-center justify-between gap-8 mt-8">
        <Button asChild variant="link" className="p-0 h-auto text-accent group-hover:underline flex-shrink-0 relative">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Realms
          </Link>
        </Button>

        <header className="text-center flex-grow">
          <h1 className={cn("font-headline text-5xl font-bold tracking-tighter mb-2 shiny-text", project.styling.textColor ? "" : "text-primary")}>{project.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {project.shortDescription}
          </p>
          {project.label && <Badge variant="outline" className="mt-4">{project.label}</Badge>}
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            {project.properties?.genre?.map((g: string) => (
                <Badge key={g} className={cn(genreColors[g] || 'bg-gray-400', 'text-white')}>
                {g}
                </Badge>
            ))}
          </div>
        </header>

        <Badge
          variant="outline"
          className={cn("p-2 px-3 whitespace-nowrap flex-shrink-0", project.styling.badgeBackgroundColor)}
          style={{
            borderColor: project.styling.borderColor,
            color: 'bg-white',
          }}
          >
            <Calendar className='me-2'/>
            {project.releaseDate ?? 'Coming Soon'}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
        <div className='md:col-span-2'>
          <Card className='overflow-hidden border-2 shadow-lg rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl' style={{borderColor: project.styling.borderColor, boxShadow: `0 10px 25px -5px ${project.styling.borderColor}30, 0 8px 10px -6px ${project.styling.borderColor}20`}}>
            <div className="relative aspect-video w-full"> 
              <Image 
                src={"/images/" + project.thumbnailUrl}
                alt={project.title}
                fill
                className="object-contain"/>
              <div className="absolute inset-0 bg-repeat bg-center opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
            </div>
          </Card>

          <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 mt-8 space-y-6">
            <h3 className="font-headline text-2xl font-bold mb-4 text-accent">Technical Details</h3>
            <span className="text-1xl">
            <p>
                The game was developed in Unity, leveraging C# for all gameplay logic, AI behavior, and system management. One of the core technical challenges was creating an efficient procedural generation system for the galaxy map. I used a combination of Perlin noise for star distribution and a custom algorithm to ensure playable paths and interesting clusters of systems. This allows for a unique galaxy in every playthrough, greatly enhancing replayability.
            </p>
            <p>
                For the real-time combat, I implemented a component-based ship system, allowing for easy customization of weapons, shields, and engines. The UI was built using Unity's UGUI system, with a focus on creating a clean, readable interface that evokes classic sci-fi tropes while remaining modern and intuitive.
            </p>
            </span>
          </div>

          {project.properties?.steamUrl && (
            <div className="mt-8">
              <iframe src={project.properties.steamUrl} width="100%" height="190"></iframe>
            </div>
          )}
        </div>

        <aside className='md:col-span-1 space-y-8'>
            <Card style={{
                backgroundColor: project.styling.backgroundColor,
                color: project.styling.textColor,
                borderColor: project.styling.borderColor,
                fontFamily: project.styling.fontFamily,
            }} className="border-2">
                <CardHeader>
                    <CardTitle>About this Realm</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription style={{
                        color: project.styling.textColor, opacity: 0.9 }
                        }>
                        {project.description}
                    </CardDescription> 
                </CardContent>
            </Card>
             <Card style={{
                backgroundColor: project.styling.backgroundColor,
                color: project.styling.textColor,
                borderColor: project.styling.borderColor,
                fontFamily: project.styling.fontFamily,
            }} className="border-2 p-6">
              <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.properties?.skills?.map((tech : string) => (
                  <Badge key={tech} className="bg-black text-accent border-accent/30">{tech}</Badge>
                ))}
              </div>
            </Card>
            
             {project.properties?.platforms && project.properties.platforms.length > 0 && (
            <Card style={{
              backgroundColor: project.styling.backgroundColor,
              color: project.styling.textColor,
              borderColor: project.styling.borderColor,
              fontFamily: project.styling.fontFamily,
          }} className="border-2 p-6">
                <h3 className="text-2xl font-bold mb-4">Platforms</h3>
                <div className="flex flex-wrap gap-2">
                {project.properties.platforms.map((platform: string) => (
                    <Badge key={platform} className="bg-black text-accent border-accent/30">
                    {platform}
                    </Badge>
                ))}
                </div>
            </Card>
            )}
            {(project.url || project.properties?.repoLink) && (
            <Card style={{
              backgroundColor: project.styling.backgroundColor,
              color: project.styling.textColor,
              borderColor: project.styling.borderColor,
              fontFamily: project.styling.fontFamily,
          }} className="border-2 p-6">
              <h3 className="text-2xl font-bold mb-4">Project Links</h3>
              <div className="space-y-4">
                  {project.releaseType === 'steam' && project.url && (
                    <Button asChild className="w-full bg-[#1b2838] hover:bg-[#2c435a] text-white">
                        <Link href={project.url} target="_blank" rel="noopener noreferrer">
                            <SteamIcon className="mr-2 h-5 w-5" />
                            View on Steam
                        </Link>
                    </Button>
                  )}
                  {project.releaseType !== 'steam' && project.url && (
                      <Button asChild className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80">
                          <Link href={project.url} target="_blank" rel="noopener noreferrer">
                              <Globe className="mr-2 h-4 w-4" />
                              Live Demo
                          </Link>
                      </Button>
                  )}
                  {project.properties?.repoLink && (
                      <Button asChild variant="outline" className="w-full text-foreground hover:bg-accent hover:text-accent-foreground">
                          <Link href={project.properties.repoLink} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              Source Code
                          </Link>
                      </Button>
                  )}
              </div>
            </Card>
          )}
        </aside>
    </div>

    {project.styling.slideshowImages && project.styling.slideshowImages.length > 0 && (
      <div className="mt-16">
        <h3 className="font-headline text-3xl font-bold mb-4 text-accent text-center">Gallery</h3>
        <div className="relative">
          <ImageSlideshow images={project.styling.slideshowImages}/>
        </div>
      </div>
    )}

    {project.styling.youtube && project.styling.youtube.length > 0 && (
      <div className="mt-16">
        <h1 className="font-headline text-3xl font-bold text-accent mb-4 text-center">Videos</h1>
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {project.styling.youtube.map((video, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card style={{
                        backgroundColor: project.styling.backgroundColor,
                        color: project.styling.textColor,
                        borderColor: project.styling.borderColor,
                        fontFamily: project.styling.fontFamily,
                    }} 
                    className="w-full border-2 hover:scale-105 transition-transform">
                        <CardContent className="p-4">
                            <div className="aspect-video rounded-md overflow-hidden">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video}`}
                                    title="Game Trailer"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white hover:text-primary" />
            <CarouselNext className="text-white hover:text-primary" />
          </Carousel>
      </div>
    )}

    </div>
  );
}
