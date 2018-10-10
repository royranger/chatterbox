import React, { Component } from 'react';
import _ from 'lodash';
import Sidebar from '../components/Sidebar/Sidebar';
import Convo from '../components/Convo/Convo';
import store from '../store';
import './App.css';


class App extends Component {

  render() {
    const {contacts} = store.getState();

    return (
      <div className="App">
        <Sidebar contacts={_.values(contacts)}/>
        <Convo/>
      </div>
    );
  }
}

export default App;
