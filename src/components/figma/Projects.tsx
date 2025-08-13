"use client"

import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { Project } from '@/data/projects';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ImageWithFallback } from './ImageWithFallback';
import { ExternalLink, Github, Music, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsCollection = collection(db, 'portfolioItems');
      const projectSnapshot = await getDocs(projectsCollection);
      const projectList = projectSnapshot.docs
      .filter(doc => {
        const projectData = doc.data() as Omit<Project, 'id'>;
        return projectData.type === 'game';
      })
      .map(doc => {
        const projectData = doc.data() as Omit<Project, 'id'>;
        return {
          id: doc.id,
          ...projectData
        };
      });
      setProjects(projectList);
    };
    fetchProjects();
  }, []);

  const skills = [
    'Unity', 'C#', 'Pixel Art', 'Procedural Generation',
    'HTML5', 'Editor Scripting',
    'Construct 2', 'LUA (PICO-8)', 'Audio Design', 'Procedural Audio',
    'C++', 'Java', 'Embedded Development (Arduino)', 'AI Programming'
  ];
  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    ...skills.map(skill => ({ 
      id: skill, 
      label: skill, 
      count: projects.filter(p => p.properties?.skills?.includes(skill)).length, 
    })),
  ];
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.properties?.skills?.includes(activeFilter));
  
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
          <h2 className="text-4xl md:text-5xl mb-6 gradient-text">Projects</h2>
          <div className="max-w-3xl mx-auto glass glass-hover rounded-3xl p-8">
            <p className="text-md md:text-xl text-muted-foreground">
              A showcase of my latest work across games, web development, and music production
            </p>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter.id)}
              className={`glass glass-hover hover:bg-blue transition-all duration-300 ${
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
                      src={"images/" + project.thumbnailUrl}
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
                    {project.properties?.skills?.map((tech) => (
                      <Badge key={tech} variant="secondary" className="glass text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 gap-2">
                  <Button size="sm" className="glass glass-hover bg-cyan-500/20 border-cyan-500/30" asChild>
                    <a href={project.url ? project.url : '/portfolio/' + project.id} target="_blank" rel="noopener noreferrer">
                      {project.type === 'music' ? (
                        <><Music className="w-4 h-4 mr-2" />Listen</>
                      ) : (
                        <><ExternalLink className="w-4 h-4 mr-2" />Demo</>
                      )}
                    </a>
                  </Button>
                  {project.properties?.repoLink && (
                    <Button size="sm" variant="outline" className="hover:bg-blue glass glass-hover" asChild>
                      <a href={project.properties?.repoLink} target="_blank" rel="noopener noreferrer">
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