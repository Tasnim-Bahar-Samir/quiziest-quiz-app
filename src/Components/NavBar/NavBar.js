import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
import logo from '../../Images/logo.png'

const NavBar = () => {
  return (
    <div className='nav-container'>
        <div className='logo'>
            <img src={logo} alt="" />
            <h2>Quiziest</h2>
        </div>
        <div className='nav-link'>
            <NavLink to='/'>Topics</NavLink>
            <NavLink to='/statistics'>Statistics</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
        </div>
    </div>
  )
}

export default NavBar