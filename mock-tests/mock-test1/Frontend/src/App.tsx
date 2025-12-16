import Tree, { type TreeType } from './components/Tree'
import './App.css'
import { useEffect, useState } from 'react'


function App() {
  const [treeList, setTreeList] = useState<TreeType[]>([])
  const [input, setInput] = useState(0)
  const [color, setColor] = useState("black")
  useEffect(() => {
    fetch("http://localhost:3000")
      .then(res => res.json())
      .then(res => {
        setColor(res.kolor)
        console.log(res.kolor)
      })
  }, [])
  return (
    <>
      <div className='header'>
        <input onChange={(e) => {
          setInput(Number(e.target.value))
        }} type="text" />
        <button disabled={input === 0} onClick={() => {
          setTreeList([
            ...treeList,
            { height: input }
          ])
        }}>Dodaj choinkę</button>
      </div>
      <div className="wrapper">
        {
          treeList.map((tree) => {
            return <Tree height={tree.height} color={color} />
          })
        }
      </div>

    </>
  )
}

export default App
