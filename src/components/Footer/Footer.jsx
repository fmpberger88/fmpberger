import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a href="https://www.linkedin.com/in/fabian-berger-80003ba6/" target="_blank" aria-label="Linkedin">
                <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/fmpberger88" target="_blank" aria-label="Github">
                <i className="fab fa-github"></i>
            </a>
            <a href="https://www.researchgate.net/profile/Fabian-Berger-2" target="_blank"
               aria-label="ResearchGate">
                <i className="fab fa-researchgate"></i>
            </a>
        </footer>
    );
}