import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Project Grimoire",
    description: "An interactive codex of ancient knowledge, presented on digital parchment.",
    realm: "Parchment",
    tags: ["React", "Web GL", "Storytelling"],
    image: {
      src: "https://placehold.co/600x400.png",
      hint: "old parchment",
    },
  },
  {
    title: "The Circuit Oracle",
    description: "A divination tool powered by machine learning, with a circuit board aesthetic.",
    realm: "Circuits",
    tags: ["AI", "Next.js", "Three.js"],
    image: {
      src: "https://placehold.co/600x400.png",
      hint: "circuit board",
    },
  },
  {
    title: "Newsprint Narratives",
    description: "A dynamic storytelling platform that mimics the layout of vintage newspapers.",
    realm: "Newsprint",
    tags: ["Generative Text", "UI/UX", "Data Viz"],
    image: {
      src: "https://placehold.co/600x400.png",
      hint: "newspaper texture",
    },
  },
  {
    title: "Origami Logic",
    description: "A puzzle game based on the principles of folding paper to solve complex problems.",
    realm: "Paper",
    tags: ["Game Dev", "React Native", "Puzzles"],
    image: {
      src: "https://placehold.co/600x400.png",
      hint: "folded paper",
    },
  },
];

export default function ProjectsPreview() {
  return (
    <section id="projects">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20"
            >
              <CardHeader>
                <div className="relative h-60 w-full">
                  <Image
                    src={project.image.src}
                    alt={`Showcase image for ${project.title}`}
                    fill
                    className="object-cover"
                    data-ai-hint={project.image.hint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                 <CardTitle className="font-headline mt-4">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
