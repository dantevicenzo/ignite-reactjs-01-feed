export function Post({author, content}){
    return (
        <article>
            <h1>{author}</h1>
            <p>{content}</p>
        </article>
    )
}