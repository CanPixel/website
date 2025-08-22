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
  motto?: string;
  label?: string;
  technicalDesc?: string;
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
  titleSize?: string;
  descStyling?: string;
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
  controls?: Control[];
  links?: ExtLink[];
}
const defaultStyling: ProjectStyling = {
  backgroundColor: 'hsl(var(--card))',
  textColor: 'hsl(var(--card-foreground))',
  fontFamily: 'var(--font-body)',
  borderColor: 'hsl(var(--border))',
  titleSize: 'text-2xl',
  animationClass: '',
  descStyling: '',
  className: '',
  badgeBackgroundColor: 'bg-white/20', 
  slideshowImages: [],
  youtube: [],
  videos: [],
  document: '',
  banner: '',
};

export interface ExtLink {
  name: string;
  url: string;
}

export interface Control {
  key: string;
  desc: string;
}

export const projectStyles: { [id: string]: Partial<ProjectStyling> } = {
  'avoid': {
    backgroundColor: '#00001a',
    textColor: '#ffffff',
    fontFamily: "'Orbitron', sans-serif",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0h1v5h5v1H6v5H5V6H0V5h5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    borderColor: '#4A00E0',
    animationClass: 'group-hover:shadow-[0_0_20px_5px_rgba(74,0,224,0.7)]',
    slideshowImages: [
      'avoid/Banner-breed.jpg',
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
    ],
    youtube: [
      '_Txos9ZXhIg',
      'Haan1s-tl5o'
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
      'scpte3.jpg', 
      'scpte2.jpg', 
    ],
    controls: [
      { key: 'A // D', desc: 'Move'},
      { key: 'Space', desc: 'Jump'},
      { key: 'L Shift (Hold)', desc: 'Run'},
      { key: 'E', desc: 'Inventory'},
      { key: 'F (in Class-D Mode)', desc: 'Manual Blink'},
      { key: 'M', desc: 'Fixed Camera'},
      { key: 'G', desc: 'Toggle Black/White & Slomo (Cinematic Effect)'},
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
    controls: [
      { key: 'Left Analog Stick', desc: 'Steering'},
      { key: 'Right Analog Stick', desc: 'Look around'},
      { key: 'B (Hold)', desc: 'Boost'},
      { key: 'A', desc: 'Jump (yes it\'s a jumping car)'},
      { key: 'Y', desc: 'Switch Artistic Filters'},
      { key: 'Left Bumper (Hold)', desc: 'Enter Camera Mode'},
      { key: 'Right Bumper', desc: 'Take Picture'},
      { key: 'Left Trigger', desc: 'Brake'},
      { key: 'Right Trigger', desc: 'Gas'},
      { key: 'D-pad Up & Down (Hold)', desc: '(In Camera Mode) Tune the Focus of image / Depth of Field'},
      { key: 'R3 (Right Analog Stick Hold)', desc: 'Rear View of Car'},
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
    youtube: [
      '7awR86LBJCY',
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
    descStyling: 'text-[12px]',
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
      'OML_BehaviorTree.png'
    ],
    controls: [
      { key: 'W A S D', desc: 'Move'},
      { key: 'Mouse Move', desc: 'Aim Reticle Around'},
      { key: 'Mouse (LMB)', desc: 'Shoot Electric Bolt'},
    ],
  },
  'kookoo': {
    backgroundColor: '#D2B48C',
    textColor: '#5C4033',
    fontFamily: "'Bungee', sans-serif",
    backgroundImage: `repeating-linear-gradient(90deg, rgba(0,0,0,0.05), rgba(0,0,0,0.05) 2px, transparent 2px, transparent 80px)`,
    backgroundSize: '80px 100%',
    borderColor: '#8B4513',
    banner: 'images/KooKooBanner.png',
    descStyling: 'text-[10px]',
    animationClass: 'group-hover:shadow-[0_8px_16px_rgba(0,0,0,0.3)]',
    youtube: [
      'oqLfHiy_xAY',
      'nLt9GZpNLe8'
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
    backgroundColor: '#6d5b54',
    textColor: '#E8F5E9',
    fontFamily: "'Jersey 15', monospace",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23a5d6a7' fill-opacity='0.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
    borderColor: '#ffd2a5',
    descStyling: 'text-[12px]',
    banner: 'images/epiciniumbanner.png',
    animationClass: 'group-hover:shadow-[0_0_20px_5px_rgba(255,69,0,0.7)]',
    youtube: [
      'McckFnjHBk8',
      'XWCuo2E82hM',
      '2oVHkdFOz5w'
    ],
    videos: [
      'videos/Epicinium_Firestorm.mp4',
      'videos/Epicinium_Frostbite.mp4',
      // 'videos/EpiOST.mp4'
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
    ],
    controls: [
      { key: 'A // D', desc: 'Move'},
      { key: 'W // Space', desc: 'Jump'},
      { key: 'Mouse (LMB)', desc: 'Destroy Block'},
      { key: 'E', desc: 'Inventory'},
      { key: 'Enter', desc: 'Open Chat'},
      { key: '/', desc: 'Type Command'},
      { key: 'C', desc: 'See Available Commands/Cheats'},
      { key: 'L', desc: 'Toggle Experience Upgrades Display'},
    ],
  },
  'anywalker': {
    backgroundColor: '#343434',
    textColor: '#E8F5E9',
    fontFamily: "'Geo', monospace",
    backgroundImage: `none`,
    borderColor: '#EAF1CF',
    document: 'pdf/Kernmodule_Tools.pdf',
    slideshowImages: [
      'AnyWalker (3).jpg', 
      'AnyWalker (1).jpg',
      'AnyWalker (2).jpg',
      'AnyWalker (4).jpg',
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
    backgroundColor: '#7c5c48',
    textColor: '#fff1dd',
    fontFamily: "'Ribeye', monospace",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='6' viewBox='0 0 6 6'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath fill-rule='evenodd' d='M0 0h2v2H0V0zm2 2h2v2H2V2zm2 2h2v2H4V4zm2-2h2v2H6V2z'/%3E%3C/g%3E%3C/svg%3E")`,
    borderColor: '#555555',
    banner: 'images/FRBanner.png',
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
    document: 'pdf/FriskingRuins.pdf',
    controls: [
      { key: 'W A S D', desc: 'Move'},
      { key: 'Space', desc: 'Use Item / Action'},
      { key: 'L Shift', desc: 'Pickup Item'},
      { key: 'R Shift', desc: 'Drop Item'},
      { key: '1 2 3 4', desc: 'Crafting Inventory slots 1-4'},
      { key: 'Q & E', desc: 'Switch Inventory Slot'},
    ],
  },
  'krautkill': {
    backgroundColor: '#F5F5DC',
    textColor: '#5a3a22',
    titleSize: 'text-3xl',
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
    borderColor: '#FFFFFF',
    descStyling: 'text-[10px]',
    slideshowImages: [
      'pixelBoi_1.jpg', 
      'pixelBoi_2.jpg',
      'pixelBoi_3.jpg',
      'pixelBoi_4.jpg',
      'pixelBoi_5.jpg',
      'pixelBoi_6.jpg'
    ],
    youtube: [
      '-sNvqvC2xqk'
    ],
    document: 'pdf/PixelBoi_DevLog.pdf'
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
    youtube: [
      'eier_EjNwMc'
    ],
    controls: [
      { key: 'A & D // ← & →', desc: 'Move'},
      { key: 'W // Space // ↑', desc: 'Jump'},
    ],
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
    controls: [
      { key: 'A // D', desc: 'Move'},
      { key: 'W // Space', desc: 'Jump'},
      { key: '← // →', desc: 'Dive (Mid-Air)'},
      { key: 'E', desc: 'Interact / Place Bomb'},
      { key: 'P', desc: 'Detonate Bomb(s)'},
    ],
  },
  'supercasanova': {
    backgroundColor: '#00000d',
    textColor: '#ffffff',
    fontFamily: "'Pixelify Sans', sans-serif",
    backgroundImage: `none`,
    borderColor: 'gold',
    banner: 'images/SCNBanner.jpg',
    descStyling: 'text-[12px]',
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
    controls: [
      { key: '↑ → ↓ ←', desc: 'Move'},
      { key: 'X', desc: 'Interact'},
    ],
    links: [
      { name: 'ITCH.io', url: 'https://phucklearound.itch.io/supercasanova' },
      { name: 'GameJolt', url: 'https://gamejolt.com/games/supercasanova/377655' },
    ]
  },
  'chivalry-chef':
  {
    backgroundColor: '#F5E8C7',
    textColor: '#8B4513',
    fontFamily: "'Uncial Antiqua', serif",
    borderColor: '#D4AC79',
    animationClass: 'group-hover:shadow-[0_0_30px_5px_rgba(255,165,0,0.5)]',
    backgroundImage: 'none',
    descStyling: 'text-[12px]',
    youtube: [
      'FbSoWeMh10Y',
      '_3iAmp4dpOk',
      'CdjGvqpBBf8'
    ],
    controls: [
      { key: 'W A S D', desc: 'Move'},
      { key: 'Space', desc: 'Jump'},
      { key: 'L Shift (Hold)', desc: 'Sprint'},
      { key: 'Mouse (LMB)', desc: 'Slash! (Quick attack)'},
      { key: 'Mouse Swipe (Hold & Flick)', desc: 'Directional Swing! (Heavy attack)'},
      { key: 'Q', desc: 'Inventory'},
    ],
  },
  'life-sentence':
  {
    backgroundColor: '#E8E8E8',
    textColor: '#4A4A4A',
    fontFamily: "'Courier Prime', monospace",
    borderColor: '#B0B0B0',
    animationClass: 'transition-transform duration-500 group-hover:[transform:rotateY(10deg)_rotateX(5deg)]',
    className: 'rounded-none',
    descStyling: 'text-[12px]',
    youtube: [
      'l_GGGzv7f7k',
      'N15Xp0UdTbk',
      'LYIcL_0mdzU',
      '135YuMwmBuk',
      '0bFUDDI3xU4'
    ],
    document: 'pdf/Life Sentence.pdf',
    controls: [
      { key: 'A // D', desc: 'Move'},
      { key: 'A + D', desc: 'Paper-Hide'},
      { key: 'Q // E (Hold)', desc: 'Lean / Look'},
      { key: '← & →', desc: 'Switch Perspective'},
      { key: 'S', desc: 'Zoom Out'},
      { key: 'Space', desc: 'Interact'},
    ],
  },
  'bad-optics':
  {
    backgroundColor: '#E0DED8',
    textColor: '#2F2F2F',
    fontFamily: 'serif',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    borderColor: '#C0C0C0',
    className: 'rounded-none',
    animationClass: 'group-hover:animate-pulse',
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
    controls: [
      { key: 'A', desc: 'Answer Agree'},
      { key: 'S // Space', desc: 'Answer Meh'},
      { key: 'D', desc: 'Answer Disagree'},
      { key: 'X', desc: 'Close any open window'},
      { key: 'V // Z', desc: 'View Toggle / Change View'},
      { key: 'I', desc: 'Open IdeologyDex'},
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
    descStyling: 'bg-black/50 p-3',
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
    document: 'pdf/kernelSweepDoc.pdf',
    controls: [
      { key: 'W A S D', desc: 'Move'},
      { key: 'Space', desc: 'Jump'},
      { key: 'L Shift (Hold)', desc: 'Run'},
      { key: 'L CTRL (Hold)', desc: 'Duck / Crouch'},
      { key: 'E (Hold)', desc: 'Bullet Count'},
      { key: 'Mouse (RMB)', desc: 'Aim Gun'},
      { key: 'Mouse (LMB)', desc: 'Shoot Gun'},
      { key: 'R', desc: 'Reload Gun'},
    ],
  },
};

//Horror prototypes:
//1st person Psychological Horror: uYsiNqI1gpU
//Quarantine Horror (3rd person Horror w/ Fixed Camera Angles): Fm_EZ0e5qxw

export const projectStatusColors: { [key: string]: string } = {
  "In Development": "bg-yellow-500",
  "Released": "bg-green-500",
  "Released (Steam)": "bg-green-500",
  "Halted": "bg-orange-500",
  "Discontinued": "bg-red-500",
  "Live": "bg-green-500",
  "Finished": "bg-gray-500",
  "Demo": "bg-blue-500",
  "Full Demo": "bg-green-500",
  "Prototype": "bg-gray-500",
  "Alpha": "bg-teal-500",
  "Beta": "bg-yellow-500",
};

export const skillColors: { [key: string]: string } = {
  "Unity": "#444444",
  "C#": "#444444",
  "Html": "bg-orange-500",
  "C++": "#00aa77",
  "Audio Design": "#666ddd",
  "Editor Script": "bg-yellow-500",
  "Arduino": "bg-cyan-500",
  "PICO-8": "bg-red-500",
  "LUA": "bg-indigo-500",
  "Construct 2": "#112233",
  "Java": "#ff6666",
  "Pixel Art": "#ff4400",
  "Procedural Generation": "#aa4400",
};

export const genreColors: { [key: string]: string } = {
  "Action": "bg-red-500",
  "Adventure": "bg-blue-500",
  "Exploration": "bg-gray-700 text-white",
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
  "Survival": "bg-gold-500",
  "Collect-A-Thon": "bg-emerald-600",
  "Strategy": "bg-rose-700",
  "Audio": "bg-violet-500",
  "Handheld": "bg-fuchsia-500",
  "Interactive Installation": "bg-sky-500",
  "Unity Tool": "bg-red-700",
  "Misc": "bg-gray-500"
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


    
