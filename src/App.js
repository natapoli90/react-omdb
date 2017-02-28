import React, { Component } from 'react';
import SearchContainer from './SearchContainer'
import styles from './styles/index'

class App extends Component {
  render() {
    return (
      <div style={styles.transparentBg} className="jumbotron col-sm-12 text-center">
        <h2><a href="/">OMDB (REACT)</a></h2>
        <div className="col-sm-12" style={styles.space}>
          <SearchContainer />
        </div>
      </div>
    );
  }
}

export default App;
