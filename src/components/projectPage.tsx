// components/ProjectsPage.tsx
'use client';

import Header from '../components/header';
import Footer from '../components/footer';
import ProjectCard from './projectCard';
import styles from '/styles/projects.module.css';

// Define the type for project structure
interface Project {
  title: string;
  description: string;
  icon: JSX.Element;
  github?: string;
  link?: string;
  live?: string;
  tags: string[];
}

interface ProjectsPageProps {
  title: string;
  projects: Project[];
}

export default function ProjectsPage({ title, projects }: ProjectsPageProps) {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.mainContent}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.projectsContainer}>
          {projects.map((project: Project, index: number) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
