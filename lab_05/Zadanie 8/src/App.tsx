import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Counter from './components/Counter'
import Blog from './components/Blog'
import Home from './components/Home'
import ArticleHandler from './components/ArticleHandler'
import Add from './components/Add'

function App() {

  return (
    // <Counter/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/article/:id' element={<ArticleHandler />} />
        <Route path='/add' element={<Add />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
