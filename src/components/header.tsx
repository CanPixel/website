
"use client";

import Link from "next/link";
import { Logo } from '@/components/Logo';
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Code2, Code, Music, Palette } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks = [
  { href: "/projects", label: "Realms" },
  { href: "/music", label: "Muse" },
  { href: "/about", label: "Lore" },
  { href: "/contact", label: "Reach" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname.startsWith(href);
    return (
        <Link
            href={href}
            className={cn(
                "relative text-md font-nav transition-colors hover:text-accent group",
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
 
  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-500 ease-in-out",
      isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
    )}>
       <div className="container mx-auto px-4 flex h-16 items-center justify-between bg-card/80 backdrop-blur-lg border-b-border">
          <div className="flex items-center gap-2">
            <Link href="/" className="group flex items-center">
              <Logo className="h-10 w-10" />
              <Code2 className="h-7 w-7 text-yellow-400 group-hover:scale-110 group-hover:text-accent transition-all duration-300 ease-in-out" />
            </Link>
            <div className="flex flex-col group">
              <Link href="/" className="group font-bold font-headline text-xl bg-gradient-to-br from-primary from-30% to-accent bg-clip-text text-transparent group-hover:text-accent transition-colors duration-300 ease-in-out">CanPixel</Link>
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
          <nav className="md:flex items-center space-x-6">
              {navLinks.map((link) => (
                  <NavLink key={link.href} {...link} />
              ))}
          </nav>
        </div>
    </header>
  );
}
