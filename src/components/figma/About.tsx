import { Card, CardContent } from '../ui/card';
import { Gamepad2, Code2, Music, Palette, Zap, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
  const skills = [
    {
      icon: <Gamepad2 className="w-8 h-8 text-blue-400" />,
      title: 'Game Development',
      description: 'Creating immersive indie games with Unity and custom engines. Specializing in pixel art aesthetics, procedural generation, and innovative gameplay mechanics.',
      highlight: '5+ Years Experience'
    },
    {
      icon: <Code2 className="w-8 h-8 text-green-400" />,
      title: 'Web Development',
      description: 'Building modern, responsive web applications with React, Next.js, and TypeScript. Full-stack solutions with clean code and exceptional user experiences.',
      highlight: 'Full-Stack Expertise'
    },
    {
      icon: <Music className="w-8 h-8 text-purple-400" />,
      title: 'Music Production',
      description: 'Composing original soundtracks and electronic music. From chiptune to ambient, creating audio experiences that complement and enhance visual art.',
      highlight: '2 Records Released, 10+ Tracks'
    }
  ];

  const personalStats = [
    { icon: <Palette className="w-6 h-6" />, label: 'Creative Projects', value: '20+' },
    { icon: <Zap className="w-6 h-6" />, label: 'Lines of Code', value: '100K+' },
    { icon: <Coffee className="w-6 h-6" />, label: 'Coffee Consumed', value: '∞' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 gradient-text">About Me</h2>
          <div className="max-w-4xl mx-auto glass glass-hover rounded-3xl p-8">
            <p className="text-md md:text-xl text-muted-foreground leading-relaxed">
              I'm CanPixel, a multi-disciplinary digital artist passionate about creating experiences 
              that blend technology with creativity. Based in the intersection of code, pixels, and sound, 
              I craft everything from indie games to web applications, always with an eye for detail 
              and a love for pixel-perfect design.
            </p>
          </div>
        </motion.div>

        {/* Main Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass glass-hover border-0 group">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="flex justify-center">
                    <div className="p-4 glass rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl gradient-text">{skill.title}</h3>
                    <div className="text-md inline-block px-3 py-1 glass rounded-full text-sm text-cyan-500">
                      {skill.highlight}
                    </div>
                  </div>
                  <p className="text-md text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Personal Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass glass-hover rounded-3xl p-8"
        >
          <h3 className="text-2xl text-center mb-8 gradient-text">By the Numbers</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {personalStats.map((stat, index) => (
              <div key={stat.label} className="text-center space-y-2">
                <div className="flex justify-center">
                  <div className="p-3 glass rounded-xl text-cyan-500">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl gradient-text">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass glass-hover rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl mb-4 gradient-text">Philosophy</h3>
            <p className="text-md text-muted-foreground leading-relaxed">
              "Every pixel has purpose, every line of code tells a story, and every note creates emotion. 
              I believe in crafting digital experiences that not only function beautifully but also 
              inspire and delight users at every interaction."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}