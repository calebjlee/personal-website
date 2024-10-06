// components/ProjectCard.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
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

// Define props types for the ProjectCard component
interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  // Ensure the component renders only on the client side to avoid hydration issues.
  const [isClient, setIsClient] = useState(false);

  // This will set isClient to true after the first render (client-side)
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Avoid SSR mismatch by not rendering anything on the server-side
  }

  return (
    <a href={project.live} target="_blank" rel="noopener noreferrer">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={styles.projectCard}
      >
        <div className={styles.projectHeader}>
          <div className={styles.projectIcon}>
            {project.icon}
          </div>
          <div className={styles.projectContainer}>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.projectTags}>
              {project.tags.map((tag: string, tagIndex: number) => (
                <span key={tagIndex} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Footer with icons */}
        <div className={styles.projectFooter}>
          {/* GitHub Icon */}
          {project.github &&
          <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
            <Github size={20} />
          </a>
        }
          {/* Live Project Icon (if available) */}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </motion.div>
    </a>
  );
}
