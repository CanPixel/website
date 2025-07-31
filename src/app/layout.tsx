import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { Inter, Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-headline',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'CanPixel Realms',
  description: 'Worlds of a Method Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body bg-background text-foreground antialiased grainy" suppressHydrationWarning>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer copyrightYear={currentYear} />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
