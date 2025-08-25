
'use client';

import InstagramEmbed from './InstagramEmbed';
import Image from 'next/image';
import { Card, CardDescription, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { LucideIcon } from 'lucide-react';
import { Instagram, Youtube } from 'lucide-react';

const BandcampIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <title>Bandcamp</title>
    <path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z"></path>
  </svg>
);

const localIconMap: { [key: string]: LucideIcon | React.ComponentType<any> } = {
  Instagram,
  Youtube,
  Bandcamp: BandcampIcon,
};

const zigguratSocialLinks = [
  { icon: 'Instagram', href: 'https://www.instagram.com/ziggurath_nl' },
  { icon: 'Youtube', href: 'https://www.youtube.com/@ZIGGURATH-nl' },
  {
    icon: 'Bandcamp',
    href: 'https://ziggurath.bandcamp.com/album/astral-exorcism',
  },
];

export default function ZiggurathSection() {
  

  return (
    <div className="relative rounded-lg border-2 border-gold-600/70 p-8 pt-12 bg-black">
      <h2 className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black px-4 font-serif text-4xl font-bold tracking-wider text-gold-400/70" style={{ textShadow: '2px 2px 8px #000' }}>
        ZIGGURATH
      </h2>

      <div className="text-center mb-8">
        <div className="inline-block">
            <Image alt="Ziggurath Logo" 
              width={133}
              height={36}
              src="/images/ZiggLogo.png" 
              className="w-30 h-auto" 
              loading="lazy"
            />
        </div>
        <CardDescription
          className='text-muted-foreground mt-2 text-lg flex flex-col font-ziggsub'>
          <span className="block text-gold-200/80">𒀭 Black Death ‘n Roll 𒀭</span>
          <span className="block">from the Nether Lands</span>
        </CardDescription>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
            <Card className="bg-black/50 border-gold-500/50">
              <div className="relative -mx-6 my-4">
                  <div className='text-center py-2 pb-3 border-y-4 border-border bg-muted shadow-inner [box-shadow:0_0_30px_rgba(0,0,0,1.0)_inset]'>
                    <p className='text-xs text-white/80 [text-shadow:0_1px_1px_rgba(0,0,0,0.8)] tracking-widest font-ziggsub'>
                      Album
                    </p>
                    <h3 className='text-4xl font-ziggtitle text-gold-200' style={{ textShadow: '0 0 10px #fef9c3' }}>
                      𒀯𒆬
                    </h3>
                  </div>
                </div>
                <CardHeader className="text-center pt-0">
                  <CardTitle className="font-serif text-2xl text-gold-200">𝕬𝖘𝖙𝖗𝖆𝖑 𝕰𝖝𝖔𝖗𝖈𝖎𝖘𝖒</CardTitle>
                  <div className="text-1xl text-gray-300">
                    𝖀𝖓𝖗𝖆𝖛𝖊𝖑𝖊𝖉 𝖎𝖓
                    <Badge 
                      variant="secondary"
                      className="bg-background/40 border border-gold-100/40 text-gold-100/90 font-normal font-ziggsub ml-2">
                      June 2024
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mx-auto p-2 shadow-inner bg-gold-900/20 rounded-lg border border-gold-500/30 [box-shadow:0_0_15px_rgba(0,0,0,0.5)_inset]">
                    <iframe
                      src="https://open.spotify.com/embed/album/0wFsqIjn2FCrqEwkym3Xri?utm_source=generator&theme=0"
                      width="100%"
                      height="352"
                      allowFullScreen={true}
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    ></iframe>
                  </div>
                  <p className="text-center text-sm text-gold-200/80 mt-4 leading-relaxed font-serif">
                    ‘Astral Exorcism’ serves to sweep the listener away through harsh sonic thunder. In a darkening, increasingly unsaturated landscape of metal, this metal element seeks to slam and break the skull of habit itself. We consist of two people and have built this record from the ground up. Fueled by spiritual worship and a strong DIY spirit, we conceived this record within just one year of hard work, starting in the summer of 2023 and the work and its campaign finalized and released on June 8th 2024.
                  </p>
                </CardContent>
            </Card>
            
            <Card className="bg-black/50 backdrop-blur-sm border-gold-500/50">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-gold-300">Bio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gold-200/80 leading-relaxed font-serif text-sm mb-4">
                  Hailing from the Nether Lands, a furious force of destruction forges a new sound baptized as Black Death ‘n Roll. Embodying unbridled duality in power, fiery currents of bone-crushing pulses are delivered with organic precision. Driven by a distinctly twofold instrumental approach to musical spellcasting, a sonic tapestry is crafted that mesmerizes with intricacy, never once compromised on sheer unrelenting brutality. An ultimate blasphemy to the sound of modernity! For soothing discordants and thrillseekers alike, bear witness to the Voiceless Death Magick.
                </p>
                <InstagramEmbed 
                  profileUrl="https://www.instagram.com/ziggurath_nl"
                  iframelyUrl="//iframely.net/3PNEmGr9?theme=dark"
                />
              </CardContent>
            </Card>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <Card className="bg-black/50 border-gold-500/50">
              <CardHeader>
                  <CardTitle className="font-serif text-2xl text-gold-300">Live Ritual</CardTitle>
                  <p className="text-sm text-gray-400 font-ziggsub">Captured March 2024</p>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-md overflow-hidden border-2 border-gold-800/50">
                    <iframe
                        src={`https://www.youtube.com/embed/xNvTw-TkgRY`}
                        title="𒃲𒉈 (Live)"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full"
                    ></iframe>
                </div>
              </CardContent>
          </Card>

          <Card className="bg-black/50 border-gold-500/50">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-gold-200/80">
                Visions by{' '}
                <a
                  href="https://www.instagram.com/abyssalvoid_photo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gold-200 transition-colors"
                >
                  AbyssalVoid
                </a>
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              {['zigg4.JPG', 'zigg3.JPG'].map((img, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden group border-2 border-gold-800/50">
                  <Image
                    src={`/images/ziggurath/${img}`}
                    alt={`Ziggurath visual ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 rounded-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-black/50"></div>
                </div>
              ))}
            </CardContent>
          </Card>
          
          <div className="flex flex-col items-center justify-center pt-4">
            <div className="relative w-full max-w-xs h-auto text-center">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 text-md font-ziggsub text-accent/70 bg-black">
                Portal
              </div>
              <div className="border-b-2 border-x-2 border-accent/70 p-2 pb-4 w-full shadow-inner [box-shadow:0_0_15px_rgba(0,0,0,0.5)_inset] pt-6">
                <div className="absolute top-0 left-0 right-0 h-px bg-accent/70 w-[calc(50%-2rem)]"></div>
                <div className="absolute top-0 right-0 h-px bg-accent/70 w-[calc(50%-2rem)]"></div>
                <div className="flex flex-row items-center justify-center space-x-4 h-full">
                  {zigguratSocialLinks.map(link => {
                    const Icon = localIconMap[link.icon];
                    return Icon ? (
                      <a
                        key={link.icon}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-full p-2 bg-black/20 border border-accent/30 text-muted-foreground backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-accent/20 hover:border-accent hover:text-accent hover:scale-110 hover:[filter:drop-shadow(0_0_8px_hsl(var(--accent)/0.7))]"
                        aria-label={link.icon}
                      >
                        <Icon
                          className="w-5 h-5"
                          strokeWidth={1.5}
                        />
                      </a>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
          </div>
          <CardTitle className="text-center mt-2 font-serif text-1xl text-gold-100/90">𒅆𒂍𒉪𒋫</CardTitle>
        </div>
      </div>
    </div>
  );
}
