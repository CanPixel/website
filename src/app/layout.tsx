import type { Metadata } from 'next';
import './globals.css';
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { Toaster } from '@/components/ui/toaster';
import { Inter, Space_Grotesk, Noto_Sans_Cuneiform } from 'next/font/google';
import Script from "next/script";

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

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'CanPixel - 𒌨',
  },
  description: 'Worlds of a Method Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${inter.variable} ${cuneiform.variable}`} suppressHydrationWarning style={{scrollBehavior:'smooth'}}>
      <body className="font-body bg-background text-foreground antialiased grainy" suppressHydrationWarning>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
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
