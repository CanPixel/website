'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { handleInquiry } from './actions';
import type { AssessClientInquiryOutput } from '@/ai/flows/client-assessor';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2, Star } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  inquiry: z.string().min(10, "Your inquiry should be at least 10 characters long."),
});

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [assessment, setAssessment] = useState<AssessClientInquiryOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      inquiry: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setAssessment(null);
    try {
      const result = await handleInquiry(values);
      setAssessment(result);
      toast({
        title: "Assessment Complete",
        description: "Your inquiry has been assessed by our AI.",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Could not process your inquiry. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {!assessment ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 font-code">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Alex Drake" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Email</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. alex@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="inquiry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Inquiry</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell me about the world you want to build..."
                      rows={6}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Assessing...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Submit and Assess
                </>
              )}
            </Button>
          </form>
        </Form>
      ) : (
        <Card className="bg-background/70 text-center">
          <CardHeader>
            <Wand2 className="mx-auto h-12 w-12 text-primary mb-4" />
            <CardTitle className="font-headline text-3xl">Assessment Result</CardTitle>
            <CardDescription>
              Our AI has analyzed your inquiry for alignment with the CanPixel ethos.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Suitability Score</p>
              <div className="flex items-center gap-4">
                 <Progress value={assessment.suitabilityScore * 100} className="w-full" />
                 <span className="font-bold text-lg text-primary">{Math.round(assessment.suitabilityScore * 100)}%</span>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Relevant Elements</p>
              <p className="text-accent font-medium">{assessment.relevantElements || "None identified"}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">AI Summary</p>
              <p className="text-sm text-foreground/80 italic">"{assessment.summary}"</p>
            </div>
            <Button onClick={() => setAssessment(null)}>
              <Star className="mr-2 h-4 w-4" />
              Submit Another Inquiry
            </Button>
          </CardContent>
        </Card>
      )}
    </>
  );
}
