import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import NavMenu from "@/components/navigation";

const timelineEvents = [
  {
    year: '2015',
    title: 'The Spark',
    description: 'First foray into game development, discovering a passion for creating worlds.',
  },
  {
    year: '2018',
    title: 'Founding of ZIGGURATH',
    description: 'Co-founded the band ZIGGURATH, merging music with philosophical concepts.',
  },
  {
    year: '2020',
    title: 'The Method Developer',
    description: 'Embraced the "Method Developer" philosophy, treating each project as an immersive realm.',
  },
  {
    year: 'Present',
    title: 'CanPixel Realms',
    description: 'Continuing the journey of crafting distinct experiences in games, music, and thought.',
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <NavMenu/>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-1 flex flex-col items-center text-center">
          <Card className="w-full bg-card/50 backdrop-blur-sm p-4 border-primary/20">
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-2 border-primary shadow-lg">
              <Image
                src="https://placehold.co/300x300.png"
                alt="Can Ur Avatar"
                fill
                className="object-cover"
                data-ai-hint="avatar 3d"
              />
              <div className="absolute inset-0 bg-repeat bg-center opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
            </div>
            <h2 className="font-headline text-3xl font-bold mt-6 text-primary">Can Ur</h2>
            <p className="text-accent">Method Developer</p>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              A philosopher at heart, weaving soulful, rebellious, and mysterious narratives through code and sound.
            </p>
          </Card>
        </div>

        <div className="md:col-span-2">
          <h1 className="font-headline text-5xl font-bold tracking-tighter mb-8">My Journey</h1>
          <div className="relative border-l-2 border-primary/30 pl-8 space-y-12">
            <div className="absolute -left-[2px] top-0 h-full w-0.5 bg-primary/30"></div>
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[42px] top-1.5 h-4 w-4 rounded-full bg-accent ring-4 ring-background"></div>
                <p className="font-headline text-2xl font-bold text-primary">{event.year}</p>
                <h3 className="text-xl font-semibold mt-1">{event.title}</h3>
                <p className="text-muted-foreground mt-2">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
