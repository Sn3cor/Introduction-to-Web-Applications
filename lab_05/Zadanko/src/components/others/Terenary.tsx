const Terenary = () => {
    let a: boolean = true
    let b: boolean = false

    return (
        <div>
            <h2>Terenary</h2>
            <p>{a ? "a is true" : "a is false"}</p>
            <p>{b ? "b is true" : "b is false"}</p>
        </div>
    )
}

export default Terenary