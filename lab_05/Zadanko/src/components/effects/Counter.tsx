import { useEffect, useState } from "react"

const CounterEffect = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("Hello World")
    }, [])
    useEffect(() => {
        console.log(`Counter incremented to ${count}`)
    }, [count])
    return (
        <div>
            <h2>CouterEffect</h2>
            <p>{count}</p>
            <button onClick={() => {
                setCount(prev => prev + 1)
            }}>
                Increment
            </button>
        </div>
    )
}

export default CounterEffect