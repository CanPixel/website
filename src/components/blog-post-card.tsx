import Link from "next/link";
import Image from "next/image";
import type { MusicProject } from "@/lib/blogData";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Music } from "lucide-react";

type MusicProjectCardProps = {
  project: MusicProject;
};

export default function MusicProjectCard({ project }: MusicProjectCardProps) {
  return (
    <div className="group">
      <Card className="h-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
        <CardHeader>
          <div className="relative aspect-video w-full overflow-hidden rounded-md mb-4">
             <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <CardTitle className="font-headline text-2xl flex items-center gap-2">
            <Music className="w-6 h-6 text-accent" />
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription>{project.description}</CardDescription>
            {project.spotifyUrl && (
              <div className="mt-4">
                <iframe
                  width="100%"
                  height="166"
                  allow="autoplay"
                  src={project.spotifyUrl}
                ></iframe>
              </div>
            )}
        </CardContent>
         <CardFooter>
            <Button asChild variant="link" className="p-0 text-accent">
                <Link href={`/music/${project.id}`}>
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
