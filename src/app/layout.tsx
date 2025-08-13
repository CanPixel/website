"use client"

import type { Metadata } from 'next';
import { usePathname } from 'next/navigation';
import './globals.css';
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from '@/components/ui/toaster';
import { Inter, Space_Grotesk, Noto_Sans_Cuneiform, Orbitron,
  Playfair_Display, Roboto, Uncial_Antiqua, UnifrakturCook,
  Jacquard_24, Pixelify_Sans, Geo, Audiowide, Unlock, Share_Tech_Mono,
  Bungee, Space_Mono, Ribeye, Courier_Prime, Limelight
 } from 'next/font/google';

const limelight = Limelight({
  weight: '400',
  variable: '--font-limelight',
});
const courier = Courier_Prime({
  weight: '400',
  variable: '--font-courier-prime',
});
const ribeye = Ribeye({
  weight: '400',
  variable: '--font-ribeye',
});
const space_mono = Space_Mono({
  weight: '400',
  variable: '--font-space-mono',
});
const bungee = Bungee({
  weight: '400',
  variable: '--font-bungee',
});
const share_tech_mono = Share_Tech_Mono({
  weight: '400',
  variable: '--font-share-tech-mono',
});
const unlock = Unlock({
  weight: '400',
  variable: '--font-unlock',
});
const Geof = Geo({
  weight: '400',
  variable: '--font-geo',
});
const AudioWide = Audiowide({
  weight: '400',
  variable: '--font-audiowide',
});
const Jacquard24 = Jacquard_24({
  weight: '400',
  variable: '--font-jacquard',
});
const PixelifySans = Pixelify_Sans({
  weight: '400',
  variable: '--font-pixelify',
});
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-headline',
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});
const cuneiform = Noto_Sans_Cuneiform({
  subsets: ['cuneiform'],
  variable: '--font-cuneiform',
  weight: '400',
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});
const uncial = Uncial_Antiqua({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-uncial-antiqua',
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-playfair-display',
});
const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});
const unifrakturCook = UnifrakturCook({
  subsets: ['latin'],
  variable: '--font-unifraktur-cook',
  weight: '700',
});

// export const metadata: Metadata = {
//   title: {
//     template: '%s',
//     default: 'CanPixel • 𒌨',
//   },
//   description: 'Worlds of a Method Developer',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isFigmaPage = pathname === '/figma';

  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${inter.variable} ${cuneiform.variable} ${roboto.variable} ${uncial.variable} ${playfair.variable} ${orbitron.variable}`} suppressHydrationWarning style={{scrollBehavior:'smooth'}}>
      <body className="font-body bg-background text-foreground antialiased grainy" suppressHydrationWarning>
        <div className="relative flex min-h-screen flex-col">
          {!isFigmaPage && <Header />}
          <main className="flex-1">{children}</main>
          {!isFigmaPage && <Footer />}
        </div>
        <Toaster />
        {/* <Script id="yourgpt-chatbot" strategy="afterInteractive">
          {`
            window.YGC_WIDGET_ID = "ef45150e-ad6c-41c5-a592-9532e2a424d9";
            (function() {
              var script = document.createElement('script');
              script.src = "https://widget.yourgpt.ai/script.js";
              script.id = 'yourgpt-chatbot-script';
              document.head.appendChild(script);
            })();
          `}
        </Script> */}
      </body>
    </html>
  );
}
