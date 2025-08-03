import { db } from '@/lib/firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { notFound } from 'next/navigation';
import { Project, ProjectStyling, projectStyles } from '@/data/projects';
import ProjectDetailPage from './page';

export async function generateStaticParams() {
  const projectsCollection = collection(db, 'portfolioItems');
  const projectSnapshot = await getDocs(projectsCollection);
  const params = projectSnapshot.docs.map(doc => ({
    id: doc.id,
  }));
  return params;
}

export default async function ProjectLayout({
  children, params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const projectId = params.id;
  const projectDoc = await getDoc(doc(db, 'portfolioItems', projectId));

  let project: Project | null = null;

  if (projectDoc.exists()) {
    const dbProjectData = projectDoc.data() as Omit<Project, 'id' | 'styling'>;
    const styling : ProjectStyling = projectStyles[projectId] || {
      backgroundColor: 'hsl(var(--card))',
      textColor: 'hsl(var(--card-foreground))',
      fontFamily: 'var(--font-body)',
      borderColor: 'hsl(var(--border))',
      animationClass: 'group-hover:scale-105',
      className: '',
    };

    project = { 
      id: projectDoc.id, 
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