import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { projects } from '@/data/projects';

export async function generateStaticParams() {
    // Fetch project IDs from Firebase
    const projectsCollection = collection(db, 'portfolioItems');
    const projectSnapshot = await getDocs(projectsCollection);
    const dbProjectIds = projectSnapshot.docs.map(doc => doc.id);
  
    // Get IDs from local projects
    const localProjectIds = projects.map(project => project.id);
  
    // Combine all project IDs
    const allProjectIds = [...localProjectIds, ...dbProjectIds];
  
    // Map IDs to the format expected by generateStaticParams
    return allProjectIds.map(id => ({
      id: id,
    }));
  }

  export default function ProjectLayout({ children }) {children}