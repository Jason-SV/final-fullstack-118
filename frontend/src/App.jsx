import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavBar'
import {Routes, Route, Navigate} from 'react-router-dom'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </>
  )
}

export default App
