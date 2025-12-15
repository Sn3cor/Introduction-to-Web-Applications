import { useState } from "react"


const Passwords = () => {
    const [passwordA, setPasswordA] = useState("")
    const [passwordB, setPasswordB] = useState("")
    return (
        <div>
            <h2>Passwords</h2>
            <p>Enter your password</p>
            <input type="password" onChange={(e) => {
                setPasswordA(e.target.value)
            }} />
            <p>Re-enter your password</p>
            <input type="password" onChange={(e) => {
                setPasswordB(e.target.value)
            }} />

            <p>{passwordA !== passwordB ? "Passwords do not match each other" : passwordA === "" && passwordB === "" ? "Please, enter your password" : ""}</p>
        </div>
    )
}

export default Passwords