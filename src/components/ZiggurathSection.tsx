'use client';

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
    <div className="relative rounded-lg border-2 border-gold-600 p-8 pt-12 bg-black" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23daa520' fill-opacity='0.05'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0h1v5h5v1H6v5H5V6H0V5h5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }}>

    <CardHeader className='text-center p-6'>
      <div className="flex justify-center items-center gap-4">
        <Image alt="Ziggurath Logo" 
          width={133}
          height={36}
          src="/images/ZiggLogo.png" className="w-30 h-auto" />
        <div className="flex-1 max-w-lg mx-auto">
          <CardTitle
            className='text-5xl font-black font-ziggtitle text-accent tracking-widest [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]'>
            <div className="flex justify-center">
              <Image alt="Ziggurath Logo" 
                width={96}
                height={100}
                src="/images/ZiggBM.png" className="w-30 h-auto" />
            </div>
          </CardTitle>
          <CardDescription
            className='text-muted-foreground mt-2 text-lg flex flex-col font-ziggsub'>
            <span className="block text-gold-200/80">𒀭 Black Death ‘n Roll 𒀭</span>
            <span className="block">from the Nether Lands</span>
          </CardDescription>
        </div>
      </div>
      </CardHeader>

      <h2 className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black px-4 font-serif text-4xl font-bold tracking-wider text-gold-400" style={{ textShadow: '2px 2px 8px #000' }}>
        ZIGGURATH
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <Card className="bg-black/50 backdrop-blur-sm border-gold-500/50">
              <div className="relative -mx-8 my-4">
                  <div className=
                    'text-center py-2 pb-3 border-y-4 border-border/70 bg-muted/30 shadow-inner [box-shadow:0_0_30px_rgba(0,0,0,0.8)_inset]'>
                    <p className=
                      'text-xs text-white/80 [text-shadow:0_1px_1px_rgba(0,0,0,0.8)] tracking-widest font-ziggsub'>
                      Album
                    </p>
                    <h3 className=
                      'text-4xl shiny-text font-ziggtitle'>
                      𒀯𒆬
                    </h3>
                  </div>
                </div>
                <CardTitle className="text-center font-serif text-2xl text-gold-200">𝕬𝖘𝖙𝖗𝖆𝖑 𝕰𝖝𝖔𝖗𝖈𝖎𝖘𝖒</CardTitle>
                <CardTitle className="text-center text-1xl text-gray-300 mb-2">
                  𝖀𝖓𝖗𝖆𝖛𝖊𝖑𝖊𝖉 𝖎𝖓
                  <Badge 
                    variant="secondary"
                    className="bg-background/40 border border-gold-100/40 text-gold-100/90 font-normal font-ziggsub ml-2">
                    June 2024
                  </Badge>
                </CardTitle>
                <CardContent>

                <div className="mx-auto p-2 shadow-inner bg-gold-900/20 p-4 rounded-lg border border-gold-500/30 [box-shadow:0_0_15px_rgba(0,0,0,0.5)_inset] ">
                  <iframe
                    src="https://open.spotify.com/embed/album/0wFsqIjn2FCrqEwkym3Xri?utm_source=generator&theme=0"
                    width="100%"
                    height="352"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </div>

                <p className="text-center text-sm text-gold-200/80 mt-3 leading-relaxed font-serif">
              • FULL-LENGTH •<br></br> 
              Written, recorded and released within one year!
              <br></br>
              Mixed by yours truly.
              <br></br> <br></br>
