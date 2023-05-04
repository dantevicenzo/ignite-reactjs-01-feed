import logo from '../assets/logo-ignite.svg'
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} />
            <strong>Ignite Feed</strong>
        </header>
    )
}