import React, { Component } from 'react';
import './App.css';
import MainContainer from './MainContainer';

class App extends Component {
  componentDidMount(){
    document.title = "Derek's Homepage"
  }
  render() {
    return (
      <div className="App">
        < MainContainer />
      </div>
    );
  }
}

export default App;
