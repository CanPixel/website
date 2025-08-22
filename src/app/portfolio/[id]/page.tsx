'use client';

import Image from 'next/image';
import { Project, ProjectStyling, genreColors, projectStatusColors } from '../../../data/projects';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import NavMenu from "@/components/navigation";
import { Button } from '@/components/ui/button';
import { Github, Calendar, Globe, ArrowLeft, ArrowUp, ArrowDown,
  Youtube, FileSearch, Download, Joystick, Newspaper, AudioLines, Wrench,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ImageSlideshow } from '@/components/ImageSlideshow';
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import React, { useState, useRef, useEffect } from 'react';

import OrbitalResonance from '@/components/portfolio/OrbitalResonance';

const SteamIcon = (props: React.SVGProps<SVGSVGElement>) => (
<svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 25 3 C 13.59 3 4.209375 11.680781 3.109375 22.800781 L 14.300781 28.529297 C 15.430781 27.579297 16.9 27 18.5 27 L 18.550781 27 C 18.940781 26.4 19.389375 25.649141 19.859375 24.869141 C 20.839375 23.259141 21.939531 21.439062 23.019531 20.039062 C 23.259531 15.569063 26.97 12 31.5 12 C 36.19 12 40 15.81 40 20.5 C 40 25.03 36.430937 28.740469 31.960938 28.980469 C 30.560938 30.060469 28.750859 31.160859 27.130859 32.130859 C 26.350859 32.610859 25.6 33.059219 25 33.449219 L 25 33.5 C 25 37.09 22.09 40 18.5 40 C 14.91 40 12 37.09 12 33.5 C 12 33.33 12.009531 33.17 12.019531 33 L 3.2792969 28.519531 C 4.9692969 38.999531 14.05 47 25 47 C 37.15 47 47 37.15 47 25 C 47 12.85 37.15 3 25 3 z M 31.5 14 C 27.92 14 25 16.92 25 20.5 C 25 24.08 27.92 27 31.5 27 C 35.08 27 38 24.08 38 20.5 C 38 16.92 35.08 14 31.5 14 z M 31.5 16 C 33.99 16 36 18.01 36 20.5 C 36 22.99 33.99 25 31.5 25 C 29.01 25 27 22.99 27 20.5 C 27 18.01 29.01 16 31.5 16 z M 18.5 29 C 17.71 29 16.960313 29.200312 16.320312 29.570312 L 19.640625 31.269531 C 20.870625 31.899531 21.350469 33.410625 20.730469 34.640625 C 20.280469 35.500625 19.41 36 18.5 36 C 18.11 36 17.729375 35.910469 17.359375 35.730469 L 14.029297 34.019531 C 14.289297 36.259531 16.19 38 18.5 38 C 20.99 38 23 35.99 23 33.5 C 23 31.01 20.99 29 18.5 29 z"/></svg>
);
const WindowsIcon = (props: React.SVGProps<SVGSVGElement>) => (
<svg fill="#FFFFFF" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <title>microsoft_windows</title>
  <rect width="24" height="24" fill="none"/>
  <path d="M3,12V6.75L9,5.43v6.48L3,12M20,3v8.75L10,11.9V5.21L20,3M3,13l6,.09V19.9L3,18.75V13m17,.25V22L10,20.09v-7Z"/>
</svg>
);

const componentsMap = {
  OrbitalResonance: OrbitalResonance,
};
const renderComponent = (compName: string | undefined) => {
  if (!compName) {
    return null;
  }
  return componentsMap[compName as keyof typeof componentsMap];
}

const iconMap = {
  Globe: Globe,
  Github: Github,
  Joystick: Joystick,
  Steam: SteamIcon,
  Newspaper: Newspaper,
  AudioLines: AudioLines,
  Wrench: Wrench,
  Download: Download,
  Windows: WindowsIcon
};
const renderIcon = (iconName: string | undefined) => {
  if (!iconName) {
    return 'Globe';
  }
  const IconComponent = iconMap[iconName as keyof typeof iconMap];
  return IconComponent ? <IconComponent className='mr-2 h-5 w-5' size={16} /> : null;
}

