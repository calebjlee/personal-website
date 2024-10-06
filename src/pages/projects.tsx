import Link from "next/link";
import Header from '../components/header';
import Footer from '../components/footer';
import styles from '/styles/projects.module.css';
import '../app/globals.css';
import { useState } from 'react';

export default function Projects() {
  // Set the state to allow both 'null' and 'string' values
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.contentWrapper}>
        <div className={styles.sectionsContainer}>

          {/* Software Engineering Section */}
          <Link href="/software-engineering">
            <div
              className={styles.section}
              onMouseEnter={() => setHoveredSection('software-engineering')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <h1 className={styles.sectionText} data-text="SOFTWARE ENGINEERING">
                SOFTWARE ENGINEERING
              </h1>
              {hoveredSection === 'software-engineering' && (
                <div className={styles.iconContainer}>
                  <img
                    src="/icons/code-icon.png"
                    className={styles.icon}
                    style={{ top: '10%', animationDelay: '0s' }}
                    alt="Code Icon"
                  />
                  <img
                    src="/icons/laptop-icon.png"
                    className={styles.icon}
                    style={{ top: '50%', animationDelay: '1s' }}
                    alt="Laptop Icon"
                  />
                </div>
              )}
            </div>
          </Link>

          {/* Consulting Section */}
          <Link href="/consulting">
            <div
              className={styles.section}
              onMouseEnter={() => setHoveredSection('consulting')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <h1 className={styles.sectionText} data-text="CONSULTING">
                CONSULTING
              </h1>
              {hoveredSection === 'consulting' && (
                <div className={styles.iconContainer}>
                  <img
                    src="/icons/consulting-icon.png"
                    className={styles.icon}
                    style={{ top: '30%', animationDelay: '0.5s' }}
                    alt="Consulting Icon"
                  />
                  <img
                    src="/icons/strategy-icon.png"
                    className={styles.icon}
                    style={{ top: '60%', animationDelay: '1.5s' }}
                    alt="Strategy Icon"
                  />
                </div>
              )}
            </div>
          </Link>

          {/* Mathematics Section */}
          <Link href="/mathematics">
            <div
              className={styles.section}
              onMouseEnter={() => setHoveredSection('mathematics')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <h1 className={styles.sectionText} data-text="MATHEMATICS">
                MATHEMATICS
              </h1>
              {hoveredSection === 'mathematics' && (
                <div className={styles.iconContainer}>
                  <img
                    src="/icons/math-icon.png"
                    className={styles.icon}
                    style={{ top: '20%', animationDelay: '0s' }}
                    alt="Math Icon"
                  />
                  <img
                    src="/icons/calculator-icon.png"
                    className={styles.icon}
                    style={{ top: '70%', animationDelay: '1s' }}
                    alt="Calculator Icon"
                  />
                </div>
              )}
            </div>
          </Link>

          {/* Problem Solving & Games Section */}
          <Link href="/games">
            <div
              className={styles.section}
              onMouseEnter={() => setHoveredSection('problem-solving-games')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <h1 className={styles.sectionText} data-text="PROBLEM SOLVING & GAMES">
                PROBLEM SOLVING & GAMES
              </h1>
              {hoveredSection === 'problem-solving-games' && (
                <div className={styles.iconContainer}>
                  <img
                    src="/icons/puzzle-icon.png"
                    className={styles.icon}
                    style={{ top: '40%', animationDelay: '0.5s' }}
                    alt="Puzzle Icon"
                  />
                  <img
                    src="/icons/gamepad-icon.png"
                    className={styles.icon}
                    style={{ top: '80%', animationDelay: '1.5s' }}
                    alt="Gamepad Icon"
                  />
                </div>
              )}
            </div>
          </Link>

        </div>
      </div>

      <Footer />
    </div>
  );
}
