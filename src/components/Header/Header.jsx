import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            className={styles.NavLink}
                            to="/blog"
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.NavLink} to="/tools">
                            Tools
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.NavLink} to="/projects">
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.NavLink} to="/contact">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
