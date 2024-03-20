import styles from './Projects.module.css';
import el from '../../assets/images/el-info - Ergänzungsleistungen.webp';
import nikita from '../../assets/images/nikita.webp';
import trix from '../../assets/images/Trix Berger - Zentralschweizerische Kunstschaffende in Malerei, Keramik, Stoffe.webp';
import camera from '../../assets/images/format_camera.webp';
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projects() {
    useEffect(() => {
        AOS.init({
            // hier kannst du globale Einstellungen für AOS setzen
            duration : 3000 // Dauer der Animationen in Millisekunden
        });
    }, []);

    return (
        <div className={styles.gridContainer}>
            <div className={styles.firstProject} data-aos="fade-right">
                <img className={styles.img} src={el}/>
            </div>
            <div className={styles.firstDescription}>
                <a href="#">Source Code</a>
                <a href="#">Live Page</a>
            </div>
            <div className={styles.secondDescription}>
                <a href="#">Source Code</a>
                <a href="#">Live Page</a>
            </div>
            <div className={styles.secondProject} data-aos="fade-left">
                <img className={styles.img} src={nikita}/>
            </div>
            <div className={styles.thirdDescription}>
                <a href="#">Source Code</a>
                <a href="#">Live Page</a>
            </div>
            <div className={styles.thirdProject} data-aos="fade-right">
                <img className={styles.img} src={trix}/>
            </div>
            <div className={styles.fourthDescription}>
                <a href="#">Source Code</a>
                <a href="#">Live Page</a>
            </div>
            <div className={styles.fourthProject} data-aos="fade-left">
                <img className={styles.img} src={camera}/>
            </div>
        </div>
    );
}