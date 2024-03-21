import styles from './Projects.module.css';
import el from '../../assets/images/el-info - Ergänzungsleistungen.webp';
import nikita from '../../assets/images/nikita.webp';
import trix from '../../assets/images/Trix Berger - Zentralschweizerische Kunstschaffende in Malerei, Keramik, Stoffe.webp';
import typeviewer from '../../assets/images/typ_viewer.webp';
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projects() {
    useEffect(() => {
        AOS.init({
            // hier kannst du globale Einstellungen für AOS setzen
            duration : 2000 // Dauer der Animationen in Millisekunden
        });
    }, []);

    return (
        <section>
            <h2 className={styles.sectionTitle} id="projects">Projects</h2>
            <div className={styles.gridContainer}>
                <div className={styles.firstProject} data-aos="fade-right">
                    <img className={styles.img} src={el}/>
                </div>
                <div className={styles.firstDescription}>
                    <a href="https://github.com/fmpberger88/eli-project" target="_blank">Source Code</a>
                    <a href="https://www.el-info.ch/" target="_blank">Live Page</a>
                </div>
                <div className={styles.secondDescription}>
                    <a href="https://github.com/fmpberger88/nikita" target="_blank">Source Code</a>
                    <a href="https://www.nikita-art.ch/" target="_blank">Live Page</a>
                </div>
                <div className={styles.secondProject} data-aos="fade-left">
                    <img className={styles.img} src={nikita}/>
                </div>
                <div className={styles.thirdDescription}>
                    <a href="https://github.com/fmpberger88/trixberger" target="_blank">Source Code</a>
                    <a href="https://www.art-by-trix.com/index.html" target="_blank">Live Page</a>
                </div>
                <div className={styles.thirdProject} data-aos="fade-right">
                    <img className={styles.img} src={trix}/>
                </div>
                <div className={styles.fourthDescription}>
                    <a href="https://github.com/fmpberger88/font-viewer" target="_blank">Source Code</a>
                    <a href="https://font-viewer.onrender.com/" target="_blank">Live Page</a>
                </div>
                <div className={styles.fourthProject} data-aos="fade-left">
                    <img className={styles.img} src={typeviewer}/>
                </div>
            </div>
        </section>

    );
}