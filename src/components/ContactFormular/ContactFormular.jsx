import styles from './ContactFormular.module.css'
import {Link} from "react-router-dom";

export default function ContactFormular() {
    return (
        <aside>
            {/* Back-Link oben */}
            <div className={styles.backWrapper}>
                <Link to="/" className={styles.backLink}>
                    ← Back
                </Link>
            </div>
            <h2 className={styles.sectionTitle} id="contact">Contact</h2>
            <form action="https://formspree.io/f/mrgwjpnv" method="POST">
                <input type="email" name="email" placeholder="example@mail.com"/>
                <textarea name="message" placeholder="Your message..."></textarea>
                <button type="submit">Send</button>
            </form>
        </aside>
    )
}