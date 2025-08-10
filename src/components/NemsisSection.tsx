'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function NemsisSection() {
  return (
    <div className="relative rounded-lg border-2 border-orange-500 p-8 pt-12 bg-background/80">
      <h2 className="absolute -top-5 left-1/2 -translate-x-1/2 bg-background px-4 font-headline text-4xl font-bold tracking-tighter text-orange-500">
          NEMSIS
      </h2>
      <p className="text-center text-md text-gray-200/80 max-w-3xl mx-auto mb-6 font-serif">
        Modern-Oriental Grungepop
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-orange-500/30">
                <CardHeader>
                <CardTitle className="text-center text-1xl text-gray-300 mb-2">
                  Released in
                  <Badge 
                    variant="secondary"
                    className="bg-background/40 border border-gold-100/40 text-accent font-accent ml-2">
                    2019
                  </Badge>
                </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mx-auto p-2 shadow-inner bg-gold-900/20 p-4 rounded-lg border border-gold-500/30 [box-shadow:0_0_15px_rgba(0,0,0,0.5)_inset] ">
                    <iframe
                      src="https://open.spotify.com/embed/artist/3MPnL7QqlX6t93o5fSme1y?utm_source=generator"
                      width="100%"
                      height="352"
                      allowFullScreen={true}
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    ></iframe>
                  </div>

                  <div className='mt-3 text-sm text-white/70 mt-1 font-serif mx-auto bg-accent/10 border-y-2 border-x border-accent/20 p-2 shadow-inner [box-shadow:0_0_15px_rgba(0,0,0,0.5)_inset]'>
                  After a long wait the debut EP "Sugar, Why so Bitter?" has finally reached the surface of the earth, during the successful releaseshow on June 7th in Bitterzoet, Amsterdam!<br></br>
We fully organised this event ourselves, and handled tasks such as scheduling the pre-show aswell as the breaks in-between acts, marketing the event, planning, creating visuals and more.<br></br>
Placing Koo-Koo as an interactive installation during breaks inbetween our opener act and our own was my idea.<br></br>
Gaming and Music during a live event seemed to work surprisingly well!<br></br>
We had a lot of good reactions from mixed audiences (young & old), and the overall event was a success!<br></br>
<br></br>
<p className="mb-2">The aspects of the event I've handled:</p>
        <ul className="list-disc list-inside">
          <li>Playing & performing myself (Lead guitar)</li>
          <li>Marketing the event & producing promotional content</li>
          <li>Designing a poster, that links directly to the online event on facebook.</li>
          <li>Designing a timetable & producing in quantities</li>
          <li>Finding companies that can produce said posters & timetables in masses, with a discount!</li>
          <li>Decorating the indoors for the event (custom balloons, timetables on the walls, little stand for buying our EP vinyls)</li>
          <li>Booking & planning Koo-Koo in certain timeslots for the best flow for the event.</li>
        </ul>
                </div>

                <div className="mt-6 w-full justify-center">
                  <Image
                    src="images/poster.jpg"
                    alt="NEMSIS EP Release poster"
                    width={584}
                    height={824}
                    className="w-auto h-full mx-auto border-y-2 border-x border-accent/20 p-2 shadow-inner [box-shadow:0_0_15px_rgba(0,0,0,0.5)_inset]"
                    data-ai-hint="NEMSIS EP Release poster"
                  />
                </div>

                </CardContent>
            </Card>
          <Card className="mt-8 bg-card/50 backdrop-blur-sm border-orange-500/30">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-orange-400">Bio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
NEMSIS is a young rock band that bites you right back! <br></br>
Forged in Haarlem a couple of years ago, a strong bond was created that can be seen and heard. <br></br>
This results in an extraordinary mix of raw guitars, vivid vocals and lunatic sounds where you can't put a finger on where they come from. They call it: Modern-Oriental Grungepop. <br></br><br></br>3v12 NH (a Dutch multimedia platform for pop music) called them ‘epic’, ‘original’ and ‘energetic’, after their performance in the finals of the Rob Acda Awards 2018, where they eventually won all the prizes. This show plus shows at Young Art festival, Indie In Town and as the opening act on the grand stage of Bevrijdingspop 2018– the reward for winning the Rob Acda Awards- resulted in a buzz, that gets louder with every performance. <br></br>After a long wait the debut EP "Sugar, Why so Bitter?" has finally reached the surface of the earth, during the successful releaseshow on June 7th in Bitterzoet, Amsterdam!
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="bg-card/50 backdrop-blur-sm border-orange-500/30">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-orange-400">Visuals</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
            {['NEMSISvinyl.jpg', 'nemsis5.jpg', 'EPRelease.jpg', 'bpop (2).jpg'].map((img, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden group">
                  <Image
                    src={`/images/${img}`}
                    alt={`Nemsis band visual ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="rock band"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                   <div className="absolute inset-0 bg-repeat bg-center opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
