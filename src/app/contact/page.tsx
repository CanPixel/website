import ContactForm from "@/components/contact-form";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
    {
        name: "Email",
        icon: Mail,
        url: "mailto:canur@canpixel.com",
        handle: "canur@canpixel.com",
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
      <header className="text-center mb-12">
        <h1 className="font-headline text-5xl font-bold tracking-tighter mb-4">
          Get In Touch
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Have a project in mind, a job opportunity, or just want to say hi? I&apos;d love to hear from you.
        </p>
      </header>
      
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
            <h2 className="font-headline text-3xl font-bold">Contact Me Directly</h2>
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
        <div>
            <ContactForm />
        </div>
      </div>
    </div>
  );
}
