"use client"

import { useState, useEffect } from 'react';
import { ThemeProvider } from '@/components/figma/ThemeProvider';
import { Header } from '@/components/figma/Header';
import { Hero } from '@/components/figma/Hero';
import { About } from '@/components/figma/About';
import { Skills } from '@/components/figma/Skills';
import { Projects } from '@/components/figma/Projects';
import { Footer } from '@/components/figma/Footer';

function AppContent() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden theme-transition">
      {/* Floating background elements - adjust colors for both themes */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl floating"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl floating-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl floating-delayed"></div>
      </div>
      
      <Header activeSection={activeSection} />
      <main className='mt-20'>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <>
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    </>
  );
}