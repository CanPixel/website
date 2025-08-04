"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Play,
  Pause,
  Rewind,
  FastForward,
  Pyramid,
  Volume2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Calendar, Globe } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { skillColors, genreColors } from "@/data/projects";
import { Progress } from "@/components/ui/progress";

const tracks = [
  { title: "Neon Ziggurat", duration: "3:41" },
  { title: "Crystal Algorithm", duration: "4:22" },
  { title: "Hex-Code Ritual", duration: "5:01" },
  { title: "Subroutine Valley", duration: "2:58" },
];

export default function MidiWidget({midi} : any) {
  if (!midi || midi.length === 0) {
    return null;
  }

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const handlePlayPause = () => setIsPlaying(!isPlaying);
  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };
  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  const currentTrack = tracks[currentTrackIndex];

  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4 flex justify-center">
        <Card className="w-full max-w-md grainy overflow-hidden shadow-2xl">
          <CardHeader className="text-center">
            <div className="flex justify-center items-center gap-2 mb-2">
              <Pyramid className="text-primary-purple" />
              <CardTitle className="font-headline text-2xl">{midi.title}</CardTitle>
            </div>
            <CardDescription>{midi.properties.genre}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-background/50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <p className="font-bold font-mono truncate">{currentTrack.title}</p>
                <p className="text-sm text-muted-foreground font-mono">{currentTrack.duration}</p>
              </div>
              <Progress value={isPlaying ? 33 : 0} className="h-2" />
            </div>

            <div className="flex justify-center items-center gap-4 mt-6">
              <Button className="hover:bg-primary-purple" variant="ghost" size="icon" onClick={handlePrev}>
                <Rewind />
              </Button>
              <Button variant="default" size="lg" className="bg-primary-purple hover:bg-primary-purple/80 h-16 w-16 rounded-full" onClick={handlePlayPause}>
                {isPlaying ? <Pause size={32} /> : <Play size={32} />}
              </Button>
              <Button className="hover:bg-primary-purple" variant="ghost" size="icon" onClick={handleNext}>
                <FastForward />
              </Button>
            </div>
            
            <div className="mt-8">
              <h4 className="font-mono text-sm text-muted-foreground mb-2 px-2">TRACK</h4>
              <ul className="space-y-1">
                {/* {tracks.map((track, index) => ( */}
                  <li /*key={track.title}*/>
                    <button
                      className='w-full text-left p-2 rounded-md transition-colors bg-primary-purple/20 text-primary-purple'
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{midi.title}</span>
                        <span className="text-xs text-muted-foreground">{midi.title}</span>
                      </div>
                    </button>
                  </li>
                {/* ))} */}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
