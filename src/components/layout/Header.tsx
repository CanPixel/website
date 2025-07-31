'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/Logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'REALMS' },
  { href: '/music', label: 'MUSE' },
  { href: '/about', label: 'ABOUT' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="h-10 w-10" />
            <span className="inline-block font-bold font-headline text-xl tracking-wider uppercase">CanPixel</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary uppercase tracking-widest font-headline',
                  pathname === href ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
