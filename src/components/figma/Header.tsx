import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from './ThemeProvider';
import Link from "next/link";
import { Logo } from '@/components/Logo';
import { Code, Music, Palette, User, Hexagon, MessageSquare } from "lucide-react";

interface HeaderProps {
  activeSection: string;
}

export function Header({ activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isDark // Check if it's dark mode
          ? 'bg-transparent' // If dark, always transparent background
          : isScrolled // If light mode, check if scrolled
            ? 'glass rounded-none' // If light and scrolled, apply glass
            : 'bg-transparent' // If light and not scrolled, apply transparent background
      }`}
      style={{
        borderColor: isDark ? 'transparent' : (isScrolled ? 'var(--glass-border)' : 'transparent'), // Set border color based on theme and scroll
      }}
    >
       {/* className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
         isScrolled ? 'glass rounded-none' : 'bg-transparent'
       }`} */}
     {/* > */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Logo className="h-12 w-12" />
            <div className="flex flex-col">
              <span className="font-bold font-headline text-2xl bg-gradient-to-br from-primary from-30% to-accent bg-clip-text gradient-text glow-text group-hover:text-cyan-500 transition-colors duration-300 ease-in-out transform scale-y-120 origin-center">CanPixel</span>
                
              <div className="hidden md:flex items-center text-xs gap-3 pointer-events-none" 
                style={{ color: '#7099C2' }}>
                    <div className="flex items-center gap-1">
                        <Code className="h-3 w-3" />
                        <span>Developer</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Music className="h-3 w-3" />
                        <span>Musician</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Palette className="h-3 w-3" />
                        <span>Designer</span>
                    </div>
              </div>
            </div>
          </Link>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <ThemeToggle 
              isDark={isDark} 
              onThemeChange={toggleTheme} 
            />
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden glass glass-hover rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 glass rounded-2xl p-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'glass glass-glow text-cyan-500' 
                      : 'text-muted-foreground hover:text-foreground hover:glass'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}