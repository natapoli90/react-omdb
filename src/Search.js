import React, {Component} from 'react'

class Search extends Component {
  submitQuery(e){
    e.preventDefault();
    console.log("submitted");
  }
  render() {
    return (
    <div className="serachBox">
      <form onSubmit={(e) => this.submitQuery(e)}>
        <input type="text" placeholder="Enter a Movie Title" />
        <button type="submit">Search</button>
      </form>
    </div>
    )
  }
}

export default Search
