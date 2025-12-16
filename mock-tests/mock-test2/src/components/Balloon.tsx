import "./Balloon.css"
import BalonImg from "../assets/balon.png"
import { useEffect, useState } from "react"

export interface BallonType {
    left: number
    top: number
}

const Balloon = ({ left, top }: BallonType) => {
    const [scale, setScale] = useState(Math.random() + 0.5)
    const [dy, setDy] = useState(0);
    useEffect(() => {
        if (scale < 0.5) {
            setDy(1000);
        }
    }, [scale])
    return (
        <img
            className="balloon"
            src={BalonImg}
            style={{
                left: `${left}%`,
                top: `${top}%`,
                scale: scale,
                transform: `translateY(-${dy}%)`,
                transition: `1 linear`

            }}
            onClick={() => {
                setScale(prev => Math.max(((prev * 10 - 1) / 10), 0))
            }} />
    )
}
export default Balloon