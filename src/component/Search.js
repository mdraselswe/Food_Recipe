import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

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
        <Form onSubmit={this.onInputSubmit}>
          <Input
            type='text'
            value={this.state.recipe}
            onChange={this.onInputChange}
          />
          <Button onClick={this.onNextPage}>next page</Button>
          <Button onClick={this.onPreviousPage}>previous page</Button>
        </Form>
      </div>
    )
  }
}

export default Search
