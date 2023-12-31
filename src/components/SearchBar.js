import { useNavigate } from 'react-router-dom'

import './SearchBar.css'

import React, { useState } from 'react'

export default function SearchBar() {
    const [term,setTerm] =useState('')
    const Navigate= useNavigate()


    const handleSubmit=(e)=>{
        e.preventDefault()

        // query Params
        Navigate (`/search?q=${term}`)



    }

  return (
    <div className='searchbar'>
        <form onSubmit={handleSubmit}>
            <label htmlFor='search' > Search: </label>
            <input
            type='text'
            id='search'
            onChange={(e)=>setTerm(e.target.value)}
            required
            />


        </form>

    </div>
  )
}
