'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { ProjectStyling } from '@/data/projects';
import SimpleMidiPlayer from "@/components/SimpleMidiPlayer";

export default function OrchestratedOstSection() {
  return (
    <div className="relative rounded-lg border-2 border-emerald-600 p-8 pt-12 bg-background/80">
      <h2 className="absolute -top-5 left-1/2 text-center -translate-x-1/2 bg-background px-4 font-headline text-3xl font-bold tracking-tighter text-emerald-500">
        Orchestrated OST
      </h2>

      <div className="text-center mb-8">
        <Image
          src="/images/epiciniumbanner.png"
          alt="Epicinium logo"
          className="mb-1 w-auto mt-0 p-0 mx-auto"
          width={800}
          height={400}
          loading="lazy"
        />
        <p className="text-md text-muted-foreground font-bold max-w-3xl mx-auto mb-2">
          Epicinium - An Environmental War Strategy Game
        </p>
        <Badge className="text-center mx-auto text-sm bg-emerald-600/20 text-emerald-300 border-emerald-500/50">
          Music Composition & Original OST
        </Badge>
        <br></br>
        <Badge className="text-center mt-2 mx-auto text-[12px] bg-sky-600/20 text-sky-300 border-sky-500/50">
          FL Studio 12
        </Badge>
        <Badge className="text-center mx-auto text-[12px] bg-indigo-600/20 text-indigo-300 border-indigo-500/50">
          Guitar Pro 5
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="bg-card/50 backdrop-blur-sm border-emerald-600/30">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-emerald-400">About the Soundtrack</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The orchestral soundtrack for the nature-based strategy game Epicinium. The music chronologically features the four in-game seasons composed into a single, evolving musical movement. <br></br>The compositions reflect the game's core themes of environmental impact and the cyclical nature of life and decay.
                <br/><br/>
                Arranged by Can Ur & Daan Mulder. <br></br>Composed, Mixed & Mastered by Can Ur.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-emerald-600/30">
            <div className="w-[90%] mt-4 mb-1 aspect-square mx-auto rounded-md overflow-hidden">
                <iframe
                    src={`https://www.youtube.com/embed/2oVHkdFOz5w`}
                    title="YouTube snippet"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full mx-auto"
                ></iframe>
            </div>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-emerald-600/30">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-emerald-400">View on Steam</CardTitle>
            </CardHeader>
            <CardContent>
                <iframe 
                    src="https://store.steampowered.com/widget/1442600/" 
                    width="100%" 
                    height="190"
                    loading="lazy"
                ></iframe>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1 space-y-8">
           <div className="flex justify-center mb-4">
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white group w-full">
                <Link href="/portfolio/epicinium">
                  Explore The Realm
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
          <Card className="bg-card/50 backdrop-blur-sm border-emerald-600/30">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-emerald-400">Game Visuals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="relative aspect-square rounded-lg group">
                  <Image
                    src="/images/epicinium.png"
                    alt="Epicinium game visual"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                </div>
                <div className="relative overflow-hidden">
                    <Image
                        src="/images/Episteamium.gif"
                        alt="Epicinium game gif"
                        width={800}
                        height={400}
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                    />
                </div>

                <div className="relative overflow-hidden">
                  <SimpleMidiPlayer id={'epiciniumseasons'} />
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
