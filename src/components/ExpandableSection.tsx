'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronDown, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ProjectStyling } from '@/data/projects';
import { Button } from '@/components/ui/button';

interface ExpandableCardProps {
  title: string;
  icon?: LucideIcon;
  iconColor?: string;
  children: React.ReactNode;
  styling: ProjectStyling;
  className?: string;
}

export function ExpandableSection({ title, icon: Icon, className, iconColor, children, styling }: ExpandableCardProps) {
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
          className,
          "backdrop-blur-sm overflow-hidden transition-all duration-500 border-2 ease-in-out",
          isOpen 
            ? `shadow-lg shadow-[${styling.borderColor}/80] border-4` 
            : `hover:opacity-80 hover:border-[${styling.borderColor}/70]`
        )}
      >
        <CardHeader 
          className="flex flex-row items-center justify-between p-4 cursor-pointer"
          onClick={toggleOpen}
        >
          <CardTitle className={cn("flex items-center gap-2 text-md transition-colors duration-300 transition-all group-hover:opacity-70", styling.textColor)}>
              {Icon && <Icon className={cn("w-6 h-6 flex-shrink-0 transition-colors duration-300", iconColor, isOpen && 'opacity-80')}/>}
          </CardTitle>
          <div className="text-[20px] font-bold flex-grow text-center group-hover:opacity-70 transition-all">{title}</div>
          
          <motion.div
 animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
          >
              <ChevronDown 
              className="h-6 w-6 transition-colors duration-300 group-hover:opacity-80" 
              style={{ color: styling.textColor }}
              />
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
                      <div className="flex justify-center mt-4">
                        <Button
                          onClick={toggleOpen}
                          className="font-bold text-md w-full pt-2 pb-0 mb-0 hover:opacity-80"
                          style={{
                            backgroundColor: styling.borderColor,
                            borderColor: styling.borderColor,
                            fontFamily: styling.fontFamily,
                          }}>
                          Collapse
                        </Button>
                      </div>
                  </CardContent>
              </motion.section>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}
