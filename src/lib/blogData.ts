  export type MusicProjectCategory =
    | "CANNEMEN FORMAT (SOLO WORK)"
    | "MIDI MUSIC"
    | "ORCHESTRATED GAME OST"
    | "NEMSIS (BAND)"
    | "MISC AUDIO IN PROJECTS";
  export type MusicProject = {
    id: string;
    title: string;
    shortDescription: string;
    image: string;
    label: string;
    category: MusicProjectCategory;
    spotifyUrl?: string;
  };
  export const musicProjects: MusicProject[] = [
    {
      id: "lofi-hip-hop-demo-reel",
      title: "Lofi Hip Hop Demo Reel",
      shortDescription: "A collection of cozy, relaxing beats perfect for studying or chilling.",
      image: "https://canpixel.com/music/lofivibe.gif",
      label: "lofi hiphop animation",
      category: "MIDI MUSIC",
    },
    {
      id: "dark-ages-battle-hymn",
      title: "Dark Ages Battle Hymn",
      shortDescription: "An epic, orchestral track for a strategy game, evoking a sense of medieval warfare.",
      image: "https://canpixel.com/music/epicbattle.gif",
      label: "medieval battle",
      category: "ORCHESTRATED GAME OST",
    },
    {
      id: "hyper-chiptune-level",
      title: "Hyper Chiptune Level",
      shortDescription: "High-energy chiptune music for a fast-paced retro video game level.",
      image: "https://canpixel.com/music/chiptune.gif",
      label: "chiptune animation",
      category: "MIDI MUSIC",
    },
    {
      id: "cyberpunk-heist-music",
      title: "Cyberpunk Heist Music",
      shortDescription: "Synth-heavy, atmospheric track for a stealthy cyberpunk heist mission.",
      image: "https://canpixel.com/music/cyberpunk.gif",
      label: "cyberpunk city",
      category: "ORCHESTRATED GAME OST",
    },
    {
      id: "bad-optics-original-soundtrack",
      title: "Bad Optics - Original Soundtrack",
      shortDescription: "The complete, politically-charged soundtrack for the game 'Bad Optics'.",
      image: "https://canpixel.com/music/BO.gif",
      label: "political compass",
      category: "ORCHESTRATED GAME OST",
      spotifyUrl: "https://open.spotify.com/embed/album/51V1P5YreyTj2ne235pDqE?utm_source=generator"
    },
    {
      id: "cannemen-format-demo",
      title: "CANNEMEN Format Demo",
      shortDescription: "A showcase of my solo work, featuring a blend of electronic and acoustic elements.",
      image: "https://placehold.co/600x400.png",
      label: "solo artist stage",
      category: "CANNEMEN FORMAT (SOLO WORK)",
    },
     {
      id: "nemsis-band-ep",
      title: "NEMSIS - EP Release",
      shortDescription: "The debut EP from my band, NEMSIS, featuring a blend of rock and electronic music.",
      image: "https://placehold.co/600x400.png",
      label: "rock band performance",
      category: "NEMSIS (BAND)",
    },
     {
      id: "misc-audio-demo",
      title: "Misc. Audio Reel",
      shortDescription: "A collection of sound design and audio implementation from various game projects.",
      image: "https://placehold.co/600x400.png",
      label: "sound editing software",
      category: "MISC AUDIO IN PROJECTS",
    }
  ];
  
  import { Piano, Headphones, Hammer, User, Users } from "lucide-react";
  import * as React from "react";
  
  export const allMusicCategories: { name: MusicProjectCategory; icon: React.ElementType, id: string }[] = [
      { name: "CANNEMEN FORMAT (SOLO WORK)", icon: User, id: "cannemen-solo-format" },
      { name: "MIDI MUSIC", icon: Piano, id: "midi-music" },
      { name: "ORCHESTRATED GAME OST", icon: Headphones, id: "orchestrated-game-ost" },
      { name: "NEMSIS (BAND)", icon: Users, id: "nemsis-band" },
      { name: "MISC AUDIO IN PROJECTS", icon: Hammer, id: "misc-audio-in-projects" },
  ];
  
  
  //???
  export type Post = {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    image: string;
    label: string;
  };
  export const posts: Post[] = [
    {
      id: "deep-dive-into-procedural-generation",
      title: "A Deep Dive into Procedural Generation",
      date: "July 15, 2024",
      excerpt: "Exploring the algorithms and techniques behind creating infinite worlds, from Perlin noise to advanced map generation.",
      content: "Full content here...",
      image: "https://placehold.co/600x400.png",
      label: "abstract algorithm",
    },
    {
      id: "the-art-of-game-feel",
      title: "The Art of 'Game Feel': Juice It or Lose It",
      date: "June 28, 2024",
      excerpt: "What makes a game feel good to play? A breakdown of the small details—camera shake, particle effects, and sound design—that create satisfying interactions.",
      content: "Full content here...",
      image: "https://placehold.co/600x400.png",
      label: "game controller",
    },
    {
      id: "why-i-chose-nextjs",
      title: "Why I Chose Next.js for My Portfolio",
      date: "May 10, 2024",
      excerpt: "A technical look at the benefits of Next.js for a modern web developer's portfolio, including server components, routing, and performance.",
      content: "Full content here...",
      image: "https://placehold.co/600x400.png",
      label: "code screen",
    },
      {
      id: "optimizing-unity-performance",
      title: "Optimizing Unity Performance for Mobile",
      date: "April 22, 2024",
      excerpt: "Tips and tricks for squeezing every drop of performance out of your Unity games to ensure they run smoothly on a wide range of mobile devices.",
      content: "Full content here...",
      image: "https://placehold.co/600x400.png",
      label: "smartphone gaming",
    },
  ];
  