import styles from './ContactFormular.module.css'

export default function ContactFormular() {
    return (
        <aside>
            <h2 className={styles.sectionTitle} id="contact">Contact</h2>
            <form action="https://formspree.io/f/mrgwjpnv" method="POST">
                <input type="email" name="email" placeholder="example@mail.com"/>
                <textarea name="message" placeholder="Your message..."></textarea>
                <button type="submit">Send</button>
            </form>
        </aside>
    )
}