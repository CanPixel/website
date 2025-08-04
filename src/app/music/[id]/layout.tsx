import { db } from '@/lib/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { notFound } from 'next/navigation';
import { Project, getProjectStyling } from '@/data/music';
import ProjectDetailPage from './page';

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
  console.log("Generated static params using custom id:", params);
  return params;
}

export default async function ProjectLayout({
  children, params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const projectId = params.id;
  console.log("Attempting to fetch project with ID:", projectId); // Log the project ID

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
    console.log("Successfully fetched project data for:", project.id);
  } else {
    console.log("No document found for ID:", projectId);
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