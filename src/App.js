import React, { Component } from 'react';
import Header from './component/shared/Header';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      }
  }
  render() {
    return (
      <div className="App">
       <Header />
      </div>
    );
  }
}

export default App;
