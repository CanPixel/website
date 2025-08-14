"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageSlideshowProps {
  images: string[];
}

export function ImageSlideshow({ images }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, images.length]);

  const handleBubbleClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]} 
            alt={`Slideshow image ${currentIndex + 1}`}
            width={1000}
            height={1000}
            className="object-fit border border-white"
          />
           <div className="absolute inset-0 bg-black/20"></div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Bubbles */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full bg-white transition-opacity ${
              currentIndex === index ? 'opacity-80' : 'opacity-40 hover:opacity-60'
            }`}
            onClick={() => handleBubbleClick(index)}
            aria-label={`Show image ${index + 1}`}
          ></button>
        ))}
      </div>
    </>
  );
}
