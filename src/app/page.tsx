import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex h-[calc(100vh-8rem)] items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter mb-4 text-primary uppercase">
          CanPixel: Method Realms
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
          I craft distinct digital realms that provoke, inspire, and defy. Explore my creations.
        </p>
        <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Link href="/portfolio">
            Enter the Realms
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
