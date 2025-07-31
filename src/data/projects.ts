export interface Project {
  id: string;
  name: string;
  type: string;
  summary: string;
  animation: 'flicker' | 'fold' | 'typewriter' | 'sweep' | 'none';
  styling: {
    backgroundColor: string;
    textColor: string;
    fontFamily: string;
    backgroundImage?: string;
    borderColor?: string;
    animationClass?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'chivalry-chef',
    name: 'Chivalry Chef',
    type: 'Unity 3D',
    summary: 'A medieval cooking game blending chivalry and culinary artistry, with a cozy, parchment aesthetic.',
    animation: 'flicker',
    styling: {
      backgroundColor: '#F5E8C7',
      textColor: '#8B4513',
      fontFamily: "'Cinzel', serif",
      borderColor: '#D4AC79',
      animationClass: 'hover:shadow-[0_0_30px_5px_rgba(255,165,0,0.5)]',
      backgroundImage: 'https://placehold.co/600x400.png',
    },
  },
  {
    id: 'life-sentence',
    name: 'Life Sentence',
    type: '2.5D Stealth',
    summary: 'A multiperspective stealth game with a paper feel, exploring confinement and strategy.',
    animation: 'fold',
    styling: {
      backgroundColor: '#E8E8E8',
      textColor: '#4A4A4A',
      fontFamily: "'Courier Prime', monospace",
      borderColor: '#B0B0B0',
      animationClass: 'transition-transform duration-500 hover:[transform:rotateY(10deg)_rotateX(5deg)]',
      backgroundImage: 'https://placehold.co/600x400.png',
    },
  },
  {
    id: 'bad-optics',
    name: 'Bad Optics',
    type: '2D Sprite Web Game',
    summary: 'A satirical political analysis game critiquing perception, with a newsprint aesthetic.',
    animation: 'typewriter',
    styling: {
      backgroundColor: '#E0DED8',
      textColor: '#2F2F2F',
      fontFamily: 'serif',
      backgroundImage: `data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`,
      borderColor: '#C0C0C0',
    },
  },
  {
    id: 'kernel-sweep',
    name: 'Kernel.Sweep',
    type: 'Unity 3D',
    summary: 'A hacking game with procedural generation and glitch filters, styled with circuit aesthetics.',
    animation: 'sweep',
    styling: {
      backgroundColor: '#0A2F0A',
      textColor: '#00FF00',
      fontFamily: "'Space Grotesk', sans-serif",
      backgroundImage: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2300ff00' fill-opacity='0.1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`,
      borderColor: '#00FF00',
      animationClass: 'animate-pulse',
    },
  },
];
