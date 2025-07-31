export interface Project {
  id: string;
  name: string;
  type: string;
  summary: string;
  animation: 'flicker' | 'fold' | 'typewriter' | 'sweep' | 'none';
  styling?: {
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
      backgroundColor: 'hsl(var(--card))',
      textColor: 'hsl(var(--card-foreground))',
      fontFamily: "'Roboto Mono', monospace",
      borderColor: 'hsl(var(--border))',
      backgroundImage: 'https://placehold.co/600x400.png',
      animationClass: 'hover:shadow-[0_0_20px_hsl(var(--primary))]',
    },
  },
  {
    id: 'life-sentence',
    name: 'Life Sentence',
    type: '2.5D Stealth',
    summary: 'A multiperspective stealth game with a paper feel, exploring confinement and strategy.',
    animation: 'fold',
    styling: {
      backgroundColor: 'hsl(var(--card))',
      textColor: 'hsl(var(--card-foreground))',
      fontFamily: "'Roboto Mono', monospace",
      borderColor: 'hsl(var(--border))',
      backgroundImage: 'https://placehold.co/600x400.png',
      animationClass: 'transition-transform duration-500 hover:[transform:rotateY(-5deg)_rotateX(2deg)]',
    },
  },
  {
    id: 'bad-optics',
    name: 'Bad Optics',
    type: '2D Sprite Web Game',
    summary: 'A satirical political analysis game critiquing perception, with a newsprint aesthetic.',
    animation: 'typewriter',
    styling: {
      backgroundColor: 'hsl(var(--card))',
      textColor: 'hsl(var(--card-foreground))',
      fontFamily: "'Roboto Mono', monospace",
      borderColor: 'hsl(var(--border))',
    },
  },
  {
    id: 'kernel-sweep',
    name: 'Kernel.Sweep',
    type: 'Unity 3D',
    summary: 'A hacking game with procedural generation and glitch filters, styled with circuit aesthetics.',
    animation: 'sweep',
    styling: {
      backgroundColor: '#000',
      textColor: 'hsl(var(--accent))',
      fontFamily: "'Roboto Mono', monospace",
      borderColor: 'hsl(var(--accent))',
    },
  },
];
