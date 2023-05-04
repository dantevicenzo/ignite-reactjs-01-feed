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
                    <div className={styles.infoWrapper}>
                        <div className={styles.info}>
                            <strong>{author.name}</strong>
                            <time title='04 de maio de 2023 às 15:29' dateTime='04-05-2023 15:29:00'>{time}</time>
                        </div>
                        <a className={styles.delete}><Trash size={24} /></a>
                    </div>

                    <div className={styles.content}>
                        {content}
                    </div>
                </div>
                <a className={styles.applause}>
                    <ThumbsUp size={20} />
                    <span>Aplaudir</span><span className={styles.applauseCount}>{applauseCount}</span>
                </a>
            </div>
        </div>
    )
}