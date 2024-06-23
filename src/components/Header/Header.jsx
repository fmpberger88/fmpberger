import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

export default function Header () {
    return (
        <header>
            <nav>
                <ul>
                    <NavLink className={styles.NavLink} to="/blog">Blog</NavLink>
                    <li><a href="#tools">Tools</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}