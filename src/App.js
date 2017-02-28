import React, { Component } from 'react';
import './App.css';
import SearchContainer from './SearchContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2><a href="/">OMDB (REACT)</a></h2>
        <SearchContainer />
      </div>
    );
  }
}

export default App;