‘Astral Exorcism’ serves to sweep the listener away through harsh sonic thunder. <br></br> In a darkening, increasingly unsaturated landscape of metal, this
metal element seeks to slam and break the skull of habit itself.
We consist of two people and have built this record from the ground up. Fueled by spiritual worship and a strong DIY spirit, we conceived this
record within just one year of hard work, starting in the summer of 2023 and the work and its campaign finalized and released on June 8th 2024.
                </p>
                </CardContent>
            </Card>
            
            <Card className="mt-8 bg-black/50 backdrop-blur-sm border-gold-500/50">
              <div className="relative -mx-8 my-4">
                <div className=
                  'text-center py-2 pb-3 border-y-4 border-border/70 bg-muted/30 shadow-inner [box-shadow:0_0_30px_rgba(0,0,0,0.8)_inset]'>
                  <p className=
                    'text-xs text-white/80 [text-shadow:0_1px_1px_rgba(0,0,0,0.8)] tracking-widest font-ziggsub'>
                    Live Video
                  </p>
                  <h3 className=
                    'text-4xl shiny-text font-ziggtitle'>
                    𒃲𒉈
                  </h3>
                </div>
              </div>
              <div className="text-center text-1xl text-gray-300 mb-3">
                𝕽𝖎𝖙𝖚𝖆𝖑 𝖈𝖆𝖕𝖙𝖚𝖗𝖊𝖉 𝖎𝖓 𝖑𝖎𝖌𝖍𝖙
                <Badge
                  variant="secondary"
                  className="bg-background/40 border border-gold-100/40 text-gold-100/90 font-normal font-ziggsub ml-2"
                >
                  March 2025
                </Badge>
              </div>
              
              <CardContent>
                <div className="aspect-video rounded-md overflow-hidden border-2 border-gold-800/50">
                    <iframe
                        src={`https://www.youtube.com/embed/xNvTw-TkgRY`}
                        title="𒃲𒉈 (Live)"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
              </CardContent>
          </Card>
          <Card className="mt-8 bg-black/50 backdrop-blur-sm border-gold-500/50">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-gold-300">Bio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gold-200/80 leading-relaxed font-serif text-sm">
              Hailing from the Nether Lands, a furious force of destruction forges a new sound baptized as Black Death ‘n Roll.<br></br>
Embodying unbridled duality in power, fiery currents of bone-crushing pulses are delivered with organic precision.
Driven by a distinctly twofold instrumental approach to musical spellcasting, a sonic tapestry is crafted that mesmerizes with intricacy,
never once compromised on sheer unrelenting brutality.
An ultimate blasphemy to the sound of modernity!
For soothing discordants and thrillseekers alike, bear witness to the Voiceless Death Magick.
<br></br><br></br>
Influences drawn from the early Thrash scene, crushed together with Death Metal groove and brutality, emanating with
atmospheres of Black and solidified at its core by Rock ‘n Roll:
The ‘Astral Exorcism’ is a summoning and devotion to the unforgotten, the ancient, still to lurk among us.
A sweet and evil alchemical cacophony of variety containing different chapters, promising to hurl its observers across its many
realms. Carving the cosmic void with 40 minutes of runtime, there is enough to be found and beared witness to, but beware, for
it is only for the resilient.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="bg-black/50 backdrop-blur-sm border-gold-500/50">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-gold-200/80">Visions by AbyssalVoid</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              {['zigg2.JPG', 'zigg3.JPG'].map((img, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden group border-2 border-gold-800/50">
                  <Image
                    src={`/images/ziggurath/${img}`}
                    alt={`Ziggurath visual ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 group-hover:bg-black/40 transition-colors"></div>
                </div>
              ))}
            </CardContent>
          </Card>
          <div className='mt-4'>
            <Image
                src={`/images/ziggurath/zigg4.JPG`}
                alt={`Ziggurath banner`}
                width={400}
                height={200}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />  
          </div>

          {/* <Separator className="bg-border/20 mb-6" /> */}
          <div className="flex flex-row md:flex-row justify-center gap-8 pt-4 items-stretch">
            <div className="relative w-full max-w-[100px] h-auto">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 text-md font-ziggsub text-accent/70">
                Portal
              </div>
              <div className="border-b-2 border-x-2 border-accent/70 p-4 w-full shadow-inner [box-shadow:0_0_15px_rgba(0,0,0,0.5)_inset] pt-8">
                <div className="absolute top-0 left-0 right-0 h-px bg-accent/70 w-[calc(50%-2rem)]"></div>
                <div className="absolute top-0 right-0 h-px bg-accent/70 w-[calc(50%-2rem)]"></div>
                <div className="flex flex-col items-center justify-center space-y-2 h-full">
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
          <CardTitle className="text-center mt-6 font-serif text-2xl text-gold-300">𒅆𒂍𒉪𒋫</CardTitle>
        </div>
      </div>
    </div>
  );
}
