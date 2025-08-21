
'use client';

import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Youtube } from 'lucide-react';
import Image from 'next/image';

const youtubeVideos = [
    {
        id: '3K_cHy222UU',
        title: 'Mixed-Media Meta Format',
    },
    {
        id: 'LbaBm_RMRV8',
        title: 'Narrative Breakcore with Glitchy elements',
    },
    {
        id: 'PuvYd9OPqOY',
        title: 'An intro without a movie',
    },
    {
        id: '_9Q2uGL0_Po',
        title: '4 GoPro angles, 4 days of editing, 225 BPM',
    }
]

export default function CannemenSection() {
  return (
    <div className="relative rounded-lg border-2 border-sky-500 p-8 pt-12">
        <h2 className="absolute -top-5 left-1/2 -translate-x-1/2 bg-background px-4 font-headline text-4xl font-bold tracking-tighter text-sky-400">
            CANNEMEN
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-card/50 border-sky-500/30 h-full">
              <CardContent className="p-6 text-center">
                <Image 
                    src="/images/ABOH_CAN.png"
                    alt="Can guitar avatar"
                    width={235}
                    height={235}
                    loading='lazy'
                    className='mx-auto shadow-lg'
                />
                <p className="text-md text-muted-foreground mt-6 max-w-3xl mb-2">
                    A showcase of my solo work, featuring a blend of electronic and acoustic elements, often with a visual or narrative component.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
             <Card className="bg-card/50 border-sky-500/30">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl font-bold text-center text-sky-400">Music Videos</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {youtubeVideos.map(video => (
                        <Card key={video.id} className="bg-card/80 border-sky-500/30 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-md text-sky-300">
                                    <Youtube className="w-5 h-5 text-red-500 flex-shrink-0"/>
                                    {video.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="aspect-video rounded-md overflow-hidden">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.id}`}
                                        title={video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                    </div>
                </CardContent>
            </Card>
          </div>
        </div>
    </div>
  );
}
