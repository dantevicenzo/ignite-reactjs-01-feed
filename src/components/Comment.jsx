import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { Trash, ThumbsUp } from '@phosphor-icons/react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function Comment({comment, onDeleteComment}){

    const commentDateFormatted = capitalizeFirstLetter(formatDistanceToNow(comment.createdAt, {locale: ptBR}));
    const commentDateHumanReadable = format(comment.createdAt, "dd 'de' MMMM 'às' HH:mm", {locale: ptBR});
    const commentDateTime = format(comment.createdAt, "dd-MM-yyyy HH:mm:ss", {locale: ptBR});

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
                            <time title={commentDateHumanReadable} dateTime={commentDateTime}>{commentDateFormatted}</time>
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