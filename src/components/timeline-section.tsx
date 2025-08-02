import {
    BrainCircuit,
    Code,
    FlaskConical,
    Milestone,
    Rocket,
    Sparkles,
  } from "lucide-react";
  import type { ReactNode } from "react";
  
  const timelineEvents = [
    {
      icon: <Sparkles />,
      date: "Era of Awakening",
      title: "First Lines of Code",
      description: "The initial spark. Discovered the magic of manipulating digital realms through arcane scripts.",
    },
    {
      icon: <FlaskConical />,
      date: "Alchemical Studies",
      title: "Formal Education in CS",
      description: "Transmuted raw curiosity into structured knowledge, mastering the fundamental laws of computation.",
    },
    {
      icon: <Rocket />,
      date: "The Great Expedition",
      title: "First Major Project Launch",
      description: "Launched a vessel into the vast digital cosmos, navigating the challenges of a full-scale deployment.",
    },
    {
      icon: <BrainCircuit />,
      date: "Cognitive Weaving",
      title: "Delving into AI & Machine Learning",
      description: "Began weaving threads of intelligence into applications, teaching machines to perceive and predict.",
    },
    {
      icon: <Code />,
      date: "Mastery of Methods",
      title: "Senior Developer Ascension",
      description: "Achieved fluency in multiple paradigms, leading teams in the construction of complex digital architectures.",
    },
    {
      icon: <Milestone />,
      date: "Current Epoch",
      title: "The Realm Weaver",
      description: "Synthesizing all experience to create bespoke, soulful digital experiences as an independent Method Developer.",
    },
  ];
  
  function TimelineItem({
    icon,
    date,
    title,
    description,
    isLast,
  }: {
    icon: ReactNode;
    date: string;
    title: string;
    description: string;
    isLast: boolean;
  }) {
    return (
      <div className="flex gap-x-3">
        <div className="relative">
          {!isLast && (
            <div className="absolute left-1/2 top-7 -bottom-3 w-px -translate-x-1/2 bg-border"></div>
          )}
          <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-card shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-purple/10 text-primary-purple">
              {icon}
            </div>
          </div>
        </div>
        <div className="grow pb-16 pt-3">
          <p className="mb-1 text-sm text-primary-purple font-medium">{date}</p>
          <h3 className="font-headline text-xl font-semibold text-foreground">
            {title}
          </h3>
          <p className="mt-1 text-muted-foreground">{description}</p>
        </div>
      </div>
    );
  }
  
  export default function TimelineSection() {
    return (
      <section id="timeline" className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              The Developer's Journey
            </h2>
            <p className="mt-2 text-muted-foreground md:text-lg">
              A narrative of growth, discovery, and mastery.
            </p>
          </div>
          <div>
            {timelineEvents.map((event, index) => (
              <TimelineItem
                key={event.title}
                {...event}
                isLast={index === timelineEvents.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
  