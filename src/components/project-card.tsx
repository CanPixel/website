import Link from "next/link";
import Image from "next/image";
import type { blogData } from "@/lib/blogData"; //missing projects
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SkillBadge from "./skill-badge";
import { Calendar, Globe } from "lucide-react";

const SteamIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-5 h-5 text-white"
      fill="currentColor"
    >
      <path d="M12,0C5.373,0,0,5.373,0,12s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0z M12,2.182c5.42,0,9.818,4.398,9.818,9.818S17.42,21.818,12,21.818S2.182,17.42,2.182,12S6.58,2.182,12,2.182z M8.835,10.805c-1.204,0-2.18,0.976-2.18,2.18s0.976,2.18,2.18,2.18c1.204,0,2.18-0.976,2.18-2.18S10.039,10.805,8.835,10.805z M16.12,6.285L11.297,8.295c-0.13,0.054-0.234,0.158-0.288,0.288L9.001,13.406c-0.22,0.528,0.01,1.13,0.288,1.408l2.79,2.79c0.278,0.278,0.88,0.508,1.408,0.288l4.823-2.01c0.13-0.054,0.234-0.158,0.288-0.288l2.01-4.823c0.22-0.528-0.01-1.13-0.288-1.408l-2.79-2.79C17.25,6.295,16.648,6.065,16.12,6.285z M14.774,10.109l1.643,1.642c0.03,0.03,0.03,0.076,0,0.106l-1.206,2.89l-2.18-2.18l2.89-1.205C14.711,10.096,14.744,10.101,14.774,10.109z"/>
    </svg>
);


type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="group">
      <Card className="relative h-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 overflow-hidden">
        <CardHeader>
          <div className="relative aspect-video w-full overflow-hidden rounded-md">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardTitle className="font-headline text-2xl mb-2">{project.title}</CardTitle>
           <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Calendar className="w-4 h-4" />
            <span>{project.date}</span>
          </div>
          <p className="text-muted-foreground">{project.description}</p>
        </CardContent>
        <CardFooter className="relative">
          <div className="flex flex-wrap gap-2">
            {project.properties?.skills?.map((tech) => (
              <SkillBadge key={tech} technology={tech} />
            ))}
          </div>

           {(project.releaseType === 'steam' || project.releaseType === 'web') && (
            <div className="absolute bottom-4 right-4 z-10 flex gap-2">
                {project.releaseType === 'steam' && (
                    <div className="bg-blue-800 p-2 rounded-full shadow-lg" title="Released on Steam">
                        <SteamIcon />
                    </div>
                )}
                {project.releaseType === 'web' && (
                    <div className="bg-blue-600 text-white p-2 rounded-full shadow-lg" title="Playable on Web">
                        <Globe className="w-5 h-5" />
                    </div>
                )}
            </div>
        )}
        </CardFooter>
      </Card>
    </Link>
  );
}
