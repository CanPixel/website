"use client"

import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('group transition-transform duration-300 ease-in-out hover:scale-105', className)}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M24 6L6 16V36L24 46L42 36V16L24 6Z"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          className="transition-all duration-500 group-hover:stroke-hsl(var(--accent))"
        />
        <path
          d="M6 16L24 26L42 16"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          className="transition-all duration-500 delay-100 group-hover:stroke-hsl(var(--accent))"
        />
        <path
          d="M24 46V26"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          className="transition-all duration-500 delay-200 group-hover:stroke-hsl(var(--accent))"
        />
        <path
          d="M15 21L24 16L33 21"
          stroke="hsl(var(--foreground))"
          strokeWidth="1.5"
          className="transition-all duration-500 delay-300 group-hover:opacity-0"
        />
        <path
          d="M12 33L24 38L36 33"
          stroke="hsl(var(--foreground))"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="opacity-50 transition-all duration-500 delay-400 group-hover:stroke-hsl(var(--accent)) group-hover:opacity-100"
        />
      </svg>
    </div>
  );
}
