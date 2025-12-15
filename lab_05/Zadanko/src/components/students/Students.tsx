
interface Student {
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

const Students = () => {
    return (
        <div>
            <h2>Students</h2>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Year</th>
                </tr>
                {students.map((student: Student) => {
                    return (
                        <tr>
                            <td>{student.name}</td>
                            <td>{student.surname}</td>
                            <td>{student.year}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Students