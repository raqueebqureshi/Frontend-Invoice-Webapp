import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import Login  from './pages/Login'
import Signup  from './pages/Signup'
import LandingPage  from './pages/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <LandingPage/>
    // <Login/>
    // <Signup/>
   
  )
}

export default App
