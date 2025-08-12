"use client"

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import NavMenu from "@/components/navigation";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Download } from 'lucide-react';
import { motion, useInView, useScroll, useSpring, Variants } from 'framer-motion';
import { useRef } from 'react';
// import SkillsShowcase from './SkillsShowcase';
import SkillsShowcase from './skill-chart';

const timelineEvents = [
  {
    year: '2014',
    title: 'The Dawn of Coding: Minecraft Modding',
    description: 'Began coding by creating the famous Minecraft mods "SCPCraft" and "CreepyPastaCraft" under the name "Phuck Yu Too". I worked as the main coder on these projects.',
  },
  {
    year: '2015',
    title: 'First Foray into Game Development',
    description: 'Began exploring game development and discovering a passion for creating worlds.',
  },
  {
    year: '2017-2023',
    title: 'Higher Education',
    description: 'Attended the University of the Arts Utrecht, graduating with a HBO Bachelor diploma in Game Development with Honors.',
  },
  {
    year: '2019',
    title: 'Game Developers Conference',
    description: 'Successfully exhibited a game project (Koo-Koo) at the Game Developers Conference in San Francisco as part of Alt.Ctrl.',
  },
  {
    year: '2020',
    title: 'The Method Developer',
    description: 'Embraced the "Method Developer" philosophy, treating each project as an immersive realm.',
  },
  {
    year: '2020-2021',
    title: 'Audio Programming & Design',
    description: 'Worked for Coöperation A Bunch of Hacks U.A., developing nuanced audio systems and creating music and sound effects for the game Epicinium on Steam.',
  },
  {
    year: '2021-2022',
    title: 'Bad Optics! Solo Game Development',
    description: 'Completely developed a full web game project as a solo indie game developer, from concept to publication, including marketing and community building.',
  },
  {
    year: '2022',
    title: 'Founding of ZIGGURATH',
    description: 'Co-founded the band ZIGGURATH, merging music with philosophical concepts. Also plays guitar in two bands.',
  },
  {
    year: '2024-2025',
    title: 'University of Amsterdam - Full-Stack Web Programmer',
    description: 'Contributed to the development and implementation of the new Lab Tool web platform for research within the Faculty of Social and Behavioural Sciences.',
  },
  {
    year: 'Present',
    title: 'CanPixel Realms',
    description: 'Continuing the journey of crafting distinct experiences in games, music, and thought.',
  },
];

const TimelineItem = ({ event, index }: { event: (typeof timelineEvents)[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contentVariants = {
    hidden: { opacity: 0.5, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const dotVariants: Variants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: 'spring', stiffness: 400, damping: 10, delay: 0.2 },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={contentVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5 }}
      className="relative pl-8"
    >
      <motion.div
        variants={dotVariants}
        animate={isInView ? 'visible' : 'hidden'}
        className="absolute -left-2 top-1.5 h-4 w-4 rounded-full bg-accent ring-4 ring-background z-10"
      ></motion.div>
      <p className="font-headline text-2xl font-bold text-primary">{event.year}</p>
      <h3 className="text-xl font-semibold mt-1">{event.title}</h3>
      <p className="text-muted-foreground mt-2">{event.description}</p>
    </motion.div>
  );
};


export default function AboutPage() {
    const timelineRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: timelineRef,
      offset: ["start center", "end end"]
    });
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      });

  return (
    <div className="container mx-auto px-4 py-16">
      <NavMenu/>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mt-12">
        <div className="lg:col-span-2 flex flex-col items-center text-center">
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-2 border-primary shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-primary/50 hover:scale-105">
                <Image
                src="/images/program.jpg"
                alt="Can Ur Avatar"
                fill
                className="object-cover" 
                />
                <div className="absolute inset-0 bg-repeat bg-center opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
            </div>
            <h1 className="font-headline text-4xl font-bold mt-6 text-primary">Can Ur</h1>
            <p className="text-xl text-accent">Method Developer</p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
                A philosophically deep thinker at heart, weaving soulful, rebellious, and mysterious narratives through code and sound.
            </p>
             <Button asChild size="lg" className="mt-6 group transition-all duration-300 ease-in-out hover:bg-accent/90 hover:-translate-y-1 hover:scale-105">
                <Link href="/pdf/resume.pdf" target="_blank">
                    Resume
                    <Download className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                </Link>
             </Button>
        </div>

        <div className="lg:col-span-3 flex justify-center items-center">
          <div className="w-full max-w-md relative rounded-lg overflow-hidden shadow-lg group">
            <Image
              src={`/images/cancorp (2).JPG`}
              alt={`A professional photo of Can Ur`}
              width={4000}
              height={6000}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
             <div className="absolute inset-0 group-hover:bg-black/20 transition-colors"></div>
          </div>
 <div className="absolute inset-y-0 right-0 w-60 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
 <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      </div>
      
      {/* Timeline Section */}
      <div className="mt-24">
        <h2 className="font-headline text-5xl font-bold tracking-tighter text-center">My Journey</h2>
        <div className="lg:col-span-2 flex flex-col items-center text-center mt-0 mb-6">
          <Button asChild size="lg" className="mt-6 group transition-all duration-300 ease-in-out bg-red-500 hover:bg-red-400 hover:-translate-y-1 hover:scale-105">
            <Link href="/pdf/CanUrPortfolio.pdf" target="_blank">
                Ancient Portfolio (Dutch)
                <Download className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        
        <div ref={timelineRef} className="relative max-w-3xl mx-auto">
          <div className="absolute left-0 top-0 h-full w-0.5 bg-primary/30 ml-[7px]"></div>
          <motion.div style={{ scaleY }} className="absolute left-0 top-0 h-full w-0.5 bg-primary origin-top ml-[7px]" />
          <div className="space-y-12">
              {timelineEvents.map((event, index) => (
              <TimelineItem key={index} event={event} index={index} />
              ))}
          </div>
        </div>
      </div>

      <SkillsShowcase/>

      <div className="mt-20">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {['work.jpg', 'Canwork.jpg', 'Can.jpg', 'Jabrils.jpg'].map((img, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden group">
                  <Image
                    src={`/images/${img}`}
                    alt={`Can Ur developer ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                   <div className="absolute inset-0 bg-repeat bg-center opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
    </div>
  );
}
