

export type Project = {
  slug?: string;
  title?: string;
  description?: string;
  longDescription?: string;
  image?: string;
  technologies?: string[];
  liveUrl?: string;
  repoUrl?: string;
  aiHint?: string;
  categories?: string[];
  date?: string;
  releaseType?: 'steam' | 'web';
};

const projectsData: Project[] = [
  {
    title: 'SCP - The Escape',
    description: '2D Tile Engine Platformer',
    longDescription: 'A 2D adventure platformer with survival elements, built with a custom Java tile engine.',
  },
  {
    title: 'PixelThrive',
    description: 'Open World 2D Survival',
    longDescription: 'An open-world 2D survival game where players must gather resources and craft to stay alive.',
  },
  {
    title: 'BIQ',
    description: 'Asymmetric Acrobatic Platformer',
    longDescription: 'An asymmetric platformer focused on acrobatic movement and challenging level design.',
  },
  {
    slug: 'pixelcan',
    title: 'PixelCan (Admission)',
    description: 'Procedural Endless Runner',
    longDescription: 'A procedural endless runner platformer created as an admission project, featuring dynamically generated levels.',
  },
  {
    slug: 'pixelboi',
    title: 'PixelBoi',
    description: 'Custom Arduino Handheld Console',
    longDescription: 'A custom handheld console built using Arduino, showcasing skills in embedded development.',
  },
  {
    slug: 'kernel-sweep',
    title: 'Kernel . Sweep',
    description: 'Glitch Cyber Matrix Shooter',
    longDescription: 'A first-person shooter set in a glitchy, cyber-matrix world with fast-paced action.',
  },
  {
    slug: 'kraut-kill',
    title: 'Kraut Kill',
    description: 'WWII Cooking Game / Poisoning Nazis',
    longDescription: 'A unique cooking game set in WWII where players subtly poison Nazi officers.',
  },
  {
    slug: 'life-sentence',
    title: 'Life Sentence',
    description: 'Papery-Stealth Prison Escape',
    longDescription: 'A stealth game with a unique paper-craft aesthetic, centered on a tense prison escape.',
  },
  {
    slug: 'frisking-ruins',
    title: 'Frisking Ruins',
    description: 'Retro Sandbox Bullet Hell w/ Crafting',
    longDescription: 'A retro-style sandbox game combining bullet hell mechanics with a deep crafting system.',
  },
  {
    slug: 'gameoflife',
    title: 'Conway\'s Game Of Life',
    description: 'Game of Life Implementation',
    longDescription: 'A C++ implementation of John Conway\'s famous cellular automaton, the Game of Life.',
  },
  {
    slug: 'supercasanova',
    title: 'SuperCasaNova',
    description: 'Space Collect-a-thon written in a week',
    longDescription: 'A charming space-themed collect-a-thon developed in just one week using PICO-8.',
  },
  {
    slug: 'kookoogame',
    title: 'Koo-Koo (alt.ctrl.GDC 2019)',
    description: 'Frantic Installation w/ Custom Controllers',
    longDescription: 'A frantic, interactive installation showcased at alt.ctrl.GDC 2019, featuring custom Arduino-based controllers.',
  },
  {
    slug: 'anywalker',
    title: 'AnyWalker (Unity Tool)',
    description: 'File-to-Level Converter Editor Tool',
    longDescription: 'A powerful Unity editor tool that converts file data into game levels, streamlining the level design process.',
  },
  {
    slug: 'ohmmylord',
    title: 'Ohm, My Lord!',
    description: 'Behavior Tree AI w/ Synergy Mechanics',
    longDescription: 'A roguelike bullet hell that features complex AI behaviors built with behavior trees and synergistic mechanics.',
  },
  {
    slug: 'chivalrychef',
    title: 'Chivalry Chef',
    description: 'Food Frenzy Medieval Siege Royale',
    longDescription: 'A chaotic cooking battle royale set during a medieval siege. Cook and fight for culinary dominance!',
  },
  {
    slug: 'epicinium',
    title: 'Epicinium',
    description: 'Turn-Based Strategy w/ Environmental Impact',
    longDescription: 'A turn-based strategy game where your actions have a meaningful impact on the game\'s ecosystem.',
  },
  {
    slug: 'orbitalResonance',
    title: 'Orbital Resonance Synth',
    description: 'Polyrhythmic Harmony Generator',
    longDescription: 'An audio tool that generates complex polyrhythmic harmonies, creating unique soundscapes.',
  },
  {
    slug: 'BadOptics',
    title: 'Gamified Political Compass',
    description: 'Political Roleplay / Ideological Strategy Trivia',
    longDescription: 'A unique web-based game that combines political roleplaying, ideological strategy, and trivia.',
  },
  {
    slug: 'StormChasers',
    title: 'StormChasers',
    description: 'Arcade Racer w/ Precise Photography',
    longDescription: 'An arcade racer that challenges players with precise photography mechanics while chasing storms.',
  },
];

