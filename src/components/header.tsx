import React from 'react';
import styles from '/styles/header.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Link href="/">
                <Image
                    className={styles.logo}
                    src="/image/profile.jpg"
                    alt="Caleb Lee Logo"
                    width={75}
                    height={75}
                />
            </Link>
            <nav className={styles.nav}>
                <Link href="/#skills" className={styles.navLink}>
                    Skills
                </Link>
                <Link href="/#experience" className={styles.navLink}>
                    Experience
                </Link>
                <Link href="/#about" className={styles.navLink}>
                    About
                </Link>
                <Link href="/projects" className={styles.navLink}>
                    Projects
                </Link>
            </nav>
        </header>
    );
};

export default Header;