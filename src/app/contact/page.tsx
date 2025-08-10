import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import NavMenu from "@/components/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'REACH - 𒅗',
};


const socialLinks = [
    {
        name: "Email",
        icon: Mail,
        url: "mailto:canur11@gmail.com",
        handle: "canur11@gmail.com",
    },
    {
        name: "GitHub",
        icon: Github,
        url: "https://github.com/CanPixel",
        handle: "CanPixel",
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        url: "https://www.linkedin.com/in/canpixel/",
        handle: "canpixel",
    },
    {
        name: "Instagram",
        icon: Instagram,
        url: "https://www.instagram.com/cannemen/",
        handle: "cannemen",
    },
]

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <NavMenu/>

      <header className="text-center my-12">
        <h1 className="font-headline text-5xl font-bold tracking-tighter mb-4 shiny-text">
          REACH
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          The veil is thin here. Transmit your inquiry.
        </p>
      </header>
      
      <div className="flex justify-center">
        <div className="w-full relative mt-8 border border-primary rounded-lg p-8 pt-12">
           <h2 className="absolute -top-5 left-1/2 text-center -translate-x-1/2 bg-background px-4 font-headline text-3xl font-bold">Contact Me Directly</h2>
            <div className="space-y-8">
                {socialLinks.map(link => (
                    <a href={link.url} key={link.name} className="flex items-center gap-4 group" target="_blank" rel="noopener noreferrer">
                        <link.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                        <div>
                            <h3 className="font-bold text-lg">{link.name}</h3>
                            <p className="text-muted-foreground group-hover:text-accent transition-colors">{link.handle}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
