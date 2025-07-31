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
      backgroundColor: '#F5E8C7',
      textColor: '#8B4513',
      fontFamily: "'Cinzel', serif",
      borderColor: '#D3B88C',
      backgroundImage: 'https://www.transparenttextures.com/patterns/old-wall.png',
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
      fontFamily: "'Inter', sans-serif",
      borderColor: '#BDBDBD',
      backgroundImage: 'https://www.transparenttextures.com/patterns/paper.png',
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
      fontFamily: "'Space Grotesk', monospace",
      borderColor: '#A9A9A9',
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
      backgroundColor: '#0A1A0A',
      textColor: '#00FF00',
      fontFamily: "'Space Grotesk', monospace",
      borderColor: '#00FF00',
    },
  },
];
