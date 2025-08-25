'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { ProjectStyling } from '@/data/projects';
import SimpleMidiPlayer from "@/components/SimpleMidiPlayer";

export default function KooKoo(styling: ProjectStyling) {
  return (
    <Card style={{
        backgroundColor: styling.backgroundColor,
        color: styling.textColor,
        borderColor: styling.borderColor,
        fontFamily: styling.fontFamily,
    }} className="border-2 mx-auto">
        <CardHeader className='flex justify-between items-center'>
          <CardTitle>Koo-Koo Music Tracks</CardTitle>
        </CardHeader>
        <CardContent>
            <CardDescription style={{
                color: styling.textColor, opacity: 0.9 }
                }>

                <p className='text-center'>The sound design and music in Koo-Koo was made by me, mainly in MIDI. Here are the files used in this project.</p>

                <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 place-items-center">
                    <SimpleMidiPlayer color={'accent'} 
                    id={'partyblastkookoo'} />
                    <SimpleMidiPlayer color={'accent'} 
                    id={'kookootimeticking'} />
                    <SimpleMidiPlayer color={'accent'} 
                    id={'kookoosinister'} />
                </div>
            </CardDescription> 
        </CardContent>
    </Card>
  );
}
