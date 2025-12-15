import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Author from './components/Author'
import Balloon, { type BallonType } from './components/Balloon'
import { useState } from 'react'

const Balloons = () => {
  const [balloonList, setBalloonList] = useState<BallonType[]>([])
  const [input, setInput] = useState(0)
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInput(Number(e.target.value))
        }}
      />
      <br /><br />
      <button
        disabled={isNaN(input)}
        onClick={() => {
          for (let i = 0; i < input; i++) {
            setBalloonList(prev => [
              ...prev,
              {
                left: (Math.random() * 50) + 20,
                top: (Math.random() * 50) + 20
              }
            ])
          }
        }}>DODAJ</button>
      {
        balloonList.map((b) => {
          return <Balloon left={b.left} top={b.top} />
        })
      }
    </div >
  )
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Balloons />} />
        <Route path='/autor' element={<Author />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
