'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { ProjectStyling } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function OrbitalResonance(styling: ProjectStyling) {
  return (
    <Card style={{
        backgroundColor: styling.backgroundColor,
        color: styling.textColor,
        borderColor: styling.borderColor,
        fontFamily: styling.fontFamily,
    }} className="border-2 w-[97%] mx-auto">
        <CardHeader className='flex justify-between items-center'>
          <CardTitle>Explanation</CardTitle>
        </CardHeader>
        <CardContent>
            <CardDescription style={{
                color: styling.textColor, opacity: 0.9 }
                }>
                <div className="col-span-5 grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 place-items-center">
                    <Image 
                        src="/images/orbitExplanation (2).gif"
                        alt="Orbital Resonance gif"
                        width={250}
                        height={250}
                        loading='lazy'
                        style={{
                            backgroundColor: styling.backgroundColor,
                            borderColor: styling.borderColor,
                        }}
 className='shadow-lg block w-1/2 h-auto border-2 rounded-md overflow-hidden'
                    />
                    <Image 
                        src="/images/orbitExplanation (1).gif"
                        alt="Orbital Resonance gif"
                        width={500}
                        height={500}
                        loading='lazy' 
                        style={{
                            backgroundColor: styling.backgroundColor, 
                            borderColor: styling.borderColor,
                        }}
                        className='shadow-lg block w-1/2 h-auto border-2 rounded-md overflow-hidden'

                    />
                </div>

                <br></br>
                <code className="text-md text-black mt-6 max-w-3xl mb-2">
In music theory, polyrhythms are two or more rhythms that are playing simultaneously. A ratio of 3 notes to 2 notes (3:2) is considered an 'easy to understand' polyrhythm. However, there are multiple commonly known ratios of polyrhythms such as 3:4, and 15:8.<br></br>
<br></br>
<b>Now the experiment:</b><br></br>
With digital audio workstations you can speed up certain polyrhythms 
to a melodic frequency range. Due to our ears, we have a gap between our 
perception of rhythm and pitch.<br></br>
So what happens when you use 2 different metronomes (a polyrhythm), 
while increasing the BPM. Eventually, depending on the polyrhythmic ratio 
you will get <b>harmony</b>.
In a vague sense, <b>rhythm = pitch</b> and <b>polyrhythm = polypitch / harmony</b>.<br></br>
<br></br>
What's even more interesting is that 'simpler' polyrhythmic ratios appear to sound more pleasant to our ears (consonant), and the more difficult the polyrhythm is to feel, the more dissonant the resulting harmony sounds.<br></br>
<br></br>

This project uses the following under an MIT license:
<Button asChild
    className="w-full bg-black hover:bg-gray-400 text-white border hover:border-2"
    style={{
    borderColor: styling.borderColor,
    fontFamily: styling.fontFamily,
    }}>
    <Link href="https://github.com/Ludomancer/Unity-Audio-Sequencer" target="_blank" rel="noopener noreferrer">
        Unity-Audio-Sequencer by Nidre (Erdin Kacan)
    </Link>
</Button>
                </code>
            </CardDescription> 
        </CardContent>
    </Card>
  );
}
