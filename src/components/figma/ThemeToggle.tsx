import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  isDark: boolean;
  onThemeChange: (isDark: boolean) => void;
}

export function ThemeToggle({ isDark, onThemeChange }: ThemeToggleProps) {
  const [isManualOverride, setIsManualOverride] = useState(false);

  const handleToggle = () => {
    setIsManualOverride(true);
    onThemeChange(!isDark);
  };

  const getThemeLabel = () => {
    if (isDark) {
      return 'Nocturn';
    }
    return 'Daylight';
  };

  return (
    <div className="flex items-center gap-3">
      {/* Theme Label */}
      <span className="text-sm text-figma-muted-foreground hidden sm:block">
        {getThemeLabel()}
      </span>
      
      {/* iOS-style Toggle */}
      <button
        onClick={handleToggle}
        className="relative inline-flex h-8 w-14 items-center rounded-full glass glass-hover focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-background transition-all duration-300"
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        {/* Background Track */}
        <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
          isDark 
            ? 'bg-gradient-to-r from-indigo-600 to-purple-600' 
            : 'bg-gradient-to-r from-sky-400 to-blue-500'
        }`} />
        
        {/* Sliding Circle */}
        <motion.div
          layout
          className={`relative inline-block h-6 w-6 rounded-full glass shadow-lg flex items-center justify-center ${
            isDark ? 'translate-x-1' : 'translate-x-7'
          }`}
          animate={{
            x: isDark ? 4 : 28,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        >
          {/* Icon with smooth transition */}
          <motion.div
            key={isDark ? 'moon' : 'sun'}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center"
          >
            {isDark ? (
              <Moon className="h-3 w-3 text-slate-700" />
            ) : (
              <Sun className="h-3 w-3 text-amber-500" />
            )}
          </motion.div>
        </motion.div>
      </button>
      
      {/* Auto/Manual Indicator */}
      {!isManualOverride && (
        <span className="text-xs text-figma-muted-foreground/60 hidden md:block">
          Auto
        </span>
      )}
    </div>
  );
}