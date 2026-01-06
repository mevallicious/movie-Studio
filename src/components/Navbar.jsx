import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/'><h2>Movie-studio</h2></Link>
        <Link to='/fav'>Favorites</Link>
    </div>
  )
}

export default Navbar