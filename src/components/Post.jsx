import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({author, job, content}){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                            className={styles.avatar} 
                            src='https://github.com/dantevicenzo.png' 
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author}</strong>
                        <span>{job}</span>
                    </div>
                </div>
                <time title='04 de Maio às 14:07' dateTime='04-05-2023 14:07:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                {content}
                <br />
                <br />
                👉 <a>jane.design/doctorcare</a>
                <br />
                <br />
                <a>#novoprojeto</a> <a>#nlw</a> <a>#rocketseat</a>
                <br />
            </div>
            
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Escreva um comentário...'>

                </textarea>

                <div className={styles.commentFormButton}>
                    <button>Publicar</button>
                </div>
            </form>

            <Comment 
                author={{name: "Dante Vicenzo", avatarUrl: "https://github.com/dantevicenzo.png"}}
                time="Cerca de 2h"
                content="Muito bom Dante, parabéns!! 👏👏"
                applauseCount={33}
            />
            <Comment 
                author={{name: "Dante Vicenzo", avatarUrl: "https://github.com/dantevicenzo.png"}}
                time="Cerca de 2h"
                content="Muito bom Dante, parabéns!! 👏👏"
                applauseCount={33}
            />
            <Comment 
                author={{name: "Dante Vicenzo", avatarUrl: "https://github.com/dantevicenzo.png"}}
                time="Cerca de 2h"
                content="Muito bom Dante, parabéns!! 👏👏"
                applauseCount={33}
            />
        </article>
    )
}