import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ImageWithFallback } from './ImageWithFallback';
import { ExternalLink, Github, Music, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Neon Runner',
      description: 'A fast-paced endless runner with synthwave aesthetics and procedurally generated levels. Features dynamic music that adapts to gameplay.',
      category: 'games',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&h=400&fit=crop',
      technologies: ['Unity', 'C#', 'Pixel Art', 'Procedural Generation'],
      demoUrl: 'https://canpixel.itch.io/neon-runner',
      githubUrl: 'https://github.com/canpixel/neon-runner',
      featured: true,
      status: 'Released'
    },
    {
      id: 2,
      title: 'Portfolio Dashboard',
      description: 'Interactive web application for showcasing creative projects with real-time analytics and CMS integration.',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      demoUrl: 'https://portfolio.canpixel.com',
      githubUrl: 'https://github.com/canpixel/portfolio-dashboard',
      featured: true,
      status: 'Live'
    },
    {
      id: 3,
      title: 'Ethereal Soundscapes',
      description: 'Album of ambient electronic music featuring generative compositions and field recordings from nature.',
      category: 'music',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
      technologies: ['Ableton Live', 'Max/MSP', 'Field Recording', 'Mastering'],
      demoUrl: 'https://soundcloud.com/canpixel/ethereal-soundscapes',
      githubUrl: null,
      featured: true,
      status: 'Released'
    },
    {
      id: 4,
      title: 'Pixel Quest Engine',
      description: 'Custom 2D game engine built with modern C++ and OpenGL, optimized for pixel art games with advanced lighting.',
      category: 'games',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop',
      technologies: ['C++', 'OpenGL', 'GLSL', 'ImGui'],
      demoUrl: 'https://canpixel.com/pixel-quest-engine',
      githubUrl: 'https://github.com/canpixel/pixel-quest-engine',
      featured: false,
      status: 'In Development'
    },
    {
      id: 5,
      title: 'Creative Collective Hub',
      description: 'Platform connecting indie developers, artists, and musicians for collaborative projects with integrated project management.',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      demoUrl: 'https://collective.canpixel.com',
      githubUrl: 'https://github.com/canpixel/creative-collective',
      featured: false,
      status: 'Beta'
    },
    {
      id: 6,
      title: 'Chiptune Chronicles',
      description: 'Series of 8-bit inspired tracks created using vintage hardware synthesizers and modern production techniques.',
      category: 'music',
      image: 'https://images.unsplash.com/photo-1571974599782-87624638275e?w=600&h=400&fit=crop',
      technologies: ['Hardware Synths', 'Logic Pro', 'Vintage Compressors', 'Vinyl Mastering'],
      demoUrl: 'https://bandcamp.com/canpixel/chiptune-chronicles',
      githubUrl: null,
      featured: false,
      status: 'Released'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'games', label: 'Games', count: projects.filter(p => p.category === 'games').length },
    { id: 'web', label: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { id: 'music', label: 'Music', count: projects.filter(p => p.category === 'music').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 gradient-text">Featured Projects</h2>
          <div className="max-w-3xl mx-auto glass glass-hover rounded-3xl p-8">
            <p className="text-lg md:text-xl text-muted-foreground">
              A showcase of my latest work across games, web development, and music production
            </p>
          </div>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl mb-8 text-center gradient-text">⭐ Featured Work</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={`featured-${project.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full glass glass-hover border-0 overflow-hidden">
                  <CardHeader className="p-0 relative">
                    <div className="absolute top-4 left-4 z-10 flex gap-2">
                      <Badge className="glass glass-glow bg-cyan-500/20 text-cyan-500 border-cyan-500/30">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                      <Badge variant="secondary" className="glass">
                        {project.status}
                      </Badge>
                    </div>
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <CardTitle className="text-xl gradient-text">{project.title}</CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="glass text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 gap-2">
                    <Button size="sm" className="glass glass-hover bg-cyan-500/20 border-cyan-500/30" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        {project.category === 'music' ? (
                          <><Music className="w-4 h-4 mr-2" />Listen</>
                        ) : (
                          <><ExternalLink className="w-4 h-4 mr-2" />Demo</>
                        )}
                      </a>
                    </Button>
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" className="glass glass-hover" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter.id)}
              className={`glass glass-hover transition-all duration-300 ${
                activeFilter === filter.id 
                  ? 'bg-cyan-500/20 border-cyan-500/30 text-cyan-500' 
                  : 'border-muted-foreground/30'
              }`}
            >
              {filter.label}
              <Badge variant="secondary" className="ml-2 glass">
                {filter.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
              className="group"
            >
              <Card className="h-full glass glass-hover border-0 overflow-hidden">
                <CardHeader className="p-0 relative">
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="secondary" className="glass">
                      {project.status}
                    </Badge>
                  </div>
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <CardTitle className="gradient-text">{project.title}</CardTitle>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="glass text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 gap-2">
                  <Button size="sm" className="glass glass-hover bg-cyan-500/20 border-cyan-500/30" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      {project.category === 'music' ? (
                        <><Music className="w-4 h-4 mr-2" />Listen</>
                      ) : (
                        <><ExternalLink className="w-4 h-4 mr-2" />Demo</>
                      )}
                    </a>
                  </Button>
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" className="glass glass-hover" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}