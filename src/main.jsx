import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import { FirebaseProvider } from './context/Firebase.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <FirebaseProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseProvider>
  </BrowserRouter>
)
