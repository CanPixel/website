
import { NextFontWithVariable } from 'next/dist/compiled/@next/font';

export interface Project {
  id: string;
  type: string;
  title: string;
  url?: string;
  description: string;
  status?: string;
  shortDescription: string;
  thumbnailUrl: string;
  label?: string;
  releaseDate: string;
  releaseType?: 'steam' | 'web';
  properties?: {
    repoLink?: string;
    genre?: string[];
    platforms?: string[];
    skills?: string[];
    audioFileUrl?: string;
    spotifyLink?: string;
    trailerUrl?: string;
    midiFileUrl?: string;
    moodTags?: string[];
    steamUrl?: string;
  };
  styling: ProjectStyling;
}
export interface ProjectStyling {
  backgroundSize?: string | number;
  backgroundColor: string;
  textColor: string;
  fontFamily: string | NextFontWithVariable;
  backgroundImage?: string;
  borderColor?: string;
  animationClass?: string;
  className?: string;
  badgeBackgroundColor?: string;
  slideshowImages?: string[];
  youtube?: string[];
  videos?: string[];
  document?: string;
  banner?: string;
}
const defaultStyling: ProjectStyling = {
  backgroundColor: 'hsl(var(--card))',
  textColor: 'hsl(var(--card-foreground))',
  fontFamily: 'var(--font-body)',
  borderColor: 'hsl(var(--border))',
  animationClass: 'group-hover:scale-105',
  className: '',
  badgeBackgroundColor: 'bg-white/20', 
  slideshowImages: [],
  youtube: [],
  videos: [],
  document: '',
  banner: '',
};

