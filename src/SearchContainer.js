import React, {Component} from 'react'
import Search from './Search'
import Results from './Results.js'
import {queryOmdb} from './Utils.js'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      hasSearched: false,
      movies: [],
    }
  }
  onSearchInput(e) {
    this.setState({
      query: e.target.value,
    })
  }
  onsubmitQuery(e) {
    e.preventDefault()
    let component = this
    queryOmdb(this.state.query).then(data => {
      component.setState({
        query: '',
        hasSearched: true,
        movies: data,
      })
    })
  }
  render() {
    if(this.state.hasSearched){
      return(
        <Results movies={this.state.movies} />
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
