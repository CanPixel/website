
"use client"

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import NavMenu from "@/components/navigation";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Download, Gamepad, Globe, Palette, Headphones, Quote } from 'lucide-react';
import { motion, useInView, useScroll, useSpring, Variants } from 'framer-motion';
import { useRef, useEffect } from 'react';
import SkillsShowcase from './SkillsShowcase';

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

export const CATEGORIES = [
  { id: "gamedev", name: "GAME DEVELOPMENT", icon: Gamepad,
    desc: "Unity (C#), C++, Lua, Arduino, Gameplay, Tools, AI, Prototyping." },
  { id: "webdev", name: "FULL STACK WEB DEVELOPMENT", icon: Globe,
    desc: "PHP & Modern JavaScript, build tools, DOM manipulation, and framework integration." },
  { id: "design", name: "DESIGN", icon: Palette,
 desc: "Focus on user experience, visual coherence, and thoughtful information architecture." },
  { id: "music", name: "MUSIC", icon: Headphones,
    desc: "FL Studio, composition, songwriting, arrangement, mixing basics, and sound design." },
];
export const SKILLS = [
  { id: "html", name: "HTML5 & CSS3", value: 80, categories: ["Web Development"], desc: "Semantic markup, accessibility-first approach." },
  { id: "js", name: "JavaScript", value: 75, categories: ["Web Development"], desc: "ESNext, tooling, DOM, and framework friendly." },
  { id: "jquery", name: "JQuery", value: 75, categories: ["Web Development"], desc: "ESNext, tooling, DOM, and framework friendly." },
  { id: "flstudio", name: "FL Studio 12", value: 75, categories: ["Music"], desc: "Beat design, arrangement and mixing basics." },
  { id: "unity", name: "Unity (C#)", value: 75, categories: ["Game Development"], desc: "Gameplay programming, components, and scripting." },
  { id: "react", name: "React, Tailwind & Next.js", value: 70, categories: ["Web Development"], desc: "Building modern, dynamic user interfaces." },
  { id: "php", name: "PHP", value: 65, categories: ["Web Development"], desc: "Legacy systems, APIs and server-side templating." },
  { id: "java", name: "Java", value: 65, categories: ["Game Development"], desc: "OOP, tooling, and enterprise paradigms." },
  { id: "premiere", name: "Adobe Premiere Pro", value: 65, categories: ["Design"], desc: "Video editing, cuts and color basics." },
  { id: "illustrator", name: "Adobe Illustrator", value: 60, categories: ["Design"], desc: "Vector illustration and iconography." },
  { id: "arduino", name: "Arduino", value: 50, categories: ["Game Development"], desc: "Prototyping hardware, sensor IO and embedded logic." },
  // { id: "node", name: "Node.js", value: 65, categories: ["Web Development"], desc: "Semantic markup, accessibility-first approach." },
  { id: "mysql", name: "MySQL", value: 50, categories: ["Web Development"], desc: "Database design, queries, and optimization." },
  { id: "python", name: "Python", value: 40, categories: ["Game Development"], desc: "Scripting, automation, and basic backend tasks." },
  { id: "cpp", name: "C++", value: 25, categories: ["Game Development"], desc: "Native performance, systems and plugin development." },
  { id: "lua", name: "LUA", value: 20, categories: ["Game Development"], desc: "Scripting for embedded game logic and mods." },
];
// Color palette for charts
const COLORS = ["#00C49F", "#0088FE", "#FFBB28", "#FF8042", "#845EC2", "#FF6F91", "#2C73D2", "#008E9B", "#D65DB1", "#FF9671"];

