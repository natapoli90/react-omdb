import React, { Component } from 'react';
import './App.css';
import Search from "./Search"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>REACT OMDB</h2>
        <Search />
      </div>
    );
  }
}

export default App;
