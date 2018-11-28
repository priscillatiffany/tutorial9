import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './index';
import {Content} from './index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content name="Priscilla Tiffany" />
      </div>
    );
  }
}

export default App;
