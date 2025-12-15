import { useEffect, useState } from "react"

const Countdown = () => {
    const [counter, setCounter] = useState(15.0)
    const [intervalId, setIntervalId] = useState<number | null>(null)

    useEffect(() => {
        if (counter <= 0 && intervalId) clearInterval(intervalId)
    }, [counter])

    const intervalHandler = () => {
        setCounter(prev => Math.round((prev - 0.1) * 10) / 10)
    }

    const toggle = () => {
        if (!intervalId) {
            const id = setInterval(intervalHandler, 100)
            setIntervalId(id)
        }
        else {
            clearInterval(intervalId)
            setIntervalId(null)
        }
    }

    return (
        <div>
            <h2>Countdown</h2>
            <p>{counter}</p>
            <button disabled={counter <= 0} onClick={toggle}>
                {counter <= 0 ? "Counter has stopped" : !intervalId ? "START" : "STOP"}
            </button>
        </div >
    )
}

export default Countdown