const monthMap: { [key: string]: number } = {
  'january': 1, 'february': 2, 'march': 3, 'april': 4, 'may': 5, 'june': 6,
  'july': 7, 'august': 8, 'september': 9, 'october': 10, 'november': 11, 'december': 12
};

function parseDate(dateStr: string): Date {
  // Handle '??-??-YYYY'
  if (dateStr.startsWith('??-??-')) {
    const year = parseInt(dateStr.substring(6));
    return new Date(year, 0, 1); // Default to Jan 1st of that year
  }

  // Handle 'Month YYYY'
  const monthYearMatch = dateStr.match(/(\w+)\s(\d{4})/);
  if (monthYearMatch) {
    const monthName = monthYearMatch[1].toLowerCase();
    const year = parseInt(monthYearMatch[2]);
    const month = monthMap[monthName];
    if (month && year) {
      return new Date(year, month - 1, 1); // Default to 1st of that month
    }
  }

  // Handle 'DD-MM-YYYY'
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]);
    const year = parseInt(parts[2]);
    return new Date(year, month - 1, day);
  }

  // Fallback for unexpected formats
  return new Date(0);
}


// export const projects = projectsData.sort((a, b) => {
//   const dateA = parseDate(a.date);
//   const dateB = parseDate(b.date);
//   return dateB.getTime() - dateA.getTime();
// });

export type MusicProjectCategory =
  | "CANNEMEN FORMAT (SOLO WORK)"
  | "MIDI MUSIC"
  | "ORCHESTRATED GAME OST"
  | "NEMSIS (BAND)"
  | "MISC AUDIO IN PROJECTS";


export type MusicProject = {
  slug: string;
  title: string;
  description: string;
  image: string;
  aiHint: string;
  category: MusicProjectCategory;
  spotifyUrl?: string;
};

