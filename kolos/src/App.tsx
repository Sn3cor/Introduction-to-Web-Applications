import { useEffect, useState } from 'react'
import './App.css'
import Container, { type ContainerType } from './components/Container'
const MAX_POZIOM = 10


function App() {

  const [initState, setInitState] = useState(0)
  const [input, setInput] = useState("")
  const [containerId, setContainterId] = useState(2)
  const [nameList, setNameList] = useState<string[]>([])
  const [waterSum, setWaterSum] = useState(20)
  const [containerList, setContainerList] = useState<ContainerType[]>([
    {
      id: 1,
      name: "test1",
      currentLevel: 10,
      maxLevel: MAX_POZIOM
    },
    {
      id: 2,
      name: "test2",
      currentLevel: 10,
      maxLevel: MAX_POZIOM
    },
  ])

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then(res => res.json())
      .then(res => {
        console.log(res)
        const T = res.recipes
        const names: string[] = Array(0)
        T.forEach((element: any) => {
          names.push(element.name)
        });

        setNameList(names)
      })
  }, [])

  useEffect(() => {
    let sum = 0;
    containerList.forEach(container => {
      sum += container.currentLevel
    })
    setWaterSum(sum)
  }, [containerList])

  return (
    <>
      <div className="menu">
        <div className="form">
          <p>Nazwa Pojemnika</p>
          <input type="text" value={input} onChange={(e) => {
            setInput(e.target.value)
          }} />
          <button disabled={nameList.length === 0} onClick={() => {
            console.log(nameList)
            setInput(nameList[Math.round(Math.random() * (nameList.length - 1))])
          }}>Losuj</button>
          <br />
          <br />
          <div className="flex">
            <button
              onClick={() => {
                setInitState(prev => prev > 0 ? prev - 1 : prev)
              }}
            >-</button>
            <div className="count">{initState}</div>
            <button
              onClick={() => {
                setInitState(prev => prev < MAX_POZIOM ? prev + 1 : prev)
              }}
            >+</button>
          </div>

          <br />
          <button disabled={input === ""} onClick={() => {
            setContainterId(prev => prev + 1)
            setContainerList(prev => [
              ...prev,
              {
                id: containerId,
                name: input,
                currentLevel: initState,
                maxLevel: MAX_POZIOM
              }
            ])

          }}>Stwórz pojemnik</button>

        </div>

        <div className="add">
          <h4>Suma Wody: {waterSum}</h4>
          <button
            disabled={containerList.length === 0}
            onClick={() => {
              setContainerList(prev => {
                prev.forEach(container => {
                  container.currentLevel < container.maxLevel ? container.currentLevel += 1 : container.currentLevel
                  console.log(container.currentLevel)
                })

                return prev
              })
            }}
          >Dolewka wody</button>
        </div>
      </div>
      <div className="wrapper">
        {containerList.map(containerProps => {
          return <Container {...containerProps} />
        })}
      </div>
    </>
  )
}

export default App
