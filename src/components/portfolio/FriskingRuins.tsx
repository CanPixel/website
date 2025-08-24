'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { ProjectStyling } from '@/data/projects';
import SimpleMidiPlayer from "@/components/SimpleMidiPlayer";

export default function FriskingRuins(styling: ProjectStyling) {
  return (
    <Card style={{
        backgroundColor: styling.backgroundColor,
        color: styling.textColor,
        borderColor: styling.borderColor,
        fontFamily: styling.fontFamily,
    }} className="border-2 mx-auto">
        <CardHeader className='flex justify-between items-center'>
          <CardTitle>Frisking Ruins OST</CardTitle>
        </CardHeader>
        <CardContent>
            <CardDescription style={{
                color: styling.textColor, opacity: 0.9 }
                }>
                <p className='text-center'>The sound design and music in Frisking Ruins was made by me, mainly in MIDI. Here are the files used in this project.</p>

                <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 place-items-center">
                    <SimpleMidiPlayer id={'friskdesert'} />
                    <SimpleMidiPlayer id={'friskdungeon'} />
                </div>
            </CardDescription> 
        </CardContent>
    </Card>
  );
}
