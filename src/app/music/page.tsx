import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlayCircle, PauseCircle, Music } from 'lucide-react';

import BlogPostCard from '@/components/blog-post-card';
import { posts as blogData } from "@/lib/museData";

export default function MusicPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl font-bold tracking-tighter text-primary">ZIGGURATH</h1>
        <p className="text-lg text-muted-foreground mt-2">Modern-Oriental Grungepop</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Featured Track</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-secondary/30 p-4 rounded-lg border border-border flex items-center gap-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-repeat bg-center opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
                <Music className="w-12 h-12 text-primary" />
                <div className="flex-grow">
                  <h3 className="font-bold text-lg">Echoes of the Soul</h3>
                  <p className="text-sm text-muted-foreground">ZIGGURATH</p>
                  <div className="w-full bg-muted-foreground/30 rounded-full h-1.5 mt-2">
                    <div className="bg-primary h-1.5 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <button className="text-primary hover:text-accent transition-colors">
                  <PlayCircle className="w-10 h-10" />
                </button>
              </div>
            </CardContent>
          </Card>
          <Card className="mt-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Bio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                With a punk/metal ethos, ZIGGURATH channels rebellious energy into a sound that is both modern and ancient. We craft sonic realms that are mysterious, philosophical, and unapologetically meta, inviting listeners into a pluralistic, soulful experience.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Visuals</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden group">
                  <Image
                    src={`https://placehold.co/400x400.png`}
                    alt={`Concert visual ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="concert punk"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                   <div className="absolute inset-0 bg-repeat bg-center opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
