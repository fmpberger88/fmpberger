import styles from './Projects.module.css';
import el from '../../assets/images/el-info - Ergänzungsleistungen.webp';
import nikita from '../../assets/images/nikita.webp';
import trix from '../../assets/images/Trix Berger - Zentralschweizerische Kunstschaffende in Malerei, Keramik, Stoffe.webp';
import camera from '../../assets/images/format_camera.webp';

export default function Projects() {
    return (
        <div className={styles.gridContainer}>
            <div className={styles.firstProject}>
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
            <div className={styles.secondProject}>
                <img className={styles.img} src={nikita}/>
            </div>
            <div className={styles.thirdDescription}>
                <a href="#">Source Code</a>
                <a href="#">Live Page</a>
            </div>
            <div className={styles.thirdProject}>
                <img className={styles.img} src={trix}/>
            </div>
            <div className={styles.fourthDescription}>
                <a href="#">Source Code</a>
                <a href="#">Live Page</a>
            </div>
            <div className={styles.fourthProject}>
                <img className={styles.img} src={camera}/>
            </div>
        </div>
    );
}