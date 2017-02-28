import React, {Component} from 'react'
import Search from './Search'
import Results from './Results'
import {queryOmdb} from './Utils'
import styles from './styles/index'

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
  handleToggleSearch (e) {
    let hasSearched = !this.state.hasSearched
    this.setState(Object.assign(this.state, {hasSearched, }))
  }
  onSubmitQuery(e) {
    e.preventDefault()
    let component = this
    queryOmdb(this.state.query).then( data => {
      component.setState({
        query: '',
        hasSearched: !component.state.hasSearched,
        movies: data,
      })
    })
  }
  render() {
    if (this.state.hasSearched){
      return(
        <div>
          <button
            onClick={ (e) => this.handleToggleSearch(e) }
            style={styles.spaceB}
            className="btn btn-default">
            Search Again
          </button>
          <Results movies={this.state.movies} />
        </div>
      )
    } else {
      return(
        <Search
        handleSearchInput={ (e) => this.onSearchInput(e) }
        handleSubmitQuery={ (e) => this.onSubmitQuery(e) }
        query={this.state.query} />
      )
    }
  }
}

export default SearchContainer
