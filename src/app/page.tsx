'use client';
import { useState } from 'react';
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from '/styles/Home.module.css';
import Image from 'next/image';
import { Code, Database, Bot, ChartCandlestick, HeartPulse, X, HandHelping } from 'lucide-react';
import ProjectCard from "../components/projectCard";

export default function Home() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "C++", "TypeScript", "JavaScript"]
    },
    {
      category: "Web Development",
      skills: ["React", "HTML/CSS/Tailwind", "React Native", "Flask", "APIs"]
    },
    {
      category: "Data & Business",
      skills: ["SQL", "Excel", "PowerPoint"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "AWS", "Microsoft PlayWright", "Web Hosting"]
    }
  ];

  const experiences = [
    {
      title: "Software Development Engineering Intern",
      company: "Amazon",
      date: "May 2025 - Present",
      description: "Refactoring backend systems for gift card reloads, consolidating outdated systems into robust APIs and optimizing data handling mechanisms.",
    },
    {
      title: "Software Engineering Intern",
      company: "Zephyr Technologies, Inc.",
      date: "January 2025 - May 2025",
      description: "Built basketball team detection pipeline with computer vision algorithms, providing actionable analytics for professional sports teams.",
    },
    {
      title: "Software Engineering Intern",
      company: "Forian",
      date: "June 2024 - August 2024",
      description: "Integrated Python algorithms to consolidate patient information and created automated software systems in Databricks SQL for medical claims processing.",
    },
    {
      title: "Research Assistant",
      company: "Lab of Geometry at Michigan (Log(M))",
      date: "September 2024 - Present",
      description: "Conducting research on the large scale geometry of integers.",
    },
    {
      title: "Business Analyst",
      company: "MEG Consulting",
      date: "February 2024 - Present",
      description: "Conducted market research for Fortune 500 companies and local businesses, including international social media market analysis and market entry strategies.",
    },
    {
      title: "Software Analyst",
      company: "Atlas Digital Consulting",
      date: "September 2024 - Present",
      description: "Creating software solutions to business problems.",
    },
  ];

  const education = [
    {
      degree: "B.S.E in Data Science and Mathematics",
      school: "University of Michigan",
      description: "Relevant coursework: Machine Learning, Data Structures and Algorithms, Combinatorics & Graph Theory",
      clubs: "Clubs I'm a part of: MEG Consulting, Atlas Digital Consulting, Michigan Finance and Mathematics Society"
    },
  ];

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
      description: 'An Algorithmic Cryptocurrency News Trader that leverages natural language processing and machine learning to analyze social media channels and make trading decisions in real-time.',
      icon: <Bot size={24} />,
      github: 'https://github.com/calebjlee/solsnipes',
      live: 'https://github.com/calebjlee/solsnipes',
      tags: ['TypeScript', 'JavaScript', 'Solana Web3.js', 'AWS EC2', 'LLMs', 'APIs', 'NLP'],
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

  // Add state to manage the current project index
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Function to handle navigation
  const handlePrev = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.container}>
      <Header />

      {/* Home Section */}
      <section id="home" className={styles.heroSection}>
        <div className={styles.main}>
          <h1 className={styles.heroHeader}>Caleb Lee</h1>
          <h2 className={styles.heroSubtitle}>Welcome to my portfolio!</h2>

          {/* Social Icons */}
          <div className={styles.socialIcons}>
            <a href="https://linkedin.com/in/calebjl" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/linkedin.png" alt="LinkedIn" className={styles.icon} width={300} height={300}/>
            </a>
            <a href="https://github.com/calebjlee" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/github.png" alt="GitHub" className={styles.icon} width={300} height={300}/>
            </a>
            <a href="mailto:calebjl@umich.edu">
              <Image src="/icons/email.png" alt="Email" className={styles.icon} width={300} height={300}/>
            </a>
          </div>

          {/* Scroll Button */}
          <div className={styles.scrollButton}>
            <a href="#projects" className={styles.scrollLink}>
              <span className={styles.arrowDown}></span>
              <h3 className={styles.learnMore}>Learn more</h3>
            </a>
          </div>
        </div>
      </section>

      <div style={{marginBottom: '20vh'}}/>
      <div id="projects" className={styles.divider} />
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        {/* Projects Section */}
        <div className={styles.projectsContainer}>
          
          <button className={styles.navButton} onClick={handlePrev}>
            &#8592; {/* Left Arrow */}
          </button>
          <div style={{width: '60vw'}}>
            <ProjectCard
              key={currentProjectIndex}
              project={projects[currentProjectIndex]}
              index={currentProjectIndex}
            />
          </div>
          

          <button className={styles.navButton} onClick={handleNext}>
            &#8594; {/* Right Arrow */}
          </button>
        </div>

        {/* Pagination Dots */}
        <div className={styles.paginationDots}>
          {projects.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${currentProjectIndex === index ? styles.activeDot : ''}`}
            />
          ))}
        </div>
      </section>
      <div id="skills" className={styles.divider}/>
      {/* Skills Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>My Skills</h2>
        <div className={styles.skillCategoriesGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>{category.category}</h3>
              <div className={styles.skillTags}>
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div id="experience" className={styles.divider} />
      {/* Experience Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>My Experience</h2>
        <div className={styles.experienceList}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.experienceItem}>
              <h3 className={styles.experienceTitle}>{exp.title}</h3>
              <p className={styles.experienceCompany}>
                {exp.company} | {exp.date}
              </p>
              <p className={styles.experienceDescription}>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.educationList}>
          {education.map((edu, index) => (
            <div key={index} className={styles.educationItem}>
              <h3 className={styles.educationDegree}>{edu.degree}</h3>
              <p className={styles.educationSchool}>
                {edu.school}
              </p>
              <p className={styles.educationDescription}>{edu.description}</p>
              <p className={styles.educationDescription}>{edu.clubs}</p>
            </div>
          ))}
        </div>
      </section>

      <div id="about" className={styles.divider} />
      <section className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.text}>
            Hi! I&apos;m Caleb, a Software Engineer from Irvine, California. I&apos;m studying Data Science and Mathematics at the University of Michigan with experience in algorithms, machine learning, and business consulting.
          </p>
          <p className={styles.text}>
            This summer, I&apos;ll be joining Amazon as a Software Development Engineering Intern. Previously, I worked at Forian consolidating patient databases and at Zephyr Technologies building computer vision algorithms for sports analytics.
          </p>
          <p className={styles.text}>
            On campus, I&apos;m involved in MEG Consulting and Atlas Digital Consulting, working with Fortune 500 companies and local businesses. Outside of work, I enjoy chess, cryptocurrency trading, poker, badminton, and creating piano covers.
          </p>
        </section>

      {/* Projects Link */}
      <div className={styles.projectsLinkContainer}>
        <Link href="/projects" legacyBehavior>
          <a className={styles.projectsLink}>My Projects →</a>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
