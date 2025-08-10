
"use client"

import { useState, useEffect } from 'react';
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", label: "About", cuneiform: "𒈗" },
  { href: "/projects", label: "Realms", cuneiform: "𒆠" },
  { href: "/music", label: "Muse", cuneiform: "𒅔" },
  { href: "/contact", label: "Reach", cuneiform: "𒅗" },
];

export default function NavMenu() {
  const pathname = usePathname();

  const [isAtTop, setIsAtTop] = useState(false);
  useEffect(() => {
    // Set initial state after mount to avoid hydration mismatch
    const checkScroll = () => setIsAtTop(window.scrollY < 50);
    checkScroll();

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (    
      <nav className={cn(
          "fixed top-8 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-in-out",
          isAtTop ? "opacity-100" : "opacity-0 pointer-events-none"
          )}>
        <div className="flex items-center gap-6 text-sm text-muted-foreground font-headline">
          {navLinks.map((link: any) => (
            <Link key={link.href} href={link.href}
              className={cn(
                "relative transition-colors hover:text-accent group text-center",
                pathname.startsWith(link.href) ? "text-accent" : "text-foreground/80"
              )}
            >
              <span className="font-cuneiform text-2xl leading-none">{link.cuneiform}</span>
              <span className="block text-lg leading-tight font-ziggsub">{link.label}</span>
              <span className={cn(
                "absolute bottom-[-4px] left-0 h-0.5 w-full bg-accent transition-transform duration-300 ease-out",
                pathname.startsWith(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              )}
              ></span>
            </Link>
          ))}
        </div>
      </nav>
  );
}
