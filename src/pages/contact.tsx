import Link from "next/link";
import styles from '/styles/Home.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <div className={styles.logo}>Home</div>
        </Link>
        <nav className={styles.nav}>
          <Link href="/#about" className={styles.navLink}>About</Link>
          <Link href="/projects" className={styles.navLink}>Projects</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>
      </header>

      <section id="contact" className={styles.contactSection}>
        <h2>Contact Me</h2>
        <p>Feel free to reach out for collaboration or inquiries...</p>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>&copy; 2024 Caleb Lee. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
