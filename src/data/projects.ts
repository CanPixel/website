export interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  image: string;
  dataAiHint: string;
  styling: {
    backgroundColor: string;
    textColor: string;
    fontFamily: string;
    backgroundImage?: string;
    borderColor?: string;
    animationClass?: string;
    className?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'chivalry-chef',
    name: 'Chivalry Chef',
    type: 'Unity 3D',
    description: 'A medieval cooking game blending chivalry and culinary artistry, with a cozy, parchment aesthetic.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'medieval cooking',
    styling: {
      backgroundColor: '#F5E8C7',
      textColor: '#8B4513',
      fontFamily: "'Cinzel', serif",
      borderColor: '#D4AC79',
      animationClass: 'group-hover:shadow-[0_0_30px_5px_rgba(255,165,0,0.5)]',
    },
  },
  {
    id: 'life-sentence',
    name: 'Life Sentence',
    type: '2.5D Stealth',
    description: 'A multiperspective stealth game with a paper feel, exploring confinement and strategy.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'paper cutout',
    styling: {
      backgroundColor: '#E8E8E8',
      textColor: '#4A4A4A',
      fontFamily: "'Courier Prime', monospace",
      borderColor: '#B0B0B0',
      animationClass: 'transition-transform duration-500 group-hover:[transform:rotateY(10deg)_rotateX(5deg)]',
      className: 'rounded-none',
    },
  },
  {
    id: 'bad-optics',
    name: 'Bad Optics',
    type: '2D Sprite Web Game',
    description: 'A satirical political analysis game critiquing perception, with a newsprint aesthetic.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'newsprint collage',
    styling: {
      backgroundColor: '#E0DED8',
      textColor: '#2F2F2F',
      fontFamily: 'serif',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      borderColor: '#C0C0C0',
      className: 'rounded-none',
    },
  },
  {
    id: 'kernel-sweep',
    name: 'Kernel.Sweep',
    type: 'Unity 3D',
    description: 'A hacking game with procedural generation and glitch filters, styled with circuit aesthetics.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'circuit board',
    styling: {
      backgroundColor: '#0A2F0A',
      textColor: '#00FF00',
      fontFamily: "'Space Grotesk', sans-serif",
      backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to right, hsl(var(--primary)) 1px, #0A2F0A 1px)`,
      backgroundSize: '20px 20px',
      borderColor: '#00FF00',
      animationClass: 'group-hover:animate-pulse',
    },
  },
];