export const musicProjects: MusicProject[] = [
  {
    slug: "lofi-hip-hop-demo-reel",
    title: "Lofi Hip Hop Demo Reel",
    description: "A collection of cozy, relaxing beats perfect for studying or chilling.",
    image: "https://canpixel.com/music/lofivibe.gif",
    aiHint: "lofi hiphop animation",
    category: "MIDI MUSIC",
  },
  {
    slug: "dark-ages-battle-hymn",
    title: "Dark Ages Battle Hymn",
    description: "An epic, orchestral track for a strategy game, evoking a sense of medieval warfare.",
    image: "https://canpixel.com/music/epicbattle.gif",
    aiHint: "medieval battle",
    category: "ORCHESTRATED GAME OST",
  },
  {
    slug: "hyper-chiptune-level",
    title: "Hyper Chiptune Level",
    description: "High-energy chiptune music for a fast-paced retro video game level.",
    image: "https://canpixel.com/music/chiptune.gif",
    aiHint: "chiptune animation",
    category: "MIDI MUSIC",
  },
  {
    slug: "cyberpunk-heist-music",
    title: "Cyberpunk Heist Music",
    description: "Synth-heavy, atmospheric track for a stealthy cyberpunk heist mission.",
    image: "https://canpixel.com/music/cyberpunk.gif",
    aiHint: "cyberpunk city",
    category: "ORCHESTRATED GAME OST",
  },
  {
    slug: "bad-optics-original-soundtrack",
    title: "Bad Optics - Original Soundtrack",
    description: "The complete, politically-charged soundtrack for the game 'Bad Optics'.",
    image: "https://canpixel.com/music/BO.gif",
    aiHint: "political compass",
    category: "ORCHESTRATED GAME OST",
    spotifyUrl: "https://open.spotify.com/embed/album/51V1P5YreyTj2ne235pDqE?utm_source=generator"
  },
  {
    slug: "cannemen-format-demo",
    title: "CANNEMEN Format Demo",
    description: "A showcase of my solo work, featuring a blend of electronic and acoustic elements.",
    image: "https://placehold.co/600x400.png",
    aiHint: "solo artist stage",
    category: "CANNEMEN FORMAT (SOLO WORK)",
  },
   {
    slug: "nemsis-band-ep",
    title: "NEMSIS - EP Release",
    description: "The debut EP from my band, NEMSIS, featuring a blend of rock and electronic music.",
    image: "https://placehold.co/600x400.png",
    aiHint: "rock band performance",
    category: "NEMSIS (BAND)",
  },
   {
    slug: "misc-audio-demo",
    title: "Misc. Audio Reel",
    description: "A collection of sound design and audio implementation from various game projects.",
    image: "https://placehold.co/600x400.png",
    aiHint: "sound editing software",
    category: "MISC AUDIO IN PROJECTS",
  }
];

import { Camera, Piano, Headphones, Guitar, Hammer, User, Users } from "lucide-react";
import * as React from "react";

export const allMusicCategories: { name: MusicProjectCategory; icon: React.ElementType, slug: string }[] = [
    { name: "CANNEMEN FORMAT (SOLO WORK)", icon: User, slug: "cannemen-solo-format" },
    { name: "MIDI MUSIC", icon: Piano, slug: "midi-music" },
    { name: "ORCHESTRATED GAME OST", icon: Headphones, slug: "orchestrated-game-ost" },
    { name: "NEMSIS (BAND)", icon: Users, slug: "nemsis-band" },
    { name: "MISC AUDIO IN PROJECTS", icon: Hammer, slug: "misc-audio-in-projects" },
];


export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  aiHint: string;
};

export const posts: Post[] = [
  {
    slug: "deep-dive-into-procedural-generation",
    title: "A Deep Dive into Procedural Generation",
    date: "July 15, 2024",
    excerpt: "Exploring the algorithms and techniques behind creating infinite worlds, from Perlin noise to advanced map generation.",
    content: "Full content here...",
    image: "https://placehold.co/600x400.png",
    aiHint: "abstract algorithm",
  },
  {
    slug: "the-art-of-game-feel",
    title: "The Art of 'Game Feel': Juice It or Lose It",
    date: "June 28, 2024",
    excerpt: "What makes a game feel good to play? A breakdown of the small details—camera shake, particle effects, and sound design—that create satisfying interactions.",
    content: "Full content here...",
    image: "https://placehold.co/600x400.png",
    aiHint: "game controller",
  },
  {
    slug: "why-i-chose-nextjs",
    title: "Why I Chose Next.js for My Portfolio",
    date: "May 10, 2024",
    excerpt: "A technical look at the benefits of Next.js for a modern web developer's portfolio, including server components, routing, and performance.",
    content: "Full content here...",
    image: "https://placehold.co/600x400.png",
    aiHint: "code screen",
  },
    {
    slug: "optimizing-unity-performance",
    title: "Optimizing Unity Performance for Mobile",
    date: "April 22, 2024",
    excerpt: "Tips and tricks for squeezing every drop of performance out of your Unity games to ensure they run smoothly on a wide range of mobile devices.",
    content: "Full content here...",
    image: "https://placehold.co/600x400.png",
    aiHint: "smartphone gaming",
  },
];
