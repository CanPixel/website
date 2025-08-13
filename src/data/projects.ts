
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
