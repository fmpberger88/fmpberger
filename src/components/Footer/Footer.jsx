import styles from './Footer.module.css'

/**
 * Renders the footer component with social media icons.
 *
 * @return {JSX.Element} The footer component.
 */
export default function Footer() {
    // Get current year
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div>
                <p>© {currentYear}</p>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/fabian-berger-80003ba6/" target="_blank" rel="noopener noreferrer"
                   aria-label="Linkedin">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/fmpberger88" target="_blank" rel="noopener noreferrer" aria-label="Github">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.researchgate.net/profile/Fabian-Berger-2" target="_blank" rel="noopener noreferrer"
                   aria-label="ResearchGate">
                    <i className="fab fa-researchgate"></i>
                </a>
            </div>
        </footer>
    );
}