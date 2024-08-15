import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const recipes = useFetch("/recipes")

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
  })

  return (
    <div className='w-full max-w-[1440px] h-full mx-auto px-1 py-4'>
      <div className='w-full flex justify-center'>
        <input 
          type="text"
          value={searchTerm}
          placeholder='search any recipe'
          onChange={handleSearch}
          className='w-full max-w-72 m-6 p-3 border-2 border-slate-300 rounded-full'
          />
      </div>
      <div className='flex flex-wrap gap-6'>
        {filteredRecipes && filteredRecipes.map((recipe) => {
          return (
            <div className='max-w-52 flex flex-col m-5 gap-3 shadow-lg shadow-indigo-500/40 rounded-2xl' key={recipe.id}>
              <NavLink to={`/recipe/${recipe.id}`}>
                <img className='w-52 h-44 rounded-tl-2xl rounded-tr-2xl' src={recipe.image} alt={recipe.name} />
              </NavLink>
              <div className='flex flex-col gap-2 p-3'>
                <strong className='text-xl'>{recipe.name}</strong>
                <p>{recipe.tags[1]}, {recipe.tags[0]}</p>
                <span>{recipe.mealType}</span>
              </div>
            </div>
          )
        })

        }
      </div>
    </div>
  )
}

export default Recipes