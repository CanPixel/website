
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useRef, FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const subject = `Contact Form Submission from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    const mailtoLink = `mailto:canur@canpixel.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    
    toast({
        title: "Email Client Opened",
        description: "Your email is ready to be sent.",
    });
    formRef.current?.reset();
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 p-8 rounded-lg bg-card border">
      <h2 className="font-headline text-3xl font-bold">Reach out to me</h2>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" type="text" placeholder="Your Name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="I'd like to give you a hundred million dollars because..."
          rows={5}
          required
        />
      </div>
      <Button type="submit" className="w-full">
      Transmit
    </Button>
    </form>
  );
}
