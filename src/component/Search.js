import React from 'react'

class Search extends React.Component {
  state = {
    recipe: '',
    page: 1
  }

  onInputSubmit = e => {
    e.preventDefault()
    // console.log(this.state.recipe)

    this.props.onSubmit(this.state.recipe, this.state.page)
  }

  onInputChange = e => {
    this.setState({ recipe: e.target.value })
  }

  onNextPage = () => {
    this.setState({
        page: this.state.page + 1
    })
  }

  onPreviousPage = () => {
    this.setState({
        page: this.state.page - 1
    })
  }

  render () {
    return (
        <div>
      <form onSubmit={this.onInputSubmit}>
        <input
          type='text'
          value={this.state.recipe}
          onChange={this.onInputChange}
        />
      <button onClick={this.onNextPage}>next page</button>
      <button onClick={this.onPreviousPage}>previous page</button>
      </form>
      </div>
    )
  }
}

export default Search
