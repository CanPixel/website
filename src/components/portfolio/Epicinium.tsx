'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { ProjectStyling } from '@/data/projects';
import SimpleMidiPlayer from "@/components/SimpleMidiPlayer";
import Image from 'next/image';
import { InstagramEmbed } from 'react-social-media-embed';

export default function Epicinium(styling: ProjectStyling) {
  return (
    <Card style={{
        backgroundColor: styling.backgroundColor,
        color: styling.textColor,
        borderColor: styling.borderColor,
        fontFamily: styling.fontFamily,
    }} className="border-2 mx-auto">
        <CardHeader className='flex justify-between items-center mt-2'>
          <CardTitle>Music, Composition & Official OST</CardTitle>
        </CardHeader>
        <CardContent>
            <CardDescription style={{
                color: styling.textColor, opacity: 0.9 }
                }>

                <p className='text-center mb-4 text-[12px] w-[85%] mx-auto'>
                <i>An Ensemble of Four Seasons</i> -- An original arrangement that chronologically features the four in-game season loops, welding them together into one grand musical movement that underlines the grand narrative of the game.<br></br> The official title track tries to bridge the gap between a Chiptune Aesthetic and a higher quality Orchestral Production. 
                <br></br>In this bundle you can hear both at the same time, or exclusively listen to the individual versions.<br></br>
<br></br>
All versions you hear in-game are included as part of the bundle.
<br></br><br></br>
Includes two bonus tracks: An Ensemble of Four Seasons [orchestral version] and What Goes Up Must Come Down (Beta Title Theme) [CanPixel remix].
                </p>

                <hr></hr>

                <p className='text-center mt-4 text-[12px] w-[80%] mx-auto'>
                I did most of the in-game audio, and composed the official OST track aswell as the four in-game musical loops for each season.
I experimented with MIDI compositions and HQ audio samples of violins, piano, timpani and more.
<br></br><br></br>
Mixing and Mastering has also been done by me.
</p>
                <div className="w-[60%] mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 place-items-center">
                    <SimpleMidiPlayer id={'epiciniumspring'} />
                    <SimpleMidiPlayer id={'epiciniumsummer'} />
                    <SimpleMidiPlayer id={'epiciniumautumn'} />
                    <SimpleMidiPlayer id={'epiciniumwinter'} />
                    <SimpleMidiPlayer id={'epiciniumcalltoaction'} />
                </div>

                <div className='text-center mx-auto mt-4'>
                  <div className='flex justify-content-center items-center' 
                  style={{ 
                    maxWidth: '550px',
                  }}>
                    <InstagramEmbed url="https://www.instagram.com/p/CE4ay-Cn_nn/" 
                    width={'100%'} />
                  </div>
                </div>

                <hr></hr>

                <CardHeader className='flex justify-between items-center mt-4'>
                  <CardTitle className='p-3 bg-gray-600/50 text-2xl'>Epicinium Full OST - Official Soundtrack</CardTitle>
                </CardHeader>

                <div className="mt-2">
                  <div className='text-center'>
                    An arrangement that chronologically features the four in-game seasons, 
                    <br></br>composed into one musical movement
                    and fully orchestrated.<br></br><br></br>
                    <small>
                      Arranged in Guitar Pro 5 by Daan Mulder & Can Ur<br></br>
                      Mixed & Mastered in FL Studio 12 by Can Ur
                    </small>
                  </div>
                  <br></br>
                  
                  <div className='text-center mx-auto'>
                    <div className="mb-3 w-[35%] mx-auto aspect-square">
                      <Image
                        src="/images/epicinium_soundtrack.png"
                        alt="Epicinium soundtrack official image"
                        width={1000}
                        height={1000}
                        className="object-cover border border-4 transition-transform duration-300 hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                    <div className="mb-3 w-[60%] text-center mx-auto">
                      <SimpleMidiPlayer id={'epiciniumseasons'} />
                    </div>
                  </div>
                </div>
            </CardDescription> 
        </CardContent>
    </Card>
  );
}
