"use client";

import Link from "next/link";
import { Logo } from '@/components/Logo';
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Code, Music, Palette, User, Hexagon, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", label: "About", icon: User, cuneiform: "𒈗" },
  { href: "/projects", label: "Realms", icon: Hexagon, cuneiform: "𒆠" },
  { href: "/music", label: "Muse", icon: Music, cuneiform: "𒅔" },
  { href: "/contact", label: "Reach", icon: MessageSquare, cuneiform: "𒅗" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsScrolled(window.scrollY > 50);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ href, label, icon: Icon, cuneiform }: { href: string; label: string; icon: React.ElementType, cuneiform: string }) => {
    const isActive = pathname.startsWith(href);
    return (
        <Link suppressHydrationWarning={true} href={href}
            className={cn(
                "relative font-headline transition-colors hover:text-accent group text-center",
                isActive ? "text-accent" : "text-foreground/80"
            )}>
            <span className="font-cuneiform text-2xl leading-none">{cuneiform}</span>
            <span className="block text-sm leading-tight font-orbitron">{label}</span>
            <span className={cn(
              "absolute bottom-[-2px] left-0 h-[2px] w-full bg-accent transition-all duration-300 ease-out",
              isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            )}></span>
        </Link>
    );
  };
 
  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-500 ease-in-out",
      isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
    )}>
       <div className="px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between bg-card/80 backdrop-blur-lg border-b-border">
          <Link href="/" className="flex items-center gap-2 group">
            <Logo className="h-12 w-12" />
            <div className="flex flex-col">
              <span className="font-bold font-headline text-2xl bg-gradient-to-br from-primary from-30% to-accent bg-clip-text text-transparent group-hover:text-primary transition-colors duration-300 ease-in-out transform scale-y-120 origin-center">CanPixel</span>
                
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
          <nav className="flex w-full max-w-[250px] md:max-w-sm justify-between items-center md:space-x-6 md:w-auto md:justify-normal">
            {navLinks.map((link) => <NavLink key={link.href} {...link} />)}
          </nav>
        </div>
    </header>
  );
}
