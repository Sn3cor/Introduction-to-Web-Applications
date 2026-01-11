import "./Conatiner.css"
import DropImg from "./../assets/drop.png"
import { useState } from "react"

export interface ContainerType {
    id: number,
    name: string,
    currentLevel: number,
    maxLevel: number

}



const Container = (props: ContainerType) => {
    const [level, setLevel] = useState(props.currentLevel)
    return (
        <div key={props.id} className="container">
            <h2>{props.name}</h2>

            {Array.from({ length: props.maxLevel - level }).map(_ => {
                return (
                    <div className="level"></div>
                )
            })}
            {
                Array.from({ length: level }).map(_ => {
                    return (
                        <div className="level full" onClick={() => {
                            setLevel(prev => prev > 0 ? prev - 1 : prev)
                        }}>
                            <img src={DropImg} alt="drop" width={20} height={20} />
                        </div>
                    )
                })
            }

        </div>
    )
}
export default Container