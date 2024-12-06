// pages/consulting.tsx
import Image from 'next/image'; // Import Next.js Image component
import ProjectsPage from '../components/projectPage'; // Adjust the path if necessary
import '../app/globals.css';

const projects = [
  {
    title: 'Chess',
    description: 'Top 0.5% of players in Chess.com\'s most popular variant, Bughouse, with a rating of 2300+. Top 10% of players on Chess.com with a rating of 2000+ in bullet (1 minute time control). Feel free to check out my Chess.com profile. I hope to play in real tournaments someday!',
    icon: <Image src='/icons/chess-icon.png' alt="Chess Icon" width={24} height={24} />,
    tags: ['Bughouse 2300+', 'Bullet 2000+', 'Blitz 1900+', 'Rapid 1900+'],
    link: 'https://www.chess.com/member/sayaori',
    live: 'https://www.chess.com/member/sayaori',
  },
  {
    title: 'Zetamac',
    description: 'Try to beat my highscore of 116! (Use default settings)',
    icon: <Image src='/icons/calculator-icon.png' alt="Calculator Icon" width={24} height={24} />,
    tags: ['Quiiiiick Maths', '120'],
    link: 'https://arithmetic.zetamac.com/',
    live: 'https://arithmetic.zetamac.com/',
  },
  {
    title: 'Town of Salem',
    description: 'Former top 25 player in Town of Salem a popular online social deduction game. This game is really fun to play with friends and high elo players!',
    icon: <Image src='/icons/town-icon.png' alt="Town Icon" width={24} height={24} />,
    tags: ['Social Deduction', 'Mafia', 'Town', 'Neutral'],
    link: 'https://www.blankmediagames.com/',
    live: 'https://www.blankmediagames.com/',
  },
];

export default function Games() {
  return <ProjectsPage title="Problem Solving & Games" projects={projects} />;
}
