import styles from './Comment.module.css'
import { Trash, ThumbsUp } from '@phosphor-icons/react'

export function Comment({author, time, content, applauseCount}){
    return (
        <div className={styles.commentWrapper}>
            <img 
                className={styles.avatar} 
                src={author.avatarUrl}
            />
            <div className={styles.comment}>
                <div className={styles.commentBox}>
                    <header>
                        <div className={styles.info}>
                            <strong>{author.name}</strong>
                            <time title='04 de maio de 2023 às 15:29' dateTime='04-05-2023 15:29:00'>{time}</time>
                        </div>
                        <button className={styles.delete}><Trash size={24} /></button>
                    </header>

                    <div className={styles.content}>
                        {content}
                    </div>
                </div>
                <footer>
                    <button className={styles.applause}>
                        <ThumbsUp size={20} />
                        <span>Aplaudir</span><span className={styles.applauseCount}>{applauseCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}