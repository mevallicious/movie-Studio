import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthDataContext } from '../context/AuthContext'


const Navbar = () => {
    const navigate = useNavigate()
    
      const data = useContext(AuthDataContext)

  return (
    <div className='navbar'>
        <Link to='/'><h2>Movie-studio</h2></Link>
        <Link to='/fav'>Favorites</Link>
        <button className='logout' onClick={()=>{
            data.logout()
            navigate('/signup')
        }}>Logout</button>
    </div>
  )
}

export default Navbar