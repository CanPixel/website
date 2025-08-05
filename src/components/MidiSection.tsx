
'use client';

import MidiWidget from "@/components/midi-widget";
import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Project } from '@/data/projects'; // Assuming Project type is defined here
import { Badge } from '@/components/ui/badge'; // Assuming you have a Badge component
import { Input } from '@/components/ui/input'; // Assuming you have an Input component
import { Button } from '@/components/ui/button'; // Assuming you have a Button component
import { ScrollArea } from "@/components/ui/scroll-area";

// Define possible genres and tags based on your requirements
const allGenres = [
  "Indie", "Progressive Rock", "Instrumental Narrative", "Funk",
  "Experimental", "Blues", "Metal", "Hardcore", "Symphonic",
];

const allTags = [
  "War", "Rise", "Bouncy", "Heavy", "Jolly", "Unforgiving", "Brutal",
  "Is Your Computer Okay?", "Chaotic", "Catchy", "Time Limited", "Grungy",
  "Wacky", "Evil", "Funny", "Arena Battle", "Odd", "Dystopic", "Enticing",
  "Medley", "Confused", "Sneaky", "Epic", "Funky", "Fast", "Groovy"
];

// You might also need genre/tag color mappings similar to ProjectsPreview
// const genreColors: { [key: string]: string } = { ... };
// const tagColors: { [key: string]: string } = { ... };

export default function MidiSection() {
  const [midiProjects, setMidiProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchMidiProjects = async () => {
      try {
        setLoading(true);
        const projectsCollection = collection(db, 'portfolioItems');
        const q = query(projectsCollection, where('type', '==', 'midi'));
        const projectSnapshot = await getDocs(q);
        const projectsList = projectSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data() as Omit<Project, 'id'>
        }));
        setMidiProjects(projectsList);
        setFilteredProjects(projectsList);
      } catch (err: any) {
        setError(err.message);
        console.error("Error fetching midi projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMidiProjects();
  }, []);

  useEffect(() => {
    let projectsToFilter = midiProjects;

    // Filter by selected genres
    if (selectedGenres.length > 0) {
      projectsToFilter = projectsToFilter.filter(project =>
        project.properties?.genre?.some(genre => selectedGenres.includes(genre))
      );
    }

    // Filter by selected tags
    if (selectedTags.length > 0) {
      projectsToFilter = projectsToFilter.filter(project =>
        project.properties?.moodTags?.some(tag => selectedTags.includes(tag))
      );
    }

    // Search by track title
    if (searchTerm) {
      projectsToFilter = projectsToFilter.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProjects(projectsToFilter);

  }, [midiProjects, selectedGenres, selectedTags, searchTerm]); // Dependencies

  // Handlers for filter and search changes
  const handleGenreChange = (genre: string) => {
    setSelectedGenres(prev =>
      prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
    );
  };

  const handleTagChange = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  if (loading) {
    return <div className="mt-6 text-center">Loading MIDI projects...</div>;
  }

  if (error) {
    return <div className="mt-6 text-center text-destructive">Error loading MIDI projects: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16 bg-background">
       <div className="relative mt-12 rounded-lg border-2 border-primary-purple p-8">
            <h1 className="absolute -top-7 left-1/2 -translate-x-1/2 bg-background px-4 font-headline text-5xl font-bold tracking-tighter text-primary-purple">
                MIDI Sorcery
            </h1>
            <p className="text-center text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                A collection of my old-school audio adventures.
            </p>
      
      {/* Search Bar */}
      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search by Track Title"
          value={searchTerm}
          onChange={handleSearchChange}
          className="max-w-sm mx-auto"
        />
      </div>

      {/* Genre Filters */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-center">Filter by Genre</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {allGenres.map(genre => (
            <Button
              key={genre}
              variant={selectedGenres.includes(genre) ? "default" : "outline"}
              onClick={() => handleGenreChange(genre)}
              className="rounded-full px-4 py-2 text-sm"
            >
              {genre}
            </Button>
          ))}
        </div>
      </div>

      {/* Tag Filters */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-center">Filter by Tags</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {allTags.map(tag => (
            <Button
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              onClick={() => handleTagChange(tag)}
              className="rounded-full px-4 py-2 text-sm"
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      {/* Display Filtered Projects */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-center">MIDI Tracks</h3>
          <ScrollArea className="h-[40rem] rounded-md border p-4">
            {filteredProjects.length === 0 ? (
              <p className="text-center text-muted-foreground">No MIDI projects found matching your criteria.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="flex justify-center">
                    <MidiWidget midi={project} />
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
      </div>
      </div>
    </div>
  );
}
