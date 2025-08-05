
"use client";

import Link from 'next/link';
import { useState } from 'react';

const menuItems = [
    { href: '/about', label: "My Saga", icon: '𒈗' }, // lugal - King/Ruler
    { href: '/games', label: 'Gate to Games', icon: '𒆠' },     // ki - Place/Earth
    { href: '/music', label: 'Hymns Portal', icon: '𒁆' }, // muncub
  ];

export function MysticMenu() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav 
      className="relative z-20 flex items-center justify-center w-48 h-48"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Main navigation"
    >
      {/* Central button / Anchor point */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`rounded-full bg-gradient-to-br from-yellow-300 via-primary to-amber-600 flex items-center justify-center transition-all duration-300 ${isHovered ? 'w-24 h-24 animate-pulse-glow' : 'w-20 h-20'}`}>
          <span className={`font-cuneiform text-black transition-all duration-300 ${isHovered ? 'text-5xl opacity-75' : 'text-4xl opacity-100'}`}>
            {'𒀭'}
          </span>
        </div>
      </div>
      
      {/* Unfolding menu items */}
      {menuItems.map((item, index) => {
        const angle = (index / menuItems.length) * 2 * Math.PI - (Math.PI / 2); // Start from top
        const radius = 110; // 110px from center
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <Link
            key={item.href}
            href={item.href}
            className="group absolute flex flex-col items-center gap-2 text-primary transition-all duration-300 ease-in-out"
            style={{
              transform: isHovered ? `translate(${x}px, ${y}px) scale(1)` : 'translate(0, 0) scale(0)',
              opacity: isHovered ? 1 : 0,
              transitionDelay: isHovered ? `${index * 100}ms` : '0ms',
            }}
          >
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-background/50 border border-primary/30 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
              <span className={`font-cuneiform transition-transform duration-300 group-hover:scale-110 ${item.href === '/about' ? 'text-2xl' : item.href === '/music' ? 'text-3xl' : 'text-4xl'}`}>{item.icon}</span>
            </div>
            <span 
              className="text-sm font-light tracking-widest text-foreground/80 transition-opacity duration-300"
              style={{ opacity: isHovered ? 1 : 0, transitionDelay: isHovered ? `${index * 100 + 100}ms` : '0ms' }}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}