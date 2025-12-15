import { useState } from "react"

const Form = () => {
    const [text, setText] = useState("")
    return (

        <div>
            <h2>Form</h2>
            <input type="text" onChange={(e) => {
                setText(e.target.value)
            }} />
            <div>{text}</div>
        </div>
    )
}
export default Form