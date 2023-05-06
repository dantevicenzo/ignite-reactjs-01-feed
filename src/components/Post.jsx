import { useState } from 'react';
import DOMPurify from 'dompurify';

import { Comment } from './Comment'
import { Avatar } from './Avatar'
import styles from './Post.module.css'

export function Post({author, content, createdAt, comments = [], userLoggedIn}){

    const [commentList, setCommentList] = useState(comments);
    const [newCommentText, setNewCommentText] = useState('');

    function handleNewCommentTextChange(event){
        setNewCommentText(event.target.value);
    }

    function handlePublishComment(event){
        const commentListCurrentId = commentList.reduce((prev, current) => (prev.id > current.id) ? prev.id : current.id, 0);
        const newCommentId = commentListCurrentId + 1;

        let newComment = {
            id: newCommentId,
            commentAuthor: {
                name: userLoggedIn.name, 
                avatarUrl: userLoggedIn.avatarUrl,
            },
            createdAt: "Cerca de 2h",
            content: newCommentText,
            applauseCount: 0
        }

        setCommentList([...commentList, newComment]);        

        event.preventDefault();
    }

    function onDeleteComment(commentToDelete){
        const commentListWithoutDeletedComment = commentList.filter(comment => comment != commentToDelete);
        setCommentList(commentListWithoutDeletedComment);
    }

    function formatContentUrls(contentString){
        const patternUrl = /([\w+]+\:\/\/)?([\w\d-]+\.)*[\w-]+[\.\:]\w+([\/\?\=\&\#\.]?[\w-]+)*\/?/gm;
        const patternHashtag = /#[a-zA-Z0-9_]+/g;

        const matchesUrls = contentString.match(patternUrl);
        const matchesHashtags = contentString.match(patternHashtag);

        const modifiedStringsUrls = matchesUrls?.map(match => `<a href="${match}" target="_blank">${match}</a>`);
        const modifiedStringsHashtags = matchesHashtags?.map(match => `<a>${match}</a>`);

        const contentHtml = contentString
        .replace(patternUrl, () => modifiedStringsUrls.shift())
        .replace(patternHashtag, () => modifiedStringsHashtags.shift());

        return contentHtml;
    }
    
    const formattedContentHTML = formatContentUrls(content);
    const sanitizedContentHTML = DOMPurify.sanitize(formattedContentHTML);

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar avatarUrl={author.avatarUrl} hasBorder />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.jobTitle}</span>
                    </div>
                </div>
                <time title='04 de Maio às 14:07' dateTime='04-05-2023 14:07:00'>{createdAt}</time>
            </header>

            <div className={styles.content} dangerouslySetInnerHTML={{ __html: sanitizedContentHTML }} />
            
            <form onSubmit={handlePublishComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Escreva um comentário...'
                    value={newCommentText}
                    onChange={handleNewCommentTextChange}
                />

                <div className={styles.commentFormButton}>
                    <button>Publicar</button>
                </div>
            </form>

            {commentList.map(comment => {
                return <Comment 
                            key={comment.id}
                            comment={comment}
                            onDeleteComment={onDeleteComment}
                        />
            })}
        </article>
    )
}