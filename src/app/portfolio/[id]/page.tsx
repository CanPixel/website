'use client';

import Image from 'next/image';
import { Project } from '@/data/projects';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import NavMenu from "@/components/navigation";
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProjectDetailPage({ project }: { project: Project | null | undefined }) {
  if (project === undefined || project === null) {
    console.error("Project data is missing");
    return <div>Error loading project data.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <NavMenu/>

      <Button asChild variant="link" className="p-0 h-auto mt-4 text-accent group-hover:underline self-start">
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Return
        </Link>
      </Button>

       <h1 className="mt-12 font-headline text-5xl font-bold tracking-tighter mb-2 text-primary">{project.title}</h1>
       <Badge variant="outline" className="mb-8">{project.label}</Badge>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className='md:col-span-2'>
                 <Card className='overflow-hidden border-2' style={{borderColor: project.styling.borderColor}}>
                    <div className="relative aspect-video w-full"> 
                        <Image 
                            src={"/images/" + project.thumbnailUrl}
                            alt={project.title}
                            fill
                            className="object-cover"/>
                         <div className="absolute inset-0 bg-repeat bg-center opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
                    </div>
                 </Card>
            </div>
            <div className='md:col-span-1'>
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
            </div>
       </div>
    </div>
  );
}
