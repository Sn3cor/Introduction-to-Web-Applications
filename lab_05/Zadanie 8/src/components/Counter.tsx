import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(Number(localStorage.getItem("counterSave")))

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => {
                setCount((prev) => {
                    localStorage.setItem("counterSave", (prev + 1).toString())
                    return prev + 1
                })
            }}>
                Increment
            </button>
        </div>
    )
}

export default Counter