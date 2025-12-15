import { useState } from "react"
const Add = ({ setStudents, students }: any) => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [year, setYear] = useState(0)

    return (
        <div>
            <input type="text" onChange={(e: any) => {
                setName(e.target.value)
            }} />
            <br />
            <input type="text" onChange={(e: any) => {
                setSurname(e.target.value)
            }} />
            <br />
            <input type="number" onChange={(e: any) => {
                setYear(Number(e.target.value))
                console.log(year)
            }} />
            <br />
            <br />
            <button type="submit"
                disabled={name === "" || surname === "" || year === 0}
                onClick={() => {
                    return setStudents([
                        ...students,
                        {
                            name: name,
                            surname: surname,
                            year: year
                        }
                    ])
                }}>
                Add a student
            </button>
        </div>
    )
}

export default Add