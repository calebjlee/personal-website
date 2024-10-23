// pages/consulting.tsx
import Image from 'next/image';
import ProjectsPage from '../components/projectPage';
import '../app/globals.css';

const projects = [
  {
    title: 'Large Scale Geometry of Numbers',
    description: 'Currently developing algorithmic solutions to unsolved problems in Number Theory. Check out my current progress and draft paper we are working on.',
    icon: <Image src='/icons/math-icon.png' alt="Math Icon" width={24} height={24} />,
    tags: ['Number Theory', 'Group Theory', 'Nilpotent Groups', 'Abstract Algebra', 'Real Analysis', 'Python'],
    github: 'https://www.github.com/calebjlee/Math-Research',
    link: '/latex/Latex1.pdf',
    live: '/latex/Latex1.pdf',
  },
];

export default function Mathematics() {
  return <ProjectsPage title="Math Research Projects" projects={projects} />;
}
