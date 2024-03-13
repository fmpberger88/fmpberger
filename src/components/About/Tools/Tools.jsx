import styles from './Tools.module.css'
import html from '../../../assets/icons/007-html 5.svg'
import css from '../../../assets/icons/004-css 3.svg'
import js from '../../../assets/icons/009-js.svg'
import python from '../../../assets/icons/015-python.svg'
import ruby from '../../../assets/icons/021-ruby.svg'
import r from '../../../assets/icons/r.svg'


export default function Tools() {
    return (
        <div>
            <h1 className={styles.tools}>Tools</h1>
            <div className={styles.language}>
                <div className={styles.box}>
                    <img src={html} alt="HTML" width="50" height="50"/>
                </div>
                <div className={styles.box}>
                    <img src={css} alt="CSS" width="50" height="50"/>
                </div>
                <div className={styles.box}>
                    <img src={js} alt="Javascript" width="50" height="50"/>
                </div>
                <div className={styles.box}>
                    <img src={python} alt="Python" width="50" height="50"/>
                </div>
                <div className={styles.box}>
                    <img src={ruby} alt="Ruby" width="50" height="50"/>
                </div>
                <div className={styles.box}>
                    <img src={r} alt={"R"} width="50" height="50"/>
                </div>
            </div>
        </div>
    )
}