const CategoryBadges = () => {
  // const getLevel = (val : any) => {
  //   if (val >= 85) return "Expert";
  //   if (val >= 70) return "Advanced";
  //   if (val >= 50) return "Intermediate";
  //   return "Uuhm..";
  // };
  return (
    <div className="grid grid-cols-2 gap-4">
      {CATEGORIES.map((skill, i) => (
        <div
          key={i}
          className="p-4 rounded-lg shadow-md border flex flex-col items-center"
          style={{ borderColor: COLORS[i % COLORS.length] }}
        >
          <span className="text-4xl font-bold" style=
            {{ color: COLORS[i % COLORS.length] }}>
            <skill.icon/>
          </span>
          <span className="text-lg font-semibold"
          style={{ color: COLORS[i % COLORS.length] }}
          >{skill.name}</span>
          <span className="text-sm opacity-70 mt-2">{skill.desc}</span>
        </div>
      ))}
    </div>
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

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
            <h1 className="text-4xl font-bold mt-6 shiny-text">Can Ur</h1>
            <p className="text-xl text-purple-500">'Method Developer'</p>
            <small className="text-[12px] text-gold-300/50">Indie Game Developer, Web Developer, Designer, Composer, Musician</small>
            <p className="text-muted-foreground mt-4 leading-relaxed">
                A philosophically deep thinker at heart, weaving soulful, rebellious, and mysterious narratives through code and sound.
            </p>
            <p className="text-muted-foreground/50 text-sm mt-4 leading-relaxed">
              Graduated with Honors @ University of the Arts Utrecht
            </p>
             <Button asChild size="lg" className="mt-6 group transition-all duration-300 ease-in-out hover:bg-purple-400/70 hover:-translate-y-1 hover:scale-105">
                <Link href="/pdf/resume.pdf" target="_blank">
                    Resume
                    <Download className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                </Link>
             </Button>

             <Card className="mt-8 border-gold-500/50 w-3/4 mx-auto rounded-lg hover:scale-105 transition-transform">
              <div className="relative mx-auto h-full w-full rounded-lg">
                <Image
                  src={"/images/guitar.jpg"}
                  alt={`Can Ur guitar pic`}
                  width={2000}
                  height={2000}
                  className="object-cover"
                />
              </div>
            </Card>
      </div>

        <div className="lg:col-span-3 w-[80%] mx-auto flex justify-center items-center h-screen">
          <div className="relative w-full h-full max-w-md overflow-hidden rounded-lg shadow-lg group">
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
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 font-headline text-2xl text-primary">
                        <Quote className="w-8 h-8" />
                        Game Design Philosophy
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                   <p>The process of building core mechanics into a game system, slowly adding merit, then refining the imminent gameplay by tweaking various interactions between core mechanics (dynamics).</p>
                   <p>I reject the categories <i>"Applied Gaming"</i> and <i>"Serious Games"</i>, as I find it a self-deprecating sign of failed/hollow/one-dimensional game design. Whenever these terms are mentioned, it's a rather emphatic announcement of a concept implying its own shortcomings.</p>
                   <p>A good game is <b>insightful, entertaining and educational</b> at the same time.</p>
                   <p>My drive for creation is constructing experiences that help people learn by having fun, and let people have fun by learning.</p>
                   <p>Innovation comes from looking at things in new and different ways. By thinking outside the box and being willing to experiment, you can come up with unique solutions, or atleast populate the marketplace of ideas with newer questions.</p>
                </CardContent>
            </Card>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
        >
            <Card className="h-full border-accent/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 font-headline text-2xl text-accent">
                        <Quote className="w-8 h-8" />
                        What is Good Design?
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                   <p>A good theme adds conceptual merit and increases the headroom of an idea. We as people like our ideas clearly defined and outlined, yet leaving room for suggestive elements. Imagination is key. But you need a keyhole. We have an affinity for concepts that have a form of consistent thematic 'branding'.</p>
                   <p>Nihilism indirectly seeps into design, so if you're not motivated enough, the game might reflect that. Treat the game as an extension of you, be the creator <b>and</b> the creation. Opening room for being passionate about your concept, being able to romanticize it fully builds authenticity.</p>
                   <p>Not unlike method acting, I face my all my output as a <b>"method developer"</b> artistically. For periods I breathe in abstract, I let the concept be me. Me being the vessel for the collected ideas, I eventually converge all of it into one greater whole that I can then sketch out, implement and realize.</p>
                   <p>This way I can ensure that I'm able to bring my creative visions to life passionately and thoroughly. It's never just a game meant for mass consumption with one goal.</p>
                </CardContent>
            </Card>
        </motion.div>
      </div>


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
      
      <div className="max-w-4xl mx-auto mt-16">
        <div id="categories" className="border rounded-lg shadow mt-6">
          <CategoryBadges/>
        </div>
      </div>

      <SkillsShowcase skills={SKILLS}/>

      <div className='w-full mx-auto mt-6 flex justify-center'>
        <div
          className="badge-base LI-profile-badge"
          data-locale="nl_NL"
          data-size="medium"
          data-theme="dark"
          data-type="VERTICAL"
          data-vanity="canpixel"
          data-version="v1">
        <a className="badge-base__link LI-simple-link"
           href="https://www.linkedin.com/in/canpixel" />
        </div>
      </div>
      <br></br>

      <div className="mt-20">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {['work.jpg', 'ziggurath/zigg3.JPG', 'Can.jpg', 'Jabrils.jpg'].map((img, i) => (
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
