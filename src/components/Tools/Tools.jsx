import styles from './Tools.module.css'
import html from '../../assets/icons/007-html 5.svg'
import css from '../../assets/icons/004-css 3.svg'
import js from '../../assets/icons/009-js.svg'
import python from '../../assets/icons/015-python.svg'
import ruby from '../../assets/icons/021-ruby.svg'
import r from '../../assets/icons/r.svg'


export default function Tools() {

    const languages = [
        { id: 1, icon: html, label: 'HTML' , years: "3"},
        { id: 2, icon: css, label: 'CSS' , years: "3"},
        { id: 3, icon: js, label: 'Javascript' , years: "3"},
        { id: 4, icon: python, label: 'Python' , years: "4"},
        { id: 5, icon: r, label: 'R' , years: "5"},
    ]

    return (
        <section>
            <h2 className={styles.sectionTitle} id="tools">Tools</h2>
            <div className={styles.language}>
                { languages.map(language => (
                    <div key={language.id} className={styles.card}>
                        <div className={styles.cardFront}>
                            <img src={language.icon} alt={language.label} width="150" height="150" />
                        </div>
                        <div className={styles.cardBack}>
                            <span className={styles.cardLabel}><strong>{language.label}</strong></span>
                            <span>{language.years} years of experience</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}