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
} from "lucide-react";
import * as LucideIcons from "lucide-react"
import { Progress } from "@/components/ui/progress";

export default function MidiWidget({midi} : any) {
  if (!midi) {
    return null;
  }

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  useEffect(() => {
    if (midi?.properties?.midiFileUrl) {
      const baseUrl = window.location.origin;
      const absoluteMidiUrl = `${baseUrl}/${midi.properties.midiFileUrl}`;
      audioRef.current = new Audio(absoluteMidiUrl);
      const audio = audioRef.current;
      
      const updateProgress = () => {
        if (audio.duration > 0) {
          setProgress((audio.currentTime / audio.duration) * 100);
        }
      };

      const onLoadedMetadata = () => {
        if (audio.duration) {
          setDuration(formatTime(audio.duration));
        }
      };

      const onEnded = () => {
        setIsPlaying(false);
        setProgress(0);
      };
      
      audio.addEventListener('timeupdate', updateProgress);
      audio.addEventListener('ended', onEnded);
      audio.addEventListener('loadedmetadata', onLoadedMetadata);
      
      return () => {
        audio.pause();
        audio.removeEventListener('timeupdate', updateProgress);
        audio.removeEventListener('ended', onEnded);
        audio.removeEventListener('loadedmetadata', onLoadedMetadata);
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

  const IconComponent = midi?.icon && (LucideIcons as any)[midi.icon]
  ? (LucideIcons as any)[midi.icon]
  : (LucideIcons as any)['Pyramid']; 

  return (
    <Card className="w-full max-w-md overflow-hidden shadow-2xl">
      <CardHeader className="p-4 pb-2 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-1">
          <IconComponent className="text-primary-purple" />
          <CardTitle className="font-headline text-xl">{midi.title}</CardTitle>
        </div>
        <CardDescription className="text-xs text-center">
          {midi.properties?.genre?.join(' / ')}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="bg-background/50 rounded-lg p-3">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold font-mono text-sm truncate">{midi.title}</p>
            {duration && (
                <p className="text-xs text-muted-foreground font-mono">{duration}</p>
            )}
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="flex justify-center items-center gap-4 mt-2">
          <Button variant="default" size="icon" className="bg-primary-purple hover:bg-primary-purple/80 h-14 w-14 rounded-full" onClick={handlePlayPause}>
            {isPlaying ? <Pause size={28} /> : <Play size={28} />}
          </Button>
        </div>
        
        <div className="mt-2">
          <h4 className="font-mono text-xs text-muted-foreground mb-2 px-2 text-center">MOOD TAGS</h4>
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

        {midi.releaseDate && (
          <div className="text-center mt-4">
              <span className="text-xs text-muted-foreground">
                {(() => {
                  const date = new Date(midi.releaseDate);
                  const options: Intl.DateTimeFormatOptions = {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  };
                  return date.toLocaleDateString(undefined, options);
                })()}
              </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
