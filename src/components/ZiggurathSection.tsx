
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Project } from '@/data/projects';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlayCircle, Music } from 'lucide-react';
import { Button } from './ui/button';

export default function ZiggurathSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const projectsCollection = collection(db, 'portfolioItems');
        const q = query(projectsCollection, where('properties.band', '==', 'ZIGGURATH'));
        const projectSnapshot = await getDocs(q);
        const projectsList = projectSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data() as Omit<Project, 'id'>
        }));
        setProjects(projectsList);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const featuredTrack = projects.length > 0 ? projects[0] : null;

  if (loading) return <div className="text-center text-gold-500">Loading the archives of Ziggurath...</div>;
  if (error) return <div className="text-center text-red-500">Error fetching sagas: {error}</div>;

  return (
    <div className="relative rounded-lg border-2 border-gold-600 p-8 pt-12 bg-black" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23daa520' fill-opacity='0.05'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h9V0h1v4h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0h1v5h5v1H6v5H5V6H0V5h5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }}>
       <h2 className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black px-4 font-serif text-4xl font-bold tracking-wider text-gold-400" style={{ textShadow: '2px 2px 8px #000' }}>
            ZIGGURATH
        </h2>
        <p className="text-center text-lg text-gold-200/80 max-w-3xl mx-auto mb-6 font-serif">
            Modern-Oriental Grungepop
        </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {featuredTrack && (
            <Card className="bg-black/50 backdrop-blur-sm border-gold-500/50">
                <CardHeader>
                <CardTitle className="font-serif text-2xl text-gold-300">Featured Track</CardTitle>
                </CardHeader>
                <CardContent>
                <div className="bg-gold-900/20 p-4 rounded-lg border border-gold-500/30 flex items-center gap-4 relative overflow-hidden">
                    <Music className="w-12 h-12 text-gold-400" />
                    <div className="flex-grow">
                        <h3 className="font-bold text-lg text-gold-200">{featuredTrack.title}</h3>
                        <p className="text-sm text-gold-400/70">ZIGGURATH</p>
                         <div className="w-full bg-gold-200/10 rounded-full h-1.5 mt-2">
                            <div className="bg-gradient-to-r from-gold-500 to-gold-300 h-1.5 rounded-full" style={{ width: '45%' }}></div>
                        </div>
                    </div>
                     <Button variant="ghost" className="text-gold-300 hover:text-gold-100 transition-colors">
                        <PlayCircle className="w-10 h-10" />
                     </Button>
                </div>
                </CardContent>
            </Card>
          )}
          <Card className="mt-8 bg-black/50 backdrop-blur-sm border-gold-500/50">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-gold-300">Bio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gold-200/80 leading-relaxed font-serif">
                With a punk/metal ethos, ZIGGURATH channels rebellious energy into a sound that is both modern and ancient. We craft sonic realms that are mysterious, philosophical, and unapologetically meta, inviting listeners into a pluralistic, soulful experience.
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
              {['ziggurath1.png', 'ziggurath2.png', 'ziggurath3.png', 'ziggurath4.png'].map((img, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden group border-2 border-gold-800/50">
                  <Image
                    src={`/images/${img}`}
                    alt={`Ziggurath visual ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 group-hover:bg-black/40 transition-colors"></div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

