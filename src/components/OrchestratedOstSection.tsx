'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export default function OrchestratedOstSection() {
  return (
    <div className="relative rounded-lg border-2 border-emerald-600 p-8 pt-12 bg-background/80">
      <h2 className="absolute -top-5 left-1/2 text-center -translate-x-1/2 bg-background px-4 font-headline text-3xl font-bold tracking-tighter text-emerald-500">
        Orchestrated OST
      </h2>
      <Image
        src="images/epiciniumbanner.png"
        alt={`Epicinium logo`}
        className='mb-1 w-auto mt-0 p-0 mx-auto'
        width={800}
        height={400}
      />
      <p className="text-center text-md text-muted-foreground font-bold max-w-3xl mx-auto mb-2">
          Epicinium - An Environmental War Strategy Game
      </p>
      <div className="justify-center text-center mx-auto mt-6">
        <Badge className='text-center mx-auto text-sm'>
          Music Composition & Original OST
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="mt-8 bg-card/50 backdrop-blur-sm border-emerald-600/30">
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
        </div>

        <div className="aspect-video relative rounded-lg shadow-md border border-border">
        <Image
          src="images/epicinium_soundtrack.png"
          alt={`Epicinium banner image`}
          width={800}
          height={800}
        />
      </div>

        <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="w-full flex justify-center">
             <div className="w-[646px]">
              <iframe src="https://store.steampowered.com/widget/1442600/" width="100%" height="190"></iframe>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card className="bg-card/50 backdrop-blur-sm border-emerald-600/30">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-emerald-400">Game Visuals</CardTitle>
            </CardHeader>
            <div className="relative aspect-square rounded-lg group mb-8 mx-auto w-1/2">
              <Link href="/portfolio/epicinium"><Image
                src={`/images/epicinium.png`}
                alt={`Epicinium game visual`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              /></Link>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative rounded-lg mx-auto">
              <Image
                src={`/images/Episteamium.gif`}
                alt={`Epicinium game gif`}
                width={800}
                height={400}
                className="object-cover transition-transform duration-300 hover:scale-105 mb-8"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
