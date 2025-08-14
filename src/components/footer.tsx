import Link from 'next/link';
import { Github, Linkedin, Instagram } from 'lucide-react';

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
          <div className="text-sm text-white my-0 sm:mb-0">
            &copy; {new Date().getFullYear()} CanPixel. All rights reserved.
          </div>
        </div>
        <div className="cuneiform-text text-sm my-0 sm:mb-0">
          𒀭𒂗𒆠 (Enki) - God of Creation
        </div>
        <code>
          <div className="text-[#8a7c6b] text-[10px] my-0 sm:mb-0 hover:text-white">
            <Link href="/figma">Page not corporate enough?</Link>
          </div>
        </code>
        <div className="flex items-center gap-2">
          {socialLinks.map((social) => (
            <Link 
              key={social.name} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 transition-colors text-white hover:text-accent"
              aria-label={social.name}
            >
              <social.icon className="h-5 w-5" />
              <span className="sr-only">{social.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
