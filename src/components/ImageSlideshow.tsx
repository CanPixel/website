"use client";

import { useState } from 'react'; // No need for useEffect or useRef for auto-scroll
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react'; // Import arrow icons

interface ImageSlideshowProps {
  images: string[];
}

export function ImageSlideshow({ images }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Remove the useEffect and useRef for auto-scrolling

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleBubbleClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg group"> {/* Added a wrapper div with size */}
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
            fill // Use fill for responsive sizing within the container
            className="object-cover" // Maintain aspect ratio and cover container
          />
           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
        onClick={handlePrevClick}
        aria-label="Previous image"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
        onClick={handleNextClick}
        aria-label="Next image"
      >
        <ArrowRight className="w-6 h-6" />
      </button>

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
    </div>
  );
}