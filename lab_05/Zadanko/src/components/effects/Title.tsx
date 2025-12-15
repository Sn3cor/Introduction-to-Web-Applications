import { useEffect, useState } from "react"

const Title = () => {
    const [title, setTitle] = useState("Default")

    useEffect(() => {
        document.title = title
    }, [title])

    return (
        <div>
            <h2>Title</h2>
            <br /><br />
            <input type="text" onChange={(e) => {
                setTitle(e.target.value)
            }} />
        </div>
    )
}

export default Title