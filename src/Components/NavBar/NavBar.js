import React from 'react'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../Images/logo.png'

const NavBar = () => {
  return (
    <div className='nav-container'>
      
        <div >
          <Link className='logo' to='/'>
              <img src={logo} alt="" />
              <h2>Quiziest</h2>
            </Link>
        </div>
        <div className='nav-link'>
            <NavLink to='/home'>Topics</NavLink>
            <NavLink to='/statistics'>Statistics</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
        </div>
    </div>
  )
}

export default NavBar