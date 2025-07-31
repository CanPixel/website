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
      backgroundColor: '#fdf6e3',
      textColor: '#584b3d',
      fontFamily: "'serif'",
      borderColor: '#d3c0a4',
      backgroundImage: 'https://www.transparenttextures.com/patterns/old-wall.png',
      animationClass: 'hover:shadow-[0_0_20px_#d3c0a4]',
    },
  },
  {
    id: 'life-sentence',
    name: 'Life Sentence',
    type: '2.5D Stealth',
    summary: 'A multiperspective stealth game with a paper feel, exploring confinement and strategy.',
    animation: 'fold',
    styling: {
      backgroundColor: '#ffffff',
      textColor: '#222222',
      fontFamily: "'sans-serif'",
      borderColor: '#cccccc',
      backgroundImage: 'https://www.transparenttextures.com/patterns/paper.png',
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
      backgroundColor: '#f2f2f2',
      textColor: '#1a1a1a',
      fontFamily: "'Courier New', monospace",
      borderColor: '#bbbbbb',
      backgroundImage: 'https://www.transparenttextures.com/patterns/diagmonds.png'
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
