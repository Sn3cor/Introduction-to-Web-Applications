import { useState } from "react"
import type { ArticleType } from "./Article"
import { useNavigate } from "react-router-dom"
const Add = () => {
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    return (
        <div>
            <h2>Add a new article</h2>
            <h4>Title:</h4>
            <input type="text" onChange={(e) => {
                setTitle(e.target.value)
            }} />
            <h4>Body:</h4>
            <textarea onChange={(e) => {
                setBody(e.target.value)
            }} />
            <br /><br />
            <button disabled={title === "" || body === ""} onClick={() => {
                const articleCounter = Number(localStorage.getItem("articleCounter") ?? 0)
                const newId = articleCounter + 1
                const newArticle: ArticleType = {
                    id: newId,
                    title: title,
                    body: body
                }
                localStorage.setItem(`article:${newId}`, JSON.stringify(newArticle))
                localStorage.setItem("articleCounter", newId.toString())
                navigate('/blog')
            }}>Add</button>
        </div>
    )
}

export default Add