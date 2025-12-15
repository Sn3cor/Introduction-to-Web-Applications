import { useState } from "react"

const SignIn = () => {
    const [username, setUsername] = useState("")
    const [passwordA, setPasswordA] = useState("")
    const [passwordB, setPasswordB] = useState("")
    return (
        <div>
            <h2>Sign In</h2>
            <p>Enter your username</p>
            <input type="text" onChange={(e) => {
                setUsername(e.target.value)
            }} />
            <p>Enter your password</p>
            <input type="password" onChange={(e) => {
                setPasswordA(e.target.value)
            }} />
            <p>Re-enter your password</p>
            <input type="password" onChange={(e) => {
                setPasswordB(e.target.value)
            }} />
            <br />
            <br />
            <button disabled={username === "" || passwordA === "" || passwordB === ""} onClick={() => {
                passwordA === passwordB ? alert("Passwords match") : alert("Passwords do not match")
            }}>Sign In</button>
        </div>
    )
}

export default SignIn