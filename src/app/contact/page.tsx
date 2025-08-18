import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import NavMenu from "@/components/navigation";
import type { Metadata } from "next";
import Image from 'next/image';

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

      <Image 
          src="images/Can_Head.png"
          alt="Can guitar avatar"
          width={120}
          height={120}
          className='border border-primary bg-primary/80 rounded-xl p-2 hover:shadow-xl hover:shadow-primary/50 hover:scale-105 mx-auto mt-12 mb-5 transition-all'
        />

      <header className="text-center mb-0 mt-4">
        <h1 className="font-headline text-6xl font-bold tracking-tighter mb-4 shiny-text">
          REACH
        </h1>
        <p className="text-md text-muted-foreground/60 font-headline max-w-3xl mx-auto">
          The veil is thin here. Transmit your inquiry.
        </p>
      </header>
      
      <div className="flex justify-center">
        <div className="w-full relative mt-8 border border-primary rounded-lg p-8 pt-12">
            <div className="space-y-8">
                {socialLinks.map(link => (
                    <a href={link.url} key={link.name} className="flex items-center gap-4 group" target="_blank" rel="noopener noreferrer">
                        <link.icon className="w-8 h-8 text-primary group-hover:scale-125 transition-transform transition-all group-hover:text-gold-400 transition-colors" />
                        <div>
                            <h3 className="font-bold text-lg group-hover:text-accent group-hover:scale-105 transition-all">{link.name}</h3>
                            <p className="text-muted-foreground group-hover:text-accent group-hover:scale-105 transition-all">{link.handle}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
