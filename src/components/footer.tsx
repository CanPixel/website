import Link from 'next/link';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/CanPixel' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/canpixel/' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/cannemen/' },
];

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="text-sm text-white mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} CanPixel. All rights reserved.
          </div>
        </div>
        <div className="flex items-center gap-2">
          {socialLinks.map((social) => (
            <Button key={social.name} variant="ghost" size="icon" asChild>
              <Link href={social.url} target="_blank" rel="noopener noreferrer">
                <social.icon className="h-5 w-5 text-white hover:text-accent transition-colors" />
                <span className="sr-only">{social.name}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
