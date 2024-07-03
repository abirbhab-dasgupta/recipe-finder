import React, { useState } from 'react'
import { HeartPulse, Soup } from 'lucide-react'

const getTwoValuesFromArray = (arr) => {
  return [arr[0] , arr[1]];
};

const RecipeCard = ({recipe,bg,badge}) => {
const healthLabels = getTwoValuesFromArray(recipe.healthLabels);


  return (
    <div className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}>
          <a
           href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`} 
          className='relative h-32'>

            <div className='skeleton absolute inset-0'/>
          <img src={recipe.image} alt="" 
          className='rounded-md w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-500'
          onLoad={(e) => {
            e.currentTarget.style.opacity = 1;
            e.currentTarget.previousElementSibling.style.display ="none" ;
          }}
          />

          <div className='absolute bottom-2 left-2 bg-slate-700 rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm'>
            <Soup size={15} /> {recipe.yield} Servings
          </div>
          
          </a>
          <div className='flex mt-1 text-black '>
            <p className='font bold tracking-wide font-semibold'> {recipe.label} </p>
          </div>
          <p className='my-2 text-gray-600'>
          {recipe.cuisineType[0].charAt(0).toUpperCase() + recipe.cuisineType[0].slice(1)} Kitchen
            </p>

          <div className='flex gap-2 mt-auto text-gray-600 '>
            {
              healthLabels.map((label,idx) => (
                <div key={idx} className={`flex gap-1 ${badge} items-center p-1 rounded-md`}>
						<HeartPulse size={16} />
						<span className='text-sm tracking-tighter font-semibold'>{label}</span>
					</div>
              ))}

          </div>
        </div>
  )
}

export default RecipeCard