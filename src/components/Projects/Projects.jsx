import styles from './Projects.module.css';
import elImage from '../../assets/images/el-info.webp';
import nikitaImage from '../../assets/images/nikita.webp';
import trixImage from '../../assets/images/trix.webp';
import typeviewerImage from '../../assets/images/typ_viewer.webp';
import calculator from '../../assets/images/calculaor.webp';
import rockPaperScissors from '../../assets/images/rock_paper_scissors.webp';
import memoryCard from '../../assets/images/memorygame.webp';
import library from '../../assets/images/Library.webp';
import weather from '../../assets/images/weather.webp';
import yelp from '../../assets/images/yelp.webp';
import battleShip from '../../assets/images/BattleShip.webp';
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

                <ProjectImage imgSrc={yelp} altText="food" aosDirection="fade-left" className="secondProject" />
                <ProjectDescription githubUrl="https://github.com/fmpberger88/restaurant-finder" livePageUrl="https://yelp-api-example.onrender.com/" className="secondDescription" />

                <ProjectImage imgSrc={weather} altText="weather-dahhboard" aosDirection="fade-right" className="thirdProject" />
                <ProjectDescription githubUrl="https://github.com/fmpberger88/weatherAPI" livePageUrl="https://weatherapi-kl20.onrender.com/" className="thirdDescription" />

                <ProjectImage imgSrc={nikitaImage} altText="project nikita artist" aosDirection="fade-left" className="fourthProject" />
                <ProjectDescription githubUrl="https://github.com/fmpberger88/nikita" livePageUrl="https://www.nikita-art.ch/" className="fourthDescription" />

                <ProjectImage imgSrc={trixImage} altText="project trix berger artist" aosDirection="fade-right" className="fifthProject" />
                <ProjectDescription githubUrl="https://github.com/fmpberger88/trixberger" livePageUrl="https://www.art-by-trix.com/index.html" className="fifthDescription" />

                <ProjectImage imgSrc={typeviewerImage} altText="project font viewer" aosDirection="fade-left" className="sixthProject" />
                <ProjectDescription githubUrl="https://github.com/fmpberger88/font-viewer" livePageUrl="https://font-viewer.onrender.com/" className="sixthDescription" />

                <ProjectImage imgSrc={calculator} altText="project calculator" aosDirection="fade-right" className="seventhProject" />
                <ProjectDescription githubUrl="https://github.com/fmpberger88/calculator" livePageUrl="https://calculator-3pfo.onrender.com/" className="seventhDescription" />

                <ProjectImage imgSrc={rockPaperScissors} altText="project rock-paper-scissors" aosDirection="fade-left" className="eightProject" />
                <ProjectDescription githubUrl="https://github.com/fmpberger88/rock-scissors-paper" livePageUrl="https://rock-scissors-paper-odin.onrender.com/" className="eigthDescription" />

                <ProjectImage imgSrc={battleShip} altText="project battleShip" aosDirection="fade-right" className="ninthProject" />
                <ProjectDescription githubUrl="https://github.com/fmpberger88/battleship-vanilla" livePageUrl="https://battleship-vanilla.onrender.com/" className="ninthDescription" />

                <ProjectImage imgSrc={memoryCard} altText="project memorycards" aosDirection="fade-left" className="tenthProject" />
                <ProjectDescription githubUrl="https://github.com/fmpberger88/memory-card-game" livePageUrl="https://memory-card-game-85of.onrender.com/" className="tenthDescription" />

                <ProjectImage imgSrc={library} altText="project signup-form" aosDirection="fade-right" className="eleventhProject" />
                <ProjectDescription githubUrl="https://github.com/fmpberger88/library-odin" livePageUrl="https://library-odin.onrender.com/" className="eleventhDescription" />
            </div>
        </section>
    );
}