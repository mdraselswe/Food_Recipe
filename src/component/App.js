import React from 'react'
import Search from './Search'
import DisplayRecipe from './DisplayRecipe'

import './App.css'

class App extends React.Component {
  state = {
    recipes: []
  }

  onSearchSubmit = async (recipe, pageNo) => {
    const api_key = 'e236fa540a7d3bbba84581d7532deefc'

    const response = await fetch(
      `https://www.food2fork.com/api/search?key=${api_key}&q=${recipe}&page=${pageNo}`
    )
    const data = await response.json()

    this.setState({ recipes: data.recipes })

    console.log(data.recipes)
  }
  render () {
    return (
      <div className='container'>
        <Search onSubmit={this.onSearchSubmit} />

        <DisplayRecipe recipes={this.state.recipes} />
      </div>
    )
  }
}

export default App
