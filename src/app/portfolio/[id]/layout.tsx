import { db } from '@/lib/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { notFound } from 'next/navigation';
import { Project, getProjectStyling } from '@/data/projects';
import ProjectDetailPage from './page';

export async function generateStaticParams() {
  const projectsCollection = collection(db, 'portfolioItems');
  const projectSnapshot = await getDocs(projectsCollection);
  const params = projectSnapshot.docs.map(doc => {
    const projectData = doc.data() as Project;
    return {
      id: projectData.id,
    };
  });
  return params;
}

export default async function ProjectLayout({
  children, params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const projectId = params.id;
  const projectsRef = collection(db, 'portfolioItems');
  const q = query(projectsRef, where('id', '==', projectId));
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