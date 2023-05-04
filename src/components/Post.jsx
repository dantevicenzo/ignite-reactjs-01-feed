import styles from './Post.module.css'

export function Post({author, job, content}){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.authorInfo}>
                    <img 
                            className={styles.avatar} 
                            src='https://github.com/dantevicenzo.png' 
                    />
                    <div>
                        <strong>{author}</strong>
                        <span>{job}</span>
                    </div>
                </div>
                <time>Publicado há 1h</time>
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
            
            <footer>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Escreva um comentário...'>

                </textarea>
                <button>Publicar</button>
            </footer>
        </article>
    )
}