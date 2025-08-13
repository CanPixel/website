import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Github, Linkedin, Mail, Play, Download, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Logo } from '@/components/Logo';
import Link from 'next/link';

export function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Game Developer • Web Developer • Musician';

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [fullText]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Avatar/Logo Glass Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto w-32 h-32 glass glass-glow rounded-full flex items-center justify-center mb-8 group"
          >
            <Logo fillColor={'teal'} className="h-20 w-20 text-black-500" />
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl">
              Hi, I'm <span className="gradient-text glow-text">CanPixel</span>
            </h1>
            
            <div className="h-10 md:h-12">
              <p className="text-xl md:text-2xl text-muted-foreground">
                {displayedText}
                <span className="animate-pulse text-cyan-500">|</span>
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass glass-hover rounded-3xl p-8 max-w-3xl mx-auto"
          >
            <p className="text-md md:text-xl text-muted-foreground leading-relaxed">
              Crafting pixel-perfect games, building cutting-edge web experiences, and composing 
              captivating soundscapes. Welcome to my digital universe where creativity meets technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pb-3 flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <div className="flex gap-4">
              <Button 
                size="lg" 
                asChild
                className="rounded-xl group glass glass-hover bg-primary/20 border-cyan-500/30 text-cyan-500 hover:text-cyan-500-foreground"
              >
                <Link href="/projects">
                  <Play className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  View My Work
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-xl hover:bg-cyan-500/10 glass glass-hover border-muted-foreground/30"
                asChild
              >
                <a href="pdf/resume.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:bg-cyan-500/10 glass glass-hover rounded-full border-muted-foreground/30"
                asChild
              >
                <a href="https://github.com/canpixel" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:bg-cyan-500/10 glass glass-hover rounded-full border-muted-foreground/30"
                asChild
              >
                <a href="https://linkedin.com/in/canpixel" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:bg-cyan-500/10 glass glass-hover rounded-full border-muted-foreground/30"
                asChild
              >
                <a href="mailto:canur@canpixel.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}