"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useRef } from "react";
import { useToast } from "@/hooks/use-toast";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Transmitting..." : "Transmit"}
    </Button>
  );
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  async function handleAction(formData: FormData) {
    // Here you would typically send the form data to a server
    console.log("Form submitted with:", {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
    });
    formRef.current?.reset();
  }

  return (
    <form ref={formRef} action={handleAction} className="space-y-6 p-8 rounded-lg bg-card border">
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
      <SubmitButton />
    </form>
  );
}
