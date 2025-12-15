import { useState } from "react"
import "./Comment.css"

export interface CommentType {
    id: number,
    body: string,
    postId: number,
    likes: number
    user: User
}

interface User {
    id: number,
    username: string,
    fullName: string
}

const Comment = ({ id, body, postId, likes, user }: CommentType) => {
    const [likesCount, setLikesCount] = useState(likes)
    const [isLiked, setIsLiked] = useState(false)
    const [isDisliked, setIsDisliked] = useState(false)

    const toggleLike = () => {
        if (!isLiked) {
            setLikesCount(likes + 1)
            setIsLiked(prev => !prev)
            setIsDisliked(false)
        }
        else {
            setLikesCount(likes)
            setIsLiked(prev => !prev)
        }
    }

    const toggleDislike = () => {
        if (!isDisliked) {
            setLikesCount(likes - 1)
            setIsDisliked(prev => !prev)
            setIsLiked(false)
        }
        else {
            setLikesCount(likes)
            setIsDisliked(prev => !prev)
        }
    }

    return (
        <div key={id} className="comment">
            <div className="header">
                <h2>{user.fullName}</h2>
                <h4>{user.username}</h4>
                <h6> Post Id: {postId}</h6>
            </div>
            <div className="body">
                {body}
            </div>
            <div className="likes">
                <button onClick={toggleLike} className={isLiked ? "toggled" : ""}>👍</button>
                <p>{likesCount}</p>
                <button onClick={toggleDislike} className={isDisliked ? "toggled" : ""}>👎</button>
            </div>
        </div >
    )
}

export default Comment