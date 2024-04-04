import styles from './Projects.module.css';
import elImage from '../../assets/images/el-info.webp';
import nikitaImage from '../../assets/images/nikita.webp';
import trixImage from '../../assets/images/trix.webp';
import typeviewerImage from '../../assets/images/typ_viewer.webp';
import calculator from '../../assets/images/calculaor.webp';
import rockPaperScissors from '../../assets/images/rock_paper_scissors.webp';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

// ProjectDescription stays the same
const ProjectDescription = ({ githubUrl, livePageUrl, className }) => (
    <div className={styles[className]}>
        <a href={githubUrl} target="_blank">Source Code</a>
        <a href={livePageUrl} target="_blank">Live Page</a>
    </div>
);

// ProjectImage now accepts a className prop
const ProjectImage = ({ imgSrc, altText, aosDirection, className }) => (
    <div className={styles[className]} data-aos={aosDirection}>
        <img className={styles.img} src={imgSrc} alt={altText} />
    </div>
);

export default function Projects() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <section>
            <h2 className={styles.sectionTitle} id="projects">Projects</h2>
            <div className={styles.gridContainer}>
                <ProjectImage imgSrc={elImage} altText="project el-info" aosDirection="fade-right" className="firstProject" />
                <ProjectDescription githubUrl="https://github.com/fmpberger88/eli-project" livePageUrl="https://www.el-info.ch/" className="firstDescription" />

                <ProjectImage imgSrc={nikitaImage} altText="project nikita artist" aosDirection="fade-left" className="secondProject" />
                <ProjectDescription githubUrl="https://github.com/fmpberger88/nikita" livePageUrl="https://www.nikita-art.ch/" className="secondDescription" />

                <ProjectImage imgSrc={trixImage} altText="project trix berger artist" aosDirection="fade-right" className="thirdProject" />
                <ProjectDescription githubUrl="https://github.com/fmpberger88/trixberger" livePageUrl="https://www.art-by-trix.com/index.html" className="thirdDescription" />

                <ProjectImage imgSrc={typeviewerImage} altText="project font viewer" aosDirection="fade-left" className="fourthProject" />
                <ProjectDescription githubUrl="https://github.com/fmpberger88/font-viewer" livePageUrl="https://font-viewer.onrender.com/" className="fourthDescription" />

                <ProjectImage imgSrc={calculator} altText="project calculator" aosDirection="fade-right" className="fifthProject" />
                <ProjectDescription githubUrl="https://github.com/fmpberger88/calculator" livePageUrl="https://calculator-3pfo.onrender.com/" className="fifthDescription" />

                <ProjectImage imgSrc={rockPaperScissors} altText="project rock-paper-scissors" aosDirection="fade-left" className="sixthProject" />
                <ProjectDescription githubUrl="https://github.com/fmpberger88/rock-scissors-paper" livePageUrl="https://rock-scissors-paper-odin.onrender.com/" className="sixthDescription" />
            </div>
        </section>
    );
}