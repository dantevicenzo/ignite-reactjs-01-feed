import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { Trash, ThumbsUp } from '@phosphor-icons/react'

export function Comment({comment, onDeleteComment}){

    function handleDeleteComment(event){
        onDeleteComment(comment);
    }

    return (
        <div className={styles.commentWrapper}>
            <Avatar avatarUrl={comment.commentAuthor.avatarUrl} />
            <div className={styles.comment}>
                <div className={styles.commentBox}>
                    <header>
                        <div className={styles.info}>
                            <strong>{comment.commentAuthor.name}</strong>
                            <time title='04 de maio de 2023 às 15:29' dateTime='04-05-2023 15:29:00'>{comment.commentedAt}</time>
                        </div>
                        <button className={styles.delete} onClick={handleDeleteComment}><Trash size={24} /></button>
                    </header>

                    <div className={styles.content}>
                        {comment.content}
                    </div>
                </div>
                <footer>
                    <button className={styles.applause}>
                        <ThumbsUp size={20} />
                        <span>Aplaudir</span><span className={styles.applauseCount}>{comment.applauseCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}