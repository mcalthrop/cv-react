import React, { Component } from 'react';
import './App.css';
import { CvContainer } from './containers/cv';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CvContainer></CvContainer>
      </div>
    );
  }
}

export default App;
