import bfImage from '../../assets/images/bf.webp';
import styles from './About.module.css'

export default function About () {
    return (
        <main className={styles.aboutContainer}>
            <div>
                <img src={bfImage} className={styles.authorImage} alt="Author der Seite - fmpberger"/>
            </div>
            <div>
                <h1>fmpberger</h1>
                <p>As a passionate researcher, I discovered the benefits of programming. I believe that programming will
                    be a more and more important topic in the world going forward to empower people through digital
                    transformation. It's never too late to start. Anyone can learn to code. Let's keep building!</p>
            </div>
        </main>
    );
}