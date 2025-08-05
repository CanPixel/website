
"use client"

import { useState, useEffect } from 'react';
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { Fragment } from 'react';

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Realms" },
  { href: "/music", label: "Muse" },
  { href: "/contact", label: "Reach" },
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
              link.label === "Realms" ? (
                <Fragment key={link.href}>
                  <Link key={link.href} href={link.href}
                    className={cn(
                      "relative transition-colors hover:text-accent group text-lg",
                      pathname.startsWith(link.href) ? "text-accent" : "text-foreground/80",
                      "mr-1" 
                    )}
                  >
                    <span>{link.label}</span>
                    <span className={cn(
                      "absolute bottom-[-4px] left-0 h-0.5 w-full bg-accent transition-transform duration-300 ease-out",
                      pathname.startsWith(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                    ></span>
                  </Link>
                  <div className="h-4 w-px bg-muted-foreground mx-1"></div> {/* Reduced spacing around separator */}
                </Fragment>
              ) : link.label === "Muse" ? (
                <Link key={link.href} href={link.href}
                  className={cn(
                    "relative transition-colors hover:text-accent group text-lg",
                    pathname.startsWith(link.href) ? "text-accent" : "text-foreground/80",
                    "ml-1"
                  )}
                >
                    <span>{link.label}</span>
                    <span className={cn(
                      "absolute bottom-[-4px] left-0 h-0.5 w-full bg-accent transition-transform duration-300 ease-out",
                      pathname.startsWith(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                    ></span>
                </Link>
              ) : (
                <Link key={link.href} href={link.href}
                  className={cn(
                    "relative transition-colors hover:text-accent group text-lg",
                    pathname.startsWith(link.href) ? "text-accent" : "text-foreground/80",
                    link.label === "About" ? "mr-11" : link.label === "Reach" ? "ml-11" : ""
                  )}
                >
                  <span>{link.label}</span>
                  <span className={cn(
                    "absolute bottom-[-4px] left-0 h-0.5 w-full bg-accent transition-transform duration-300 ease-out",
                    pathname.startsWith(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}
                  ></span>
                </Link>
              )
            ))}
      </div>
      </nav>
  );
}
