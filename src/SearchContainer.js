import React, {Component} from 'react'
import Search from "./Search"
import Results from "./Results.js"

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      hasSearched: false,
    }
  }
  onSearchInput(e) {
    this.setState({
      query: e.target.value,
    })
  }
  onsubmitQuery(e) {
    e.preventDefault();
    this.state = {
      query: '',
      hasSearched: true,
    }
  }
  render() {
    let movies = [
      {title: "Star Wars", poster_url: "http://fallmeeting.agu.org/2015/files/2015/12/Star-Wars.jpg"},
      {title: "Top Gun", poster_url: "http://ecx.images-amazon.com/images/I/51YimkRDEjL._SY445_.jpg"}
    ]
    if(this.state.hasSearched){
      return(
        <Results movies={movies} />
      )
    } else {
      return(
        <Search
        handleSearchInput={(e) => this.onSearchInput(e)}
        handleSubmitQuery={(e) => this.onSubmitQuery(e)}
        query={this.state.query} />
      )
    }
  }
}

export default SearchContainer
