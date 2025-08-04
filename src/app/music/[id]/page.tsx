
import Image from "next/image";
import { musicProjects } from "@/data/music";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";

export default function MusicProjectPage({ params }: { params: { id: string } }) {
  const project = musicProjects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      <header className="mb-12 text-center">
        <Badge variant="secondary" className="mb-4">{project.category}</Badge>
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">{project.title}</h1>
      </header>

      <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-12 shadow-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          data-ai-hint={project.aiHint}
          className="object-cover"
        />
      </div>

       <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground/90">
        <p>{project.description}</p>
      </div>

      {project.spotifyUrl && (
          <div className="mt-8">
            <iframe
              style={{ borderRadius: '12px' }}
              src={project.spotifyUrl}
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        )}
    </article>
  );
}

    