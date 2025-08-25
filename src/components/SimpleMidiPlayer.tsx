'use client';

import React, { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Project } from '../data/projects';
import MidiWidget from "@/components/midi-widget";

interface SimpleMidiPlayerProps {
  id: string;
}

const SimpleMidiPlayer: React.FC<SimpleMidiPlayerProps> = ({ id }) => {
  const [midi, setMidi] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMidi = async () => {
      try {
        setLoading(true);
        const projectsCollection = collection(db, 'portfolioItems');
        const q = query(projectsCollection, 
          where('id', '==', id)
        );
        const projectSnapshot = await getDocs(q);

        if(!projectSnapshot.empty) {
          const projectsList = projectSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data() as Omit<Project, 'id'>
          }));
          setMidi(projectsList);
        }
      } catch (err: any) {
        setMidi([]);
        setError(err.message);
        console.error("Error fetching midi projects:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMidi();
  }, [id]);

  if (loading) {
    return <div className="mt-6 text-center">Loading MIDI audio...</div>;
  }
  if (error) {
    return <div className="mt-6 text-center text-destructive">Error loading MIDI: {error}</div>;
  }

  return (
    <MidiWidget midi={midi[0]} />
  );
};

export default SimpleMidiPlayer;