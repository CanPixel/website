import { useState, useEffect } from 'react';
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Realms" },
  { href: "/music", label: "Muse" },
  { href: "/contact", label: "Reach" },
];

export default function NavMenu() {
  const pathname = usePathname();

  const [isAtTop, setIsAtTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <nav className={cn(
          "fixed top-8 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-in-out",
          isAtTop ? "opacity-100" : "opacity-0 pointer-events-none"
          )}>
      <div className="flex items-center gap-6 text-sm text-muted-foreground">
          {navLinks.map((link : any) => (
              pathname.startsWith(link.href) ?
              <Link key={link.href} href={link.href} 
              className="relative transition-colors hover:text-accent group text-accent">
                  <span>{link.label}</span>
                  <span className="scale-x-100 absolute bottom-[-4px] left-0 h-0.5 w-full bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </Link>
              :
              <Link key={link.href} href={link.href} 
              className="text-foreground/80 relative transition-colors hover:text-accent group">
                  <span>{link.label}</span>
                  <span className="scale-x-0 group-hover:scale-x-100 absolute bottom-[-4px] left-0 h-0.5 w-full bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </Link>
          ))}
      </div>
      </nav>
  );
}