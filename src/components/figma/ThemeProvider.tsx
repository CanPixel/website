"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  isAutoMode: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [isAutoMode, setIsAutoMode] = useState(true);

  // Check if it's nighttime (6 PM to 6 AM)
  const isNightTime = () => {
    const hour = new Date().getHours();
    return hour >= 18 || hour < 6;
  };

  // Initialize theme based on time of day
  useEffect(() => {
    const savedTheme = localStorage.getItem('canpixel-theme');
    const savedAutoMode = localStorage.getItem('canpixel-auto-mode');
    
    if (savedTheme && savedAutoMode === 'false') {
      // User has manually set a theme
      setThemeState(savedTheme as Theme);
      setIsAutoMode(false);
    } else {
      // Auto mode - set based on time
      setThemeState(isNightTime() ? 'dark' : 'light');
      setIsAutoMode(true);
    }
  }, []);

  // Auto-update theme based on time when in auto mode
  useEffect(() => {
    if (!isAutoMode) return;

    const interval = setInterval(() => {
      const newTheme = isNightTime() ? 'dark' : 'light';
      if (newTheme !== theme) {
        setThemeState(newTheme);
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [theme, isAutoMode]);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    
    // Add theme transition class
    root.classList.add('theme-transition');
    
    // Store theme preference
    localStorage.setItem('canpixel-theme', theme);
    localStorage.setItem('canpixel-auto-mode', isAutoMode.toString());
  }, [theme, isAutoMode]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setThemeState(newTheme);
    setIsAutoMode(false); // Disable auto mode when manually toggling
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    setIsAutoMode(false); // Disable auto mode when manually setting
  };

  const value: ThemeContextType = {
    theme,
    isDark: theme === 'dark',
    toggleTheme,
    setTheme,
    isAutoMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}