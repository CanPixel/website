'use client';

// import { useState, useEffect } from 'react';
// import { db } from '@/lib/firebase';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { Project } from '@/data/projects';
import MusicProjectCard from './music-project-card';
import { ScrollArea } from './ui/scroll-area';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Youtube } from 'lucide-react';

const youtubeVideos = [
    {
        id: '3K_cHy222UU',
        title: 'Mixed-Media Meta Format',
    },
    {
        id: 'LbaBm_RMRV8',
        title: 'Narrative Breakcore with Glitchy elements',
    },
    {
        id: 'PuvYd9OPqOY',
        title: 'An intro without a movie',
    },
    {
        id: '_9Q2uGL0_Po',
        title: '4 GoPro angles, 4 days of editing, 225 BPM',
    }
]

export default function CannemenSection() {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         setLoading(true);
//         const projectsCollection = collection(db, 'portfolioItems');
//         const q = query(projectsCollection, where('type', '==', 'solo-music'));
//         const projectSnapshot = await getDocs(q);
//         const projectsList = projectSnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data() as Omit<Project, 'id'>
//         }));
//         setProjects(projectsList);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProjects();
//   }, []);

  return (
    <div className="relative rounded-lg border-2 border-sky-500 p-8 pt-12">
        <h2 className="absolute -top-5 left-1/2 -translate-x-1/2 bg-background px-4 font-headline text-4xl font-bold tracking-tighter text-sky-400">
            CANNEMEN
        </h2>
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            A showcase of my solo work, featuring a blend of electronic and acoustic elements.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <h3 className="font-headline text-2xl font-bold mb-4 text-center text-sky-400">Video Features</h3>
            <ScrollArea className="h-[40rem] rounded-md">
                <div className="space-y-6">
                {youtubeVideos.map(video => (
                    <Card key={video.id} className="bg-card/50 border-sky-500/30">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <Youtube className="w-6 h-6 text-red-500"/>
                                {video.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="aspect-video rounded-md overflow-hidden">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </CardContent>
                    </Card>
                ))}
                </div>
            </ScrollArea>
        </div>
    </div>
  );
}
