import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav'>
      <Link to={'/'}> <h3>Home</h3></Link> 
        <h3>About</h3>
       <Link to={'/cartabc'}><h3>Cart</h3></Link>
       <a href="/cartabc">Cart 1</a>
        <h3>Logout</h3>
    </div>
  )
}

export default Navbar