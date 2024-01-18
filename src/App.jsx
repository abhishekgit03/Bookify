import { useState } from 'react'
import {Route,Routes} from "react-router-dom"
import Register from './pages/Register'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar'
import ListingPage from './pages/List'
import Home from './pages/Home'
import BookDetail from './pages/Detail'

function App() {

  return (
    <div>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/book/list" element={<ListingPage/>} />
      <Route path="/book/view/:bookId" element={<BookDetail/>} />

    </Routes>
    </div>
  )
}

export default App
