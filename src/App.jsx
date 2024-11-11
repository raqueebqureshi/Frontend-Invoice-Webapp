import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import Login  from './pages/Login'
import Signup  from './pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <Dashboard/>
    // <Login/>
    // <Signup/>
   
  )
}

export default App
