import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin/App'
import { DarkModeContext } from './Admin/context/darkModeContext'
import "./Admin/style/Dark.scss"

const App = () => {
  const {darkMode}=useContext(DarkModeContext)
  return (
    <div className={darkMode?"app dark":"app"} >
    <Routes>
      <Route path='/Admin/*' element={<Admin/>} />
    </Routes>
    </div>
  )
}

export default App

