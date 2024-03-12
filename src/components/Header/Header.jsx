import styles from './Header.module.css'

export default function Header () {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Tools</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}