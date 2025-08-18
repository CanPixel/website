
"use client";

import React, { useState, useCallback, useEffect } from 'react'
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';


interface ImageSlideshowProps {
  images: string[];
}

export function ImageSlideshow({ images }: ImageSlideshowProps) {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, handlePrev, handleNext]);


  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <div 
                  className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => {
                    setSelectedIndex(index);
                    setOpen(true);
                  }}
                >
                  <Image
                    src={`/images/${image}`}
                    alt={`Slideshow thumbnail ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-white hover:text-accent hover:bg-blue-600" />
        <CarouselNext className="text-white hover:text-accent hover:bg-blue-600" />
      </Carousel>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-2 bg-transparent border-none shadow-none">
            <div className="relative aspect-video">
              <Image
                src={`/images/${images[selectedIndex]}`}
                alt={`Fullscreen image ${selectedIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/80 hover:bg-white text-black"
              onClick={handlePrev}
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/80 hover:bg-white text-black"
              onClick={handleNext}
            >
              <ChevronRight />
            </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

