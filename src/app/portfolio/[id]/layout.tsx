import { db } from '@/lib/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { notFound } from 'next/navigation';
import { Project, getProjectStyling } from '../../../data/projects';
import ProjectDetailPage from './page';
import type { Metadata, ResolvingMetadata } from 'next';

const projectCuneiform: Record<string, string> = {
  "avoid": "𒀭",
  "chivalry-chef": "𒈬",
  'storm-chasers': "𒅆𒅖",
  "bad-optics": "𒈗",
  "scptheescape": "𒈙",
  'orbital-resonance': "𒀯𒁓",
  'ohmmylord': "𒉆",
  'kookoo': "𒄷",
  'epicinium': "𒆳",
  'pixelthrive': "𒍣",
  'anywalker': "𒋞",
  'game-of-life': "𒍣",
  'frisking-ruins': "𒄑𒆪",
  'krautkill': "𒊺",
  'pixelboi': "𒉺",
  'pixelcan': "𒄞",
  'biq': "𒂵",
  'supercasanova': "𒀯",
  'life-sentence': "𒌷",
  'kernel-sweep': "𒅗"
}

export async function generateMetadata({ params }: { params: { id: string } }, parent: ResolvingMetadata): Promise<Metadata> {
  const projectId = params.id;
  const projectsRef = collection(db, 'portfolioItems');
  const q = query(projectsRef, where('id', '==', projectId));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const projectDoc = querySnapshot.docs[0];
    const projectData = projectDoc.data() as Project;
    const cuneiformChar = projectCuneiform[projectData.id] || ' ';
    
    return {
      title: `${projectData.title} ◦ ${cuneiformChar}`.trim(),
      description: projectData.shortDescription,
    }
  }

  return {
    title: 'Project Not Found',
  }
}

export async function generateStaticParams() {
  const projectsCollection = collection(db, 'portfolioItems');
  const q = query(
    projectsCollection,
    where('type', '==', 'game'),
  );
  const projectSnapshot = await getDocs(q);
  const params = projectSnapshot.docs.map(doc => {
    const projectData = doc.data() as Project;
    return {
      id: projectData.id,
    };
  });
  // console.log("Generated static params using custom id:", params);
  return params;
}

export default async function ProjectLayout({
  children, params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const projectId = params.id;
  // console.log("Attempting to fetch project with ID:", projectId); // Log the project ID

  const projectsRef = collection(db, 'portfolioItems');
  const q = query(
    projectsRef, 
    where('id', '==', projectId)
  );
  const querySnapshot = await getDocs(q);
  let project: Project | null = null;

  if (!querySnapshot.empty) {
    const projectDoc = querySnapshot.docs[0];
    const dbProjectData = projectDoc.data() as Project;
    const styling = getProjectStyling(dbProjectData.id);
    project = { 
      ...dbProjectData,
      styling,
    };
    // console.log("Successfully fetched project data for:", project.id);
  } else {
    // console.log("No document found for ID:", projectId);
  }

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectDetailPage project={project} />
      {children}
    </>
  );
}
