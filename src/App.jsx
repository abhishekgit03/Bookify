import { useState } from 'react'
import {Route,Routes} from "react-router-dom"
import Register from './pages/Register'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar'
import ListingPage from './pages/List'

function App() {

  return (
    <div>
      <Navbar/>
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/book/list" element={<ListingPage/>} />
    </Routes>
    </div>
  )
}

export default App
