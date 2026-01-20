import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import SignUp from './pages/SignUp'
import Login from './pages/Login'


const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/fav' element={<Favorites/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App