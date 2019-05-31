import React from 'react'
import ImageCard from './ImageCard'

const DisplayRecipe = ({ recipes }) => {
  return (
    <div className="d-flex flex-wrap">
      {recipes.map(recipe => {
        return <ImageCard key={recipe.recipe_id} recipe={recipe} />
      })}
    </div>
  )
}

export default DisplayRecipe
