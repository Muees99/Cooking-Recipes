import { useParams} from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import './Recipe.css'

import React from 'react'

export default function Recipe() {
  const{id} = useParams()
  const url='http://localhost:3000/recipes/'+id 
  const{error,isPending ,data:recipe}=useFetch(url)

  return (
    <div className='recipes'>
      {error && <p>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {recipe && (
        <>
        <h2 className='page-title'>{recipe.title}</h2>
        <p>Takes{recipe.cookingTime} to cook.</p>
        <ul>
          {recipe.ingredients.map(ingredient=><li key={ingredient}>{ingredient}</li>)}
          <p className='method'>{recipe.method}</p>
        </ul>
        </>

      )}
      
    </div>
  )
}
