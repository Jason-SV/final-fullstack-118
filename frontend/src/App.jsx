import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import MainLayout from '../layouts/MainLayout'

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Navigate to="/dashboard" replace />}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/missions' element={<Dashboard/>}></Route>
          <Route path='/heroes' element={<Dashboard/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
