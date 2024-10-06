import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from '/styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  const skills = [
    { name: "Python", level: 95 },
    { name: "C++", level: 90 },
    { name: "SQL", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "React", level: 80 },
    { name: "HTML/CSS/Tailwind", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "AWS", level: 75 },
    { name: "Flask", level: 75 },
    { name: "PlayWright", level: 70 },
    { name: "APIs", level: 85 },
    { name: "Web Hosting", level: 95 },
    { name: "PowerPoint", level: 90 },
    { name: "Excel", level: 85 },
  ];

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Forian",
      date: "June 2024 - August 2024",
      description: "Developed back-end data analytics tools for healthcare data.",
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
      date: "January 2023 - Present",
      description: "Working with Fortune 100 companies and local businesses on various projects.",
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
      degree: "B.S. in Data Science and Mathematics",
      school: "University of Michigan",
      date: "2023 - 2026",
      description: "Relevant coursework: Machine Learning, Data Structures and Algorithms, Discrete Math",
    },
  ];

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
            <a href="#about" className={styles.scrollLink}>
              <span className={styles.arrowDown}></span>
              <h3 className={styles.learnMore}>Learn more</h3>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className={styles.divider} />
      <section id="about" className={styles.section}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.text}>
          Hi! I&#39;m Caleb, a passionate Software Engineer from Irvine, California. I&#39;m currently studying Data Science and Mathematics at the University of Michigan. 
          Last summer I interned at Forian, a publicly-traded healthtech firm, where I helped create the back-end of data analytics tools on healthcare data.
        </p>
        <p className={styles.text}>
          On campus, I&#39;m also involved in a business consulting club and a tech consulting club, where I&#39;ve worked with large Fortune 100 companies like General Motors as well as smaller local companies like Sister Pie.
          I&#39;m also a part of the Lab of Geometry at Michigan (Log(M)), where I conduct research on the large scale geometry of integers.
          Outside of academics, I enjoy playing badminton and logical games like chess.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className={styles.section}>
        <h2 className={styles.sectionTitle}>My Skills</h2>
        <div className={styles.skillGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.skillHeader}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillLevel}>{skill.level}%</span>
              </div>
              <div className={styles.skillBarBackground}>
                <div
                  className={styles.skillBar}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={styles.section}>
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
                {edu.school} | {edu.date}
              </p>
              <p className={styles.educationDescription}>{edu.description}</p>
            </div>
          ))}
        </div>
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
