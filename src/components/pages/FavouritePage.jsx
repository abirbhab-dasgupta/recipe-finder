import React from 'react'
import { getRandomColor } from '../../lib/utils';
import RecipeCard from '../RecipeCard';


const FavouritePage = () => {
const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className='bg-slate-700 flex-1 p-10 min-h-screen'>
      <div className='max-w-screen-lg mx-auto'>
        <p className='font-bold text-3xl md:text-5xl my-4'>My Favourites</p>

        
          {favorites.length === 0 && (
            <div className='h-[80vh] flex flex-col items-center gap-4'>
            <img src="404-page-not-found.png" alt="" className='h-3/4 '/>
          </div>
          )}
        
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {favorites.map((recipe) => (
						<RecipeCard key={recipe.label} recipe={recipe} {...getRandomColor()} />
					))}
          </div>
      </div>
    </div>
  )
}

export default FavouritePage