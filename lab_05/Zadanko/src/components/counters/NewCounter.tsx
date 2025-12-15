import { useState } from "react"
import Button from "./Button"
const NewCounter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h2>NewCounter</h2>
            <p>{count}</p>
            <Button update={() => {
                setCount(prev => prev + 1)
            }}>
            </Button>
        </div>
    )
}

export default NewCounter