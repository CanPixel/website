"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
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
import { skillColors, genreColors } from "../data/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProjectsPreview({ projects }: any) {
  if (!projects || projects.length === 0) {
    return null;
  }

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section id="projects" className="w-full relative group">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          align: "center",
          loop: true,
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-4">
          {projects.map((project: any, index: number) => (
            <CarouselItem
              key={`${project.id}-${index}`}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Link href={`/portfolio/${project.id}`} className="block h-full">
                  <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20">
                    <CardHeader className="flex-grow flex flex-col">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.properties?.genre?.map((tag: string) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className={cn(
                              genreColors[tag] || "bg-gray-500",
                              "text-white"
                            )}
                          >
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
                      <CardTitle className="font-headline mt-4">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="mt-2 flex-grow">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div className="flex flex-wrap gap-2">
                          {project.properties?.skills?.map((tag: string) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className={cn(
                                skillColors[tag] || "bg-gray-500",
                                "text-white"
                              )}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {(project.releaseType === "steam" ||
                          project.releaseType === "web") && (
                          <div className="flex gap-2">
                            {project.releaseType === "steam" && (
                              <div
                                className="bg-blue-800 p-2 rounded-full shadow-lg"
                                title="Released on Steam"
                              >
                                <Image
                                  width={20}
                                  height={20}
                                  src="/steam-logo.svg"
                                  alt="steam icon"
                                />
                              </div>
                            )}
                            {project.releaseType === "web" && (
                              <div
                                className="bg-blue-600 text-white p-2 rounded-full shadow-lg"
                                title="Playable on Web"
                              >
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20" />
      </Carousel>
    </section>
  );
}
