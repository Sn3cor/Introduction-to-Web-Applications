import './App.css'
import Cart from './components/cart/Cart'
import Counter from './components/counters/Counter'
import NewCounter from './components/counters/NewCounter'
import Form from './components/forms/Form'
import Passwords from './components/forms/Passwords'
import SignIn from './components/forms/SignIn'
import Terenary from './components/others/Terenary'
import Update from './components/others/Update'
import Students from './components/students/Students'
import StudentManager from './components/students/StudentManager'
import CounterEffect from './components/effects/Counter'
import Title from './components/effects/Title'
import Countdown from './components/effects/Countdown'
import Comments from './components/products/Comments'

function App() {

  return (
    <>
      <div className="grid-layout">
        <Cart />
        <Counter />
        <NewCounter />
        <Form />
        <Passwords />
        <SignIn />
        <Terenary />
        <Update />
        <Students />
        <StudentManager />
        <CounterEffect />
        <Title />
        <Countdown />
        <Comments />
      </div>

    </>
  )
}

export default App