export const projectStyles: { [id: string]: Partial<ProjectStyling> } = {
  'avoid': {
    backgroundColor: '#00001a',
    textColor: '#ffffff',
    fontFamily: "'Orbitron', sans-serif",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0h1v5h5v1H6v5H5V6H0V5h5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    borderColor: '#4A00E0',
    banner: 'avoid/game-banner.png',
    animationClass: 'group-hover:shadow-[0_0_20px_5px_rgba(74,0,224,0.7)]',
    slideshowImages: [
      'avoid.gif', 
      'avoid/corridor.gif',
      'avoid/doubleplanet.gif',
      'avoid/engie.gif',
      'avoid/platform.gif',
      'avoid/movement-mechanics.png',
      'avoid/planet (1).gif',
      'avoid/planet (2).gif',
      'avoid/planet (3).gif',
      'avoid/planet (4).gif',
      'avoid/planet (5).gif',
      'avoid/rogueplanet.gif',
      'avoid/warpdrive.gif',
      'avoid/ship.jpg'
    ],
    videos: [
      'avoid/AVOIDpreview.mp4',
      'avoid/Gameplay1.mp4',
      'avoid/preview.mp4',
    ]
  },
  'scptheescape': {
    backgroundColor: '#1C1C1E',
    textColor: '#F5F5F7',
    fontFamily: "'Pixelify Sans', sans-serif",
    backgroundImage: `linear-gradient(45deg, #333 25%, transparent 25%), linear-gradient(-45deg, #333 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #333 75%), linear-gradient(-45deg, transparent 75%, #333 75%)`,
    backgroundSize: '20px 20px',
    borderColor: '#FFCC00',
    animationClass: 'group-hover:shadow-[0_0_15px_2px_rgba(255,204,0,0.5)]',
    youtube: [
      'ByFHdeeTK5k'
    ],
    slideshowImages: [
      'scpte (3).jpg', 
      'scpte (2).jpg', 
    ],
  },
  'storm-chasers': {
    backgroundColor: '#2c003e',
    textColor: '#ff00ff',
    fontFamily: "'Orbitron', sans-serif",
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), 
                    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ff00ff' fill-opacity='0.1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    borderColor: '#00ffff',
    animationClass: 'group-hover:shadow-[0_0_25px_5px_rgba(255,0,255,0.6)]',
    youtube: [
      'XUo2s6kTs5Q'
    ],
    slideshowImages: [
      'storm1.gif', 
      'storm2.gif',
      'storm3.gif',
      'storm4.gif',
      'storm5.gif',
    ],
  },
  'orbital-resonance': {
    backgroundColor: '#ffffff',
    textColor: '#5B2C2C',
    fontFamily: "'Space Mono', monospace",
    backgroundImage: 'none',
    borderColor: '#E47171',
    animationClass: 'group-hover:shadow-[0_0_15px_3px_rgba(228,113,113,0.5)]',
    slideshowImages: [
      'orbitRes (1).jpg', 
      'orbitRes (2).jpg', 
      'orbitRes (3).jpg', 
      'orbitRes (4).jpg'
    ],
    videos: [
      'videos/museapp.mp4',
    ],
    youtube: [
      '7awR86LBJCY'
    ]
  },
  'ohmmylord': {
    backgroundColor: '#0a192f',
    textColor: '#e6f1ff',
    fontFamily: "'Limelight', serif",
    backgroundImage: `linear-gradient(45deg, rgba(212, 175, 55, 0.05) 25%, transparent 25%), 
                     linear-gradient(-45deg, rgba(212, 175, 55, 0.05) 25%, transparent 25%), 
                     linear-gradient(45deg, transparent 75%, rgba(212, 175, 55, 0.05) 75%), 
                     linear-gradient(-45deg, transparent 75%, rgba(212, 175, 55, 0.05) 75%)`,
    backgroundSize: '20px 20px',
    borderColor: '#D4AF37',
    banner: 'images/OMLbanner.jpg',
    document: 'pdf/OhmMyLord.pdf',
    animationClass: 'group-hover:shadow-[0_0_20px_2px_rgba(212,175,55,0.4)]',
    youtube: [
      'lHhNvLmckwM'
    ],
    slideshowImages: [
      'OhmMyLord (1).jpg', 
      'OhmMyLord (2).jpg',
      'OhmMyLord (3).jpg',
      'OhmMyLord (4).jpg',
      'OhmMyLord (5).jpg',
      'OML_BehaviorTree.jpg'
    ],
  },
  'kookoo': {
    backgroundColor: '#D2B48C',
    textColor: '#5C4033',
    fontFamily: "'Bungee', sans-serif",
    backgroundImage: `repeating-linear-gradient(90deg, rgba(0,0,0,0.05), rgba(0,0,0,0.05) 2px, transparent 2px, transparent 80px)`,
    backgroundSize: '80px 100%',
    borderColor: '#8B4513',
    banner: 'images/kookoologo.png',
    animationClass: 'group-hover:shadow-[0_8px_16px_rgba(0,0,0,0.3)]',
    youtube: [
      'oqLfHiy_xAY'
    ],
    videos: [
      'videos/kookoogameplay.mp4'
    ],
    slideshowImages: [
      'kookoo (1).jpg', 
      'kookoo (2).jpg',
      'kookoo (3).jpg',
      'kookoo (4).jpg',
      'kookoo (5).jpg',
      'KooKooRig.jpg'
    ],
  },
  'epicinium': {
    backgroundColor: '#776256',
    textColor: '#E8F5E9',
    fontFamily: "'Jersey 15', monospace",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23a5d6a7' fill-opacity='0.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
    borderColor: '#ffd2a5',
    banner: 'images/epiciniumbanner.png',
    animationClass: 'group-hover:shadow-[0_0_20px_5px_rgba(255,69,0,0.7)]',
    youtube: [
      'McckFnjHBk8',
      'XWCuo2E82hM'
    ],
    videos: [
      'videos/Epicinium_Firestorm.mp4',
      'videos/Epicinium_Frostbite.mp4',
      'videos/EpiOST.mp4'
    ],
    slideshowImages: [
      'epicinium.png',
      'epiciniumaction.png',
      'Episteamium.gif'
    ],
  },
  'pixelthrive': {
    backgroundColor: '#4A6B4C',
    textColor: '#E8F5E9',
    fontFamily: "'Geo', monospace",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23a5d6a7' fill-opacity='0.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
    borderColor: '#81C784',
    animationClass: 'group-hover:shadow-[0_0_15px_rgba(129,199,132,0.5)]',
    youtube: [
      'kr1d5OmIp70'
    ]
  },
  'anywalker': {
    backgroundColor: '#343434',
    textColor: '#E8F5E9',
    fontFamily: "'Geo', monospace",
    backgroundImage: `none`,
    borderColor: '#EAF1CF',
    document: 'pdf/Kernmodule_Tools.pdf',
    slideshowImages: [
      'Anywalker (3).jpg', 
      'Anywalker (1).jpg',
      'Anywalker (2).jpg',
      'Anywalker (4).jpg',
      'Tool.jpg'
    ],
  },
  'game-of-life': {
    backgroundColor: '#343434',
    textColor: '#E8F5E9',
    fontFamily: "'Space Grotesk', monospace",
    backgroundImage: `none`,
    borderColor: '#EAF1CF',
    slideshowImages: [
      'gameoflife (2).jpg'
    ],
  },
  'frisking-ruins': {
    backgroundColor: '#596d53',
    textColor: '#fff1dd',
    fontFamily: "'Ribeye', monospace",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='6' viewBox='0 0 6 6'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath fill-rule='evenodd' d='M0 0h2v2H0V0zm2 2h2v2H2V2zm2 2h2v2H4V4zm2-2h2v2H6V2z'/%3E%3C/g%3E%3C/svg%3E")`,
    borderColor: '#555555',
    banner: 'FRBanner.png',
    animationClass: 'group-hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]',
    youtube: [
      '7GolsRuCwL0'
    ],
    slideshowImages: [
      'Frisk (1).jpg', 
      'Frisk (2).jpg',
      'Frisk (3).jpg',
      'FriskingRuins_Flow.png',
      'FriskingRuins_UML.png',
    ],
    videos: [
      'images/FriskingRuins2.webm'
    ],
    document: 'pdf/FriskingRuins.pdf'
  },
  'krautkill': {
    backgroundColor: '#F5F5DC',
    textColor: '#5a3a22',
    fontFamily: "'UnifrakturCook', serif",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%235a3a22' fill-opacity='0.05'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0h1v5h5v1H6v5H5V6H0V5h5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    borderColor: '#8b4513',
    youtube: [
      'cnydgqwTZ-s',
      'QpCZ-VI6A8E'
    ]
  },
  'pixelboi': {
    backgroundColor: '#ADD8E6',
    textColor: '#00008B',
    fontFamily: "'Audiowide', sans-serif",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2300008B' fill-opacity='0.1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0h1v5h5v1H6v5H5V6H0V5h5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    borderColor: '#87CEEB',
    slideshowImages: [
      'pixelBoi_1.jpg', 
      'pixelBoi_2.jpg',
      'pixelBoi_3.jpg',
      'pixelBoi_4.jpg',
      'pixelBoi_5.jpg',
      'pixelBoi_6.jpg'
    ],
    youtube: [
      'sNvqvC2xqk'
    ],
    document: 'pdf/UrCan_ITTT_Logboek.pdf'
  },
  'pixelcan': {
    backgroundColor: '#87CEEB',
    textColor: '#191970',
    fontFamily: "'Unlock', sans-serif",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M6 5V0h1v5h5v1H6v5H5V6H0V5h5z'/%3E%3C/g%3E%3C/svg%3E")`,
    borderColor: '#FFFFFF',
    slideshowImages: [
      'PixelCan.jpg', 'image1.jpg'
    ],
    videos: ['videos/PixelCanDevLog.mp4']
  },
  'biq': {
    backgroundColor: '#4a4a4a',
    textColor: '#E0E0E0',
    fontFamily: "'Space Grotesk', sans-serif",
    backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.05) 2px, transparent 2px), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
    backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
    borderColor: '#696969',
    slideshowImages: [
      'biq1.jpg', 'biq2.jpg', 'biq3.jpg', 'biq4.jpg'
    ],
  },
  'supercasanova': {
    backgroundColor: '#00000d',
    textColor: '#ffffff',
    fontFamily: "'Pixelify Sans', sans-serif",
    backgroundImage: `none`,
    borderColor: 'gold',
    banner: 'images/SCNBanner.jpg',
    animationClass: 'group-hover:shadow-[0_0_20px_5px_rgba(74,0,224,0.7)]',
    youtube: [
      'yJeMNd1GUeA'
    ],
    slideshowImages: [
      'SCN (1).jpg',
      'SCN (2).jpg',
      'SCN (3).jpg',
      'supercasanova.p8.png'
    ],
  },
  'chivalry-chef':
  {
    backgroundColor: '#F5E8C7',
    textColor: '#8B4513',
    fontFamily: "'Jacquard 24', serif",
    borderColor: '#D4AC79',
    animationClass: 'group-hover:scale-105 group-hover:shadow-[0_0_30px_5px_rgba(255,165,0,0.5)]',
    backgroundImage: 'none',
    youtube: [
      'FbSoWeMh10Y'
    ],
    videos: [
      'videos/ChivChefGameplay.mp4',
      'videos/ChivChefWalk.mp4'
    ]
  },
  'life-sentence':
  {
    backgroundColor: '#E8E8E8',
    textColor: '#4A4A4A',
    fontFamily: "'Courier Prime', monospace",
    borderColor: '#B0B0B0',
    animationClass: 'transition-transform duration-500 group-hover:[transform:rotateY(10deg)_rotateX(5deg)]',
    className: 'rounded-none',
    youtube: [
      'l_GGGzv7f7k',
      'N15Xp0UdTbk',
      'LYIcL_0mdzU',
      '135YuMwmBuk',
      '0bFUDDI3xU4'
    ],
    document: 'pdf/Life Sentence.pdf'
  },
  'bad-optics':
  {
    backgroundColor: '#E0DED8',
    textColor: '#2F2F2F',
    fontFamily: 'serif',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    borderColor: '#C0C0C0',
    className: 'rounded-none',
    youtube: [
      'K7EKYMtiSzc',
      'fEP3858pZuM',
      'c0Y1jy61-R0',
      'GkWwrgQaC9o'
    ],
    slideshowImages: [
      'BOgame.gif', 
      'BO.jpg',
    ],
  },
  'kernel-sweep':
  {
    backgroundColor: '#0A2F0A',
    textColor: '#00FF00',
    fontFamily: "'Share Tech Mono', sans-serif",
    backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to right, hsl(var(--primary)) 1px, #0A2F0A 1px)`,
    backgroundSize: '20px 20px',
    borderColor: '#00FF00',
    animationClass: 'group-hover:animate-pulse',
    badgeBackgroundColor: 'bg-black/30',
    youtube: [
      'vKlpqa8IdZk', 
      'pyeaaU-a7l8',
      '_u4fWClAv_M',
      'Cuto5VDAY6g',
      'xb_irsLNN2M'
    ],
    slideshowImages: [
      'kernel_sweep/kernel (4).jpg', 
      'kernel_sweep/kernel (5).jpg',
      'kernel_sweep/kernel (6).jpg', 
      'kernel_sweep/kernel (8).jpg',
      'kernel_sweep/kernel (9).jpg', 
      'kernel_sweep/kernel (10).jpg',
      'kernel_sweep/kernel (11).jpg',
      'kernel_sweep/kernel (1).jpg', 
      'kernel_sweep/kernel (3).jpg'
    ],
    document: 'kernel_sweep/kernelSweepDoc.pdf'
  },
};

