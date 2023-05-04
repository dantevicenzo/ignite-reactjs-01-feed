import styles from './Comment.module.css'
import { Trash, ThumbsUp } from '@phosphor-icons/react'

export function Comment(){
    return (
        <div className={styles.commentWrapper}>
            <img 
                className={styles.avatar} 
                src='https://github.com/dantevicenzo.png' 
            />
            <div className={styles.comment}>
                <div className={styles.commentBox}>
                    <div className={styles.infoWrapper}>
                        <div className={styles.info}>
                            <strong>Dante Vicenzo</strong>
                            <time title='04 de maio de 2023 às 15:29' dateTime='04-05-2023 15:29:00'>Cerca de 2h</time>
                        </div>
                        <a className={styles.delete}><Trash size={24} /></a>
                    </div>

                    <div className={styles.content}>
                        Muito bom Dante, parabéns!! 👏👏
                    </div>
                </div>
                <a className={styles.applause}>
                    <ThumbsUp size={20} />
                    <span>Aplaudir</span><span className={styles.applauseCount}>33</span>
                </a>
            </div>
        </div>
    )
}