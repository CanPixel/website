import { Badge } from '../ui/badge';
import { motion } from 'framer-motion';
import { Code, Gamepad, Music2, Palette, Database, Cloud } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Game Development',
      icon: <Gamepad className="w-6 h-6" />,
      color: 'text-blue-400',
      skills: ['Unity 3D', 'C#', 'Godot', 'Pixel Art', 'Game Design', 'Level Design', 'Procedural Generation']
    },
    {
      category: 'Web Development',
      icon: <Code className="w-6 h-6" />,
      color: 'text-green-400',
      skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Three.js', 'WebGL', 'PWAs']
    },
    {
      category: 'Music & Audio',
      icon: <Music2 className="w-6 h-6" />,
      color: 'text-purple-400',
      skills: ['Ableton Live', 'FL Studio', 'Synthesizers', 'Audio Engineering', 'Sound Design', 'Chiptune', 'Ambient']
    },
    {
      category: 'Design & Art',
      icon: <Palette className="w-6 h-6" />,
      color: 'text-pink-400',
      skills: ['Aseprite', 'Photoshop', 'Figma', 'Blender', 'After Effects', 'UI/UX Design', 'Branding']
    },
    {
      category: 'Backend & Data',
      icon: <Database className="w-6 h-6" />,
      color: 'text-cyan-400',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'REST APIs', 'Prisma', 'Supabase']
    },
    {
      category: 'DevOps & Tools',
      icon: <Cloud className="w-6 h-6" />,
      color: 'text-orange-400',
      skills: ['Git', 'Docker', 'Vercel', 'AWS', 'GitHub Actions', 'Linux', 'VS Code', 'Notion']
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 gradient-text">Skills & Technologies</h2>
          <div className="max-w-3xl mx-auto glass glass-hover rounded-3xl p-8">
            <p className="text-lg md:text-xl text-muted-foreground">
              A comprehensive toolkit spanning creative disciplines and cutting-edge technologies
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass glass-hover rounded-3xl p-6 group"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className={`p-3 glass rounded-xl ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl gradient-text">{category.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="glass glass-hover px-3 py-1.5 text-sm border-0 hover:text-cyan-500 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glass glass-hover rounded-3xl p-8">
            <h3 className="text-2xl text-center mb-8 gradient-text">Expertise Levels</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto glass rounded-full flex items-center justify-center text-2xl">
                  🚀
                </div>
                <h4 className="text-lg text-cyan-500">Expert</h4>
                <p className="text-sm text-muted-foreground">React, Unity, C#, JavaScript, Audio Production</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto glass rounded-full flex items-center justify-center text-2xl">
                  ⚡
                </div>
                <h4 className="text-lg text-cyan-500">Advanced</h4>
                <p className="text-sm text-muted-foreground">TypeScript, Next.js, Node.js, Game Design, Pixel Art</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto glass rounded-full flex items-center justify-center text-2xl">
                  🌱
                </div>
                <h4 className="text-lg text-cyan-500">Learning</h4>
                <p className="text-sm text-muted-foreground">Rust, WebGPU, Machine Learning, VR Development</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}