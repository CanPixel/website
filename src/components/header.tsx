
"use client";

import Link from "next/link";
import { Logo } from '@/components/Logo';
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Code2, Code, Music, Palette, User, Hexagon, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks = [
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Realms", icon: Hexagon },
  { href: "/music", label: "Muse", icon: Music },
  { href: "/contact", label: "Reach", icon: MessageSquare },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isMobile = useIsMobile();

  useEffect(() => {
    // Set initial state after mount to avoid hydration mismatch
    setIsScrolled(window.scrollY > 50);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ href, label, icon: Icon }: { href: string; label: string; icon: React.ElementType }) => {
    const isActive = pathname.startsWith(href);
    return (
        <Link
            href={href}
            className={cn(
                "relative text-md font-headline transition-colors hover:text-accent group",
                isActive ? "text-accent" : "text-foreground/80"
            )}
        >
            <span>{label}</span>
            <span className={cn(
              "absolute bottom-[-2px] left-0 h-[2px] w-full bg-accent transition-all duration-300 ease-out",
              isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            )}></span>
        </Link>
    );
  };
  
  const MobileNavLink = ({ href, label, icon: Icon }: { href: string; label: string; icon: React.ElementType }) => {
    const isActive = pathname.startsWith(href);
    return (
      <Link href={href} className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
        <div className={cn(
          "relative p-2 rounded-full transition-all duration-300",
          isActive ? "bg-accent/20" : ""
        )}>
          <Icon className={cn(
            "w-6 h-6 transition-all duration-300 transform group-hover:scale-110",
             isActive ? "text-accent" : "text-foreground/80"
          )} />
           {isActive && <span className="absolute -bottom-1 left-1/2 h-1 w-4 -translate-x-1/2 rounded-full bg-accent"></span>}
        </div>
      </Link>
    );
  };
 
  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-500 ease-in-out",
      isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
    )}>
       <div className="px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between bg-card/80 backdrop-blur-lg border-b-border">
          <div className="flex items-center gap-4">
            <Link href="/" className="group flex flex-col items-center">
              <Logo className="h-8 w-8" />
              <Code2 className="h-5 w-5 text-yellow-400 group-hover:scale-110 group-hover:text-accent transition-all duration-300 ease-in-out" />
            </Link>
            <div className="flex flex-col group">
              <Link href="/" className="group font-bold font-headline text-2xl bg-gradient-to-br from-primary from-30% to-accent bg-clip-text text-transparent group-hover:text-accent transition-colors duration-300 ease-in-out transform scale-y-120 origin-center">CanPixel</Link>
              <div className="hidden md:flex items-center text-xs gap-3" style={{ color: '#7099C2' }}>
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
          </div>
           <nav className="flex items-center space-x-2 md:space-x-6">
              {isMobile
                ? navLinks.map((link) => <MobileNavLink key={link.href} {...link} />)
                : navLinks.map((link) => <NavLink key={link.href} {...link} />)
              }
          </nav>
        </div>
    </header>
  );
}
