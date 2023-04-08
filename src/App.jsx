import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import { Cart } from './Pages/Cart'

function App() {
  return (
    <div className="w-full h-full relative">
      <Navbar/>
      <Routes>
        <Route path='/' element={ <HomePage/> }/>
        <Route path='/cart' element={ <Cart/> }/>
      </Routes>
    </div>
  )
}

export default App
