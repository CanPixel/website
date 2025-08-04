
"use client";

import { useState, useRef, useEffect } from "react";
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
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function MidiWidget({midi} : any) {
  if (!midi) {
    return null;
  }

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (midi?.properties?.midiFileUrl) {
      audioRef.current = new Audio(midi.properties.midiFileUrl);

      const audio = audioRef.current;

      const updateProgress = () => {
        if (audio.duration > 0) {
          setProgress((audio.currentTime / audio.duration) * 100);
        }
      };

      const onEnded = () => {
        setIsPlaying(false);
        setProgress(0);
      };
      
      audio.addEventListener('timeupdate', updateProgress);
      audio.addEventListener('ended', onEnded);
      
      return () => {
        audio.pause();
        audio.removeEventListener('timeupdate', updateProgress);
        audio.removeEventListener('ended', onEnded);
      };
    }
  }, [midi?.properties?.midiFileUrl]);

  const handlePlayPause = () => {
    if (audioRef.current) {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }
  };

  return (
    <Card className="w-full max-w-md overflow-hidden shadow-2xl">
      <CardHeader className="text-center p-4 pb-2">
        <div className="flex justify-center items-center gap-2 mb-1">
          <Pyramid className="text-primary-purple" />
          <CardTitle className="font-headline text-xl">{midi.title}</CardTitle>
        </div>
        <CardDescription className="text-xs">
          {midi.properties?.genre?.join(' / ')}
          </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="bg-background/50 rounded-lg p-3">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold font-mono text-sm truncate">{midi.title}</p>
            <p className="text-xs text-muted-foreground font-mono">{midi.duration}</p>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="flex justify-center items-center gap-4 mt-2">
          <Button variant="default" size="icon" className="bg-primary-purple hover:bg-primary-purple/80 h-14 w-14 rounded-full" onClick={handlePlayPause}>
            {isPlaying ? <Pause size={28} /> : <Play size={28} />}
          </Button>
        </div>
        
        <div className="mt-2">
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
