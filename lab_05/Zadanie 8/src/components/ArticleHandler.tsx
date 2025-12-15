import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Article, { isArticle, type ArticleType } from "./Article"

const ArticleHandler = () => {
    const { id } = useParams()
    const [article, setArticle] = useState<ArticleType | null>(null)
    useEffect(() => {
        const key = Object.keys(localStorage).find(key => key.startsWith(`article:${id}`))
        if (key === undefined) return

        const localStorageItem = localStorage.getItem(key);
        if (localStorageItem && isArticle(JSON.parse(localStorageItem))) setArticle(JSON.parse(localStorageItem))
    }, [])

    return (
        <div>
            {article !== null ? <Article {...article} /> : `No Article with id:${id} was found :c`}
        </div>
    )
}

export default ArticleHandler