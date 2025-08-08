
'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NemsisSection() {
  return (
    <div className="relative rounded-lg border-2 border-orange-500 p-8 pt-12 bg-background/80">
      <h2 className="absolute -top-5 left-1/2 -translate-x-1/2 bg-background px-4 font-headline text-4xl font-bold tracking-tighter text-orange-500">
          NEMSIS
      </h2>
      <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
          Postmodern Oriental Grungepop
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-orange-500/30">
                <CardHeader>
                <CardTitle className="font-headline text-2xl text-orange-400">Featured Music</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                        <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/artist/3MPnL7QqlX6t93o5fSme1y?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                </CardContent>
            </Card>
          <Card className="mt-8 bg-card/50 backdrop-blur-sm border-orange-500/30">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-orange-400">Bio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                NEMSIS is a young rock band that bites you right back! Forged in Haarlem a couple of years ago, a strong bond was created that can be seen and heard. This results in an extraordinary mix of raw guitars, vivid vocals and lunatic sounds where you can't put a finger on where they come from. They call it: Modern-Oriental Grungepop. 3v12 NH (a Dutch multimedia platform for pop music) called them ‘epic’, ‘original’ and ‘energetic’, after their performance in the finals of the Rob Acda Awards 2018, where they eventually won all the prizes. This show plus shows at Young Art festival, Indie In Town and as the opening act on the grand stage of Bevrijdingspop 2018– the reward for winning the Rob Acda Awards- resulted in a buzz, that gets louder with every performance. After a long wait the debut EP "Sugar, Why so Bitter?" has finally reached the surface of the earth, during the successful releaseshow on June 7th in Bitterzoet, Amsterdam!
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="bg-card/50 backdrop-blur-sm border-orange-500/30">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-orange-400">Visuals</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden group">
                  <Image
                    src={`https://placehold.co/400x400.png`}
                    alt={`Nemsis band visual ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="rock band"
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
