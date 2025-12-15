import { useState } from "react"
import Add from "./Add"

export interface Student {
    name: string,
    surname: string,
    year: number
}

let students: Student[] = [
    {
        name: "Jan",
        surname: "Kowalski",
        year: 2005
    },
    {
        name: "Jakub",
        surname: "Nowak",
        year: 2003
    },
    {
        name: "Tomasz",
        surname: "Kowal",
        year: 2010
    }
]

const StudentManager = () => {

    const [studentState, setStudentState] = useState(students)

    return (
        <div>
            <h2>StudentsManager</h2>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Year</th>
                </tr>
                {studentState.map((student: Student) => {
                    return (
                        <tr>
                            <td>{student.name}</td>
                            <td>{student.surname}</td>
                            <td>{student.year}</td>
                        </tr>
                    )
                })}
            </table>
            <Add setStudents={setStudentState} students={studentState}></Add>

        </div>
    )// Nie pasować settera jako prop
}

export default StudentManager