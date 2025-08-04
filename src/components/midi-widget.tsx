
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
  Pyramid,
  Volume2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { skillColors, genreColors } from "@/data/projects";
import { Progress } from "@/components/ui/progress";

// const tracks = [
//   { title: "Neon Ziggurat", duration: "3:41" },
//   { title: "Crystal Algorithm", duration: "4:22" },
//   { title: "Hex-Code Ritual", duration: "5:01" },
//   { title: "Subroutine Valley", duration: "2:58" },
// ];

export default function MidiWidget({midi} : any) {
  if (!midi) {
    return null;
  }

  const [isPlaying, setIsPlaying] = useState(false);
  // const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const handlePlayPause = () => setIsPlaying(!isPlaying);

  return (
    <Card className="w-full max-w-md overflow-hidden shadow-2xl">
      <CardHeader className="text-center p-4">
        <div className="flex justify-center items-center gap-2 mb-1">
          <Pyramid className="text-primary-purple" />
          <CardTitle className="font-headline text-xl">{midi.title}</CardTitle>
        </div>
        <CardDescription className="text-xs">
          {midi.properties?.genre?.join(' / ')}
          </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="bg-background/50 rounded-lg p-3">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold font-mono text-sm truncate">{midi.title}</p>
            <p className="text-xs text-muted-foreground font-mono">{midi.duration}</p>
          </div>
          <Progress value={isPlaying ? 33 : 0} className="h-2" />
        </div>

        <div className="flex justify-center items-center gap-4 mt-4">
          <Button variant="default" size="icon" className="bg-primary-purple hover:bg-primary-purple/80 h-14 w-14 rounded-full" onClick={handlePlayPause}>
            {isPlaying ? <Pause size={28} /> : <Play size={28} />}
          </Button>
        </div>
        
        <div className="mt-4">
          <h4 className="font-mono text-xs text-muted-foreground mb-2 px-2">MOOD TAGS</h4>
           <div className="flex flex-wrap justify-center gap-1">
            {midi.properties?.moodTags?.map((tag: string) => (
              <div
                key={tag}
                className="text-left p-1 px-2 rounded-md transition-colors bg-primary-purple/20 text-primary-purple text-xs"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
