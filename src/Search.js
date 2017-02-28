import React, {Component} from 'react'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }
  handleSearchInput(e) {
    this.setState({
      query: e.target.value
    })
  }
  submitQuery(e) {
    e.preventDefault();
    console.log(this.state.query);
  }
  render() {
    return (
    <div className="serachBox">
      <form onSubmit={(e) => this.submitQuery(e)}>
        <input
        onChange={(e) => this.handleSearchInput(e)}
        value={this.state.query}
        type="text"
        placeholder="Enter a Movie Title" />
        <button type="submit">Search</button>
      </form>
    </div>
    )
  }
}

export default Search
