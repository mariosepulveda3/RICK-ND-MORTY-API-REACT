import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/Navbar.scss';

const Navbar = () => {
  return (
    <nav className='nav'>
    <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
        alt="r&m"
        className="logo"
      />
        <NavLink to="" activeclassname={'active'}>Home</NavLink>
        <NavLink to="characters" activeclassname={'active'}>Characters</NavLink>
        <NavLink to="planets" activeclassname={'active'}>Planets</NavLink>
        <NavLink to="addcharacters" activeclassname={'active'}>Add Characters</NavLink>
    </nav>
  )
}

export default Navbar
