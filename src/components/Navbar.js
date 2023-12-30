import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'


import SearchBar from './SearchBar'

// Styling
import './Navbar.css'
 

export default function Navbar() {
  const {color} = useTheme()
 
  return (
    <div className='navbar' style={{background:color}} >
        <nav>
            <Link to= '/' className='brand'>
            <h1>Bibi's Cook Menu</h1>
            </Link>
            <SearchBar/>
            <Link to='/create'>Create Recipe</Link>

        </nav>
    </div>
  )
}
