import { useState } from 'react'
import {Route,Routes} from "react-router-dom"
import Register from './pages/Register'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<h1>Login</h1>} />
    </Routes>
  )
}

export default App