export default function ProjectDetailPage({ project }: { project: Project | null | undefined }) {
  if (project === undefined || project === null) {
    return null;
  }

  const statusColor = project.status ? projectStatusColors[project.status] : 'bg-white';
  const statusClasses = cn(
    'p-2 px-3 whitespace-nowrap flex-shrink-0 text-[16px] mb-0',
    'border',
    `border-${statusColor}`,
    `bg-${statusColor}`,
    `text-${statusColor}`
  );

  const technicalDesc = project.technicalDesc ? project.technicalDesc : ''; 

  const [isExpanded, setIsExpanded] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);
  const MAX_HEIGHT = 400;

  const handleReadMoreClick = () => {
    setIsExpanded(true);
  };

  const handleCollapseClick = () => {
    setIsExpanded(false);
  };

  useEffect(() => {
    if (textRef.current) {
      setIsTruncated(textRef.current.scrollHeight > MAX_HEIGHT);
    }
  }, [technicalDesc]);

  useEffect(() => {
    if (textRef.current) {
      setIsTruncated(textRef.current.scrollHeight > MAX_HEIGHT && !isExpanded);
    }
  });

  return (
    <div className="container mx-auto mt-4 px-4 py-16">
      <NavMenu/>
      
      <div className="mt-8 flex flex-col items-center">
        <div className="w-full grid grid-cols-[auto_1fr_auto] md:grid-cols-3 items-center gap-4 mb-4">
            <Button asChild variant="link" className="p-0 h-auto text-accent group-hover:underline flex-shrink-0 relative hover:scale-[1.1] hover:text-gold-600 transition-transform justify-self-start">
                <Link href="/projects">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Realms
                </Link>
            </Button>

            <div className="hidden md:block"></div> {/* Spacer for desktop */}
            
            <Badge
                variant="outline"
                className={cn("p-2 px-3 whitespace-nowrap justify-self-end", project.styling.badgeBackgroundColor)}
                style={{
                    borderColor: project.styling.borderColor,
                }}>
                <Calendar className='me-2'/>
                {project.releaseDate ?? 'Coming Soon'}
            </Badge>
        </div>

        <header className="text-center w-full">
            <h1 className={cn("font-headline text-5xl md:text-6xl font-bold tracking-tighter mb-2 shiny-text", project.styling.textColor ? "" : "text-primary")}>
                {project.title}
            </h1>
            <p className="text-md text-muted-foreground/80 max-w-3xl mx-auto font-headline">
                {project.shortDescription}
            </p>
            {project.label && <Badge variant="outline" className="mt-4">{project.label}</Badge>}
            <div className="flex flex-wrap gap-2 justify-center mt-2">
                {project.properties?.genre?.map((g: string) => (
                    <Badge key={g} className={cn(genreColors[g] || 'bg-gray-400')}>
                        {g}
                    </Badge>
                ))}
            </div>
        </header>
      </div>
      
      <Badge
        variant="outline"
        className={statusClasses}>
          {project.status}
      </Badge>
      
      { project.motto ? 
      (<Card style={{
                color: project.styling.textColor,
                fontFamily: project.styling.fontFamily,
            }} className="border-none p-0 mb-0 mt-3">
                    <CardDescription 
                    className='text-[16px] text-gray-300 text-center my-0 p-0'
                    >
                        "{project.motto}"
                    </CardDescription> 
            </Card>) : <></>
      }

      {project.styling.banner ? ( 
        <div className="w-full md:w-[70%] mx-auto relative overflow-hidden mt-4 border border-2 shadow-lg transition-all duration-300 hover:shadow-2xl" 
        style={{borderColor: project.styling.borderColor, boxShadow: `0 10px 25px -5px ${project.styling.borderColor}30, 0 8px 10px -6px ${project.styling.borderColor}20`}}>
          <Image src={'/' + project.styling.banner} alt="Banner" 
          width={1920} height={1080} layout="responsive" objectFit="cover" />
        </div>
      ) : <></>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
        <div className='md:col-span-2'>
          <Card className='overflow-hidden border-2 shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl' style={{borderColor: project.styling.borderColor, boxShadow: `0 10px 25px -5px ${project.styling.borderColor}30, 0 8px 10px -6px ${project.styling.borderColor}20`}}>
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
            
            <div ref={textRef} className={cn("relative overflow-hidden transition-all duration-500 ease-in-out", { [`max-h-[400px]`]: !isExpanded && isTruncated })}>
              <pre className="text-sm whitespace-pre-wrap leading-relaxed">
                {project.technicalDesc ? (
                  <div dangerouslySetInnerHTML={{ __html: technicalDesc }}></div>
                ) : (<>
                  The game was developed in Unity, leveraging C# for all gameplay logic, AI behavior, and system management.<br></br>
                  One of the core technical challenges was creating an efficient procedural generation system for the galaxy map.
                  <br></br>I used a combination of Perlin noise for star distribution and a custom algorithm to ensure<br></br>
                  playable paths and interesting clusters of systems. This allows for a unique galaxy in every playthrough,<br></br>
                  greatly enhancing replayability.
                  <br></br><br></br>
                  For the real-time combat, I implemented a component-based ship system, <br></br>
                  allowing for easy customization of weapons, shields, and engines. <br></br>
                  The UI was built using Unity's UGUI system, with a focus on creating a clean, readable interface that evokes<br></br>
                  classic sci-fi tropes while remaining modern and intuitive.
                </>)}
              </pre>
              {!isExpanded && isTruncated && <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10"></div>}
            </div>
            
            {!isExpanded && isTruncated && (
              <Button onClick={handleReadMoreClick} 
              className="mt-4 w-50 border border-2 rounded mx-auto font-headline hover:scale[1.02] transition-transform"
              style={{
                color: project.styling.textColor,
                borderColor: project.styling.borderColor, 
                backgroundColor: project.styling.backgroundColor,
                boxShadow: `0 10px 25px -5px ${project.styling.borderColor}30, 0 8px 10px -6px ${project.styling.borderColor}20`
              }}
              >
                Read More
                <ArrowDown className="mr-2 h-4 w-4" />
              </Button>
            )}

            {isExpanded && (
              <Button onClick={handleCollapseClick} 
              className="mt-4 w-50 border border-2 rounded mx-auto font-headline hover:scale[1.02] transition-transform"
              style={{
                color: project.styling.textColor,
                borderColor: project.styling.borderColor, 
                backgroundColor: project.styling.backgroundColor,
                boxShadow: `0 10px 25px -5px ${project.styling.borderColor}30, 0 8px 10px -6px ${project.styling.borderColor}20`
              }}>
                Collapse
                <ArrowUp className="mr-2 h-4 w-4" />
              </Button>
            )}

            {!isTruncated && !isExpanded && textRef.current && textRef.current.scrollHeight > MAX_HEIGHT && (
              <Button onClick={() => setIsTruncated(true)}></Button>
            )}
        </div>

        {project.properties?.steamUrl && (
          <div className="mt-8 hidden md:block">
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
              <CardHeader className='flex justify-between items-center'>
                <CardTitle>About this Realm</CardTitle>
                <span className={cn('text-2xl font-bold mb-4 text-right', project.styling.textColor)}> 𒆠</span>
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
            <div className='flex justify-between items-center'>
              <span className="text-2xl font-bold mb-4">Tech Stack</span>
              <span className={cn('text-2xl font-bold mb-4 text-right', project.styling.textColor)}> 𒌄</span>
            </div>

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
                <div className='flex justify-between items-center'>
                  <span className="text-2xl font-bold mb-4">Platforms</span>
                  <span className={cn('text-2xl font-bold mb-4 text-right', project.styling.textColor)}> 𒆠𒃲</span>
                </div>
                <div className="flex flex-wrap gap-2">
                {project.properties.platforms.map((platform: string) => (
                    <Badge key={platform} className="bg-black text-accent border-accent/30">
                    {platform}
                    </Badge>
                ))}
                </div>
            </Card>
            )}

          {(project.styling.links) && (
            <Card style={{
              backgroundColor: project.styling.backgroundColor,
              color: project.styling.textColor,
              borderColor: project.styling.borderColor,
              fontFamily: project.styling.fontFamily,
          }} className="border-2 p-6">
              <h3 className="text-2xl font-bold mb-4">Links</h3>
              <div className="space-y-4">
              {project.styling.links.map((link, idx) => (
                (link.style != null) ?
                <Button asChild 
                key={idx}
                className={cn("w-full", link.style)}>
                  <Link href={link.url} target="_blank" rel="noopener noreferrer">
                    {renderIcon(link.icon)}
                    {link.name}
                  </Link>
                </Button>
              :
              <Button asChild
              key={idx} 
              className="w-full bg-black hover:bg-gray-400 text-white border hover:border-2"
              style={{
                borderColor: project.styling.borderColor,
                fontFamily: project.styling.fontFamily,
              }}>
                <Link href={link.url} target="_blank" rel="noopener noreferrer">
                  {renderIcon(link.icon)}
                  {link.name}
                </Link>
              </Button>
              ))}
              </div>
            </Card>
          )}

          {project.styling.document && (
            <Card style={{
              backgroundColor: project.styling.backgroundColor,
              color: project.styling.textColor,
              borderColor: project.styling.borderColor,
              fontFamily: project.styling.fontFamily,
          }} className="border-2 p-6">
              <div className='flex justify-between items-center'>
                <span className="text-2xl font-bold mb-4">Documents</span>
                <span className={cn('text-2xl font-bold mb-4 text-right', project.styling.textColor)}> 𒁾</span>
              </div>

              <div className="space-y-4">
                <Button asChild className="w-full bg-[#2c435a] hover:bg-[#436389] text-white">
                    <Link href={"/" + project.styling.document} 
                    target="_blank" rel="noopener noreferrer">
                        {project.styling.document.substring(project.styling.document.lastIndexOf('/') + 1)}
                        <FileSearch className="mr-2 h-5 w-5" />
                    </Link>
                </Button>

                <object data={"/" + project.styling.document} width='100%' height='400px' className="hidden md:block"></object>
              </div>
            </Card>
          )}

          {project.styling.controls && project.styling.controls.length > 0 && (
            <Card style={{
                backgroundColor: project.styling.backgroundColor,
                color: project.styling.textColor,
                borderColor: project.styling.borderColor,
                fontFamily: project.styling.fontFamily,
            }} className="border-2">
              <CardHeader>
                <CardTitle>Controls</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full table-sm border-collapse">
                    <thead>
                      <tr>
                        <th className={cn('border-b border-accent/30 px-4 py-2 text-left text-sm font-semibold', 
                        project.styling.borderColor
                        )}>Key</th>
                        <th className={cn('border-b border-accent/30 px-4 py-2 text-left text-sm font-semibold', 
                        project.styling.borderColor
                        )}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.styling.controls.map((control, index) => (
                        <tr key={index}>
                          <td className={cn('border-b border-gray-700/50 px-4 py-2 font-mono text-sm', 
                          project.styling.textColor
                          )}>{control.key}</td>
                          <td className={cn('border-b border-gray-700/50 px-4 py-2 text-sm', 
                          project.styling.textColor
                          )}>{control.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}
        </aside>
    </div>

    {project.styling.sections && project.styling.sections.length > 0 && (
      <div>
      {project.styling.sections.map((section, idx) => {
        const ComponentToRender = renderComponent(section);
        return (
        <div key={idx} className="mt-10">
          {ComponentToRender && <ComponentToRender {...project.styling} />}
        </div>
        );
      })}
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
                    className="w-full border-2 scale-[0.92] hover:scale-[0.95] transition-transform">
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
            <CarouselPrevious className="text-white hover:text-accent hover:bg-blue-600" />
            <CarouselNext className="text-white hover:text-accent hover:bg-blue-600" />
          </Carousel>
      </div>
    )}
    {project.styling.videos && project.styling.videos.length > 0 && (
      <div className="mt-16">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {project.styling.videos.map((video, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card style={{
                        backgroundColor: project.styling.backgroundColor,
                        color: project.styling.textColor,
                        borderColor: project.styling.borderColor,
                        fontFamily: project.styling.fontFamily,
                    }} 
                    className="w-full border-2">
                        <CardContent className="py-6">
                            <div className="rounded-xl overflow-hidden">
                              <video controls loop width="600">
                                <source src={'/' + video} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            </div>
                        </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white hover:text-accent hover:bg-blue-600" />
            <CarouselNext className="text-white hover:text-accent hover:bg-blue-600" />
          </Carousel>
      </div>
    )}

    {project.styling.slideshowImages && project.styling.slideshowImages.length > 0 && (
      <div className="mt-16">
        <div className='flex justify-between items-center'>
          <span className={cn('text-2xl font-bold mb-4 text-gold-100/70', project.styling.textColor)}>𒀩</span>
          <span className="font-headline text-3xl font-bold mb-4 text-accent text-center">Gallery</span>
          <span className={cn('text-2xl font-bold mb-4 text-gold-100/70', project.styling.textColor)}>𒀩</span>
        </div>
        <div className="relative">
          <ImageSlideshow images={project.styling.slideshowImages}/>
        </div>
      </div>
    )}
    </div>
  );
}


