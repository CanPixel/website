import { Github, Linkedin, Mail, Heart, ArrowUp, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/canpixel',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/canpixel',
      label: 'LinkedIn'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:hello@canpixel.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass glass-hover rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 glass rounded-xl">
                  <Sparkles className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="text-2xl gradient-text glow-text">CanPixel</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Crafting digital experiences through games, web applications, and music. 
                Every pixel has purpose, every line of code tells a story.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <Button
                    key={link.label}
                    variant="ghost"
                    size="icon"
                    className="glass glass-hover rounded-full"
                    asChild
                  >
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 gradient-text">Navigation</h4>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-muted-foreground hover:text-cyan-500 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-4 gradient-text">Services</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Game Development</p>
                <p>Web Applications</p>
                <p>Music Production</p>
                <p>UI/UX Design</p>
                <p>Creative Consulting</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-muted-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-muted-foreground flex items-center gap-2 text-sm">
                © {currentYear} CanPixel. Made with <Heart className="w-4 h-4 text-red-400" /> and lots of pixels.
              </p>
              
              <div className="flex items-center gap-4">
                <span className="text-xs text-muted-foreground">
                  Crafted with React & Tailwind CSS
                </span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={scrollToTop}
                  className="glass glass-hover rounded-full"
                >
                  <ArrowUp className="w-4 h-4 mr-2" />
                  Back to Top
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}