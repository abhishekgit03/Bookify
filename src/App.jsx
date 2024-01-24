import { useState } from 'react'
import {Route,Routes} from "react-router-dom"
import Register from './pages/Register'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar'
import ListingPage from './pages/List'
import Home from './pages/Home'
import BookDetail from './pages/Detail'
import Orders from './pages/Orders'
import ViewOrderDetails from './pages/ViewOrderDetails'

function App() {

  return (
    <div>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/book/list" element={<ListingPage/>} />
      <Route path="/book/view/:bookId" element={<BookDetail/>}/>
      <Route path="/book/orders" element={<Orders />}/>
      <Route path="/book/orders/:bookId" element={<ViewOrderDetails/>}/>


    </Routes>
    </div>
  )
}

export default App
