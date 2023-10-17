import React, { useState } from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
  const [login, setLogin] = useState({})
  return (
    <BrowserRouter>
    <>
      <Routes>
        <Route path='/' element={login && login._id? <Home login={login} setLogin={setLogin}/> : <Login setLogin={setLogin}/>}/>
        <Route path='/login' element={<Login setLogin={setLogin}/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
