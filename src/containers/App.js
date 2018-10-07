import React, { Component } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Convo from '../components/Convo/Convo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar/>
        <Convo/>
      </div>
    );
  }
}

export default App;
