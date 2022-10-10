import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <div>
            
        </div>
        <div>
            <NavLink to='/'>Topics</NavLink>
            <NavLink to='/statistics'>Statistics</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
        </div>
    </div>
  )
}

export default NavBar