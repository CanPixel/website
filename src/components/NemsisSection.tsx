'use client';

// import MusicProjectCard from './music-project-card';
import { ScrollArea } from './ui/scroll-area';

export default function NemsisSection() {
  return (
    <div className="relative rounded-lg border-2 border-primary p-8 pt-12">
        <h2 className="absolute -top-5 left-1/2 -translate-x-1/2 bg-background px-4 font-headline text-4xl font-bold tracking-tighter text-primary">
            NEMSIS
        </h2>
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Alternative Rock - Indie band with high energy.
        </p>
        
        <ScrollArea className="h-[40rem] rounded-md border p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex justify-center">
                <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/artist/3MPnL7QqlX6t93o5fSme1y?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
        </ScrollArea>
    </div>
  );
}
