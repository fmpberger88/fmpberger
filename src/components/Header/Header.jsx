import styles from './Header.module.css'

export default function Header () {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#tools">Tools</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}