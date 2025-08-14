"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageSlideshowProps {
  images: string[];
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export function ImageSlideshow({ images }: ImageSlideshowProps) {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = page % images.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleDotClick = (index: number) => {
    const newDirection = index > imageIndex ? 1 : -1;
    setPage([index, newDirection]);
  };
  
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-lg group bg-black/20">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          className="absolute h-full w-full"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
        <Image
          src={`/images/${images[imageIndex]}`}
          alt={`Slideshow image ${imageIndex + 1}`}
          fill
          className="object-contain"
          priority={imageIndex === 0}
        />
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2">
        <button
          onClick={() => paginate(-1)}
          className="p-2 rounded-full bg-black/40 text-white/80 hover:bg-black/60 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2">
        <button
          onClick={() => paginate(1)}
          className="p-2 rounded-full bg-black/40 text-white/80 hover:bg-black/60 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-colors",
              i === imageIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
            )}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
