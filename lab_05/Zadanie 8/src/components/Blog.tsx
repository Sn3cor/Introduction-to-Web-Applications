import { useEffect, useState } from "react"
import { isArticle, type ArticleKey, type ArticleType } from "./Article"
import { Link } from "react-router-dom"

const Blog = () => {
    const [articleList, setArticleList] = useState<ArticleType[]>([])

    useEffect(() => {
        const keys: ArticleKey[] = Object.keys(localStorage).filter(key => key.startsWith('article:'))
        if (keys.length <= 0) return;

        const articles: ArticleType[] = keys.map((key) => {
            let localStorageItem = localStorage.getItem(key)
            if (localStorageItem && isArticle(JSON.parse(localStorageItem))) return JSON.parse(localStorageItem)
        })

        setArticleList(articles)
    }, [])


    return (
        <div>
            <h2>Blog</h2>
            <div>
                {articleList.length <= 0 ? "No articles were found :(" : articleList.map((article: ArticleType) => {
                    return (
                        <div className="articleLink" key={article.id}>
                            <Link to={`/article/${article.id}`}>{article.title}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Blog