
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
  fontFamily: string;
  backgroundImage?: string;
  borderColor?: string;
  animationClass?: string;
  className?: string;
  badgeBackgroundColor?: string;
}
const defaultStyling: ProjectStyling = {
  backgroundColor: 'hsl(var(--card))',
  textColor: 'hsl(var(--card-foreground))',
  fontFamily: 'var(--font-body)',
  borderColor: 'hsl(var(--border))',
  animationClass: 'group-hover:scale-105',
  className: '',
  badgeBackgroundColor: 'bg-white/20', 
};


export const projectStyles: { [id: string]: Partial<ProjectStyling> } = {
  'avoid': {
    backgroundColor: '#00001a',
    textColor: '#ffffff',
    fontFamily: "'Orbitron', sans-serif",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0h1v5h5v1H6v5H5V6H0V5h5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    borderColor: '#4A00E0',
    animationClass: 'group-hover:shadow-[0_0_20px_5px_rgba(74,0,224,0.7)]',
  },
  'chivalry-chef':
  {
    backgroundColor: '#F5E8C7',
    textColor: '#8B4513',
    fontFamily: "'Cinzel', serif",
    borderColor: '#D4AC79',
    animationClass: 'group-hover:scale-105 group-hover:shadow-[0_0_30px_5px_rgba(255,165,0,0.5)]',
    backgroundImage: 'none',
  },
  'life-sentence':
  {
    backgroundColor: '#E8E8E8',
    textColor: '#4A4A4A',
    fontFamily: "'Courier Prime', monospace",
    borderColor: '#B0B0B0',
    animationClass: 'transition-transform duration-500 group-hover:[transform:rotateY(10deg)_rotateX(5deg)]',
    className: 'rounded-none',
  },
  'bad-optics':
  {
    backgroundColor: '#E0DED8',
    textColor: '#2F2F2F',
    fontFamily: 'serif',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    borderColor: '#C0C0C0',
    className: 'rounded-none',
  },
  'kernel-sweep':
  {
    backgroundColor: '#0A2F0A',
    textColor: '#00FF00',
    fontFamily: "'Space Grotesk', sans-serif",
    backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to right, hsl(var(--primary)) 1px, #0A2F0A 1px)`,
    backgroundSize: '20px 20px',
    borderColor: '#00FF00',
    animationClass: 'group-hover:animate-pulse',
    badgeBackgroundColor: 'bg-black/30',
  },
   'StormChasers': {
    backgroundColor: '#2c003e',
    textColor: '#ff00ff',
    fontFamily: "'Orbitron', sans-serif",
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), 
                    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ff00ff' fill-opacity='0.1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    borderColor: '#D203D2',
    animationClass: 'group-hover:shadow-[0_0_25px_5px_rgba(255,0,255,0.6)]',
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
