
'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './ui/button';
import { MysticMenu } from './mystic-menu';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

export default function ZiggurathSection() {
  return (
    <div className="relative rounded-lg border-2 border-gold-600 p-8 pt-12 bg-black" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23daa520' fill-opacity='0.05'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0h1v5h5v1H6v5H5V6H0V5h5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }}>
      <h2 className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black px-4 font-serif text-4xl font-bold tracking-wider text-gold-400" style={{ textShadow: '2px 2px 8px #000' }}>
          ZIGGURATH
      </h2>
      <p className="text-center text-lg text-gold-200/80 max-w-3xl mx-auto mb-6 font-serif">
        𒀭 BLACK DEATH 'N ROLL 𒀭
      </p>

      <Badge
        variant="outline"
        className="p-2 px-3 whitespace-nowrap mb-3 flex-shrink-0">
          <Calendar className='me-2'/>
          2024
      </Badge>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <Card className="bg-black/50 backdrop-blur-sm border-gold-500/50">
                <CardHeader>
                  <CardTitle className="text-center font-serif text-2xl text-gold-300">Astral Exorcism (Debut Album)</CardTitle>
                  <CardTitle className="text-center text-1xl text-gold-200">- 𒀯𒆬 -</CardTitle>
                </CardHeader>
                <CardContent>
                <div className="bg-gold-900/20 p-4 rounded-lg border border-gold-500/30 flex items-center gap-4 relative overflow-hidden">
                  <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/album/0wFsqIjn2FCrqEwkym3Xri?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>

                <p className="text-center text-sm text-gold-200/80 mt-3 leading-relaxed font-serif">
              8 TRACKS • FULL-LENGTH<br></br> <br></br> 
‘Astral Exorcism’ serves to sweep the listener away through harsh sonic thunder. <br></br> In a darkening, increasingly unsaturated landscape of metal, this
metal element seeks to slam and break the skull of habit itself.
We consist of two people and have built this record from the ground up. Fueled by spiritual worship and a strong DIY spirit, we conceived this
record within just one year of hard work, starting in the summer of 2023 and the work and its campaign finalized and released on June 8th 2024.
                </p>
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
              <CardTitle className="font-serif text-2xl text-gold-300">Visuals</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              {['zigg1.JPG', 'zigg2.JPG', 'zigg3.JPG', 'zigg4.JPG'].map((img, i) => (
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
              <div className="text-sm text-center text-muted-foreground">Visions by AbyssalVoid</div>
            </CardContent>
          </Card>
          {/* <MysticMenu/> */}
          <CardTitle className="text-center mt-6 font-serif text-3xl text-gold-300">𒅆𒂍𒉪𒋫</CardTitle>
        </div>
      </div>
    </div>
  );
}


