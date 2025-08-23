'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronDown, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ProjectStyling } from '@/data/projects';

interface ExpandableCardProps {
  title: string;
  icon?: LucideIcon;
  iconColor?: string;
  children: React.ReactNode;
  styling: ProjectStyling;
}

export function ExpandableSection({ title, icon: Icon, iconColor, children, styling }: ExpandableCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div
      className="mx-auto group"
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Card style={{
          backgroundColor: styling.backgroundColor,
          color: styling.textColor,
          borderColor: styling.borderColor,
          fontFamily: styling.fontFamily,
        }}
        className={cn(
          "backdrop-blur-sm overflow-hidden transition-all duration-500 ease-in-out",
          isOpen 
            ? 'shadow-lg shadow-sky-500/10' 
            : 'hover:border-sky-400/70'
        )}
      >
        <CardHeader 
          className="flex flex-row items-center justify-between p-4 cursor-pointer"
          onClick={toggleOpen}
        >
          <CardTitle className="flex items-center gap-2 text-md text-sky-300 transition-colors duration-300 group-hover:text-sky-100">
              {Icon && <Icon className={cn("w-5 h-5 flex-shrink-0 transition-colors duration-300", iconColor, isOpen && 'text-sky-200')}/>}
              {title}
          </CardTitle>
          <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
          >
              <ChevronDown className="h-6 w-6 text-sky-300 transition-colors duration-300 group-hover:text-sky-100" />
          </motion.div>
        </CardHeader>
        <AnimatePresence initial={false}>
          {isOpen && (
              <motion.section
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                      open: { opacity: 1, height: 'auto' },
                      collapsed: { opacity: 0, height: 0 }
                  }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
              >
                  <CardContent className="p-0">
                      {children}
                  </CardContent>
              </motion.section>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}
