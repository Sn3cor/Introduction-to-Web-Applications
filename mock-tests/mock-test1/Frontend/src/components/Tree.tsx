import { useState } from "react"
import "./Tree.css"

export interface TreeType {
    height: number
}

const Tree = ({ height, color }: any) => {
    const [treeLevel, setTreeLevel] = useState(Number(height) ?? 0)
    return (
        <div className="component" >
            <div className="buttons" style={{ backgroundColor: color }}>
                <button onClick={() => {
                    setTreeLevel(prev => prev + 1)
                }}>+</button>
                <button onClick={() => {
                    setTreeLevel(prev => prev <= 0 ? 0 : prev - 1)
                }}>-</button>
            </div>

            <div className="tree">
                {Array.from({ length: treeLevel }).map((_, i) => {
                    return (
                        <div className="level">
                            <div className="triangle-left" style={{ borderWidth: 30 * (i + 1) / 5 }}></div>
                            <div className="triangle-right" style={{ borderWidth: 30 * (i + 1) / 5 }}></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Tree