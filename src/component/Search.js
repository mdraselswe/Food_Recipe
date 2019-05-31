import React from 'react'
import { Form, Input } from 'reactstrap'

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

  render () {
    return (
      <Form onSubmit={this.onInputSubmit} className="mt-4">
        <Input
          type='text'
          value={this.state.recipe}
          onChange={this.onInputChange}
          placeholder="Please Search Your Food (E.g. Pizza, Pasta, Burger, etc...)"
        />
      </Form>
    )
  }
}

export default Search
