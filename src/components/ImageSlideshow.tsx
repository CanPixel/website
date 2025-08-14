"use client";

import React from 'react'
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


interface ImageSlideshowProps {
  images: string[];
}

export function ImageSlideshow({ images }: ImageSlideshowProps) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
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
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group">
                    <Image
                      src={`/images/${image}`}
                      alt={`Slideshow thumbnail ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-2">
                  <div className="relative aspect-video">
                    <Image
                      src={`/images/${image}`}
                      alt={`Fullscreen image ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-white hover:text-primary" />
      <CarouselNext className="text-white hover:text-primary" />
    </Carousel>
  );
}
