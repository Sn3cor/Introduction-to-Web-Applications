export interface ArticleType {
    id: number,
    title: string,
    body: string
}

export type ArticleKey = string

export function isArticle(obj: any): boolean {
    return (
        obj !== null &&
        typeof obj === "object" &&
        "id" in obj &&
        typeof obj.id === "number" &&
        "title" in obj &&
        typeof obj.title === "string" &&
        "body" in obj &&
        typeof obj.body === "string"
    )
}

const Article = ({ id, title, body }: ArticleType) => {
    return (
        <div className="article">
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}

export default Article 