export const skillColors: { [key: string]: string } = {
  "Unity": "bg-teal-600",
  "C#": "bg-purple-700",
  "Html": "bg-orange-500",
  "C++": "bg-blue-700",
  "Audio Design": "bg-pink-700",
  "Editor Script": "bg-yellow-500",
  "Arduino": "bg-cyan-500",
  "PICO-8": "bg-red-500",
  "LUA": "bg-indigo-500",
  "Construct 2": "bg-green-500",
  "Java": "bg-orange-600",
};

export const genreColors: { [key: string]: string } = {
  "Action": "bg-red-500",
  "Adventure": "bg-blue-500",
  "Exploration": "bg-gray-700",
  "Puzzle": "bg-green-500",
  "Battle Royale": "bg-purple-600",
  "Bullet Hell": "bg-pink-500",
  "FPS": "bg-orange-500",
  "Horror": "bg-red-600",
  "Cooking": "text-black bg-yellow-200",
  "Racing": "bg-teal-500",
  "Endless Runner": "bg-cyan-500",
  "Platformer": "bg-lime-500",
  "Roguelike": "bg-indigo-500",
  "Stealth": "bg-gray-700",
  "Survival": "bg-brown-500",
  "Collect-A-Thon": "bg-emerald-600",
  "Strategy": "bg-rose-700",
  "Audio": "bg-violet-500",
  "Handheld": "bg-fuchsia-500",
  "Interactive Installation": "bg-sky-500",
  "Unity Tool": "bg-red-700",
  "Misc": "bg-neutral-500"
};

export const platformColors: { [key: string]: string } = {
    "Windows": "bg-blue-600",
    "macOS": "bg-gray-500",
    "Linux": "bg-yellow-500",
    "Web": "bg-green-500",
    "Mobile": "bg-purple-500",
    "Steam": "bg-gray-800",
};

export function getProjectStyling(projectId: string): ProjectStyling {
  const projectSpecificStyling = projectStyles[projectId];

  return {
    ...defaultStyling,
    ...(projectSpecificStyling || {}),
    // If you had properties that you wanted to merge deeply or had specific default logic,
    // you would add them here, potentially checking if the property exists in projectSpecificStyling
    // For example:
    // badgeBackgroundColor: projectSpecificStyling?.badgeBackgroundColor ?? defaultStyling.badgeBackgroundColor
  };
}


    
