import React from 'react'

const DisplayRecipe = ({recipes}) => {
    return(
        <div>
            {recipes.map(recipe => {
                return <img src={recipe.image_url} alt=""/>
            })}
        </div>
    )
}

export default DisplayRecipe