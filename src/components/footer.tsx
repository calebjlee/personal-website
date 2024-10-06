import React from 'react';
import styles from '/styles/footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.divider}/>
            <div className={styles.footerContent}>
                <p className={styles.footerText}>&copy; 2024 Caleb Lee. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;