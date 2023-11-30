import { Link } from 'react-router-dom'


// Styling
import './Navbar.css'
 
import React from 'react'
import SearchBar from './SearchBar'

export default function Navbar() {
  return (
    <div className='navbar'>
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
