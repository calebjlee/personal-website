// pages/consulting.tsx
import Image from 'next/image'; // Import Next.js Image component
import ProjectsPage from '../components/projectPage'; // Adjust the path if necessary
import '../app/globals.css';

const projects = [
  {
    title: 'Large Scale Geometry of Numbers',
    description: 'Developed an efficient algorithm that could compute the Word Metric of any integer with a subset of integers.',
    icon: <Image src='/icons/math-icon.png' alt="GM Icon" width={24} height={24} />, // Use custom GM icon
    tags: ['Group Theory', 'Nilpotent Groups', 'Abstract Algebra', 'Real Analysis', 'Python'],
    github: 'https://www.github.com/calebjlee/Math-Research',
    link: '/latex/Latex1.pdf',
    live: '/latex/Latex1.pdf',
  },
];

export default function Mathematics() {
  return <ProjectsPage title="Math Research Projects" projects={projects} />;
}
