// pages/software-engineering.tsx
import { Code, Database, Bot, ChartCandlestick, HeartPulse, X, HandHelping } from 'lucide-react';
import ProjectsPage from '../components/projectPage';
import '../app/globals.css';

// Define the projects array for the software engineering page
const projects = [
  {
    title: 'Portfolio Website',
    description: 'The website you are currently viewing, built with Next.js and React. It showcases my projects, skills, and experiences.',
    icon: <Code size={24} />,
    github: 'https://github.com/calebjlee/personal-website',
    link: 'https://caleb-lee.dev',
    live: 'https://github.com/calebjlee/personal-website',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'UI/UX Design', 'Web Development'],
  },
  {
    title: 'MEG Consulting Website',
    description: 'A website built for one of the premier consulting organizations at the University of Michigan, showcasing their services, team, and projects. As Tech Committee Chair, I led a team of 6 developers to build this website.',
    icon: <HandHelping size={24} />,
    github: 'https://github.com/calebjlee/MEG_Consulting_Website',
    link: 'https://meg-consulting.org',
    live: 'https://meg-consulting.org',
    tags: ['React', 'JavaScript', 'Search Engine Optimization', 'Web Development', 'Web Hosting'],
  },
  {
    title: 'Solsnipes',
    description: 'An Algorithmic Cryptocurrency News Trader that leverages natural language processing and machine learning to analyze news articles and make trading decisions in real-time.',
    icon: <Bot size={24} />,
    github: 'https://github.com/calebjlee/solsnipes',
    live: 'https://github.com/calebjlee/solsnipes',
    tags: ['TypeScript', 'JavaScript', 'Solana Web3.js', 'AWS EC2', 'LLMs', 'APIS', 'NLP'],
  },
  {
    title: 'Prosperity Trading Bot',
    description: 'A Python-based algorithmic trading program for IMC\'s two week trading competition that uses mean reversion, pair trading, and more to predict stock prices and execute trades automatically.',
    icon: <ChartCandlestick size={24} />,
    github: 'https://github.com/calebjlee/Prosperity-24',
    live: 'https://github.com/calebjlee/Prosperity-24',
    tags: ['Python', 'Pandas', 'Algorithmic Trading', 'Machine Learning'],
  },
  {
    title: 'Expedia Webscraper',
    description: 'A Python webscraper that collects hotel data from Expedia. It efficiently gathers information on prices, amenities, and customer reviews, enabling data-driven decision making for travel-related projects.',
    icon: <Database size={24} />,
    github: 'https://github.com/calebjlee/expedia_webscraper',
    live: 'https://github.com/calebjlee/expedia_webscraper',
    tags: ['Python', 'React', 'PlayWright', 'Flask','Web Scraping'],
  },
  {
    title: 'ZetaApp',
    description: 'A TypeScript mobile application that helps users improve their mental math skills. Think of it like Zetamac, but on your phone!',
    icon: <X size={24} />,
    github: 'https://github.com/calebjlee/ZetaApp',
    live: 'https://github.com/calebjlee/ZetaApp',
    tags: ['TypeScript', 'React Native', 'Mobile Development'],
  },
  {
    title: 'HealthRelay',
    description: 'A web application that connects physicians with radiologists, enabling secure communication and appointment scheduling.',
    icon: <HeartPulse size={24} />,
    link: 'https://healthrelay.vercel.app/',
    live: 'https://healthrelay.vercel.app/',
    tags: ['TypeScript', 'React Native', 'PostgreSQL', 'GraphQL', 'Mobile Development'],
  }
];

export default function SoftwareEngineering() {
  return <ProjectsPage title="Software Engineering Projects" projects={projects} />;
}
