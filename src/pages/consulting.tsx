// pages/consulting.tsx
import Image from 'next/image'; // Import Next.js Image component
import ProjectsPage from '../components/projectPage'; // Adjust the path if necessary
import '../app/globals.css';

const projects = [
  {
    title: 'Zephyr Technologies',
    description: 'Built basketball team detection pipeline with computer vision algorithms, providing actionable analytics for professional sports teams.',
    icon: <Image src='/icons/zephyr-icon.png' alt="Zephyr Icon" width={24} height={24} />, // Use custom Zephyr icon
    tags: ['Computer Vision', 'Sports Analytics', 'Machine Learning', 'Python', 'Team Detection'],
    live: 'https://www.withzephyr.com',
  },
  {
    title: 'General Motors',
    description: 'Conducted a market sizing and proof of value of international markets.',
    icon: <Image src='/icons/gm-icon.png' alt="GM Icon" width={24} height={24} />, // Use custom GM icon
    tags: ['Market Sizing', 'Proof of Value', 'International Market Research', 'PowerPoint & Presentation Skills'],
    live: 'https://www.gm.com',
  },
  {
    title: 'MiniExtensions',
    description: 'Creating a scripting software for Airtable extensions.',
    icon: <Image src='/icons/miniExtensions-icon.png' alt="MiniExtensions Icon" width={24} height={24} />, // Use custom MiniExtensions icon
    tags: ['Airtable Expressions', 'Javascript', 'TypeScript'],
    live: 'https://miniextensions.com',
  },
  {
    title: 'Sister Pie',
    description: 'Performed market analysis on the frozen pie crust market.',
    icon: <Image src='/icons/sister-pie-icon.png' alt="Sister Pie Icon" width={24} height={24} />, // Use custom Sister Pie icon
    tags: ['Market Entry', 'Competitor Analysis', 'Customer Sentiment Analysis', 'Market Research', 'PowerPoint & Presentation Skills'],
    live: 'https://www.sisterpie.com',
  },
];

export default function Consulting() {
  return <ProjectsPage title="Consulting Projects" projects={projects} />;
}
