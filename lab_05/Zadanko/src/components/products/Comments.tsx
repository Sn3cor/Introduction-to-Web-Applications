import { useEffect, useState } from "react";
import Comment from "./Comment";
import type { CommentType } from "./Comment";
import "./Comment.css"

const Comments = () => {

    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch("https://dummyjson.com/comments")
            .then(res => res.json())
            .then(res => {
                setComments(res.comments)
            })
    }, [])

    return (
        <div className="wrapper">
            <h2>Comments</h2>
            {comments.map((comment: CommentType) => {
                return <Comment
                    id={comment.id}
                    body={comment.body}
                    postId={comment.postId}
                    likes={comment.likes}
                    user={comment.user}
                />
            })}
        </div>
    )
}

export default Comments
