import styles from './Avatar.module.css'

export function Avatar({avatarUrl, hasBorder = false}) {
    return (
        <img 
            className={hasBorder ? styles.avatarHasBorder : styles.avatar}
            src={avatarUrl}
        />
    )
}