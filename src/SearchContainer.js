import React, {Component} from 'react'
import Search from "./Search"

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }
  onSearchInput(e) {
    this.setState({
      query: e.target.value
    })
  }
  onsubmitQuery(e) {
    e.preventDefault();
    console.log(this.state.query);
    this.state = {
      query: ''
    }
  }
  render() {
    return (
      <Search
      handleSearchInput={(e) => this.onSearchInput(e)}
      handleSubmitQuery={(e) => this.onSubmitQuery(e)}
      query={this.state.query}
      />
    )
  }
}

export default SearchContainer
